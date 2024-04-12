import { Skeleton } from "./ui/skeleton";

const FormCardSkeleton = () => {
  return (
    <div className="flex gap-4">
      <Skeleton className="rounded-md bg-gray-200 border-2 border-primary-/20 h-[114px] w-full max-w-[364px]" />
      <Skeleton className="rounded-md bg-gray-200 border-2 border-primary-/20 h-[114px] w-full max-w-[364px]" />
      <Skeleton className="rounded-md bg-gray-200 border-2 border-primary-/20 h-[114px] w-full max-w-[364px]" />
      <Skeleton className="rounded-md bg-gray-200 border-2 border-primary-/20 h-[114px] w-full max-w-[364px]" />
    </div>
  );
};

export default FormCardSkeleton;