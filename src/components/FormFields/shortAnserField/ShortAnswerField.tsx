import { AlignCenter } from "lucide-react";
import {
  ElementsType,
  FormElement,
} from "../../FormElements";

import MainComponent from "./MainComponent";
import PropertiesComponent from "./PropertiesComponent";
import PreviewComponent from "./PreviewComponent";

const type: ElementsType = "ShortAnswerField";

const properties = {
  question: "Write you Question here.",
  helperText: "Helper Text",
  required: false,
  placeHolder: "Answer Here ...",
}; 

export const ShortAnswerFieldFormElement: FormElement = {
  type,
  construct: (id: string, form_id: string) => ({
    client_id: id,
    type,
    form_id,
    properties,
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

