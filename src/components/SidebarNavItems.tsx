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

  return (
    <ul role="list">
      {data?.map((item) => (
        <SidebarNavItem id={item.id} name={item.name} key={item.id} />
      ))}
    </ul>
  );
};

export default SidebarNavItems;
