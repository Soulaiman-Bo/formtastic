import {
  resetPasswordFormSchema,
  resetPasswordFormSchemaType,
} from "@/schema/resetPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import API from "@/lib/HttpClient";
import { useState } from "react";
import { AxiosError } from "axios";
import {
  PasswordResetErrorResponse,
  PasswordResetSuccessResponse,
  errorMessage,
} from "@/types/AuthTypes";
import FormSuccessAlert from "./FormSuccessAlert";
import { FormErrorAlert } from "./FormErrorAlert";
import { useSearch } from "@tanstack/react-router";

type searchParams = { token: string; email: string };

const ResetpasswordForm = () => {
  const search: searchParams = useSearch({ from: "/auth/ForgetPassword" });
  
  const form = useForm<resetPasswordFormSchemaType>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      password: "",
      password_confirmation: "",
      email: search.email,
      token: search.token,
    },
  });

  const [isSuccess, setSuccess] = useState("");
  const [isError, setIsError] = useState<errorMessage>({ error: false });

  const handleSubmit = async (values: resetPasswordFormSchemaType) => {
    
    setSuccess("");
    setIsError({ error: false });

    try {
      const response = await API.post<PasswordResetSuccessResponse>(
        "/resetpassword",
        values
      );

      if (response.data && response.data.status) {
        setSuccess(response.data.status);
      }

    } catch (error) {
      const axiosError = error as AxiosError<PasswordResetErrorResponse>;

      if (axiosError.response) {
        if (axiosError.response.data.errors.email) {
          setIsError({
            error: true,
            message: axiosError.response.data.errors.email[0],
          });
        } else {
          setIsError({
            error: true,
            message: axiosError.response.data.message,
          });
        }
      } else {
        setIsError({
          error: true,
          message:
            "An error occurred while trying to request a password reset.",
        });
      }
    }
  };

  return (
    <>
      {isSuccess && <FormSuccessAlert message={isSuccess} />}
      {isError.error && <FormErrorAlert message={isError.message} />}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="mb-2">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <div className="flex items-center ">
                          <FormLabel className="flex items-center text-sm    dark:text-slate-200  weight  !text-gray-500 font-medium">
                            New Password
                          </FormLabel>
                        </div>
                      </div>
                    </div>
                  </div>

                  <FormControl>
                    <div className="relative w-full">
                      <Input
                      type="password"
                        {...field}
                        className="shadow-sm block w-full rounded border-gray-300 text-sm"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password_confirmation"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <div className="mb-2">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <div className="flex items-center ">
                          <FormLabel className="flex items-center text-sm    dark:text-slate-200  weight  !text-gray-500 font-medium">
                            Confirm Password
                          </FormLabel>
                        </div>
                      </div>
                    </div>
                  </div>

                  <FormControl>
                    <div className="relative w-full">
                      <Input
                       type="password"
                        {...field}
                        className="shadow-sm block w-full rounded border-gray-300 text-sm"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="items-center px-3 border shadow-sm leading-4 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-[42px] sm:h-[38px] text-base border-transparent bg-blue-600 hover:bg-blue-700 text-white w-full flex justify-center mt-6"
          >
            <span className="max-w-full overflow-hidden">reset password</span>
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ResetpasswordForm;
