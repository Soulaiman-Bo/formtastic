import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import BlankFormButton from "./BlankFormButton";
import { Plus } from "lucide-react";

const NewFormButton = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control dialog visibility
  const closeDialog = () => setIsOpen(false);

  

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        type="button"
        className="inline-flex items-center px-3 border shadow-sm leading-4 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-[42px] sm:h-[38px] text-sm border-transparent bg-blue-600 hover:bg-blue-700 text-white"
      >
        <Plus color="#fff" strokeWidth={3} className="-ml-0.5 mr-2 h-4 w-4" />

        <span className="max-w-full overflow-hidden">New form</span>
      </Button>

      <Dialog open={isOpen} onOpenChange={closeDialog}>
        <DialogContent className="bg-gray-50 flex flex-col items-center rounded-lg min-h-[200px] shadow-2xl z-[50] border border-gray-300 w-[1000px] max-w-[95vw]">
          <DialogHeader className="p-4">
            <DialogTitle>
              <h1 className="flex font-semibold text-2xl mb-0">
                Pick an option
              </h1>
            </DialogTitle>
          </DialogHeader>
          <Separator />
          <div className="flex gap-8 w-full p-10">
            
            <BlankFormButton closeParent={closeDialog} />


            <div
              color="#6b7280"
              className="sc-3e175ccf-0 hACNyK flex flex-col rounded-lg bg-white shadow-md p-4 w-full max-w-items-center align-middle justify-center cursor-pointer hover:scale-105  hover:border-[3px] border border-gray-200 relative !h-[250px]"
            >
              <div className="justify-center flex !h-full items-center">
                <div className="border-gray-200 bg-gray-50 rounded-lg border p-4 mt-[18px]">
                  <svg
                    width="36.4"
                    height="29.4"
                    viewBox="0 0 26 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="26" height="5" rx="2.5" fill="#ec4899"></rect>
                    <rect
                      y="8"
                      width="26"
                      height="5"
                      rx="2.5"
                      fill="#38bdf8"
                    ></rect>
                    <rect
                      y="16"
                      width="16"
                      height="5"
                      rx="2.5"
                      fill="#fbbf24"
                    ></rect>
                    <rect
                      x="17"
                      y="16"
                      width="9"
                      height="5"
                      rx="2.5"
                      fill="#4ade80"
                    ></rect>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col items-center mt-5 h-full max-h-[20%] justify-end mb-3">
                <div className=" font-semibold flex !text-2xl">
                  FormTastic form
                </div>
                <div className="text-[rgb(171,175,185)] font-normal flex text-sm mb-0 mt-1 pb-0 text-center">
                  Import an existing Fillout form
                </div>
              </div>
            </div>


            <div
              color="#6b7280"
              className="sc-3e175ccf-0 hACNyK flex flex-col rounded-lg bg-white shadow-md p-4 w-full max-w-items-center align-middle justify-center cursor-pointer hover:scale-105  hover:border-[3px] border border-gray-200 relative  !h-[250px]"
            >
              <div className="justify-center flex !h-full items-center">
                <div className="flex flex-col bg-gray-50 p-2 px-4 rounded-lg border border-gray-200">
                  <div className="flex items-center my-2">
                    <div className="mr-4">
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 1905 2500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_822_130)">
                          <path
                            d="M1190.5 0H178.6C83.3 0 0 83.3 0 178.6V2321.5C0 2416.7 83.3 2500.1 178.6 2500.1H1726.2C1821.4 2500.1 1904.8 2416.8 1904.8 2321.5V714.3L1488.1 416.7L1190.5 0Z"
                            fill="#4f46e5"
                          ></path>
                          <path
                            d="M714.299 1845.2H1428.6V1726.2H714.299V1845.2ZM714.299 1071.4V1190.4H1428.6V1071.4H714.299ZM607.099 1131C607.099 1178.6 571.399 1226.2 511.899 1226.2C452.399 1226.2 416.699 1190.5 416.699 1131C416.699 1071.5 452.399 1035.8 511.899 1035.8C571.399 1035.8 607.099 1083.3 607.099 1131ZM607.099 1464.3C607.099 1511.9 571.399 1559.5 511.899 1559.5C452.399 1559.5 416.699 1523.8 416.699 1464.3C416.699 1404.8 452.399 1369.1 511.899 1369.1C571.399 1369.1 607.099 1416.7 607.099 1464.3ZM607.099 1785.7C607.099 1833.3 571.399 1880.9 511.899 1880.9C452.399 1880.9 416.699 1845.2 416.699 1785.7C416.699 1726.2 452.399 1690.5 511.899 1690.5C571.399 1690.5 607.099 1738.1 607.099 1785.7ZM714.299 1547.6H1428.6V1428.5H714.299V1547.6Z"
                            fill="#F1F1F1"
                          ></path>
                          <path
                            d="M1238.1 666.699L1904.8 1321.5V714.299L1238.1 666.699Z"
                            fill="url(#paint0_linear_822_130)"
                          ></path>
                          <path
                            d="M1190.5 0V535.7C1190.5 630.9 1273.8 714.3 1369.1 714.3H1904.8L1190.5 0Z"
                            fill="#B39DDB"
                          ></path>
                          <path
                            d="M178.6 0C83.3 0 0 83.3 0 178.6V190.5C0 95.2 83.3 11.9 178.6 11.9H1190.5V0H178.6Z"
                            fill="white"
                            fill-opacity="0.2"
                          ></path>
                          <path
                            d="M1726.2 2488.1H178.6C83.3 2488.1 0 2404.8 0 2309.5V2321.4C0 2416.6 83.3 2500 178.6 2500H1726.2C1821.4 2500 1904.8 2416.7 1904.8 2321.4V2309.5C1904.8 2404.8 1821.4 2488.1 1726.2 2488.1Z"
                            fill="#311B92"
                            fill-opacity="0.2"
                          ></path>
                          <path
                            d="M1369 714.299C1273.8 714.299 1190.4 630.999 1190.4 535.699V547.599C1190.4 642.799 1273.7 726.199 1369 726.199H1904.7V714.299H1369Z"
                            fill="#311B92"
                            fill-opacity="0.1"
                          ></path>
                          <path
                            d="M1190.5 0H178.6C83.3 0 0 83.3 0 178.6V2321.5C0 2416.7 83.3 2500.1 178.6 2500.1H1726.2C1821.4 2500.1 1904.8 2416.8 1904.8 2321.5V714.3L1190.5 0Z"
                            fill="url(#paint1_radial_822_130)"
                          ></path>
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_822_130"
                            x1="1571.41"
                            y1="718.813"
                            x2="1571.41"
                            y2="1324"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              stop-color="#311B92"
                              stop-opacity="0.2"
                            ></stop>
                            <stop
                              offset="1"
                              stop-color="#311B92"
                              stop-opacity="0.02"
                            ></stop>
                          </linearGradient>
                          <radialGradient
                            id="paint1_radial_822_130"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(60.2611 66.7203) scale(24569.6 24569.4)"
                          >
                            <stop stop-color="white" stop-opacity="0.1"></stop>
                            <stop
                              offset="1"
                              stop-color="white"
                              stop-opacity="0"
                            ></stop>
                          </radialGradient>
                          <clipPath id="clip0_822_130">
                            <rect
                              width="1904.8"
                              height="2500"
                              fill="white"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 256 257"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid"
                    >
                      <g>
                        <path
                          d="M121.239531,0.47435412 C154.258847,-2.24419986 177.973534,6.51949224 203.490026,32.0209539 C231.03887,59.5533708 249.354214,95.2328648 254.290235,133.239251 C259.781839,175.505244 252.228399,207.045826 228.963591,230.137302 C206.717472,252.217693 174.224091,259.500956 130.817584,255.872056 L130.817584,255.872056 L129.020628,255.714401 C92.0580678,252.31591 65.9142731,240.197353 40.5830264,214.542641 C13.525519,187.139558 -0.732370213,156.026391 0.0289819699,123.37039 C0.401368488,107.383336 4.93009017,93.7578927 13.6639513,80.3889177 C19.3897229,71.6244438 25.2046788,64.7874057 37.3681164,52.2487147 L37.3681164,52.2487147 L41.4275324,48.0907013 L45.9022443,43.5551431 C74.7290193,14.5793771 93.7072016,2.74118195 121.239531,0.47435412 Z M201.527922,33.9842216 C176.58625,9.05724142 153.671595,0.589198793 121.467288,3.24065127 C94.3271196,5.47519117 75.6884654,17.3319772 46.5188613,46.8760997 L46.5188613,46.8760997 L44.4086816,49.0171264 C30.1966379,63.4648858 23.5365117,70.8518409 17.66965,79.3947543 L17.66965,79.3947543 L16.8159631,80.6541424 L15.9876804,81.9069942 C7.52700788,94.8577977 3.16375473,107.9854 2.80388584,123.435056 C2.06141566,155.281167 15.9979199,185.693018 42.5581255,212.592447 C67.82505,238.182016 93.7827344,249.991613 131.048788,253.106044 L131.048788,253.106044 L132.897415,253.254431 C174.642425,256.464747 205.76515,249.252143 227.008257,228.167291 C249.578581,205.765126 256.927442,175.078792 251.537704,133.596809 C246.682834,96.2152658 228.654224,61.0943485 201.527922,33.9842216 Z M166.984321,93.3903087 L166.984321,106.949394 L138.186877,106.949394 L138.186877,184.662246 L123.842281,184.662246 L123.842281,106.949394 L95.044837,106.949394 L95.044837,93.3903087 L166.984321,93.3903087 Z"
                          fill="black"
                          fillRule="nonzero"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center mt-5 h-full max-h-[20%] justify-end mb-3">
                <div className=" font-semibold flex !text-2xl">3rd Party</div>
                <div className="text-[rgb(171,175,185)] font-normal flex text-sm mb-0 mt-1 pb-0 text-center">
                  Google Forms and Typeform
                </div>
              </div>
            </div>


          </div>
        </DialogContent>
      </Dialog> 
    </>
  );
};

export default NewFormButton;
