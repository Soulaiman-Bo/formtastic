import FormCardSkeleton from "@/components/dashboard/FormCardSkeleton";
import FormCards from "@/components/dashboard/FormCards";
import React, { Suspense, useEffect, useState } from "react";

const page = () => {
  return (
    <div>
      <h2 className=" py-2 w-fit rounded-full font-semibold hover:bg-blue-100 hover:text-blue-500 px-4 m-1 cursor-pointer text-gray-400">
        All forms
      </h2>

      <Suspense fallback={<FormCardSkeleton />}>
        <FormCards />
      </Suspense>
    </div>
  );
};

export default page;
