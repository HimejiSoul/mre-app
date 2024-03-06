import Pagination from '@/app/ui/periksa-kehamilan/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/periksa-kehamilan/table';
import { CreateKehamilan } from '@/app/ui/periksa-kehamilan/buttons';
import { urbanist } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kehamilan',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);
  return (
    <div className="w-full rounded-2xl bg-[#D0E4FF] p-5">
      <div className="flex w-full flex-col justify-between">
        <h1 className={`${urbanist.className} text-2xl font-bold`}>
          Layanan Periksa Kehamilan
        </h1>
        <span className="font-sm font-medium text-[#6F90BA]">
          Total 111 Pasien
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateKehamilan />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
