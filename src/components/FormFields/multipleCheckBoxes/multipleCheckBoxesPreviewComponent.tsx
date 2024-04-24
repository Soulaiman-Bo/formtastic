import { FormElementInstance } from "@/components/FormElements";
import { Checkbox } from "@/components/ui/checkbox";

const properties = {
  label: "Write you Question here.",
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
    {
      id: "88",
      value: "Option 4",
    },
  ],
};

type CustomInstance = FormElementInstance & {
  properties: typeof properties;
};

export default function MultipleCheckBoxesPreviewComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { helperText, options, label, required } = element.properties;

  return (
    <div className=" w-full">
      <p className="font-inter text-base font-medium  text-gray-600 mt-2 mb-3">
        {label}
        {required && <span className="text-red-500 ml-2">*</span>}
      </p>

      <div className="flex flex-col gap-1">
        {options.map((elm) => {
          return (
            <div key={elm.id} className="flex gap-3 items-center">
              <Checkbox />
              <span className="text-gray-600 font-inter border-gray-300 text-base">
                {elm.value}
              </span>
            </div>
          );
        })}
      </div>

      {helperText && (
        <p className=" text-gray-400 text-sm my-2">{helperText}</p>
      )}
    </div>
  );
}
