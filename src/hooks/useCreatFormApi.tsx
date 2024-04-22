import { toast } from "@/components/ui/use-toast";
import { PrivateAPI } from "@/lib/HttpClient";
import { createFormSchemaType } from "@/schema/createFormSchema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

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



const createFormApi = async ( values: createFormSchemaType, workspaceId: string ): Promise<FormResponse> => {
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

export default useCreatFormApi;
