import { Skeleton } from '@/components/ui/skeleton';
import { Loader2Icon } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex flex-col gap-8 rounded-2xl bg-[#D0E4FF] p-5">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-[30px] w-[380px] rounded-md" />
        <Skeleton className="h-[20px] w-[200px] rounded-md" />
      </div>
      <div className="flex gap-3">
        <Skeleton className="h-[40px] w-5/6 rounded-md" />
        <Skeleton className="h-[40px] w-1/6 rounded-md" />
      </div>
      <Skeleton className="h-[300px] rounded-md" />
    </div>
  );
}
