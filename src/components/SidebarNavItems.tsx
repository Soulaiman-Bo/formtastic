import { useEffect, useState } from "react";
import SidebarNavItem from "./SidebarNavItem";
import SidebarNavItemSkeleton from "./SidebarNavItemSkeleton";

const fetchPost = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [1, 2, 3, 4];
};

const SidebarNavItems = () => {
  const [data, setData] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const fetchedData = await fetchPost();
      setData(fetchedData);
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return <SidebarNavItemSkeleton />;
  }

  return (
    <ul role="list">
      {data.map((item, index) => (
        <SidebarNavItem key={index} />
      ))}
    </ul>
  );
};

export default SidebarNavItems;
