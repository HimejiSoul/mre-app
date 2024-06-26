import Pagination from '@/components/pagination';
import ManajemenAkunTable from '@/components/manajemen-akun/table';
import { fetchTableBidan } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manajemen Akun',
};

export default async function TableWrapperMA({ currentPage, query }: any) {
  const dataPerPage = 5;
  const startIndex = (currentPage - 1) * dataPerPage;
  const lastIndex = currentPage * dataPerPage;

  let bidanData = [];
  let totalPages = 1;

  try {
    // Fetch the bidan data
    const bidan = await fetchTableBidan(query);

    // Calculate pagination details
    const totalBidan = bidan.length;
    totalPages = Math.ceil(totalBidan / dataPerPage);
    const slicedBidan = bidan.slice(startIndex, lastIndex);

    // Set the bidan data
    bidanData = slicedBidan;
  } catch (err) {
    console.error('Failed to fetch data:', err);
  }

  return (
    <div>
      {bidanData.length === 0 ? (
        <div className="mt-5 text-center">No bidan data available.</div>
      ) : (
        <>
          <ManajemenAkunTable bidan={bidanData} />
          <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        </>
      )}
    </div>
  );
}
