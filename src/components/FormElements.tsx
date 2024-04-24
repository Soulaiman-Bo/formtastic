/* eslint-disable @typescript-eslint/no-explicit-any */
import { CheckBoxFieldFormElement } from "./FormFields/checkBoxField/CheckBoxField";
import { MultipleCheckBoxesFieldFormElement } from "./FormFields/multipleCheckBoxes/multipleCheckBoxesField";
import { ShortAnswerFieldFormElement } from "./FormFields/shortAnserField/ShortAnswerField";
import { SwitchFieldFormElement } from "./FormFields/switchField/SwitchField";

export type ElementsType = "ShortAnswerField" | "CheckBoxField" | "SwitchField" | "MultipleCheckBoxes";

export type FormElement = {
  type: ElementsType;

  construct: (id: string, form_id: string) => FormElementInstance;

  draggableCardComponent: {
    icon: React.ElementType;
    label: string;
    color: string;
  }; //designerBtnElement

  mainComponent: React.FC<{ elementInstance: FormElementInstance }>; // designerComponent
  previewComponent: React.FC<{ elementInstance: FormElementInstance }>; // formComponent
  propertiesComponent: React.FC<{ elementInstance: FormElementInstance }>; //propertiesComponent
}; // main form element type

export type FormElementInstance = {
  client_id: string;
  _id?: string;
  form_id: string;
  type: ElementsType;
  properties?: Record<string, any>;
  updated_at?: string;
  created_at?: string;
};

type FormElementsType = {
  [key in ElementsType]: FormElement;
};

export const FormElements: FormElementsType = {
  ShortAnswerField: ShortAnswerFieldFormElement,
  CheckBoxField: CheckBoxFieldFormElement,
  SwitchField: SwitchFieldFormElement,
  MultipleCheckBoxes: MultipleCheckBoxesFieldFormElement
};

// FormElements is the object that contains all Form fields
