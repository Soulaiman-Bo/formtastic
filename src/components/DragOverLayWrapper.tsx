import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react";
import { DraggableCardElementGhost } from "./DraggableCardElement";
import { ElementsType, FormElements } from "./FormElements";
import usePlayground from "@/hooks/usePlayground";

const DragOverLayWrapper = () => {
  const [draggetItem, setDraggetItem] = useState<Active | null>();
  const { elements } = usePlayground();

  useDndMonitor({
    onDragStart: (event) => {
      setDraggetItem(event.active);
    },
    onDragCancel: () => {
      setDraggetItem(null);
    },
    onDragEnd: () => {
      setDraggetItem(null);
    },
  });

  if (!draggetItem) {
    return null;
  }

  let component = <div>No Drag overlay</div>;

  const isDraggCardComponent =
    draggetItem?.data?.current?.isDraggableCardComponent;

  if (isDraggCardComponent) {
    const type = draggetItem.data?.current?.type as ElementsType;
    component = <DraggableCardElementGhost formElement={FormElements[type]} />;
  }

  const isDraggMainComponent = draggetItem?.data?.current?.isPlaygroundElement;

  if (isDraggMainComponent) {
    const elementId = draggetItem.data?.current?.elementId;
    const element = elements.find((el) => el.id === elementId);
    if (!element) component = <div>Element not found!</div>;
    else {
      const MainElementComponent = FormElements[element.type].mainComponent;

      component = (
        <div className="flex bg-accent border rounded-md h-[120px] w-full py-2 px-4 opacity-80 pointer pointer-events-none">
          <MainElementComponent elementInstance={element} />
        </div>
      );
    }
  }

  return (
    <div>
      <DragOverlay>{component}</DragOverlay>
    </div>
  );
};

export default DragOverLayWrapper;
