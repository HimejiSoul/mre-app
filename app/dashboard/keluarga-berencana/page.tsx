import Pagination from '@/components/keluarga-berencana/pagination';
import Search from '@/components/search';
import KBTable from '@/components/keluarga-berencana/table';
import { urbanist } from '@/components/fonts';
import { InvoicesTableSkeleton } from '@/components/skeletons';
import { Suspense } from 'react';
import { fetchAllPatientFind, fetchPatientTable } from '@/lib/data';
import { Metadata } from 'next';
import { ButtonLink } from '@/components/Buttons';
import TableWrapperKB from '@/components/keluarga-berencana/table-wrapper';

export const metadata: Metadata = {
  title: 'Keluarga Berencana',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const id_layanan = 0;
  let totalPatient = 0;

  // Fetch the patient IDs
  const idPatient = await fetchAllPatientFind(query, id_layanan); // output: [52, 53]

  // Calculate pagination details
  totalPatient = idPatient.length;

  return (
    <div className="w-full rounded-2xl bg-[#D0E4FF] p-5">
      <div className="flex w-full flex-col justify-between">
        <h1 className={`${urbanist.className} text-2xl font-bold`}>
          Layanan Keluarga Berencana
        </h1>
        <span className="font-sm font-medium text-[#6F90BA]">
          Total {totalPatient} Pasien
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search Pasien KB..." />
        <ButtonLink
          href="/dashboard/keluarga-berencana/create"
          name="Tambah pasien"
        />
      </div>
      <Suspense key={query} fallback={<InvoicesTableSkeleton />}>
        <TableWrapperKB currentPage={currentPage} query={query} />
      </Suspense>
    </div>
  );
}
