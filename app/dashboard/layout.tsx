import SideNav from '@/components/dashboard/side-nav';
import Rightbar from '@/components/dashboard/right-bar';
import { Toaster } from '@/components/ui/toaster';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="no-scrollbar relative flex grow flex-col overflow-y-scroll">
        {/* <div className="px-8 py-5"><SearchBar /></div> */}
        <div className="w-full px-8 py-6">{children}</div>
      </div>
      <div className=" hidden w-fit xl:block xl:w-80">
        <Rightbar />
      </div>
      <Toaster />
    </div>
  );
}
