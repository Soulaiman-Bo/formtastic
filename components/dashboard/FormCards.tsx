import React from "react";
import { FormCard } from "./FormCard";

const FormCards = () => {
  return (
    <ul
      role="list"
      className="mt-3 grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
    >
      <FormCard />
      <FormCard />
    </ul>
  );
};

export default FormCards;
