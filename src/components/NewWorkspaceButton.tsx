import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Plus } from "lucide-react";
import {
  NewWorkspaceSchema,
  NewWorkspaceSchemaType,
} from "@/schema/NewWorkspaceSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Label } from "./ui/label";
import { PrivateAPI } from "@/lib/HttpClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { toast } from "./ui/use-toast";

type WorkspaceResponse = {
  id: string;
  name: string;
};

const createWorkspaceApi = async (
  values: NewWorkspaceSchemaType
): Promise<WorkspaceResponse> => {
  try {
    const response = await PrivateAPI.post<WorkspaceResponse>(
      "/workspaces",
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

function useCreateWorkspace(onSuccess: () => void, resetForm: () => void) {
  const queryClient = useQueryClient();

  return useMutation<WorkspaceResponse, Error, NewWorkspaceSchemaType>({
    mutationFn: (values) => {
      return createWorkspaceApi(values);
    },
    onSuccess: (data: WorkspaceResponse) => {
      console.log(`Workspace '${data.name}' created successfully!`);

      queryClient.setQueryData(
        ["workspaces"],
        (old: WorkspaceResponse[] | undefined) => [...old!, data]
      );
      resetForm();
      onSuccess();

      toast({
        title: "Success",
        variant: "success",
        description: "Workspace created successfully",
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

const NewWorkspaceButton = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control dialog visibility

  const form = useForm<NewWorkspaceSchemaType>({
    resolver: zodResolver(NewWorkspaceSchema),
    defaultValues: {
      name: "",
    },
  });

  const closeDialog = () => setIsOpen(false);

  const { mutate: createWorkspace, isPending } = useCreateWorkspace(
    closeDialog,
    form.reset
  );

  function handleSubmit(values: NewWorkspaceSchemaType) {
    createWorkspace(values);
  }

  return (
    <div className="z-[14] flex  ">
      <Button
        onClick={() => setIsOpen(true)}
        variant="ghost"
        size="icon"
        className=" text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-0  rounded flex items-center"
      >
        <Plus className="h-5 w-5" />
      </Button>

      <Dialog open={isOpen} onOpenChange={closeDialog}>
        <DialogContent className="md:min-w-[600px] top-[25%]">
          <DialogHeader className="mb-2">
            <DialogTitle>Create New Workspace</DialogTitle>
            <DialogDescription>
              Group related forms and share workspaces with your team
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-col  gap-4">
                      <Label>Name</Label>
                      <FormControl>
                        <Input
                          {...field}
                          className="shadow-sm block focus-visible:ring-blue-500 w-full rounded border-gray-300 mb-3 text-sm"
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className=" mt-4 min-w-20  focus:ring-offset-2 focus-visible:ring-blue-500 h-[42px] sm:h-[38px]  bg-blue-600 hover:bg-blue-700 text-white"
                type="submit"
              >
                {isPending ? (
                  <ImSpinner2 className="animate-spin h-4 w-4" />
                ) : (
                  "Create"
                )}
              </Button>
            </form>
          </Form>

          {/* <DialogFooter className="mt-4">
            <Button
              className="  focus:ring-offset-2 focus-visible:ring-blue-500 h-[42px] sm:h-[38px]  bg-blue-600 hover:bg-blue-700 text-white"
              type="submit"
            >
              Create
            </Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewWorkspaceButton;
