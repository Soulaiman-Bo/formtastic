import React from "react";

const RightSideBar = () => {
  return (
    <div className="w-full bg-gray-50 flex flex-col justify-between border-r-[0.5px] border-l-[0.5px] border-gray-300 h-full overflow-y-auto pb-6 max-w-[300px] min-w-[270px] relative">
      <div className="flex w-full justify-center flex-col">
        
        <div className="text-slate-200  z-[14] cursor-pointer p-4 flex items-center font-medium justify-between pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="h-5 w-5 text-gray-900"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>

        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="h-10 w-10 text-gray-300 mt-6"
          >
            <path
              fill-rule="evenodd"
              d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <h3 className="mt-5 text-sm font-medium text-gray-400 mb-0 max-w-[210px] text-center">
            Click a field in your form to modify it
          </h3>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
