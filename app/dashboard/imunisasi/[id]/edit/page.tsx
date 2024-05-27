import { SectionTitle } from '@/components/section-title';
import { notFound } from 'next/navigation';
import { fromZodError } from 'zod-validation-error';
import { imunisasiFormSchema } from '@/lib/types/imunisasi/imunisasi-types';
import ImunisasiForm from '../../create/imunisasi-form';
import { fetchPatientById } from '@/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  // FIXME: Remove if Zaidan already fix Schema
  // const id_pasien = 22;
  // const patientData = jsonData;

  const id_pasien = params.id;
  const patientData = await fetchPatientById(id_pasien, 2);

  if (!patientData) {
    notFound();
  }

  // console.log('pasien', patientData);
  // Validation with Zod for every data before put into form (ithink this action need to run in action.ts too)
  const response = imunisasiFormSchema.safeParse(patientData);
  // console.log(response);
  if (!response.success) {
    console.error(fromZodError(response.error));
  }

  return (
    <main>
      <SectionTitle>Edit Pasien Layanan Keluarga Berencana</SectionTitle>
      <ImunisasiForm value={response.data} id={id_pasien} />
    </main>
  );
}
