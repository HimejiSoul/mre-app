import { SoapKehamilanForm } from '@/app/dashboard/periksa-kehamilan/[id]/soap/soap-form';
import { SectionTitle } from '@/components/section-title';
import { notFound } from 'next/navigation';
import jsonData from '@/app/dashboard/periksa-kehamilan/data-soap.json';
import { fromZodError } from 'zod-validation-error';
import { soapKehamilanFormSchema } from '@/lib/types/soap-kehamilan-types';

export default async function Page({ params }: { params: { id: number } }) {
  // XXX: Remove if Zaidan already fix Schema
  const id_pasien = params.id;
  const patientData = jsonData;
  // const id_pasien = params.id;
  // const patientData = await fetchKehamilanPatientById(id_pasien);

  if (!id_pasien) {
    notFound();
  }

  // TODO: Validation with Zod for every data before put into form (ithink this action need to run in action.ts too)
  const response = soapKehamilanFormSchema.safeParse(patientData?.data);
  if (!response.success) {
    console.error(fromZodError(response.error));
    notFound();
  }

  return (
    <main>
      <SectionTitle>Lihat SOAP Pasien Layanan Kehamilan</SectionTitle>
      <SoapKehamilanForm value={response.data} id={id_pasien} />
    </main>
  );
}
