import SidebarNavItem from "./SidebarNavItem";
import SidebarNavItemSkeleton from "./SidebarNavItemSkeleton";
import useWorkspace from "@/hooks/useWorkspace";

const SidebarNavItems = () => {
  const { workspaces, loading, error } = useWorkspace();

  if (loading) {
    return <SidebarNavItemSkeleton />;
  }

  if (error) return <div>Error: {error}</div>;

  return (
    <ul role="list">
      {workspaces.map((item) => (
        <SidebarNavItem id={item.id} name={item.name} key={item.id} />
      ))}
    </ul>
  );
};

export default SidebarNavItems;
