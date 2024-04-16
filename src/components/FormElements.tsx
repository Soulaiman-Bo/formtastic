import { ShortAnswerFieldFormElement } from "./FormFields/ShortAnswerField";

export type ElementsType = "ShortAnswerField";

export type FormElement = {
  type: ElementsType;

  construct: (id: string) => FormElementInstance;

  draggableCardComponent: {
    icon: React.ElementType;
    label: string;
    color: string;
  }; //designerBtnElement

  mainComponent: React.FC; // designerComponent
  previewComponent: React.FC; // formComponent
  propertiesComponent: React.FC; //propertiesComponent
};

export type FormElementInstance = {
  id: string;
  type: ElementsType;
  extraAttrivutes?: Record<string, unknown>;
};

type FormElementsType = {
  [key in ElementsType]: FormElement;
};

export const FormElements: FormElementsType = {
  ShortAnswerField: ShortAnswerFieldFormElement,
};
