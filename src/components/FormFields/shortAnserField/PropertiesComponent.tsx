import { FormElementInstance } from "@/components/FormElements";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import usePlayground from "@/hooks/usePlayground";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";

const propertiesSchema = z.object({
  question: z.string().min(2).max(50),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
  placeHolder: z.string().max(50),
});

type propertiesFormSchemaType = z.infer<typeof propertiesSchema>;

type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

const extraAttributes = {
  question: "Write you Question here.",
  helperText: "Helper Text",
  required: false,
  placeHolder: "Answer Here ...",
}; // these meant to go in main component

export default function PropertiesComponent({
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

//   const values = form.watch();

  console.log("properties component rendered");
  

  useEffect(() => {
    const subscription = form.watch(() => {
      form.handleSubmit(applyChanges)();
    });

    form.reset(element.extraAttributes);


    return () => subscription.unsubscribe();


  }, [form]);

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

        <FormProvider {...form}>
          <form >
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
        </FormProvider>
      </div>
    </div>
  );
}
