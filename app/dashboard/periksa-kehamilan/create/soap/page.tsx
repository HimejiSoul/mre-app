import { SoapKehamilanForm } from '@/app/dashboard/periksa-kehamilan/create/soap/soap-form';
import { SectionTitle } from '@/app/ui/section-title';

export default async function Page() {
  return (
    <main>
      <SectionTitle>SOAP Pasien Layanan Kehamilan</SectionTitle>
      <SoapKehamilanForm />
    </main>
  );
}
