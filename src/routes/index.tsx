import DashboardHeader from "@/components/DashboardHeader";
// import FormCards from "@/components/FormCards";
import Sidebar from "@/components/Sidebar";
import { isAuthenticated } from "@/lib/auth";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { FolderOpen } from "lucide-react";

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
            <div>
              <div className="flex flex-col justify-center items-center mt-10">
                <FolderOpen color="#6b7280" className="h-8 w-8 " />
                <h2 className="text-gray-500 justify-center flex items-center tracking-wide mt-4 font-normal">
                  No Workspace is Selected
                </h2>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
