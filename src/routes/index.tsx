import DashboardHeader from "@/components/DashboardHeader";
import FormCardSkeleton from "@/components/FormCardSkeleton";
import FormCards from "@/components/FormCards";
import Sidebar from "@/components/Sidebar";
import { isAuthenticated } from "@/lib/auth";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { Suspense } from "react";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    if (!isAuthenticated()) {
      throw redirect({
        to: "/auth/login",
      });
    }
  },
  component: Index,
});

function Index() {
  return (
    <>
      <Sidebar />
      <div className="md:pl-72 flex flex-col h-screen">
        <main className="flex-1 flex flex-col bg-gray-50">
          <DashboardHeader />
          <div className="flex-grow overflow-y-auto mx-6 md:mx-12 my-2 md:my-3">
            <h2 className=" py-2 w-fit rounded-full font-semibold hover:bg-blue-100 hover:text-blue-500 px-4 m-1 cursor-pointer text-gray-400">
              All forms
            </h2>

            

            <Suspense fallback={<FormCardSkeleton />}>
              <FormCards />
            </Suspense>
          </div>
        </main>
      </div>
    </>
  );
}
