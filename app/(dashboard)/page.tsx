import FormCards from "@/components/dashboard/FormCards";
import React from "react";

const page = () => {
  return (
    <div>
      <h2 className=" py-2  rounded-full font-semibold hover:bg-blue-100 hover:text-blue-500 px-4 mr-1 cursor-pointer text-gray-400">
        All forms
      </h2>
      
      <FormCards />
    </div>
  );
};

export default page;
