import { useSession } from 'next-auth/react';
import { Skeleton } from '@/components/ui/skeleton';

export function Profile() {
  // FIXME: Fix this ts error
  const session: any = useSession();
  if (!session) {
    alert('Data error');
  }
  const data = session?.data?.user;

  return (
    <div className="flex flex-col">
      {data ? (
        <>
          <p className="font-bold capitalize">Hello, {data?.full_name}</p>
          <p className="text-xs capitalize text-blue-600">{data?.role}</p>
        </>
      ) : (
        <div className="flex flex-col items-end gap-2">
          <Skeleton className="h-4 w-[200px] bg-slate-200" />
          <Skeleton className="h-2 w-[150px] bg-slate-200" />
        </div>
      )}
    </div>
  );
}
