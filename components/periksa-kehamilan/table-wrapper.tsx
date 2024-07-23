import Pagination from '@/components/pagination';
import { fetchAllPatientFind, fetchPatientTable } from '@/lib/data';
import { Metadata } from 'next';
import KehamilanTable from '@/components/periksa-kehamilan/table';

export const metadata: Metadata = {
  title: 'Periksa Kehamilan',
};

export default async function TableWrapperPK({ query }: any) {
  const id_layanan = 1;

  let patientData = [];
  let error = null;

  try {
    // Fetch the patient IDs
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
          <KehamilanTable dataPatient={patientData} />
        </>
      )}
    </div>
  );
}
