import { FormElementInstance } from "@/components/FormElements";
import { Input } from "@/components/ui/input";

const properties = {
  question: "Write you Question here.",
  helperText: "Helper Text",
  required: false,
  placeHolder: "Answer Here ...",
}; // these meant to go in main component

type CustomInstance = FormElementInstance & {
  properties: typeof properties;
};

const MultipleCheckBoxesPreviewComponent = ({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) => {
  const element = elementInstance as CustomInstance;
  const { helperText, placeHolder, question, required } =
    element.properties;

  return (
    <div className=" w-full">
      <p className="font-inter text-base font-medium  text-gray-600 my-2">
        {question}
        {required && <span className="text-red-500">*</span>}
      </p>
      <Input
        className="shadow-sm block w-full mb-3 rounded-md placeholder:text-gray-300 border-gray-300 text-base text-gray-500 font-medium h-11"
        placeholder={placeHolder}
      />
      {helperText && (
        <p className="pl-3 text-gray-400 text-sm mb-2">{helperText}</p>
      )}
    </div>
  );
};

export default MultipleCheckBoxesPreviewComponent;
