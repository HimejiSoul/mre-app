import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <>
      <Skeleton className="my-3 h-[20px] w-[450px] rounded-md" />
      <div className="flex flex-col gap-8 rounded-xl bg-[#D0E4FF] px-4 py-6">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-[20px] w-[200px] rounded-md" />
          <Skeleton className="h-[20px] w-[100px] rounded-md" />
        </div>
        <Skeleton className="h-[600px] rounded-md" />
      </div>
    </>
  );
}
