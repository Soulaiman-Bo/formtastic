import { ElementsType, FormElement } from "@/components/FormElements";
import { ToggleRight } from 'lucide-react';
import SwitchMainComponent from "./SwitchMainComponent";
import SwitchPreviewComponent from "./SwitchPreviewComponent";
import SwitchPropertiesComponent from "./SwitchPropertiesComponent";

const type: ElementsType = "SwitchField";

const properties = {
  label: "I Agree",
  required: true,
  defaultValue: true
};

export const SwitchFieldFormElement: FormElement = {
  type,
  construct: (id: string, form_id: string) => ({
    client_id: id,
    type,
    form_id,
    properties,
  }),
  mainComponent: SwitchMainComponent,
  previewComponent: SwitchPreviewComponent,
  propertiesComponent: SwitchPropertiesComponent,

  draggableCardComponent: {
    icon: ToggleRight,
    label: "Switch",
    color: "green-500",
  },
};
