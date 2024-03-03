import Image from "next/image";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="bg-gray-50 border-b-[0.5px] border-gray-300 flex-shrink-0">
        <div className="relative" aria-label="Global">
          <div className="pl-2 flex items-center w-full justify-between">
            <div className="font-medium flex items-center py-[11px] md:min-w-[310px] largeXl:min-w-[354px]">
              <div data-cy="home-button" className="flex">
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
            <div className="flex h-[56px] items-center">
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
            </div>
            <div className="flex items-center">
              <div className="flex justify-end items-center py-[11px] pr-7 md:min-w-[310px] largeXl:min-w-[354px]">
                <a
                  href="https://fillout.com/help"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-4 text-gray-400 hidden largeXl:flex items-center hover:text-gray-500 group cursor-pointer hover:bg-gray-100 p-1 rounded-md px-2"
                >
                  Help
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-5 ml-[3px] text-gray-300 group-hover:text-gray-400"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <div className="mr-4 flex">
                  <div data-cy="preview-button">
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
                      <span className="max-w-full overflow-hidden">
                        Preview
                      </span>
                    </button>
                  </div>
                </div>
                <div className="inline-block z-[14]">
                  <div>
                    <button
                      data-cy="button-component"
                      type="button"
                      className="inline-flex items-center px-3 border shadow-sm leading-4 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-[34px] text-sm border-gray-300 text-gray-100 bg-gray-800 hover:bg-gray-600 focus:!ring-gray-500 focus:ring-0 focus:ring-offset-0 !min-w-[100px] flex justify-center"
                    >
                      <span className="max-w-full overflow-hidden">
                        Publish
                      </span>
                    </button>
                  </div>
                </div>
                {/* <canvas style="z-index: 1000; position: fixed; pointer-events: none; width: 100%; height: 100%; top: 0px; left: 0px;"></canvas> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-full relative">
        <div
          className="flex w-full items-start justify-start flex-col"
          style={{ height: "calc(-58px + 100vh)" }}
        >
          <div className="flex justify-center w-full h-full flex-col items-center">
            <div className="flex w-full h-full justify-center">
              {/* sidebar */}
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
                      <input
                        data-cy="input-component"
                        type="text"
                        className="shadow-sm block w-full rounded border-gray-300 pl-8 sm:text-sm"
                        placeholder="Search fields"
                        value=""
                      />
                    </div>
                    <div className="inline-block z-[14]">
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
                    </div>
                  </div>
                </div>
              </div>
              {/* main */}
              <div className="flex flex-col justify-between h-full w-full relative">
                <div
                  className="flex p-5 w-full pb-3"
                  style={{ height: "calc(-98px + 100vh)" }}
                >
                  <div
                    id="widget-layout-container"
                    className="sc-581db06e-1 heJpox flex w-full h-full justify-between overflow-hidden flex-col rounded-xl overflow-hidden border-[0.5px] border-gray-300 shadow-lg"
                    style={{ background: "rgb(243, 244, 246)" }}
                  >
                    <div
                      id="widget-layout-container"
                      className="flex w-full h-full justify-between overflow-hidden flex-col rounded-xl overflow-hidden border-[0.5px] border-gray-300 shadow-lg fillout-edit-mode"
                      style={{ background: "rgb(243, 244, 246)" }}
                    >
                      <div
                        className="flex w-full h-full relative overflow-y-auto"
                        //style={} background
                      >
                        <div
                          className="sm:pb-4 w-full flex items-center flex-col h-full"
                          id="form-step-widgets-container"
                        >
                          <div
                            id="nav-bar"
                            className="flex items-center w-full z-[10] lg:sticky lg:top-0"
                          >
                            <div className="flex justify-start ml-3 w-[65px] z-10 h-42px"></div>
                            <div
                              className="flex h-14 items-center w-full px-4 justify-end py-2"
                              style={{ direction: "ltr" }}
                            ></div>
                          </div>
                          <div className="pb-6 sm:pb-20 w-full flex justify-center">
                            <div
                              id="question-container"
                              className="w-full flex flex-col sm:rounded-lg mt-0 relative py-4 px-2 z-10 fillout-field-container"
                              style={{
                                background: "rgb(255, 255, 255)",
                                maxWidth: "650px",
                              }}
                            >
                              <div
                                id="question-alignment-container"
                                className="flex h-full w-full flex-col mt-0"
                              >
                                <div>
                                  <div
                                    className="h-full w-full flex items-center text-slate-400 flex-col justify-center mt-5 mb-10"
                                    style={{
                                      color: "rgb(155, 160, 168)",
                                      fontFamily:
                                        "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                                    }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      aria-hidden="true"
                                      className="w-6 h-6 mb-3"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                    <h3
                                      className="font-normal"
                                      style={{ color: "rgb(155, 160, 168)" }}
                                    >
                                      <strong>Drag and drop</strong> questions
                                      from the left-hand side to build your
                                      form.
                                    </h3>
                                  </div>
                                </div>
                                <div className="flex w-full h-full relative">
                                  <div
                                    id="DROPABOVEROW-0"
                                    className="absolute left-0 -top-1 right-0 h-1 z-1"
                                    style={{ background: "transparent" }}
                                  >
                                    <div className="! h-full w-full flex flex-grow-0"></div>
                                  </div>
                                  <div className="w-full">
                                    <div className="h-10"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* sidebar */}
              <div className="w-full bg-gray-50 flex flex-col justify-between border-r-[0.5px] border-l-[0.5px] border-gray-300 h-full overflow-y-auto pb-6 max-w-[300px] min-w-[270px] relative">
                <div className="flex w-full justify-center">
                  <div className="flex justify-center flex-col w-full">
                    <div className="text-slate-200 flex items-center font-medium justify-between pr-2">
                      <div className="inline-block z-[14]">
                        <div
                          className="cursor-pointer p-4"
                          data-cy="widget-back-button"
                        >
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
                      </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {children}
    </>
  );
};

export default layout;
