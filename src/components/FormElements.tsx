/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShortAnswerFieldFormElement } from "./FormFields/shortAnserField/ShortAnswerField";

export type ElementsType = "ShortAnswerField";

export type FormElement = {
  type: ElementsType;

  construct: (id: string) => FormElementInstance;

  draggableCardComponent: {
    icon: React.ElementType;
    label: string;
    color: string;
  }; //designerBtnElement

  mainComponent: React.FC<{ elementInstance: FormElementInstance }>; // designerComponent
  previewComponent: React.FC; // formComponent
  propertiesComponent: React.FC<{ elementInstance: FormElementInstance }>; //propertiesComponent
}; // main form element type

export type FormElementInstance = {
  id: string;
  type: ElementsType;
  extraAttributes?: Record<string, any>;
};

type FormElementsType = {
  [key in ElementsType]: FormElement;
};

export const FormElements: FormElementsType = {
  ShortAnswerField: ShortAnswerFieldFormElement,
};

// FormElements is the object that contains all Form fields
