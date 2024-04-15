import LeftSidebar from "@/components/LeftSidebar";
import PlaygroundHeader from "@/components/PlaygroundHeader";
import PlaygroundMain from "@/components/PlaygroundMain";
import RightSidebar from "@/components/RightSidebar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/studio/$formId/")({
  component: playground,
});

function playground() {
  return (
    <>
      <PlaygroundHeader />

      <div
        className="flex w-full items-start justify-start flex-col"
        style={{ height: "calc(-58px + 100vh)" }}
      >
        <div className="flex justify-center w-full h-full flex-col items-center">
          <div className="flex w-full h-full justify-center">
            <LeftSidebar />
            <PlaygroundMain />
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
}
