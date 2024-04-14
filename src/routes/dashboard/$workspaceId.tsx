import DashboardHeader from "@/components/DashboardHeader";
import FormCards from "@/components/FormCards";
import Sidebar from "@/components/Sidebar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/$workspaceId")({
  component: Workspace,
});

function Workspace() {

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
            <FormCards />
          </div>
        </main>
      </div>
    </>
  );
}
