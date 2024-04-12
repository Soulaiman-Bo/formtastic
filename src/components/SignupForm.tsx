// import { useForm } from "react-hook-form";
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
import {
  SignUpFormSchema,
  SignUpFormSchemaType,
} from "@/schema/SignupFormSchema";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "@tanstack/react-router";

const LoginForm = () => {
  const form = useForm<SignUpFormSchemaType>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const navigate = useNavigate();

  const { signUp } = useAuth();

  async function onSubmit(values: SignUpFormSchemaType) {
    try {
      const response = await signUp(values);

      if (response && response.user) {
        console.log("Signup successful!");
        navigate({ to: "/auth/login" });
      }
    } catch (error) {
      console.log("Signup successful!");
      navigate({ to: "/error" });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col">
                  <FormLabel className="flex items-center text-sm dark:text-slate-200  weight  !text-gray-500 font-medium">
                    Firstname
                  </FormLabel>
                </div>

                <FormControl>
                  <div className="relative w-full">
                    <Input
                      {...field}
                      className="shadow-sm block w-full rounded border-gray-300 pl-4 text-sm"
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
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col">
                  <FormLabel className="flex items-center text-sm dark:text-slate-200  weight  !text-gray-500 font-medium">
                    Lastname
                  </FormLabel>
                </div>

                <FormControl>
                  <div className="relative w-full">
                    <Input
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

        <div className="flex flex-col mt-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col">
                  <FormLabel className="flex items-center text-sm dark:text-slate-200  weight  !text-gray-500 font-medium">
                    Email
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
                        className="text-gray-400 h-[20px] w-[20]"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <Input
                      {...field}
                      className="shadow-sm block w-full pl-10 rounded border-gray-300 text-sm"
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
                <div className="flex flex-col">
                  <FormLabel className="flex items-center text-sm dark:text-slate-200  weight  !text-gray-500 font-medium">
                    Password
                  </FormLabel>
                </div>

                <FormControl>
                  <div className="relative w-full">
                    <Input
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

        <div className="flex flex-col mt-4">
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col">
                  <FormLabel className="flex items-center text-sm dark:text-slate-200  weight  !text-gray-500 font-medium">
                    Confirm Password
                  </FormLabel>
                </div>

                <FormControl>
                  <div className="relative w-full">
                    <Input
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

        <button
          type="submit"
          className="items-center px-3 border shadow-sm leading-4 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-[42px] sm:h-[38px] text-sm border-transparent bg-blue-600 hover:bg-blue-700 text-white w-full flex justify-center mt-6"
        >
          <span className="max-w-full overflow-hidden">Sign up</span>
        </button>
      </form>
    </Form>
  );
};

export default LoginForm;
