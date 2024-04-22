import PlaygroundHeader from "@/components/PlaygroundHeader";
import { createFileRoute } from "@tanstack/react-router";
import { DndContext, MouseSensor, useSensor, useSensors } from "@dnd-kit/core";
import DragOverLayWrapper from "@/components/DragOverLayWrapper";
import Main from "@/components/Main";
import useFormSchema from "@/hooks/useFormSchema";

export const Route = createFileRoute("/studio/$workspaceId/form/$formId/")({
  component: Playground,
});

function Playground() {
  const { formId, workspaceId } = Route.useParams();

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });



  const { isLoading } = useFormSchema(formId, workspaceId);

  

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
              {isLoading ? <p>Loading....</p> : <Main  />}
            </div>
          </div>
          <DragOverLayWrapper />
        </DndContext>
      </div>
    </>
  );
}
