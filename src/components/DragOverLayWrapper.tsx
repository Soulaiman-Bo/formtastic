import { Active, DragOverlay, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react";
import { DraggableCardElementGhost } from "./DraggableCardElement";
import { ElementsType, FormElements } from "./FormElements";

const DragOverLayWrapper = () => {
  const [draggetItem, setDraggetItem] = useState<Active | null>();

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

  return (
    <div>
      <DragOverlay>{component}</DragOverlay>
    </div>
  );
};

export default DragOverLayWrapper;
