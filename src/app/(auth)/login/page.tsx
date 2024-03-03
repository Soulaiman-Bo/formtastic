import LoginForm from "@/components/auth/LoginForm";
import React from "react";

const page = () => {
  return (
    <div className="min-h-full py-20 sm:px-6 lg:px-8 bg-gray-100 w-full h-full">
      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="border border-red-400bg-white py-8 px-4 sm:px-10 shadow-lg sm:rounded-lg">
          <div className="flex justify-center items-center mb-10">
            <div className="text-center text-3xl font-extrabold text-gray-900">
              Sign in to Formtastic
            </div>
          </div>

          {/* <button
            type="button"
            className="inline-flex items-center px-3 border shadow-sm leading-4 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-[42px] sm:h-[38px] text-sm border-gray-300 text-gray-500 bg-white hover:bg-gray-100  w-full"
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
                    fillRule="evenodd"
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
                      fillRule="nonzero"
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
                <div className="ml-3">Sign in with Google</div>
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
          </div> */}

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
};

export default page;
