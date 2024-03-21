import FormBuilder from "@/components/playground/FormBuilder";
import HeaderNav from "@/components/playground/HeaderNav";
import LeftSideBar from "@/components/playground/LeftSideBar";
import RightSideBar from "@/components/playground/RightSideBar";
import Image from "next/image";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HeaderNav />
      <div className="flex justify-center items-center relative w-full h-custom">
        <LeftSideBar />
        <FormBuilder />
        <RightSideBar />
      </div>

      {children}
    </>
  );
};

export default layout;
