import SendResetPasswordEmailForm from "@/components/SendResetPasswordEmailForm";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/resetpassword")({
  component: compo,
});

function compo() {
  return (
    <div className="min-h-screen flex flex-col py-12 sm:px-6 lg:px-8 bg-gray-100 w-full h-full">
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex justify-center items-center flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="h-10 w-10 text-blue-500"
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h2 className="mt-6 font-inter text-center text-3xl font-extrabold text-gray-900">
          Reset password
        </h2>
      </div>
      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <SendResetPasswordEmailForm />
        </div>
      </div>
      <p className="mt-6 text-center text-sm text-gray-600">
        <Link to="/auth/signup" className=" text-blue-600 hover:text-blue-500 font-medium" >
          Sign Up 
        </Link>
        {" "} or {" "}
        <Link
          to="/auth/login"
          className=" text-blue-600 hover:text-blue-500 font-medium"
        >
          Log in
        </Link>
      </p>
    </div>
  );
}
