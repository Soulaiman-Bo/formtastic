import { FormElementInstance } from "@/components/FormElements";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const properties = {
  label: "Checkbox field",
  helperText: "Helper text",
  required: false,
};

type CustomInstance = FormElementInstance & {
  properties: typeof properties;
};

const CheckBoxPreviewComponent = ({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) => {
  const element = elementInstance as CustomInstance;
  const { helperText, label, required } = element.properties;

  const id = `checkbox-${element.client_id}`;

  return (
    <>
      <div className="flex items-center gap-3 space-x-2">
        <Checkbox
          className="h-5 w-5 border-gray-300"
          id={id}
        />
        <div className="flex flex-col gap-1 leading-none my-2">
          <Label
            className="font-inter text-base font-medium text-gray-600 "
            htmlFor={id}
          >
            {label}
            {required && <span className="text-red-500 ml-2">*</span>}
          </Label>
          {helperText && (
            <p className=" text-[0.8rem] text-gray-400 text-sm">{helperText}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CheckBoxPreviewComponent;
