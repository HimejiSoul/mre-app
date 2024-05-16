import { SectionTitle } from '@/app/ui/section-title';
import { notFound } from 'next/navigation';
import jsonData from '@/app/dashboard/imunisasi/data.json';
import { fromZodError } from 'zod-validation-error';
import { imunisasiFormSchema } from '@/lib/types/imunisasi/imunisasi-types';
import ImunisasiForm from '../../create/imunisasi-form';

export default async function Page({ params }: { params: { id: string } }) {
  // FIXME: Remove if Zaidan already fix Schema
  const id_pasien = 22;
  const patientData = jsonData;

  // const id_pasien = params.id;
  // const patientData = await fetchKehamilanPatientById(id_pasien);

  if (!patientData) {
    notFound();
  }

  // Validation with Zod for every data before put into form (ithink this action need to run in action.ts too)
  const response = imunisasiFormSchema.safeParse(patientData?.data);
  console.log(response);
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
