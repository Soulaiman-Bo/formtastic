import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import Image from "next/image";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Sidebar />

      <div className="md:pl-72 flex flex-col h-screen">
        <main className="flex-1 flex flex-col bg-gray-50">
          <DashboardHeader />
          <div className="flex-grow overflow-y-auto mx-6 md:mx-12 my-2 md:my-3">
           {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default layout;
