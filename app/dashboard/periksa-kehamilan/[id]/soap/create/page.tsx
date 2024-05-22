import { SoapKehamilanForm } from '@/app/dashboard/periksa-kehamilan/[id]/soap/soap-form';
import { SectionTitle } from '@/app/ui/section-title';

export default async function Page({ params }: { params: { id: string } }) {
  // XXX: Remove if Zaidan already fix Schema
  const id_pasien = params.id;

  return (
    <main>
      <SectionTitle>SOAP Pasien Layanan Kehamilan</SectionTitle>
      <SoapKehamilanForm id={id_pasien} />
    </main>
  );
}
