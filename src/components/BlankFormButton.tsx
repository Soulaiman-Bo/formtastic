import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createFormSchema,
  createFormSchemaType,
} from "@/schema/createFormSchema";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { ListTodo } from "lucide-react";
import { useParams } from "@tanstack/react-router";
import axios from "axios";
import { PrivateAPI } from "@/lib/HttpClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "./ui/use-toast";
import { ImSpinner2 } from "react-icons/im";

interface props {
  closeParent: () => void;
}

type FormResponse = {
  workspace_id: string;
  name: string;
  description: string;
  visits: number;
  submittions: number;
  published: boolean;
  updated_at: string;
  created_at: string;
  _id: string;
};

const createFormApi = async (
  values: createFormSchemaType,
  workspaceId: string
): Promise<FormResponse> => {
  try {
    const response = await PrivateAPI.post<FormResponse>(
      `/workspaces/${workspaceId}/forms`,
      values
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || "Failed to create workspace"
      );
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

function useCreatFormApi(workspaceId: string, closeParent: () => void) {
  const queryClient = useQueryClient();

  return useMutation<FormResponse, Error, createFormSchemaType>({
    mutationFn: (values) => {
      return createFormApi(values, workspaceId);
    },
    onSuccess: (data: FormResponse) => {
      queryClient.setQueryData(
        [`forms-${workspaceId}`],
        (old: FormResponse[] | undefined) => [...old!, data]
      );

      closeParent();

      toast({
        title: "Success",
        variant: "success",
        description: "Form created Successfully",
      });
    },

    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}

const BlankFormButton: React.FC<props> = ({ closeParent }) => {
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
    closeParent
  );

  async function onSubmit(values: createFormSchemaType) {
    createForm(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex flex-col items-center rounded-lg bg-white shadow-md p-4 w-full   align-middle justify-center cursor-pointer hover:scale-105  hover:border-[3px] border border-gray-200 relative !h-[250px]">
          <div className="justify-center flex !h-full items-center">
            <div className="border-gray-200 bg-gray-50 rounded-lg border p-[6px] mt-[18px]">
              <ListTodo className="w-[64px] h-[64px] text-gray-500" />
            </div>
          </div>
          <div className="flex flex-col items-center mt-5 h-full max-h-[20%] justify-end mb-3">
            <div className=" font-semibold flex !text-2xl">Blank form</div>
            <div className="text-[rgb(171,175,185)] font-normal flex text-sm mb-0 mt-1 pb-0 text-center">
              Start from scratch
            </div>
          </div>
        </button>
      </DialogTrigger>

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
  );
};

export default BlankFormButton;
