import { PrivateAPI } from "@/lib/HttpClient";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import axios from "axios";

const publishFormApi = async (values: {published: string}, formId: string, workspaceId: string) => {
  try {
    const response = await PrivateAPI.put(
      `/workspaces/${workspaceId}/forms/${formId}`,
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

const usePublishForm = (openDialog: () => void) => {
  const { formId, workspaceId } = useParams({ strict: false }) as {
    workspaceId: string;
    formId: string;
  };

  return useMutation({
    mutationFn: (values: {published: string}) => {
      return publishFormApi(values, formId, workspaceId);
    },

    onSuccess: () => {
        console.log("success");
        
        openDialog()
    },

    onError: () => {},
  });
};

export default usePublishForm;
