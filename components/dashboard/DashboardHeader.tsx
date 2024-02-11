import React from "react";

const DashboardHeader = () => {
  return (
    <div className="hidden md:flex justify-between mb-5 border-b border-gray-300 pb-4 px-7 mt-5">
      <div className="text-lg font-bold leading-7 flex items-center text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="h-8 w-8 text-gray-300 mr-3"
        >
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
        </svg>
        <div
          className="max-w-[400px] truncate"
          data-cy="home-page-header-workspace-name"
        >
          Home
        </div>
      </div>
      <div className="flex items-center">
        <button
          data-cy="create-new-flow-button"
          type="button"
          className="inline-flex items-center px-3 border shadow-sm leading-4 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-[42px] sm:h-[38px] text-sm border-transparent bg-blue-600 hover:bg-blue-700 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="-ml-0.5 mr-2 h-4 w-4"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="max-w-full overflow-hidden">New form</span>
        </button>
        <div className="inline-block w-5 h-5 ml-5">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5 text-slate-400"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
