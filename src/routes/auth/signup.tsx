import SignupForm from "@/components/SignupForm";
import { isAuthenticated } from "@/lib/auth";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/signup")({
  beforeLoad: () => {
    if (isAuthenticated()) {
      throw redirect({
        to: "/",
      });
    }
  },
  component: signup,
});

function signup() {
  return (
    <div className="min-h-screen">
      <div className="min-h-full py-20 sm:px-6 lg:px-8 bg-gray-100 w-full h-full">
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="z-[50] bg-white flex justify-center flex-col rounded-xl shadow-2xl border-2 border-gray-300">
            <div className=" flex justify-center items-center flex-col ">
              <div className="max-w-[550px] w-full flex items-center justify-center h-full flex-row bg-gray-100 pt-4 rounded-t-xl pb-3">
                <div className="text-gray-400 font-extrabold text-3xl ">
                  Formtastic
                </div>
              </div>
              <h2 className="mt-6 text-center text-2xl font-semibold mb-3 max-w-[400px] text-gray-700">
                Create your free account
              </h2>
            </div>

            <div className=" sm:mx-auto sm:w-full sm:max-w-md">
              <div className="py-4 pb-8 px-8">
                <button
                  data-cy="button-component"
                  type="button"
                  className="
                          inline-flex items-center px-3 border shadow-sm leading-4 font-medium rounded-md 
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-[42px] 
                          sm:h-[38px] text-sm border-gray-300 text-gray-500 bg-white hover:bg-gray-100  w-full"
                >
                  <span className="max-w-full overflow-hidden">
                    <div className="flex items-center w-full text-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25px"
                        height="25px"
                        viewBox="0 0 40 40"
                        version="1.1"
                      >
                        <title>google</title>
                        <g
                          id="google"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <circle
                            id="Oval"
                            fill="#FFFFFF"
                            cx="20"
                            cy="20"
                            r="20"
                          ></circle>
                          <g
                            transform="translate(3.000000, 3.000000)"
                            fill-rule="nonzero"
                            id="Path"
                          >
                            <path
                              d="M32.9892862,17.2445399 C32.9892862,16.1027217 32.8967063,14.9547316 32.6992026,13.8314294 L16.8557045,13.8314294 L16.8557045,20.2996749 L25.9285297,20.2996749 C25.5520383,22.3858075 24.3423283,24.2312325 22.5709672,25.4039105 L22.5709672,29.6008637 L27.9838023,29.6008637 C31.1623771,26.6753405 32.9892862,22.3549475 32.9892862,17.2445399 Z"
                              fill="#4285F4"
                            ></path>
                            <path
                              d="M16.8557045,33.6558611 C21.3859451,33.6558611 25.2064069,32.1684115 27.9899743,29.6008637 L22.5771392,25.4039105 C21.0711736,26.4284609 19.1269968,27.0086279 16.8618765,27.0086279 C12.4797636,27.0086279 8.7642257,24.0522447 7.43107587,20.0774832 L1.84542499,20.0774832 L1.84542499,24.4040482 C4.69688433,30.0761069 10.5047269,33.6558611 16.8557045,33.6558611 Z"
                              fill="#34A853"
                            ></path>
                            <path
                              d="M7.42490388,20.0774832 C6.72129703,17.9913506 6.72129703,15.7324023 7.42490388,13.6462697 L7.42490388,9.31970479 L1.84542499,9.31970479 C-0.536963124,14.065965 -0.536963124,19.6577879 1.84542499,24.4040482 L7.42490388,20.0774832 Z"
                              fill="#FBBC04"
                            ></path>
                            <path
                              d="M16.8557045,6.70895305 C19.2504366,6.67192111 21.5649328,7.57303164 23.299262,9.22712494 L23.299262,9.22712494 L28.0948981,4.43148877 C25.0582791,1.58002942 21.0279697,0.0123439799 16.8557045,0.0617198993 C10.5047269,0.0617198993 4.69688433,3.64147406 1.84542499,9.31970479 L7.42490388,13.6462697 C8.75188172,9.66533623 12.4735916,6.70895305 16.8557045,6.70895305 Z"
                              fill="#EA4335"
                            ></path>
                          </g>
                        </g>
                      </svg>
                      <div className="ml-3">Sign up with Google</div>
                    </div>
                  </span>
                </button>

                <div className="my-6 relative ">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-400">Or</span>
                  </div>
                </div>

                <SignupForm />

                <div className="mt-4">
                  <div className="text-xs text-gray-400">
                    By signing up, you are agreeing to our{" "}
                    <a
                      className="underline text-gray-500"
                      href="https://fillout.com/privacy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      privacy policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://fillout.com/terms/"
                      className="underline text-gray-500"
                      target="_blank"
                      rel="noreferrer"
                    >
                      terms
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500 z-50">
          If you already have an account,
          <a
            className=" text-blue-600 hover:text-blue-400 font-medium underline"
            href="/login"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
