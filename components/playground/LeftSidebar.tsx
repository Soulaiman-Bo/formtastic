import React from "react";
import { Input } from "../ui/input";

const LeftSidebar = () => {
  return (
    <div className="w-full bg-gray-50 flex flex-col justify-between border-r-[0.5px] border-l-[0.5px] border-gray-300 h-full max-w-[226px] min-w-[180px] lg:max-w-[300px] lg:min-w-[270px]">
      <div className="flex flex-col pt-4 h-full justify-start overflow-auto">
        <div className="flex items-center px-3 pb-[10px] border-b border-transparent transition duration-200 -mb-[10px] bg-gray-50 z-10 !border-gray-200">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="text-gray-400"
                style={{ height: "16px", width: "16px" }}
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <Input
              type="search"
              placeholder="Search for Input"
              className="shadow-sm block w-full rounded border-gray-300 pl-8 sm:text-sm"
            />
          </div>
          {/* <div className="inline-block z-[14]">
            <div className="flex p-1 bg-purple-100 rounded-lg cursor-pointer hover:bg-purple-200 shadow-sm transition duration-100 ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-purple-500 hover:text-purple-600 transition duration-100"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div> */}
        </div>
        
      </div>
    </div>
  );
};

export default LeftSidebar;
