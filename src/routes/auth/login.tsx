import LoginForm from "@/components/LoginForm";
import { isAuthenticated } from "@/lib/auth";
import { Link, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/login")({
  beforeLoad: () => {
    if (isAuthenticated()) {
      throw redirect({
        to: "/",
      });
    }
  },
  component: login,
});

function login() {
  return (
    <div className="min-h-full py-20 sm:px-6 lg:px-8 bg-gray-100 w-full h-screen">
      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="border bg-white py-8 px-4 sm:px-10 shadow-lg sm:rounded-lg">
          <div className="flex justify-center items-center mb-10">
            <div className="font-inter text-center text-3xl font-extrabold text-gray-900">
              Sign in to Formtastic
            </div>
          </div>

          <LoginForm />
        </div>
      </div>

      <p className="mt-6 mb-4 text-center text-sm text-gray-600">
        If you dont have an account,
        <Link
          to="/auth/signup"
          className="ml-2 text-blue-600 hover:text-blue-500 font-medium"
        >
          Sign up
        </Link>
      </p>

      <div className="text-center">
        <div className="text-xs text-gray-400">
          By using Formtastic, you are agreeing to our
          <a
            className="underline text-gray-400"
            href="https://fillout.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            privacy policy
          </a>
          and
          <a
            href="https://fillout.com/terms/"
            className="underline text-gray-400"
            target="_blank"
            rel="noreferrer"
          >
            terms
          </a>
          .
        </div>
      </div>
    </div>
  );
}
