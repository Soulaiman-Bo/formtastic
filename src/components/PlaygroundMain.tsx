import { cn } from "@/lib/utils";
import { useDndMonitor, useDraggable, useDroppable } from "@dnd-kit/core";
import { MousePointerClick, Settings, Trash } from "lucide-react";
import {
  ElementsType,
  FormElementInstance,
  FormElements,
} from "./FormElements";
import { useEffect, useState } from "react";
import useFormSchema from "@/hooks/useFormSchema";
import { v4 as uuidv4 } from "uuid";
import useSelectedElementStore from "@/context/useSelectedElementStore";
import useElementsStore from "@/context/useElementsStore";
import useSidebarStore from "@/context/useSidebarStore";

type FormSchema = {
  form_id: string;
  type: string;
  properties: Record<string, any>;
  updated_at: string;
  created_at: string;
  _id: string;
};

const PlaygroundMain = ({ formId }: { formId: string }) => {
  const { elements, addElement, removeElement } = useElementsStore();

  const { setSelectedElement } = useSelectedElementStore();

  // const {isLoading, elements } = useFormSchema(formId)

  const isLoading = false;

  const droppable = useDroppable({
    id: "playground-drop-area",
    data: {
      isPlaygroundDropArea: true,
    },
  });

  useDndMonitor({
    onDragEnd(event) {
      const { active, over } = event;
      if (!active || !over) return;

      const isDraggableCardComponent =
        active.data?.current?.isDraggableCardComponent;

      const isDroppingOverPlaygroundDropArea =
        over.data?.current?.isPlaygroundDropArea;

      const droppingSidebarCardOverPlaygroundDropArea =
        isDraggableCardComponent && isDroppingOverPlaygroundDropArea;

      if (droppingSidebarCardOverPlaygroundDropArea) {
        const type = active.data?.current?.type;
        const newElement = FormElements[type as ElementsType].construct(
          idGen(),
          formId
        );
        addElement(elements.length, newElement);
      }

      const isDroppingOverPlaygroundElementTopHalf =
        over.data?.current?.isTopHalfPlaygroundElement;

      const isDroppingOverPlaygroundElementBottomHalf =
        over.data?.current?.isBottomHalfPlaygroundElement;

      const isDroppingOverPlaygroundElement =
        isDroppingOverPlaygroundElementTopHalf ||
        isDroppingOverPlaygroundElementBottomHalf;

      const droppingSidebarBtnOverPlaygroundElement =
        isDraggableCardComponent && isDroppingOverPlaygroundElement;

      // senario 2
      if (droppingSidebarBtnOverPlaygroundElement) {
        const type = active.data?.current?.type;
        const newElement = FormElements[type as ElementsType].construct(
          idGen(),
          formId
        );

        const overId = over.data?.current?.elementId;

        const overElementIndex = elements.findIndex(
          (el) => el.client_id === overId
        );

        if (overElementIndex === -1) {
          throw new Error("element not found");
        }

        let indexForNewElement = overElementIndex;

        if (isDroppingOverPlaygroundElementBottomHalf) {
          indexForNewElement = overElementIndex + 1;
        }

        addElement(indexForNewElement, newElement);
        return;
      }

      // Third scenario

      const isDraggingMainElement = active.data?.current?.isPlaygroundElement;

      const draggingMainComponentOverMainComponent =
        isDroppingOverPlaygroundElement && isDraggingMainElement;

      if (draggingMainComponentOverMainComponent) {
        const activeId = active.data?.current?.elementId;
        const overId = over.data?.current?.elementId;

        const activeElementIndex = elements.findIndex(
          (el) => el.client_id === activeId
        );
        const overElementIndex = elements.findIndex(
          (el) => el.client_id === overId
        );

        if (activeElementIndex === -1 || overElementIndex === -1) {
          throw new Error("element not found");
        }

        const activeElement = { ...elements[activeElementIndex] };

        removeElement(activeId);

        let indexForNewElement = overElementIndex;

        if (isDroppingOverPlaygroundElementBottomHalf) {
          indexForNewElement = overElementIndex + 1;
        }

        addElement(indexForNewElement, activeElement);
      }
    },
  });

  return (
    <div
      onClick={() => {
        setSelectedElement(null);
      }}
      className="p-5 pb-3 w-full"
    >
      <div
        ref={droppable.setNodeRef}
        className=" p-2 flex  w-full pt-12  sm:pb-4 justify-between items-center bg-gray-100 h-full  flex-col rounded-xl overflow-hidden relative border-[0.5px] border-gray-300 shadow-lg"
      >
        <div
          className={cn(
            " w-full pb-6 sm:pb-20 bg-white justify-center max-w-[650px] flex flex-col sm:rounded-lg mt-0 relative py-4 px-2 z-10",
            droppable.isOver && "ring-2 ring-gray-300"
          )}
        >
          {isLoading ? (
            <div className="debug2 flex h-full w-full flex-col mt-0">
              loading ....
            </div>
          ) : (
            <div>
              {!droppable.isOver && elements.length === 0 && <EmptyForm />}

              {droppable.isOver && elements.length === 0 && (
                <div className="p-4 w-full">
                  <div className="h-[10px] rounded-md bg-primary/80"></div>
                </div>
              )}

              {elements.length > 0 && (
                <div className=" px-10 flex flex-col text-background w-full gap-6 p-4">
                  {elements.map((element) => {
                    return (
                      <PlaygroundElementWrapper
                        element={element}
                        key={element.client_id}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaygroundMain;

const EmptyForm = () => {
  return (
    <div className=" flex h-full w-full flex-col mt-0">
      <div>
        <div className="h-full w-full font-inter flex items-center text-slate-400 flex-col justify-center mt-5 mb-10">
          <MousePointerClick className="h-8 w-8 mb-4 text-gray-400" />
          <h3 className="font-normal text-gray-400">
            <strong>Drag and drop</strong> questions from the left-hand side to
            build your form.
          </h3>
        </div>
      </div>

      <div className="flex w-full h-full relative">
        <div
          id="DROPABOVEROW-0"
          className="absolute left-0 -top-1 right-0 h-1 z-1"
          style={{ background: "transparent" }}
        >
          <div className="! h-full w-full flex flex-grow-0"></div>
        </div>
        <div className="w-full">
          <div className="h-10"></div>
        </div>
      </div>
    </div>
  );
};

function idGen() {
  const randomKey = uuidv4();
  return randomKey;
}

function PlaygroundElementWrapper({
  element,
}: {
  element: FormElementInstance;
}) {
  const [mouseIsOver, setMouseIsOver] = useState<boolean>(false);

  const {setisSideBarOpen } = useSidebarStore();

  const { removeElement } = useElementsStore();

  const { setSelectedElement, selectedElement } = useSelectedElementStore();

  const topHalf = useDroppable({
    id: element.client_id + "-top",
    data: {
      type: element.type,
      elementId: element.client_id,
      isTopHalfPlaygroundElement: true,
    },
  });

  const bottomHalf = useDroppable({
    id: element.client_id + "-bottom",
    data: {
      type: element.type,
      elementId: element.client_id,
      isBottomHalfPlaygroundElement: true,
    },
  });

  const draggable = useDraggable({
    id: element.client_id + "-drag-handler",
    data: {
      type: element.type,
      elementId: element.client_id,
      isPlaygroundElement: true,
    },
  });

  if (draggable.isDragging) return null;

  const MainComponent = FormElements[element.type].mainComponent;

  return (
    <div
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
      className={cn(
        "relative flex flex-col  hover:cursor-pointer rounded-md ",
        mouseIsOver && "ring-2 ring-primary/30 ring-inset",
        selectedElement?.client_id === element.client_id &&
          "ring-2 ring-primary ring-inset"
      )}
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedElement(element);
      }}
    >
      <div
        ref={topHalf.setNodeRef}
        className="absolute  w-full h-1/2 rounded-t-md"
      />
      <div
        ref={bottomHalf.setNodeRef}
        className="absolute  w-full bottom-0 h-1/2 rounded-b-md pointer-events-none"
      />

      {topHalf.isOver && (
        <div className="absolute top-0 w-full rounded-md h-[7px] bg-primary rounded-b-none" />
      )}
      <div className="flex w-full items-center rounded-md px-4 py-2 ">
        <MainComponent elementInstance={element} />
      </div>
      {bottomHalf.isOver && (
        <div className="absolute bottom-0 w-full rounded-md h-[7px] bg-primary rounded-t-none" />
      )}

      {selectedElement?.client_id === element.client_id && (
        <div className="absolut flex gap-3 ring-2 w-fit">
          <button
            onClick={(e) => {
              e.stopPropagation();
              removeElement(element.client_id);
            }}
          >
            <Trash color="#555" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setisSideBarOpen(true);
            }}
          >
            <Settings color="#555" />
          </button>
        </div>
      )}
    </div>
  );
}
