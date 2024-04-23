import { FormElementInstance } from "@/components/FormElements";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const properties = {
  label: "Checkbox field",
  required: false,
  defaultValue: true
};

type CustomInstance = FormElementInstance & {
  properties: typeof properties;
};

const CheckBoxMainComponent = ({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) => {
  const element = elementInstance as CustomInstance;
  const { label, required, defaultValue } = element.properties;

  const id = `checkbox-${element.client_id}`;

  return (
    <>
      <div className="flex flex-col gap-1 ">
        <div className="flex flex-col gap-1 leading-none my-2">
          <Label
            className="font-inter text-base font-medium text-gray-600 "
            htmlFor={id}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </Label>
        </div>
        <Switch checked={defaultValue} />
      </div>
    </>
  );
};

export default CheckBoxMainComponent;
