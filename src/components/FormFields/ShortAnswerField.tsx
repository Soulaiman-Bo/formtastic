import { AlignCenter } from "lucide-react";
import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from "../FormElements";
import { Input } from "../ui/input";

const type: ElementsType = "ShortAnswerField";

const extraAttributes = {
  label: "your question here",
  helperText: "Helper Text",
  required: false,
  placeHolder: "Answer Here ...",
};

export const ShortAnswerFieldFormElement: FormElement = {
  type,

  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),

  mainComponent: MainComponent,
  previewComponent: () => <div>preview Component</div>,
  propertiesComponent: () => <div>properties Component</div>,
  draggableCardComponent: {
    icon: AlignCenter,
    label: "Short Answer",
    color: "green-500",
  },
};

type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

function MainComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {

  const element = elementInstance as CustomInstance;
  const { helperText, placeHolder, label } = element.extraAttributes;


  return (
    <div className=" w-full">
      <p className="font-inter text-base font-medium  text-gray-600 my-2">
        {label}
      </p>
      <Input
        className="shadow-sm block w-full mb-3 rounded-md placeholder:text-gray-300 border-gray-300 text-base text-gray-500 font-medium h-11"
        placeholder={placeHolder}
      />
      {helperText && <p className="pl-3 text-gray-400 text-sm mb-2">{helperText}</p>}
    </div>
  );
}
