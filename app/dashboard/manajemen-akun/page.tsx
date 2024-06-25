import { Metadata } from 'next';
import { fetchTableBidan } from '@/lib/data';
import Search from '@/components/search';
import { ButtonLink } from '@/components/Buttons';
import Pagination from '@/components/pagination';
import { Heading, MainContainer } from '@/components/main-layout';
import ManajemenAkunTable from '@/components/manajemen-akun/table';
import TableWrapperMA from '@/components/manajemen-akun/table-wrapper';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/components/skeletons';

export const metadata: Metadata = {
  title: 'Manajemen Akun',
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

  const bidan = await fetchTableBidan();

  return (
    <MainContainer>
      <Heading title="Manajemen Akun Bidan" totalPatient={bidan.length} />
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Cari Bidan..." />
        <ButtonLink
          href="/dashboard/manajemen-akun/create"
          name="Tambah Bidan"
        />
      </div>
      <Suspense key={query} fallback={<InvoicesTableSkeleton />}>
        <TableWrapperMA currentPage={currentPage} query={query} />
      </Suspense>
    </MainContainer>
  );
}
