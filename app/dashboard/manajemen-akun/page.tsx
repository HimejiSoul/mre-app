import { Metadata } from 'next';
import { fetchTableBidan } from '@/lib/data';
import Search from '@/components/search';
import { ButtonLink } from '@/components/Buttons';
import { Heading, MainContainer } from '@/components/main-layout';
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
  };
}) {
  const query = searchParams?.query || '';
  let totalBidan = 0;
  try {
    const bidan = await fetchTableBidan('');
    totalBidan = bidan.length;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    error = 'Failed to load data';
  }

  return (
    <MainContainer>
      <Heading title="Manajemen Akun Bidan" totalPatient={totalBidan} />
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Cari Bidan..." />
        <ButtonLink
          href="/dashboard/manajemen-akun/create"
          name="Tambah Bidan"
        />
      </div>
      <Suspense key={query} fallback={<InvoicesTableSkeleton />}>
        <TableWrapperMA query={query} />
      </Suspense>
    </MainContainer>
  );
}
