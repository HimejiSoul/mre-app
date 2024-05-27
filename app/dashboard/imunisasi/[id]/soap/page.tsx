import { SoapImunisasiForm } from '@/app/dashboard/imunisasi/[id]/soap/soap-form';
import { SectionTitle } from '@/components/section-title';

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <main>
      <SectionTitle>SOAP Pasien Imunisasi</SectionTitle>
      <SoapImunisasiForm params={params} />
    </main>
  );
}
