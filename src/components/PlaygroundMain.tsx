import { cn } from "@/lib/utils";
import { useDndMonitor, useDraggable, useDroppable } from "@dnd-kit/core";
import { MousePointerClick, Settings, Trash } from "lucide-react";
import {
  ElementsType,
  FormElementInstance,
  FormElements,
} from "./FormElements";
import usePlayground from "@/hooks/usePlayground";
import { useState } from "react";

const PlaygroundMain = () => {
  const { elements, addElement, setSelectedElement } = usePlayground();


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

      if (isDraggableCardComponent) {
        const type = active.data?.current?.type;
        const newElement =
          FormElements[type as ElementsType].construct(idGen());

        addElement(0, newElement);
      }
    },
  });

  return (
    <div onClick={() => {
      setSelectedElement(null)
    }} className="p-5 pb-3 w-full">
      <div
        ref={droppable.setNodeRef}
        className=" p-2 flex  w-full pt-12  sm:pb-4 justify-between items-center bg-gray-100 h-full  flex-col rounded-xl overflow-hidden relative border-[0.5px] border-gray-300 shadow-lg"
      >
        <div
          className={cn(
            "w-full pb-6 sm:pb-20 bg-white justify-center max-w-[650px] flex flex-col sm:rounded-lg mt-0 relative py-4 px-2 z-10",
            droppable.isOver && "ring-2 ring-gray-300"
          )}
        >
          {!droppable.isOver && elements.length === 0 && <EmptyForm />}

          {droppable.isOver && elements.length === 0 && (
            <div className="p-4 w-full">
              <div className="h-[10px] rounded-md bg-primary/80"></div>
            </div>
          )}

          {elements.length > 0 && (
            <div className="px-10 flex flex-col text-background w-full gap-6 p-4">
              {elements.map((element) => {
                return (
                  <PlaygroundElementWrapper
                    element={element}
                    key={element.id}
                  />
                );
              })}
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
    <div className="flex h-full w-full flex-col mt-0">
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
  return Math.floor(Math.random() * 10001).toString();
}

function PlaygroundElementWrapper({
  element,
}: {
  element: FormElementInstance;
}) {
  const [mouseIsOver, setMouseIsOver] = useState<boolean>(false);

  const { removeElement, selectedElement, setSelectedElement, setisSideBarOpen } = usePlayground();

  const topHalf = useDroppable({
    id: element.id + "-top",
    data: {
      type: element.type,
      elementId: element.id,
      isTopHalfPlaygroundElement: true,
    },
  });

  const bottomHalf = useDroppable({
    id: element.id + "-bottom",
    data: {
      type: element.type,
      elementId: element.id,
      isBottomHalfPlaygroundElement: true,
    },
  });

  const draggable = useDraggable({
    id: element.id + "-drag-handler",
    data: {
      type: element.type,
      elementId: element.id,
      isPlaygroundElement: true,
    },
  });

  if (draggable.isDragging) return null;

  const MainComponent = FormElements[element.type].mainComponent;

  console.log(selectedElement);
  
  return (
    <div
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
      className={cn(
        "relative flex flex-col  hover:cursor-pointer rounded-md ",
        mouseIsOver && "ring-2 ring-primary/30 ring-inset",
        selectedElement?.id === element.id && "ring-2 ring-primary ring-inset"
      )}
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
      onClick={(e) => {
        e.stopPropagation()
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

      {selectedElement?.id === element.id  && (
        <div className="absolut flex gap-3 ring-2 w-fit">
          <button
            onClick={(e) => {
              e.stopPropagation()
              removeElement(element.id);
            }}
          >
            <Trash color="#555" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              setisSideBarOpen(true)
            }}
          >
           <Settings color="#555" />
          </button>

        </div>
      )}
    </div>
  );
}
