import { useParams } from "@tanstack/react-router";
import NewFormButton from "./NewFormButton";
import { Search } from "lucide-react";
import { Folder } from "lucide-react";

const DashboardHeader = () => {

  const { workspaceId } = useParams({ strict: false }) as {
    workspaceId: string | undefined;
  };


  return (
    <div className="hidden md:flex justify-between mb-5 border-b border-gray-300 pb-4 px-7 mt-5">
      <div className="text-lg font-bold leading-7 flex items-center text-gray-700">
        <Folder className="h-7 w-7 mr-3" fill="#d1d5db" strokeWidth={0} />

        <div
          className="max-w-[400px] truncate"
          data-cy="home-page-header-workspace-name"
        >
          Home
        </div>
      </div>

      <div className="flex items-center">
        <NewFormButton disabled={workspaceId ? false : true}  />
        <div className="inline-block w-5 h-5 ml-5">
          <button>
            <Search strokeWidth={3} color="#94a3b8" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
