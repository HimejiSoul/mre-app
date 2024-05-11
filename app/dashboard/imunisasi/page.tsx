import Pagination from '@/app/ui/keluarga-berencana/pagination';
import Search from '@/app/ui/search';
import KBTable from '@/app/ui/keluarga-berencana/table';
import { urbanist } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import {
  fetchAllPatientFind,
  fetchAllPatientTable,
  fetchPatientTable,
} from '@/app/lib/data';
import { Metadata } from 'next';
import { ButtonLink } from '@/components/Buttons';

export const metadata: Metadata = {
  title: 'Kehamilan',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    allPatientKB?: any;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  // console.log(query);
  // console.log(currentPage);
  const start_index = (currentPage - 1) * 5;
  const last_index = currentPage * 5;
  const allPatientKBArray = await fetchAllPatientFind(query, 0);
  const datapasien = allPatientKBArray.slice(start_index, last_index);
  const totalPages = Math.ceil(allPatientKBArray.length / 5);
  const allPatientKB = await fetchPatientTable(JSON.stringify(datapasien), 0);
  console.log(allPatientKBArray);
  // console.log(allPatientKB);
  // console.log(allPatientKB);
  // console.log(start_index);
  // console.log(last_index);
  // console.log(datapasien);
  return (
    <div className="w-full rounded-2xl bg-[#D0E4FF] p-5">
      <div className="flex w-full flex-col justify-between">
        <h1 className={`${urbanist.className} text-2xl font-bold`}>
          Layanan Imunisasi
        </h1>
        <span className="font-sm font-medium text-[#6F90BA]">
          Total {allPatientKBArray.length} Pasien
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <ButtonLink href="/dashboard/imunisasi/create" name="Tambah pasien" />
      </div>
      <Suspense key={query} fallback={<InvoicesTableSkeleton />}>
        <KBTable
          // query={query}
          //  currentPage={currentPage}
          dataPatient={allPatientKB}
        />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
