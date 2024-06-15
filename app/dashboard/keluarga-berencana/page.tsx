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

  try {
    // Fetch the patient IDs
    const idPatient = await fetchAllPatientFind(query, 0); // output: [52, 53]

    // Calculate pagination details
    const totalPatient = idPatient.length;
    const totalPages = Math.ceil(totalPatient / dataPerPage);
    const slicedIdPatient = idPatient.slice(startIndex, lastIndex);

    // Fetch the patient data concurrently
    let patientData = [];

    if (slicedIdPatient.length > 0) {
      patientData = await fetchPatientTable(JSON.stringify(slicedIdPatient), 0);
    } else {
      patientData = [];
    }

    // console.log('Total Pasien', totalPatient);
    // console.log('Data Pasien', patientData);

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
          <KBTable dataPatient={patientData} />
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return (
      <div className="w-full rounded-2xl bg-[#D0E4FF] p-5">
        <div className="flex w-full flex-col justify-between">
          <h1 className={`${urbanist.className} text-2xl font-bold`}>
            Layanan Keluarga Berencana
          </h1>
          <span className="font-sm font-medium text-[#6F90BA]">
            Failed to load data
          </span>
        </div>
      </div>
    );
  }
}
