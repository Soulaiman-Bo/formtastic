import LeftSidebar from "@/components/LeftSidebar";
import PlaygroundHeader from "@/components/PlaygroundHeader";
import PlaygroundMain from "@/components/PlaygroundMain";
import RightSidebar from "@/components/RightSidebar";
import { createFileRoute } from "@tanstack/react-router";
import { DndContext, MouseSensor, useSensor, useSensors } from "@dnd-kit/core";
import DragOverLayWrapper from "@/components/DragOverLayWrapper";
import usePlayground from "@/hooks/usePlayground";

export const Route = createFileRoute("/studio/$workspaceId/form/$formId/")({
  component: Playground,
});

function Playground() {
  const { isSideBarOpen, setisSideBarOpen } = usePlayground();

  const { formId, workspaceId } = Route.useParams();

  const formSchem = Route.useLoaderData();

  console.log(formSchem);

  const closeLeftSidebar = () => {
    setisSideBarOpen(false);
  };

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const sensors = useSensors(mouseSensor);

  return (
    <>
      <PlaygroundHeader formId={formId} workspaceId={workspaceId} />

      <div
        className="flex w-full items-start justify-start flex-col"
        style={{ height: "calc(-58px + 100vh)" }}
      >
        <DndContext sensors={sensors}>
          <div className="flex justify-center w-full h-full flex-col items-center">
            <div className="flex w-full h-full justify-center">
              <LeftSidebar />
              <PlaygroundMain formId={formId} />
              {isSideBarOpen && <RightSidebar close={closeLeftSidebar} />}
            </div>
          </div>
          <DragOverLayWrapper />
        </DndContext>
      </div>
    </>
  );
}
