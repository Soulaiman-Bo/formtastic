import { PrivateAPI } from "@/lib/HttpClient";
import { useEffect, useState } from "react";
import useElementsStore from "@/context/useElementsStore";
import axios from "axios";

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
  const [data, setData] = useState({ formSchema: null, forms: null });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const formSchemaRequest = PrivateAPI.get(`/form/${formId}/formschema`); // form schema
        const formsRequest = PrivateAPI.get(`workspaces/${workspaceId}/forms/${formId}`); // forms

        const [formSchemaResponse, formsResponse] = await axios.all([
          formSchemaRequest,
          formsRequest,
        ]);

        setData({
          formSchema: formSchemaResponse.data,
          forms: formsResponse.data,
        });
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [formId, workspaceId]);


  useEffect(() => {
    if (data.formSchema && data.forms) {

      console.log("formSchemas Data from DB: ", data.formSchema);
      console.log("order Data from DB: ", data.forms.formfields_order);

      setAllElements(data.formSchema);


      // error here 
      if (data.forms.formfields_order) {
        setOrder(data.forms.formfields_order);
      }
    }
  }, [data.formSchema, data.forms, setAllElements, setOrder]);

  return { elements, isLoading, error };
};

// ===================================

// const useFormSchema = (formId: string, workspaceId: string) => {

//   const {setAllElements, elements, setOrder } = useElementsStore();

//   const results = useQueries({
//     queries: [
//       {
//         queryKey: [`formSchema-${formId}`],
//         queryFn: async () => {
//           const response = await PrivateAPI.get<FormElementInstance[]>(
//             `/form/${formId}/formschema`
//           );
//           return response.data;
//         },
//         staleTime: 0,

//       },
//       {
//         queryKey: [`forms-${workspaceId}`],
//         queryFn: async () => {
//           const response = await PrivateAPI.get<Form[]>(
//             `workspaces/${workspaceId}/forms`
//           );
//           return response.data;
//         },
//         staleTime: 0
//       },
//     ],
//   });

//   const formSchemaResult = results[1];
//   const formsResult = results[0];

//   useEffect(() => {
//     if (
//       formSchemaResult.isSuccess &&
//       formsResult.isSuccess &&
//       formSchemaResult.data &&
//       formsResult.data
//     ) {
//       setAllElements(formsResult.data);
//       if (formSchemaResult.data[0].formfields_order) {
//         setOrder(formSchemaResult.data[0].formfields_order);
//       }
//     }
//   }, [
//     formSchemaResult.isSuccess,
//     formsResult.isSuccess,
//     formSchemaResult.data,
//     formsResult.data,
//     setAllElements,
//     setOrder,
//   ]);

//   const isLoading = formSchemaResult.isLoading || formSchemaResult.isLoading;

//   return { elements, isLoading };
// };

export default useFormSchema;
