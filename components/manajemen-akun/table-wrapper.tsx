import { Metadata } from 'next';
import { fetchTableBidan } from '@/lib/data';
import Pagination from '@/components/pagination';
import ManajemenAkunTable from '@/components/manajemen-akun/table';

export const metadata: Metadata = {
  title: 'Manajemen Akun',
};

export default async function TableWrapperMA({ currentPage, query }: any) {
  const dataPerPage = 5;
  const startIndex = (currentPage - 1) * dataPerPage;
  const lastIndex = currentPage * dataPerPage;
  const bidan = await fetchTableBidan();
  const totalPages = Math.ceil(bidan.length / dataPerPage);
  const slicedIdBidan = bidan.slice(startIndex, lastIndex);
  return (
    <>
      <ManajemenAkunTable bidan={bidan} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
