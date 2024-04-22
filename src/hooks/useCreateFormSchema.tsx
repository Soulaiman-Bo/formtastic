/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormElementInstance } from "@/components/FormElements";
import { toast } from "@/components/ui/use-toast";
import { PrivateAPI } from "@/lib/HttpClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type FormSchemaResponse = {
  form_id: string;
  type: string;
  properties: Record<string, any>;
  updated_at: string;
  created_at: string;
  _id: string;
};

const createWorkspaceApi = async (
  values: FormElementInstance,
  formId: string
): Promise<FormSchemaResponse> => {
  try {
    const response = await PrivateAPI.post<FormSchemaResponse>(
      `/form/${formId}/formschema`,
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

function useCreateFormSchema(formId: string) {
  const queryClient = useQueryClient();

  return useMutation<FormSchemaResponse, Error, FormElementInstance>({
    mutationFn: (values) => {
      return createWorkspaceApi(values, formId);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workspaces"] });
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

export default useCreateFormSchema;
