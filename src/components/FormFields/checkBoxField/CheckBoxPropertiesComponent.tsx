import { FormElementInstance } from "@/components/FormElements";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import useElementsStore from "@/context/useElementsStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const propertiesSchema = z.object({
  label: z.string().min(2).max(50),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
  defaultValue: z.boolean().default(false),
});

type propertiesFormSchemaType = z.infer<typeof propertiesSchema>;

type CustomInstance = FormElementInstance & {
  properties: typeof properties;
};

const properties = {
  label: "I Agree ",
  helperText: "Helper Text",
  required: false,
  defaultValue: true,
};

function CheckBoxPropertiesComponent({
  elementInstance,
}: {
  elementInstance: FormElementInstance;
}) {
  const element = elementInstance as CustomInstance;
  const { helperText, label, required, defaultValue  } = element.properties;
  const { updateElement } = useElementsStore();


  useEffect(() => {
    form.reset(element.properties);
  }, [element.client_id]);

  const form = useForm<propertiesFormSchemaType>({
    resolver: zodResolver(propertiesSchema),
    defaultValues: {
      helperText: helperText,
      required: required,
      label: label,
      defaultValue: defaultValue,
    },
  });

  useEffect(() => {
    const subscription = form.watch(() => {
      form.handleSubmit(applyChanges)();
    });

    return () => subscription.unsubscribe();
  }, [form, element]);


  function applyChanges(values: propertiesFormSchemaType) {
    const { label, helperText, required, defaultValue } = values;
    updateElement(element.client_id, {
      ...element,
      properties: {
        label,
        helperText,
        required,
        defaultValue,
      },
    });
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

              <FormField
                control={form.control}
                name="defaultValue"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex px-3 items-center justify-between space-x-2">
                      <FormLabel className="font-inter mb-1 font-light text-slate-600">
                        Default Value
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

export default CheckBoxPropertiesComponent;
