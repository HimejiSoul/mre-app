import { Metadata } from 'next';
import { fetchTableBidan } from '@/lib/data';

// component
import Search from '@/components/search';
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
  // const currentPage = Number(searchParams?.page) || 1;
  const dataPerPage = 5;

  // const startiIndex = (currentPage - 1) * dataPerPage;
  // const lastIndex = currentPage * dataPerPage;
  // const idPatient = await fetchAllPatientFind(query, 1); //output: [52, 53]

  // const slicedIdPatient = idPatient.slice(startiIndex, lastIndex);
  // console.log(slicedIdPatient);
  const bidan = await fetchTableBidan();
  const totalPages = Math.ceil(bidan.length / dataPerPage);

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
      <ManajemenAkunTable bidan={bidan} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </MainContainer>
  );
}
