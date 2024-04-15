import { Link } from "@tanstack/react-router";
import { ImHome3 } from "react-icons/im";
import { Button } from "./ui/button";
import { Eye } from "lucide-react";

const PlaygroundHeader = ({workspaceId}: {workspaceId: string}) => {
  return (
    <div className="bg-gray-50 border-b-[0.5px] border-gray-300 flex-shrink-0">
      <div className="relative" aria-label="Global">
        <div className="pl-2 flex items-center w-full justify-between">
          <div className="font-medium flex items-center py-[11px] md:min-w-[310px] largeXl:min-w-[354px]">
            <div data-cy="home-button" className="flex">
              <Link className="px-3 py-[9px] mr-1" to="/dashboard/$workspaceId"  params={{workspaceId: workspaceId}}>
                <ImHome3 className="text-slate-500" />
              </Link>
            </div>

            <div className="ml-4 flex items-center">
              <div className="flex items-center">
                <div className="inline-block z-[14]">
                  <div
                    data-cy="flow-name-navbar-component"
                    className="text-gray-400 truncate max-w-[100px]  lg:!max-w-[200px]   hover:border-gray-300 p-1 py-[2px] border-[1px] rounded hover:cursor-text border-transparent "
                  >
                    My form 1
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex h-[56px] items-center">
            <div className="flex justify-center w-full">
              <div className="flex lg:hidden" data-cy="sm-editor-tabs">
                <div className="relative">
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
          </div> */}

          <div className="flex justify-end items-center py-[11px] pr-7 md:min-w-[310px] largeXl:min-w-[354px]">
            <div className="mr-4 flex">
              <Button className="text-gray-500" variant={"outline"}>
                <Eye className="mr-2" />
                Preview
              </Button>
            </div>
            <div className="inline-block z-[14]">
              <div>
                <Button className="h-[34px] px-3 !min-w-[100px]">
                  Publish
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundHeader;
