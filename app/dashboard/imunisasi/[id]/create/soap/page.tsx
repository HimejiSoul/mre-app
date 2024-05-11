import { SoapKehamilanForm } from '@/app/dashboard/periksa-kehamilan/[id]/create/soap/soap-form';
import { SectionTitle } from '@/app/ui/section-title';

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <main>
      <SectionTitle>SOAP Pasien Layanan Kehamilan</SectionTitle>
      <SoapKehamilanForm params={params} />
    </main>
  );
}
