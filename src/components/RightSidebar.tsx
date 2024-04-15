import { useState } from "react";
import { Button } from "./ui/button";
import { MousePointerClick, X } from "lucide-react";

const RightSidebar = () => {
  const [selected, setSelected] = useState(true);

  return (
    <div className=" w-full flex flex-col gap-2 bg-gray-50 border-r-[0.5px] border-l-[0.5px] border-gray-300 h-full overflow-y-auto pb-6 max-w-[300px] min-w-[270px] relative">
      <div className=" pr-2">
        <Button
          onClick={() => console.log("e=hello")}
          variant="ghost"
          className="cursor-pointer m-2"
        >
          <X color="#111" className="h-6 w-6" />
        </Button>
      </div>

      {selected && <EmptyState />}
    </div>
  );
};

export default RightSidebar;

const EmptyState = () => {
  return (
    <div className=" flex flex-col items-center p-2">
      <MousePointerClick className="h-10 w-10 text-gray-300" />
      <h3 className="mt-5 text-sm font-medium text-gray-400 mb-0 max-w-[210px] text-center">
        Click a field in your form to modify it
      </h3>
    </div>
  );
};
