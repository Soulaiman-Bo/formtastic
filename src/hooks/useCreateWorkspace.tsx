import { toast } from "@/components/ui/use-toast";
import { PrivateAPI } from "@/lib/HttpClient";
import { NewWorkspaceSchemaType } from "@/schema/NewWorkspaceSchema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type WorkspaceResponse = {
  id: string;
  name: string;
};

const createWorkspaceApi = async (values: NewWorkspaceSchemaType): Promise<WorkspaceResponse> => {
  try {
    
    const response = await PrivateAPI.post<WorkspaceResponse>("/workspaces", values);
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
  // const navigate = useNavigate({ from: "/login" });

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

export default useCreateWorkspace;
