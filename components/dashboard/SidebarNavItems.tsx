import React, { Suspense } from "react";
import SidebarNavItem from "./SidebarNavItem";
import SidebarNavItem_skeleton from "./SidebarNavItemSkeleton";


const fetchPost = async (page: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    return [1, 2, 3, 4];
  };


const SidebarNavItems = async () => {
    const data: number[] = await fetchPost(2);


  return (
    <ul role="list">
      <SidebarNavItem />
    </ul>
  );
};

export default SidebarNavItems;
