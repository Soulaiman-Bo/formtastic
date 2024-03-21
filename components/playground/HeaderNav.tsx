import React from "react";

const HeaderNav = () => {
  return (
    <div className="bg-gray-50 border-b-[0.5px] border-gray-300 flex-shrink-0 pl-2 flex relative items-center w-full justify-between">
      <div className="font-medium flex items-center py-[11px] md:min-w-[310px] largeXl:min-w-[354px]">
        <div className="flex">
          <a className="px-3 py-[9px] mr-1" href="/home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-4 w-4 text-slate-500"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
          </a>
        </div>

        <div className="flex items-center ml-4 ">
          <div className="inline-block z-[14] text-gray-400 truncate max-w-[100px]  lg:!max-w-[200px]   hover:border-gray-300 p-1 py-[2px] border-[1px] rounded hover:cursor-text border-transparent ">
            My form 1
          </div>
        </div>
      </div>

      <div className="flex h-[56px] items-center justify-center w-full">
        <div className="flex lg:hidden relative">
          <button
            className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm hover:dark:border-slate-500 dark:border-slate-700 hover:bg-gray-50 dark:bg-white/[0.08]  dark:text-slate-300 h-[38px] min-w-[150px]"
            id="headlessui-listbox-button-:r3:"
            type="button"
            aria-haspopup="listbox"
            aria-expanded="false"
            data-headlessui-state=""
          >
            <span className="flex items-center">
              <span className="block truncate">Edit</span>
            </span>
            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-gray-400 dark:text-slate-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
        </div>

        <nav
          className="hidden lg:flex space-x-1 largeXl:space-x-2"
          aria-label="Tabs"
        >
          <a
            className="bg-[#E4EFFE] text-blue-500 hover:text-blue-500 px-3 py-[7px] font-medium text-sm rounded-md"
            aria-current="page"
            href="/editor/t4fhZ3iZvUus"
          >
            Edit
          </a>
          <a
            className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 px-3 py-[7px] font-medium text-sm rounded-md"
            href="/editor/t4fhZ3iZvUus/integrations"
          >
            Integrations
          </a>
          <a
            className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 px-3 py-[7px] font-medium text-sm rounded-md"
            href="/editor/t4fhZ3iZvUus/share"
          >
            Share
          </a>
          <a
            className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 px-3 py-[7px] font-medium text-sm rounded-md"
            href="/editor/t4fhZ3iZvUus/results"
          >
            Results
          </a>
          <a
            className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 px-3 py-[7px] font-medium text-sm rounded-md"
            href="/editor/t4fhZ3iZvUus/settings"
          >
            Settings
          </a>
        </nav>
      </div>

      <div className="flex items-center">
        <div className="flex justify-end items-center py-[11px] pr-7 md:min-w-[310px] largeXl:min-w-[354px]">
          
          <div className="mr-4 flex">
            
              <button
                data-cy="button-component"
                type="button"
                className="inline-flex items-center px-3 border shadow-sm leading-4 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-[34px] text-sm border-gray-300 text-gray-500 bg-white hover:bg-gray-100  focus:ring-0 focus:ring-offset-0 px-[20.5px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 mr-2"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="max-w-full overflow-hidden">Preview</span>
              </button>
           
          </div>

          <div className="inline-block z-[14]">
              <button
                data-cy="button-component"
                type="button"
                className="inline-flex items-center px-3 border shadow-sm leading-4 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-[34px] text-sm border-gray-300 text-gray-100 bg-gray-800 hover:bg-gray-600 focus:!ring-gray-500 focus:ring-0 focus:ring-offset-0 !min-w-[100px] flex justify-center"
              >
                <span className="max-w-full overflow-hidden">Publish</span>
              </button>
          </div>

        </div>
      </div>
    </div>
  );
};


export default HeaderNav;
