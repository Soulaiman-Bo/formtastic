import React, { useEffect, useState } from "react";
import { FormCard } from "./FormCard";

const fetchPost = async (page: number) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return [1, 2, 3, 4];
};

const FormCards = async () => {
  const data: number[] = await fetchPost(2);

  return (
    <ul
      role="list"
      className="mt-3 grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
    >
      {data.map((form) => (
        <FormCard key={form} />
      ))}
    </ul>
  );
};

export default FormCards;
