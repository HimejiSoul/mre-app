import Profile from '@/components/profile-session';
import AuthProvider from '@/components/auth-provider';
import PickDate from './pick-date';
import PickReservasi from './pick-reservasi';
import { Suspense } from 'react';
import { Skeleton } from '../ui/skeleton';

export default async function Rightbar() {
  return (
    <div className="flex h-screen flex-col gap-6 bg-white p-4 pt-6">
      <div className="font-base flex h-10 flex-row justify-end gap-3 text-right text-sm">
        <AuthProvider>
          <Profile />
        </AuthProvider>
      </div>
      <div>
        <PickDate />
        <Suspense
          fallback={
            <div className="flex flex-col items-start gap-2">
              <Skeleton className="h-4 w-[200px] bg-slate-200" />
              <Skeleton className="h-2 w-[150px] bg-slate-200" />
            </div>
          }
        >
          <PickReservasi />
        </Suspense>
      </div>
    </div>
  );
}
