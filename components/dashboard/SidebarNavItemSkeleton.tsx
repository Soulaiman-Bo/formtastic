import React from "react";
import { Skeleton } from "../ui/skeleton";

const SidebarNavItemSkeleton = () => {
  return (
    <ul>
      <li className="list-none">
        <Skeleton className="rounded-md flex justify-between gap-x-3 bg-gray-200 my-1 w-full p-2 ">
          <Skeleton className=" h-6 w-6 rounded-lg"></Skeleton>
          <Skeleton className="w-9 min-w-max rounded-full max-h-6"></Skeleton>
        </Skeleton>
      </li>
      <li className="list-none">
        <Skeleton className="rounded-md flex justify-between gap-x-3 bg-gray-200 my-1 w-full p-2 ">
          <Skeleton className=" h-6 w-6 rounded-lg"></Skeleton>
          <Skeleton className="w-9 min-w-max rounded-full max-h-6"></Skeleton>
        </Skeleton>
      </li>
      <li className="list-none">
        <Skeleton className="rounded-md flex justify-between gap-x-3 bg-gray-200 my-1 w-full p-2 ">
          <Skeleton className=" h-6 w-6 rounded-lg"></Skeleton>
          <Skeleton className="w-9 min-w-max rounded-full max-h-6"></Skeleton>
        </Skeleton>
      </li>
    </ul>
  );
};

export default SidebarNavItemSkeleton;
