import NavLinks from '@/app/ui/dashboard/nav-links';
import { signOut } from '@/auth';
import { LogOut } from '../icons';
import AuthProvider from '@/components/AuthProvider';
import BidanNinaLogo from '@/app/ui/bidan-nina-logo';

export default function SideNav() {
  const LogOutIcon = LogOut;
  return (
    <div className="flex h-full flex-col p-4 pt-6">
      <BidanNinaLogo />
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
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
