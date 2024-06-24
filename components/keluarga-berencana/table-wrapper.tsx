import Pagination from '@/components/keluarga-berencana/pagination';
import KBTable from '@/components/keluarga-berencana/table';
import { fetchAllPatientFind, fetchPatientTable } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Keluarga Berencana',
};

export default async function TableWrapperKB({ currentPage, query }: any) {
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
    <div>
      <KBTable dataPatient={patientData} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
