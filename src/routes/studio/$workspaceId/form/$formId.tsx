import LeftSidebar from "@/components/LeftSidebar";
import PlaygroundHeader from "@/components/PlaygroundHeader";
import PlaygroundMain from "@/components/PlaygroundMain";
import RightSidebar from "@/components/RightSidebar";
import { PrivateAPI } from "@/lib/HttpClient";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/studio/$workspaceId/form/$formId")({
  component: Playground,
});

interface Form {
  _id: string;
  name: string;
  description?: string;
  published: boolean;
  submittions: number;
  visits: number;
  fields: unknown[];
}

function Playground() {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  const { formId, workspaceId } = Route.useParams();

  const { data,  isLoading } = useQuery({
    queryKey: [`form-${formId}`],
    queryFn: async () => {
      const response = await PrivateAPI.get<Form>(
        `workspaces/${workspaceId}/forms/${formId}`
      );
      return response.data;
    },
  });

  const closeLeftSidebar = () => {
    setSideBarOpen(false);
  };

  if (isLoading) {
    console.log("loading ...");
    
  }

  if (data) {
    console.log(data);
  }

  return (
    <>
      <PlaygroundHeader workspaceId={workspaceId}  />

      <div
        className="flex w-full items-start justify-start flex-col"
        style={{ height: "calc(-58px + 100vh)" }}
      >
        <div className="flex justify-center w-full h-full flex-col items-center">
          <div className="flex w-full h-full justify-center">
            <LeftSidebar />
            <PlaygroundMain />
            {sideBarOpen && <RightSidebar close={closeLeftSidebar} />}
          </div>
        </div>
      </div>
    </>
  );
}
