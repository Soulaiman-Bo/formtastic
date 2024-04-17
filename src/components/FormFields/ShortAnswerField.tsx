import { AlignCenter } from "lucide-react";
import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from "../FormElements";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Separator } from "../ui/separator";

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
  propertiesComponent: PropertiesComponent,
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
      {helperText && (
        <p className="pl-3 text-gray-400 text-sm mb-2">{helperText}</p>
      )}
    </div>
  );
}

function PropertiesComponent({ elementInstance }: { elementInstance: FormElementInstance }) {
  
  // const element = elementInstance as CustomInstance;


 
  return (
    <div className="flex flex-col gap-2 px-4">
      <div>
        <p className="font-inter font-semibold text-slate-500">Basic</p>
        <div className="my-4 flex flex-col gap-8">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label
              className="font-inter mb-1 font-light text-slate-600"
              htmlFor="email"
            >
              Question
            </Label>
            <Input
              className="placeholder:text-gray-300"
              type="text"
              id="label"
              placeholder="Question Here ..."
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label
              className="font-inter mb-1 font-light text-slate-600"
              htmlFor="email"
            >
              Helper Text
            </Label>
            <Input
              className="placeholder:text-gray-300"
              type="text"
              id="label"
              placeholder="Question Here ..."
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label
              className="font-inter mb-1 font-light text-slate-600"
              htmlFor="email"
            >
              Default value
            </Label>
            <Input
              className="placeholder:text-gray-300"
              type="text"
              id="label"
            />
          </div>

          <div className="flex px-3 items-center justify-between space-x-2">
            <Label
              className="font-inter mb-1 font-light text-slate-600"
              htmlFor="required"
            >
              Required
            </Label>

            <Switch id="required" />
          </div>
        </div>
      </div>
      <Separator />
      <div>
        <p className="font-inter font-semibold text-slate-500">Validation</p>
        <div className="my-4 flex flex-col gap-8">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label
              className="font-inter mb-1 font-light text-slate-600"
              htmlFor="email"
            >
              Min Length
            </Label>
            <Input
              className="placeholder:text-gray-300"
              type="text"
              id="label"
              placeholder="Question Here ..."
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label
              className="font-inter mb-1 font-light text-slate-600"
              htmlFor="email"
            >
              Max Length
            </Label>
            <Input
              className="placeholder:text-gray-300"
              type="text"
              id="label"
              placeholder="Question Here ..."
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label
              className="font-inter mb-1 font-light text-slate-600"
              htmlFor="email"
            >
              Error message
            </Label>
            <Input
              className="placeholder:text-gray-300"
              type="text"
              id="label"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
