import LoginForm from "@/components/LoginForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: login,
});

function login() {
  return (
    <div className="min-h-full py-20 sm:px-6 lg:px-8 bg-gray-100 w-full h-full">
      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="border border-red-400bg-white py-8 px-4 sm:px-10 shadow-lg sm:rounded-lg">
          <div className="flex justify-center items-center mb-10">
            <div className="text-center text-3xl font-extrabold text-gray-900">
              Sign in to Formtastic
            </div>
          </div>

          <LoginForm />
        </div>
      </div>

      <p className="mt-6 mb-4 text-center text-sm text-gray-600">
        If you dont have an account,
        <a
          className="ml-2 text-blue-600 hover:text-blue-500 font-medium"
          href="/signup?redirectPath=%2Fhome"
        >
          Sign up
        </a>
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
