import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className=" flex flex-col items-center space-y-3">
      <Skeleton className="h-[325px] w-[650px] bg-slate-300 mb-8 rounded-xl" />
      <div>
        <Skeleton className="h-4 w-[650px] mb-6  rounded-xl  bg-slate-300" />
        <Skeleton className="h-4 w-[600px] mb-6 rounded-xl  bg-slate-300" />
        <Skeleton className="h-4 w-[650px] mb-6 rounded-xl  bg-slate-300" />
        <Skeleton className="h-4 w-[600px] mb-6 rounded-xl  bg-slate-300" />
        <Skeleton className="h-4 w-[650px] mb-6 rounded-xl  bg-slate-300" />
        <Skeleton className="h-4 w-[600px]  rounded-xl  bg-slate-300" />
      </div>
    </div>
  );
}
