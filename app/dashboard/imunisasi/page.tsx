import Pagination from '@/app/ui/keluarga-berencana/pagination';
import Search from '@/app/ui/search';
import {
  fetchAllPatientFind,
  fetchPatientTableKehamilan,
} from '@/app/lib/data';
import { Metadata } from 'next';
import { ButtonLink } from '@/components/Buttons';
import { MainContainer } from '@/components/main-layout';
import { Heading } from '@/components/main-layout';
import ImunisasiTable from '@/components/imunisasi/table';

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
  const dataPerPage = 5;

  const startiIndex = (currentPage - 1) * dataPerPage;
  const lastIndex = currentPage * dataPerPage;
  const idPatient = await fetchAllPatientFind(query, 1); //output: [52, 53]

  const slicedIdPatient = idPatient.slice(startiIndex, lastIndex);
  const totalPages = Math.ceil(idPatient.length / dataPerPage);
  const patientData = await fetchPatientTableKehamilan(
    JSON.stringify(slicedIdPatient),
  );
  const totalPatient = idPatient.length;

  return (
    <MainContainer>
      <Heading title="Layanan Periksa Kehamilan" totalPatient={totalPatient} />
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Cari pasien Imunisasi..." />
        <ButtonLink href="/dashboard/imunisasi/create" name="Tambah pasien" />
      </div>
      <ImunisasiTable dataPatient={patientData} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </MainContainer>
  );
}
