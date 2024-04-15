import { MousePointerClick } from "lucide-react";
import React from "react";

const PlaygroundMain = () => {
  return (
    <div className="p-5 pb-3 w-full">
      <div className="flex flex-col rounded-xl justify-between h-full w-full border-[0.5px] border-gray-300 shadow-lg relative overflow-hidden">
        <div className="p-2 flex w-full sm:pb-4 justify-between bg-gray-100 h-full  flex-col rounded-xl overflow-hidden border-[0.5px] border-gray-300 shadow-lg">
          <div className="sm:pb-4 pt-12 w-full flex items-center flex-col h-full">
            <EmptyForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundMain;

const EmptyForm = () => {
  return (
    <div className="pb-6 sm:pb-20 w-full flex justify-center">
      <div
        className="w-full flex flex-col sm:rounded-lg mt-0 relative py-4 px-2 z-10 fillout-field-container"
        style={{
          background: "rgb(255, 255, 255)",
          maxWidth: "650px",
        }}
      >
        <div className="flex h-full w-full flex-col mt-0">
          <div>
            <div className="h-full w-full font-inter flex items-center text-slate-400 flex-col justify-center mt-5 mb-10">
              <MousePointerClick className="h-8 w-8 mb-4 text-gray-400" />
              <h3 className="font-normal text-gray-400">
                <strong>Drag and drop</strong> questions from the left-hand side
                to build your form.
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
  );
};
