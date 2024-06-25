import Pagination from '@/components/keluarga-berencana/pagination';
import { fetchAllPatientFind, fetchPatientTable } from '@/lib/data';
import { Metadata } from 'next';
import ImunisasiTable from '@/components/imunisasi/table';

export const metadata: Metadata = {
  title: 'Imunisasi',
};

export default async function TableWrapperImunisasi({
  currentPage,
  query,
}: any) {
  const dataPerPage = 5;
  const startIndex = (currentPage - 1) * dataPerPage;
  const lastIndex = currentPage * dataPerPage;
  const id_layanan = 2;

  let patientData = [];
  let totalPatient = 0;
  let totalPages = 2;
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
      <ImunisasiTable dataPatient={patientData} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}