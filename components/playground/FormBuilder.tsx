import React from "react";

const FormBuilder = () => {
  return (
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
                            <strong>Drag and drop</strong> questions from the
                            left-hand side to build your form.
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
  );
};

export default FormBuilder;
