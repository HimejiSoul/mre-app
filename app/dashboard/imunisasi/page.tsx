import Search from '@/components/search';
import { fetchAllPatientFind } from '@/lib/data';
import { Metadata } from 'next';
import { ButtonLink } from '@/components/Buttons';
import { urbanist } from '@/components/fonts';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/components/skeletons';
import TableWrapperImunisasi from '@/components/imunisasi/table-wrapper';

export const metadata: Metadata = {
  title: 'Imunisasi',
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
  const id_layanan = 2;
  let totalPatient = 0;

  // Fetch the patient IDs
  const idPatient = await fetchAllPatientFind(query, id_layanan); // output: [52, 53]

  // Calculate pagination details
  totalPatient = idPatient.length;

  return (
    <div className="w-full rounded-2xl bg-[#D0E4FF] p-5">
      <div className="flex w-full flex-col justify-between">
        <h1 className={`${urbanist.className} text-2xl font-bold`}>
          Layanan Imunisasi
        </h1>
        <span className="font-sm font-medium text-[#6F90BA]">
          Total {totalPatient} Pasien
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search Pasien Imunisasi..." />
        <ButtonLink href="/dashboard/imunisasi/create" name="Tambah pasien" />
      </div>
      <Suspense key={query} fallback={<InvoicesTableSkeleton />}>
        <TableWrapperImunisasi currentPage={currentPage} query={query} />
      </Suspense>
    </div>
  );
}
