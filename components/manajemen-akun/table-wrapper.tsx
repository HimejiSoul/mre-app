import Pagination from '@/components/pagination';
import ManajemenAkunTable from '@/components/manajemen-akun/table';
import { fetchTableBidan } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manajemen Akun',
};

export default async function TableWrapperMA({ currentPage, query }: any) {
  let bidanData = [];

  try {
    // Fetch the bidan data
    bidanData = await fetchTableBidan(query);

    // Calculate pagination details
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
        </>
      )}
    </div>
  );
}
