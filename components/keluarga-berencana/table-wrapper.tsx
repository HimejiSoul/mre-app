import Pagination from '@/components/pagination';
import KBTable from '@/components/keluarga-berencana/table';
import { fetchAllPatientFind, fetchPatientTable } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Keluarga Berencana',
};

export default async function TableWrapperKB({ query }: any) {
  const id_layanan = 0;

  let patientData = [];
  let error = null;

  try {
    const idPatient = await fetchAllPatientFind(query, id_layanan);
    patientData = await fetchPatientTable(
      JSON.stringify(idPatient),
      id_layanan,
    );
  } catch (err) {
    console.error('Failed to fetch data:', err);
    error = 'Failed to load data';
  }

  return (
    <div>
      {error || patientData.length === 0 ? (
        <div className="mt-5 text-center">No patient data available.</div>
      ) : (
        <>
          <KBTable dataPatient={patientData} />
        </>
      )}
    </div>
  );
}
