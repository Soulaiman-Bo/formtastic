import { useEffect, useState } from "react";
import { FormCard } from "./FormCard";
import FormCardSkeleton from "./FormCardSkeleton";
import { FolderOpen } from "lucide-react";
import { Plus } from "lucide-react";
import NewFormButton from "./NewFormButton";

const fetchPost = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [1, 2, 3, 4];
};

const FormCards = () => {
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
    return <FormCardSkeleton />;
  }

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <FolderOpen color="#6b7280" className="h-8 w-8 " />
      <h2 className="text-gray-500 justify-center flex items-center tracking-wide mt-4 font-normal">
        No forms in workspace yet
      </h2>
      <br />

      <NewFormButton />
      {/* <button
        type="button"
        className="inline-flex items-center px-3 border shadow-sm leading-4 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-[42px] sm:h-[38px] text-sm border-transparent bg-blue-600 hover:bg-blue-700 text-white"
      >
        <Plus className="h-4 w-4 mr-2" />
        <span className="max-w-full overflow-hidden">New form</span>
      </button> */}
    </div>

    // <div>
    //   <ul
    //     role="list"
    //     className="mt-3  grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
    //   >
    //     {data.map((form, index) => (
    //       <FormCard key={index} />
    //     ))}
    //   </ul>
    // </div>
  );
};

export default FormCards;
