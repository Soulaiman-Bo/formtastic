import Image from "next/image";
import React, { ReactNode } from "react";
import PlaygroundHeader from "@/components/playground/PlaygroundHeader";
import LeftSidebar from "@/components/playground/LeftSidebar";
import RightSidebar from "@/components/playground/RightSidebar";
import PlaygroundMain from "@/components/playground/PlaygroundMain";

const layout = ({ children }: { children: ReactNode }) => {

  return (
    <>
        <PlaygroundHeader />

        <div className="flex w-full items-start justify-start flex-col" style={{ height: "calc(-58px + 100vh)" }}>
          <div className="flex justify-center w-full h-full flex-col items-center">
            <div className="flex w-full h-full justify-center">

              <LeftSidebar />
              <PlaygroundMain />
              <RightSidebar />

            </div>
          </div>
        </div>
     

      {children}
    </>
  );
};

export default layout;
