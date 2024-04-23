import { FormElementInstance, FormElements } from "@/components/FormElements";
import useFormSchema from "@/hooks/useFormSchema";
import { PrivateAPI } from "@/lib/HttpClient";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";

type FormResponse = {
  _id: string;
  workspace_id: string;
  name: string;
  description: string;
  owner_id: string;
  published: boolean;
  submittions: number;
  visits: number;
  updated_at: string;
  created_at: string;
  formfields_order: string[];
  formschema: FormElementInstance[];
};

const createFormApi = async (formId: string): Promise<FormResponse> => {
  try {
    const response = await PrivateAPI.get<FormResponse>(`form/${formId}`);

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

export const Route = createFileRoute("/form/$formId")({
  component: Form,
});

function Form() {
  const { formId } = Route.useParams();

  const { data, isLoading, isError, error } = useQuery<FormResponse, Error>({
    queryKey: [`form-published-${formId}`],
    queryFn: () => createFormApi(formId),
  });

  if (isLoading) {
    return <div>Loading ....</div>;
  }

  if(isError){
    return <div>{error.message}</div>;
  }

  if (data) {
    return (
      <div className="p-2 flex w-full pt-12 sm:pb-4 justify-between items-center bg-gray-100 flex-col overflow-y-scroll relative h-screen-minus-58">
        <div className=" w-full pb-6 sm:pb-20 bg-white justify-center shadow-sm max-w-[650px] flex flex-col sm:rounded-lg mt-0 relative py-4 px-2 z-10">
          {data.formfields_order.map((clientId) => {
            const element = data.formschema.find(
              (el) => el.client_id === clientId
            );

            if (element) {
              const PreviewComponent =
                FormElements[element.type].previewComponent;

              return (
                <div className="px-10 flex flex-col text-background w-full gap-6 p-4">
                  <PreviewComponent
                    key={element.client_id}
                    elementInstance={element}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default Form;
