import { RiCheckboxMultipleLine } from "react-icons/ri";
import { ElementsType, FormElement } from "../../FormElements";

import MultipleCheckBoxesMainComponent from "./multipleCheckBoxesMainComponent";
import MultipleCheckBoxesPropertiesComponent from "./MultipleCheckBoxesPropertiesComponent";
import MultipleCheckBoxesPreviewComponent from "./multipleCheckBoxesPreviewComponent";

const type: ElementsType = "MultipleCheckBoxes";

const properties = {
  label: "check your boxfff",
  helperText: "Helper Text",
  required: false,
  options: [
    {
      id: "44",
      value: "Option 1",
    },
    {
      id: "55",
      value: "Option 2",
    },
    {
      id: "66",
      value: "Option 3",
    },
  ],
};

export const MultipleCheckBoxesFieldFormElement: FormElement = {
  type,
  construct: (id: string, form_id: string) => ({
    client_id: id,
    type,
    form_id,
    properties,
  }),

  mainComponent: MultipleCheckBoxesMainComponent,
  previewComponent: MultipleCheckBoxesPreviewComponent,
  propertiesComponent: MultipleCheckBoxesPropertiesComponent,
  draggableCardComponent: {
    icon: RiCheckboxMultipleLine,
    label: "Multiple CheckBoxes",
    color: "red-500",
  },
};
