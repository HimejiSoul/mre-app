import SideNav from '@/app/ui/dashboard/sidenav';
import SearchBar from '@/app/ui/dashboard/searchBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex flex-col  md:overflow-y-auto">
        <div className="flex-grow px-8 py-5">
          <SearchBar />
        </div>
        <div className="flex-grow px-8 py-5">{children}</div>
      </div>
      <div>calendar</div>
    </div>
  );
}
