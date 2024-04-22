import { useQuery } from "@tanstack/react-query";
import { PrivateAPI } from "@/lib/HttpClient";
import { FormElementInstance } from "@/components/FormElements";
import { useEffect } from "react";
import useElementsStore from "@/context/useElementsStore";

// type FormSchema = {
//   form_id: string;
//   type: string;
//   properties: Record<string, any>;
//   updated_at: string;
//   created_at: string;
//   id: string;
// };

const useFormSchema = (formId: string) => {
  const { setAllElements, elements } = useElementsStore();

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: [`formSchema-${formId}`],
    queryFn: async () => {
      const response = await PrivateAPI.get<FormElementInstance[]>(
        `/form/${formId}/formschema`
      );
      return response.data;
    },
  });

  useEffect(() => {
    if (isSuccess && data) {
      console.log("Setting elements after successful fetch", { data });
      setAllElements(data);
    }
  }, [isSuccess, data, setAllElements]);

  return { elements, isLoading };
};

export default useFormSchema;
