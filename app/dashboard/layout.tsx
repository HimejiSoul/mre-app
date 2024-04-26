import SideNav from '@/app/ui/dashboard/sidenav';
import SearchBar from '@/app/ui/dashboard/searchBar';
import Rightbar from '@/app/ui/dashboard/rightBar';
import { Toaster } from '@/components/ui/toaster';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="no-scrollbar relative flex grow flex-col overflow-y-scroll">
        <div className="px-8 py-5">{/* <SearchBar /> */}</div>
        <div className="w-full px-8">{children}</div>
      </div>
      <div className=" hidden w-fit xl:block xl:w-80">
        <Rightbar />
      </div>
      <Toaster />
    </div>
  );
}
