'use client';

import { useSession } from 'next-auth/react';
import { Skeleton } from '@/components/ui/skeleton';
import { useEffect, useState } from 'react';
import { toast } from '@/components/ui/use-toast';

export default function Profile() {
  const { data: session, status } = useSession();
  const [hasWelcomed, setHasWelcomed] = useState(false);

  useEffect(() => {
    if (status === 'authenticated' && session?.user && !hasWelcomed) {
      try {
        toast({
          title: `Selamat Datang ${session.user.full_name}`,
        });
        setHasWelcomed(true);
      } catch (error) {
        toast({
          title: `Error`,
        });
      }
    }
  }, [status, session, hasWelcomed]);

  if (status === 'loading' || !session?.user) {
    return (
      <div className="flex flex-col items-end gap-2">
        <Skeleton className="h-4 w-[200px] bg-slate-200" />
        <Skeleton className="h-2 w-[150px] bg-slate-200" />
      </div>
    );
  }

  // const data: any = session.user;

  return (
    <div className="flex flex-col">
      <p className="font-bold capitalize">Hello, {session.user.full_name}</p>
      <p className="text-xs capitalize text-blue-600">{session.user.role}</p>
    </div>
  );
}
