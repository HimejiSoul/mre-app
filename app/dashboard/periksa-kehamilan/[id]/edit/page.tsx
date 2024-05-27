import { SectionTitle } from '@/components/section-title';
import { fetchKehamilanPatientById, fetchPatientById } from '@/lib/data';
import { notFound } from 'next/navigation';
import KehamilanForm from '../../create/kehamilan-form';
import jsonData from '@/app/dashboard/periksa-kehamilan/data.json';
import { kehamilanFormSchema } from '../../../../../lib/types/periksa-kehamilan-types';
import { fromZodError } from 'zod-validation-error';

export default async function Page({ params }: { params: { id: string } }) {
  // XXX: Remove if Zaidan already fix Schema
  const id_pasien = 22;
  const patientData = jsonData;
  // const id_pasien = params.id;
  // const patientData = await fetchKehamilanPatientById(id_pasien);

  if (!patientData) {
    notFound();
  }

  // TODO: Validation with Zod for every data before put into form (ithink this action need to run in action.ts too)
  const response = kehamilanFormSchema.safeParse(patientData?.data);
  if (!response.success) {
    console.error(fromZodError(response.error));
  }

  return (
    <main>
      <SectionTitle>Edit Pasien Layanan Keluarga Berencana</SectionTitle>
      <KehamilanForm value={response.data} id={id_pasien} />
    </main>
  );
}
