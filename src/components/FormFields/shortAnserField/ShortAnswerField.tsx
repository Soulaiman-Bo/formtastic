import { AlignCenter } from "lucide-react";
import {
  ElementsType,
  FormElement,
} from "../../FormElements";

import MainComponent from "./MainComponent";
import PropertiesComponent from "./PropertiesComponent";
import PreviewComponent from "./PreviewComponent";

const type: ElementsType = "ShortAnswerField";

const extraAttributes = {
  question: "Write you Question here.",
  helperText: "Helper Text",
  required: false,
  placeHolder: "Answer Here ...",
}; // these meant to go in main component



export const ShortAnswerFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),

  mainComponent: MainComponent,
  previewComponent: PreviewComponent,
  propertiesComponent: PropertiesComponent,
  draggableCardComponent: {
    icon: AlignCenter,
    label: "Short Answer",
    color: "green-500",
  },
};



{
  /* <Separator />
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
      </div> */
}
