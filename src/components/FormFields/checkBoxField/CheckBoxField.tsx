import { ElementsType, FormElement } from "@/components/FormElements";
import { RiCheckboxCircleFill } from "react-icons/ri";
import CheckBoxMainComponent from "./CheckBoxMainComponent";
import CheckBoxPropertiesComponent from "./CheckBoxPropertiesComponent";
import CheckBoxPreviewComponent from "./CheckBoxPreviewComponent";

const type: ElementsType = "CheckBoxField";

const properties = {
  label: "I Agree",
  helperText: "Helper Text",
  required: true,
  defaultValue: true
};

export const CheckBoxFieldFormElement: FormElement = {
  type,
  construct: (id: string, form_id: string) => ({
    client_id: id,
    type,
    form_id,
    properties,
  }),
  mainComponent: CheckBoxMainComponent,
  previewComponent: CheckBoxPreviewComponent,
  propertiesComponent: CheckBoxPropertiesComponent,

  draggableCardComponent: {
    icon: RiCheckboxCircleFill,
    label: "Checkbox",
    color: "purple-500",
  },
};
