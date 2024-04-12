import {
  sendresetPasswordemailFormSchema,
  sendresetPasswordemailFormSchemaType,
} from "@/schema/resetPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
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

const SendResetPasswordEmailForm = () => {
  const form = useForm<sendresetPasswordemailFormSchemaType>({
    resolver: zodResolver(sendresetPasswordemailFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const [isSuccess, setSuccess] = useState("");
  const [isError, setIsError] = useState<errorMessage>({ error: false });

  const handleSubmit = async (values: sendresetPasswordemailFormSchemaType) => {
    setSuccess("");
    setIsError({error: false,});

    try {
      const response = await API.post<PasswordResetSuccessResponse>(
        "/forgotpassword",
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
          <div className="flex flex-col">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="mb-2">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <div className="flex items-center ">
                          <FormLabel className="flex items-center text-sm    dark:text-slate-200  weight  !text-gray-500 font-medium">
                            Email
                          </FormLabel>
                        </div>
                      </div>
                    </div>
                  </div>

                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        {...field}
                        className="shadow-sm block w-full rounded border-gray-300 text-sm"
                      />
                    </div>
                  </FormControl>

                  <p className="block text-xs font-small mt-2 dark:text-slate-200 text-gray-400">
                    Enter the email address associated with your account. You'll
                    receive a reset link in your email inbox.
                  </p>
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="items-center px-3 border shadow-sm leading-4 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-[42px] sm:h-[38px] text-base border-transparent bg-blue-600 hover:bg-blue-700 text-white w-full flex justify-center mt-6"
          >
            <span className="max-w-full overflow-hidden">Send reset link</span>
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SendResetPasswordEmailForm;
