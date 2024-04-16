import { AlignCenter } from "lucide-react";
import { ElementsType, FormElement } from "../FormElements";

const type: ElementsType = "ShortAnswerField";

export const ShortAnswerFieldFormElement: FormElement = {
  type,

  construct: (id: string) => ({
        id, 
        type,
        extraAttributes: {
            label: 'Short Answer',
            helperText: 'Helper Text',
            required: false,
            placeHolder: "Value Here ..."
        },
  }),

  mainComponent: () => <div>main Component</div>,
  previewComponent: () => <div>preview Component</div>,
  propertiesComponent: () => <div>properties Component</div>,
  draggableCardComponent: {
    icon: AlignCenter,
    label: "Short Answer",
    color: "green-500",
  }
};

