import { SoapKehamilanForm } from '@/app/dashboard/periksa-kehamilan/[id]/soap/soap-form';
import { SectionTitle } from '@/components/section-title';

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <main>
      <SectionTitle>SOAP Pasien Layanan Kehamilan</SectionTitle>
      <SoapKehamilanForm id={params.id} />
    </main>
  );
}
