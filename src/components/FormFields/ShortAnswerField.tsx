import { AlignCenter } from "lucide-react";
import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from "../FormElements";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import usePlayground from "@/hooks/usePlayground";

const type: ElementsType = "ShortAnswerField";

const extraAttributes = {
  question: "Write you Question here.",
  helperText: "Helper Text",
  required: false,
  placeHolder: "Answer Here ...",
}; // these meant to go in main component

const propertiesSchema = z.object({
  question: z.string().min(2).max(50),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
  placeHolder: z.string().max(50),
});

export const ShortAnswerFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),

  mainComponent: MainComponent,
  previewComponent: () => <div>preview Component</div>,
  propertiesComponent: PropertiesComponent,
  draggableCardComponent: {
    icon: AlignCenter,
    label: "Short Answer",
    color: "green-500",
  },
};

type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

function MainComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { helperText, placeHolder, question, required } = element.extraAttributes;

  return (
    <div className=" w-full">
      <p className="font-inter text-base font-medium  text-gray-600 my-2">
        {question}{required && (<span className="text-red-500">*</span>)}
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
}

type propertiesFormSchemaType = z.infer<typeof propertiesSchema>;

function PropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { helperText, placeHolder, question, required } =
    element.extraAttributes;
  const { updateElement } = usePlayground();

  const form = useForm<propertiesFormSchemaType>({
    resolver: zodResolver(propertiesSchema),
    defaultValues: {
      question: question,
      helperText: helperText,
      required: required,
      placeHolder: placeHolder,
    },
  });

  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  function applyChanges(values: propertiesFormSchemaType) {
    const { question, helperText, placeHolder, required } = values;
    updateElement(element.id, {
      ...element,
      extraAttributes: {
        question,
        helperText,
        placeHolder,
        required,
      },
    });
  }

  return (
    <div className="flex flex-col gap-2 px-4">
      <div>
        <p className="font-inter font-semibold text-slate-500">Basic</p>

        <Form {...form}>
          <form onBlur={form.handleSubmit(applyChanges)}>
            <div className="my-4 flex flex-col gap-8">
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <FormLabel className="font-inter mb-1 font-light text-slate-600">
                        Question
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="placeholder:text-gray-300"
                          {...field}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") e.currentTarget.blur();
                          }}
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="helperText"
                render={({ field }) => (
                  <FormItem>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <FormLabel className="font-inter mb-1 font-light text-slate-600">
                        Helper Text
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="placeholder:text-gray-300"
                          {...field}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") e.currentTarget.blur();
                          }}
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="placeHolder"
                render={({ field }) => (
                  <FormItem>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <FormLabel className="font-inter mb-1 font-light text-slate-600">
                        PlaceHolder
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="placeholder:text-gray-300"
                          {...field}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") e.currentTarget.blur();
                          }}
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="required"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex px-3 items-center justify-between space-x-2">
                      <FormLabel className="font-inter mb-1 font-light text-slate-600">
                        PlaceHolder
                      </FormLabel>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
      </div>
      {/* <Separator />
      <div>
        <p className="font-inter font-semibold text-slate-500">Validation</p>
        <div className="my-4 flex flex-col gap-8">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label
              className="font-inter mb-1 font-light text-slate-600"
              htmlFor="email"
            >
              Min Length
            </Label>
            <Input
              className="placeholder:text-gray-300"
              type="text"
              id="label"
              placeholder="Question Here ..."
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label
              className="font-inter mb-1 font-light text-slate-600"
              htmlFor="email"
            >
              Max Length
            </Label>
            <Input
              className="placeholder:text-gray-300"
              type="text"
              id="label"
              placeholder="Question Here ..."
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label
              className="font-inter mb-1 font-light text-slate-600"
              htmlFor="email"
            >
              Error message
            </Label>
            <Input
              className="placeholder:text-gray-300"
              type="text"
              id="label"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}
