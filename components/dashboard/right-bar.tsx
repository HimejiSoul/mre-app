import { Profile } from '@/components/profile';
import AuthProvider from '@/components/auth-provider';
import PickDate from './pick-date';
import PickReservasi from './pick-reservasi';

export default async function Rightbar() {
  return (
    <div className="flex h-screen flex-col gap-6 bg-white p-4 pt-6">
      <div className="font-base flex h-10 flex-row justify-end gap-3 text-right text-sm">
        <AuthProvider>
          <Profile />
        </AuthProvider>
      </div>
      <div>
        <PickDate>
          <PickReservasi />
        </PickDate>
      </div>
    </div>
  );
}
