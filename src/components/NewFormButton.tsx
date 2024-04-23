import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  createFormSchema,
  createFormSchemaType,
} from "@/schema/createFormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "@tanstack/react-router";
import useCreatFormApi from "@/hooks/useCreatFormApi";
import { ImSpinner2 } from "react-icons/im";

const NewFormButton = ({ disabled }: { disabled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeDialog = () => setIsOpen(false);

  const { workspaceId } = useParams({ strict: false }) as {
    workspaceId: string;
  };

  const form = useForm<createFormSchemaType>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      description: "",
      workspace_id: workspaceId,
      name: "",
    },
  });

  const { mutate: createForm, isPending } = useCreatFormApi(
    workspaceId,
    closeDialog
  );

  async function onSubmit(values: createFormSchemaType) {
    createForm(values);
  }

  return (
    <>
      <Button
        disabled={disabled}
        type="button"
        onClick={() => setIsOpen(true)}
        className={cn(
          "inline-flex items-center px-3 border shadow-sm leading-4 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-[42px] sm:h-[38px] text-sm border-transparent bg-blue-600 hover:bg-blue-700 text-white",
          disabled ? "bg-gray-400" : ""
        )}
      >
        <Plus color="#fff" strokeWidth={3} className="-ml-0.5 mr-2 h-4 w-4" />

        <span className="max-w-full overflow-hidden">New form</span>
      </Button>
      <Dialog open={isOpen} onOpenChange={closeDialog}>
        <DialogContent>
          <DialogHeader className="p-4">
            <DialogTitle>
              <h1 className="flex font-semibold text-2xl mb-0">Create Form</h1>
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <div className="flex flex-col  gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          className="shadow-sm block focus-visible:ring-blue-500 w-full rounded border-gray-300 mb-3 text-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col  gap-4">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          className="shadow-sm block focus-visible:ring-blue-500 w-full rounded border-gray-300 mb-3 text-sm"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                className=" min-w-24  focus:ring-offset-2 focus-visible:ring-blue-500 h-[42px] sm:h-[38px]  bg-blue-600 hover:bg-blue-700 text-white"
                type="submit"
              >
                {isPending ? (
                  <ImSpinner2 className="animate-spin h-4 w-4" />
                ) : (
                  "Create Form"
                )}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NewFormButton;
