import { FormElementInstance } from "@/components/FormElements";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import useElementsStore from "@/context/useElementsStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

const optionSchema = z.object({
  id: z.string(),
  value: z.string(),
});

const propertiesSchema = z.object({
  label: z.string().min(2).max(50),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
  options: z.array(optionSchema),
});

type propertiesFormSchemaType = z.infer<typeof propertiesSchema>;

type CustomInstance = FormElementInstance & {
  properties: typeof properties;
};
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

function MultipleCheckBoxesPropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { helperText, label, required, options } = element.properties;
  const { updateElement } = useElementsStore();

  const form = useForm<propertiesFormSchemaType>({
    resolver: zodResolver(propertiesSchema),
    defaultValues: {
      helperText: helperText,
      required: required,
      label: label,
      options: options,
    },
  });

  const { fields, append } = useFieldArray({
    name: "options",
    control: form.control,
  });

  useEffect(() => {
    form.reset(element.properties);
}, [element.properties]);

  useEffect(() => {
    const subscription = form.watch(() => {
      form.handleSubmit(applyChanges)();
    });
    return () => subscription.unsubscribe();
  }, [form, element]);

  function applyChanges(values: propertiesFormSchemaType) {
    const { label, helperText, required, options } = values;
    updateElement(element.client_id, {
      ...element,
      properties: {
        label,
        helperText,
        required,
        options,
      },
    });

    // const obj = {
    //   g: element.client_id,
    //   d: {
    //     ...element,
    //     properties: {
    //       label,
    //       helperText,
    //       required,
    //       options,
    //     },
    //   },
    // };

    // console.log(obj);
  }

  return (
    <div className="flex flex-col gap-2 px-4">
      <div>
        <p className="font-inter font-semibold text-slate-500">Basic</p>

        <FormProvider {...form}>
          <form>
            <div className="my-4 flex flex-col gap-8">
              <FormField
                control={form.control}
                name="label"
                render={({ field }) => (
                  <FormItem>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <FormLabel className="font-inter mb-1 font-light text-slate-600">
                        Label
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
                name="required"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex px-3 items-center justify-between space-x-2">
                      <FormLabel className="font-inter mb-1 font-light text-slate-600">
                        Required
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

              <div className=" flex flex-col gap-2">
                {fields.map((item, index) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name={`options.${index}.value`}
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Input
                              className="placeholder:text-gray-300"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => append({ id: idGen(), value: "new Option" })}
                >
                  Add new
                </Button>
              </div>

              {/* <FormField
                control={form.control}
                name="options"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base">Sidebar</FormLabel>
                      <FormDescription>
                        Select the items you want to display in the sidebar.
                      </FormDescription>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              /> */}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default MultipleCheckBoxesPropertiesComponent;

function idGen() {
  return `id_${Math.random().toString(36).substr(2, 9)}`;
}
