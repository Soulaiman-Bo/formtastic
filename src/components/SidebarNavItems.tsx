import { useQuery } from "@tanstack/react-query";
import SidebarNavItem from "./SidebarNavItem";
import SidebarNavItemSkeleton from "./SidebarNavItemSkeleton";
import { PrivateAPI } from "@/lib/HttpClient";
import { FormErrorAlert } from "./FormErrorAlert";

type Workspace = {
  id: string;
  name: string;
};

const SidebarNavItems = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["workspaces"],
    queryFn: async () => {
      const response = await PrivateAPI.get<Workspace[]>("/workspaces");
      return response.data;
    },
  });

  if (isLoading) {
    return <SidebarNavItemSkeleton />;
  }

  if (isError) return <FormErrorAlert message={error.message} />;

  if (data && data.length === 0) {
    return (
      <div>
        <div
          className="p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300"
          role="alert"
        >
          <span className="font-medium">No Workspaces!</span>
          <span className="block mt-2"> Create You First Workspace</span>
        </div>

      </div>
    );
  }

  return (
    <ul role="list">
      {data?.map((item) => (
        <SidebarNavItem id={item.id} name={item.name} key={item.id} />
      ))}
    </ul>
  );
};

export default SidebarNavItems;
