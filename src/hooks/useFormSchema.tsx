import { useQueries } from "@tanstack/react-query";
import { PrivateAPI } from "@/lib/HttpClient";
import { FormElementInstance } from "@/components/FormElements";
import { useEffect } from "react";
import useElementsStore from "@/context/useElementsStore";

type Form = {
  _id: string;
  workspace_id: string;
  name: string;
  description: string;
  owner_id: string;
  published: boolean;
  submittions: number;
  visits: number;
  formfields_order: []; // This appears to be a JSON string of an array
  updated_at: string; // These could be Date types if you work with Date objects
  created_at: string;
};

const useFormSchema = (formId: string, workspaceId: string) => {
  const { setAllElements, elements, setOrder } = useElementsStore();

  const results = useQueries({
    queries: [
      {
        queryKey: [`formSchema-${formId}`],
        queryFn: async () => {
          const response = await PrivateAPI.get<FormElementInstance[]>(
            `/form/${formId}/formschema`
          );
          return response.data;
        },
      },
      {
        queryKey: [`forms-${workspaceId}`],
        queryFn: async () => {
          const response = await PrivateAPI.get<Form[]>(
            `workspaces/${workspaceId}/forms`
          );
          return response.data;
        },
      },
    ],
  });

  const formSchemaResult = results[1];
  const formsResult = results[0];

  useEffect(() => {
    if (
      formSchemaResult.isSuccess &&
      formsResult.isSuccess &&
      formSchemaResult.data &&
      formsResult.data
    ) {
      setAllElements(formsResult.data);
      setOrder(formSchemaResult.data[0].formfields_order);
    }
  }, [
    formSchemaResult.isSuccess,
    formsResult.isSuccess,
    formSchemaResult.data,
    formsResult.data,
    setAllElements,
    setOrder,
  ]);

  const isLoading = formSchemaResult.isLoading || formSchemaResult.isLoading;

  return { elements, isLoading };
};

export default useFormSchema;
