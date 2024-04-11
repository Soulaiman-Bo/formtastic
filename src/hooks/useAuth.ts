import API, { PrivateAPI } from "@/lib/HttpClient";
import { useNavigate } from "@tanstack/react-router";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
  email_verified_at: string | null;
}

interface LogoutResponse {
  message: string;
}

interface LoginResponse {
  status: string;
  user: User;
  access_token: string;
  token_type: string;
}

interface ErrorResponse {
  message: string;
  errors: {
    email: string[];
  };
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    const user = localStorage.getItem("user");

    if (storedToken) {
      setAccessToken(storedToken);
      setIsLoggedIn(true);
    }

    if (user) {
      setUser(user as unknown as User);
    }
  }, []);

  const login = async (
    email: string,
    password: string
  ): Promise<LoginResponse | ErrorResponse | undefined> => {
    try {
      const response = await API.post<LoginResponse>("/login", {
        email,
        password,
      });

      if (response.status === 200 && response.data) {
        localStorage.setItem("accessToken", response.data.access_token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        setAccessToken(response.data.access_token);
        setIsLoggedIn(true);
        setUser(response.data.user);

        return response.data;
      }
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response && axiosError.response.status === 422) {
        return axiosError.response.data;
      }
    }
  };

  const logout = async (): Promise<LogoutResponse | undefined> => {
    try {
      const response = await PrivateAPI.post<LogoutResponse>("/logout");

      if (
        response.data &&
        response.data.message === "Successfully logged out"
      ) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");

        navigate({ to: "/login" });

        return response.data;
      }
    } catch (error) {
      console.error("Logout failed:", error);
      navigate({ to: "/error" });
    }
  };

  return { user, accessToken, isLoggedIn, login, logout };
};
