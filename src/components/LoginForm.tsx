// import { useForm } from "react-hook-form";
import { loginFormSchema, loginFormSchemaType } from "@/schema/loginFormSchema";
import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { AlertDestructive } from "./FormErrorAlert";

interface errorMessage {
  error: boolean;
  message?: string;
}

const LoginForm = () => {
  const form = useForm<loginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [isError, setIsError] = useState<errorMessage>({ error: false });
  const auth = useAuth();

  const navigate = useNavigate({ from: "/login" });

  async function onSubmit(values: loginFormSchemaType) {
    const response = await auth.login(values.email, values.password);

    if (response && "status" in response && response.status === "success") {
      navigate({ to: "/" });
    } else if (response && "message" in response) {
      setIsError({
        error: true,
        message: response.message,
      });
    }
  }

  return (
    <>
      {isError.error && <AlertDestructive message={isError.message} />}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="mb-2 flex justify-between">
                    <FormLabel className="flex items-center text-sm dark:text-slate-200 weight !text-gray-500 !font-medium">
                      Email address
                    </FormLabel>
                  </div>

                  <FormControl>
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="text-gray-400"
                          style={{ height: "20px", width: "20px" }}
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                      </div>
                      <Input
                        {...field}
                        className="shadow-sm block w-full rounded border-gray-300 pl-10 text-sm"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col mt-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="mb-2">
                    <div className="flex justify-between items-center">
                      <div className="mb-2 flex justify-between">
                        <FormLabel className="flex items-center text-sm dark:text-slate-200 weight !text-gray-500 !font-medium">
                          Password
                        </FormLabel>
                      </div>

                      <label className="!mb-0 block text-sm text-gray-600 dark:text-slate-500 items-center">
                        <a
                          className="!text-gray-400 underline !font-normal"
                          tabIndex={-1}
                          href="/reset-password"
                        >
                          Forgot password?
                        </a>
                      </label>
                    </div>
                  </div>
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        {...field}
                        type="password"
                        className="shadow-sm block w-full rounded border-gray-300 text-sm"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </div>

          <button
            type="submit"
            className="inline-flex items-center px-3 border shadow-sm leading-4 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-[42px] sm:h-[38px] text-sm border-transparent bg-blue-600 hover:bg-blue-700 text-white w-full  justify-center mt-6"
          >
            <span className="max-w-full overflow-hidden">Sign in</span>
          </button>
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
