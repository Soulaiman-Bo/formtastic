export interface LoginUser {
  firstname: string;
  lastname: string;
  email: string;
}

export interface User {
  email: string;
  updated_at: string;
  created_at: string;
  _id: string;
}

export interface LogoutResponse {
  message: string;
}

export interface LoginResponse {
  status: string;
  user: LoginUser;
  access_token: string;
  token_type: string;
}

export interface ErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
}

export interface SignUpResponse {
  user: User;
}


export interface PasswordResetSuccessResponse {
  status: string;
}

export interface PasswordResetErrorResponse {
  message: string;
  errors: Record<string, string[]>;
}

export interface errorMessage {
  error: boolean;
  message?: string;
}
