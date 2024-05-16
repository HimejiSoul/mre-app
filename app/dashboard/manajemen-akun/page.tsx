import { Metadata } from 'next';
import {
  fetchAllPatientFind,
  fetchPatientTableKehamilan,
} from '@/app/lib/data';

// component
import Search from '@/app/ui/search';
import { ButtonLink } from '@/components/Buttons';
import Pagination from '@/components/manajemen-akun/pagination';
import { Heading, MainContainer } from '@/components/main-layout';
import ManajemenAkunTable from '@/components/manajemen-akun/table';

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
  const dataPerPage = 5;

  const startiIndex = (currentPage - 1) * dataPerPage;
  const lastIndex = currentPage * dataPerPage;
  const idPatient = await fetchAllPatientFind(query, 1); //output: [52, 53]

  const slicedIdPatient = idPatient.slice(startiIndex, lastIndex);
  const totalPages = Math.ceil(idPatient.length / dataPerPage);
  console.log(slicedIdPatient);
  const patientData = await fetchPatientTableKehamilan(
    JSON.stringify(slicedIdPatient),
  );
  const totalPatient = idPatient.length;

  return (
    <MainContainer>
      <Heading title="Manajemen Akun Bidan" totalPatient={totalPatient} />
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Cari Bidan..." />
        <ButtonLink
          href="/dashboard/manajemen-akun/create"
          name="Tambah Bidan"
        />
      </div>
      <ManajemenAkunTable dataPatient={patientData} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </MainContainer>
  );
}
