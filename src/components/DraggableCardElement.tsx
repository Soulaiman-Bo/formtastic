import { useDraggable } from "@dnd-kit/core";
import { FormElement } from "./FormElements";
import { cn } from "@/lib/utils";

const DraggableCardElement = ({
  formElement,
}: {
  formElement: FormElement;
}) => {
  const { icon: Icon, label, color } = formElement.draggableCardComponent;

  const draggable = useDraggable({
    id: `draggable-card-${formElement.type}`,
    data: {
      type: formElement.type,
      isDraggableCardComponent: true,
    },
  });

  return (
    <div
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
      className={cn(
        "bg-white p-3 flex gap-3  items-center rounded-md cursor-grab  shadow hover:shadow-md hover:shadow-gray-400/50",
        draggable.isDragging && `ring-2 ring-${color}`
      )}
    >
      <div
        className={`p-1  border-${color}  text-${color} rounded bg-gray-50 border-[0.5px]`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-gray-700 text-xs font-medium flex justify-center text-center leading-3 h-6 items-center">
        {label}
      </div>
    </div>
  );
};

export default DraggableCardElement;

export const DraggableCardElementGhost = ({
  formElement,
}: {
  formElement: FormElement;
}) => {
  const { icon: Icon, label, color } = formElement.draggableCardComponent;

  return (
    <div className="bg-white  p-3 flex gap-3 items-center rounded-md cursor-grab  shadow hover:shadow-md hover:shadow-gray-400/50">
      <div
        className={`p-1  border-${color}  text-${color} rounded bg-gray-50 border-[0.5px]`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-gray-700 text-xs font-medium flex justify-center mt-2 text-center leading-3 h-6 items-center">
        {label}
      </div>
    </div>
  );
};
