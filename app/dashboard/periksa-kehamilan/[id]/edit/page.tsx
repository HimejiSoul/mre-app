import { SectionTitle } from '@/components/section-title';
import { fetchPatientById } from '@/lib/data';
import { notFound } from 'next/navigation';
import KehamilanForm from '../../create/kehamilan-form';
import { kehamilanFormSchema } from '../../../../../lib/types/periksa-kehamilan-types';
import { fromZodError } from 'zod-validation-error';

export default async function Page({ params }: { params: { id: number } }) {
  const id_pasien = params.id;
  const patientData = await fetchPatientById(id_pasien, 1); // 1 for Kehamilan

  if (!patientData) {
    notFound();
  }

  // TODO: Validation with Zod for every data before put into form (ithink this action need to run in action.ts too)
  const response = kehamilanFormSchema.safeParse(patientData);
  if (!response.success) {
    console.error(fromZodError(response.error));
    notFound();
  }

  return (
    <main>
      <SectionTitle>Edit Pasien Layanan Periksa Kehamilan</SectionTitle>
      <KehamilanForm value={response.data} id={id_pasien} />
    </main>
  );
}
