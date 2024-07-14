import SideNav from '@/components/dashboard/side-nav';
import Rightbar from '@/components/dashboard/right-bar';
import { Toaster } from '@/components/ui/toaster';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <section className="min-w-[256px]">
        <SideNav />
      </section>
      <main className="no-scrollbar w-full overflow-y-scroll px-2 py-6">
        {children}
      </main>
      <section className=" hidden w-fit xl:block xl:w-80">
        <Rightbar />
      </section>
      <Toaster />
    </div>
  );
}
