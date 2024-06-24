import Pagination from '@/components/keluarga-berencana/pagination';
import Search from '@/components/search';
import KBTable from '@/components/keluarga-berencana/table';
import { urbanist } from '@/components/fonts';
import { InvoicesTableSkeleton } from '@/components/skeletons';
import { Suspense } from 'react';
import { fetchAllPatientFind, fetchPatientTable } from '@/lib/data';
import { Metadata } from 'next';
import { ButtonLink } from '@/components/Buttons';

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
  const dataPerPage = 5;
  const startIndex = (currentPage - 1) * dataPerPage;
  const lastIndex = currentPage * dataPerPage;
  const id_layanan = 0;

  let patientData = [];
  let totalPatient = 0;
  let totalPages = 1;
  let error = null;

  try {
    // Fetch the patient IDs
    const idPatient = await fetchAllPatientFind(query, id_layanan); // output: [52, 53]

    // Calculate pagination details
    totalPatient = idPatient.length;
    totalPages = Math.ceil(totalPatient / dataPerPage);
    const slicedIdPatient = idPatient.slice(startIndex, lastIndex);

    // Fetch the patient data concurrently
    if (slicedIdPatient.length > 0) {
      patientData = await fetchPatientTable(
        JSON.stringify(slicedIdPatient),
        id_layanan,
      );
    } else {
      patientData = [];
    }
  } catch (err) {
    console.error('Failed to fetch data:', err);
    error = 'Failed to load data';
  }

  return (
    <div className="w-full rounded-2xl bg-[#D0E4FF] p-5">
      <div className="flex w-full flex-col justify-between">
        <h1 className={`${urbanist.className} text-2xl font-bold`}>
          Layanan Keluarga Berencana
        </h1>
        {error ? (
          <span className="font-sm font-medium text-[#6F90BA]">{error}</span>
        ) : (
          <span className="font-sm font-medium text-[#6F90BA]">
            Total {totalPatient} Pasien
          </span>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search Pasien KB..." />
        <ButtonLink
          href="/dashboard/keluarga-berencana/create"
          name="Tambah pasien"
        />
      </div>
      {!error && (
        <Suspense fallback={<InvoicesTableSkeleton />}>
          <KBTable dataPatient={patientData} />
          <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        </Suspense>
      )}
    </div>
  );
}
