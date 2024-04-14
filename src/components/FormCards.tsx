import { PrivateAPI } from "@/lib/HttpClient";
import { FormCard } from "./FormCard";
import FormCardSkeleton from "./FormCardSkeleton";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { FolderOpen } from "lucide-react";
import NewFormButton from "./NewFormButton";

type form = {
  _id: string;
  workspace_id: string;
  name: string;
  description: string;
  visits: number;
  submittions: number;
  published: boolean;
  updated_at: string;
  created_at: string;
};

const FormCards = () => {
  const { workspaceId } = useParams({ strict: false }) as {
    workspaceId: string;
  };

  const { data, isLoading } = useQuery({
    queryKey: [`forms-${workspaceId}`],
    queryFn: async () => {
      const response = await PrivateAPI.get<form[]>(
        `workspaces/${workspaceId}/forms`
      );
      return response.data;
    },
  });

  if (isLoading) {
    return <FormCardSkeleton />;
  }

  if (data && data.length === 0) {
    return (
      <div>
        <div className="flex flex-col justify-center items-center mt-10">
          <FolderOpen color="#6b7280" className="h-8 w-8 " />
          <h2 className="text-gray-500 justify-center flex items-center tracking-wide mt-4 font-normal">
            No forms in workspace yet
          </h2>
          <br />

          <NewFormButton />
        </div>
      </div>
    );
  }

  return (
    <ul
      role="list"
      className="mt-3  grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
    >
      {data?.map((form, index) => <FormCard form={form} key={index} />)}
    </ul>
  );
};

export default FormCards;
