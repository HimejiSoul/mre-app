import NavLinks from '@/components/dashboard/nav-links';
import { signOut } from '@/auth';
import { LogOut } from '../icons';
import AuthProvider from '@/components/auth-provider';
import BidanNinaLogo from '@/components/bidan-nina-logo';

export default function SideNav() {
  const LogOutIcon = LogOut;
  return (
    <div className="flex h-full flex-col gap-10 p-4 pt-6">
      <BidanNinaLogo />
      <div className="flex grow flex-col justify-between space-x-0 space-y-2">
        <AuthProvider>
          <NavLinks />
        </AuthProvider>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium transition duration-200 ease-out hover:bg-[#F9E0DF] hover:text-[#DF645F] md:flex-none md:justify-start md:p-2 md:px-3">
            <LogOutIcon className="h-8 w-6 text-[#DF645F]" />
            <div className="hidden text-[#DF645F] md:block">Log Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
