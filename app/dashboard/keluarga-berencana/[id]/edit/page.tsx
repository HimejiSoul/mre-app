import { SectionTitle } from '@/app/ui/section-title';
import { fetchPatientById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import KBForm from '@/app/dashboard/keluarga-berencana/create/kb-form';
import { KBSchema } from '@/lib/types/keluarga-berencana/kb-schema';
import { fromZodError } from 'zod-validation-error';

export default async function Page({ params }: { params: { id: string } }) {
  const id_pasien = params.id;
  const patientData = await fetchPatientById(id_pasien, 0);

  if (!patientData) {
    notFound();
  }

  // console.log('pasien', patientData);
  // Validation with Zod for every data before put into form (ithink this action need to run in action.ts too)
  const response = KBSchema.safeParse(patientData);
  // console.log('response', response);
  if (!response.success) {
    console.error(fromZodError(response.error));
  }

  return (
    <main>
      <SectionTitle>Tambah Pasien Layanan Keluarga Berencana</SectionTitle>
      <KBForm value={response.data} id={id_pasien} />
    </main>
  );
}
