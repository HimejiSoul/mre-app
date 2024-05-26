import { SectionTitle } from '@/app/ui/section-title';
import { SoapKBForm } from '@/app/dashboard/keluarga-berencana/[id]/soap/soap-form';

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <main>
      <SectionTitle>SOAP KB</SectionTitle>
      <SoapKBForm params={params} />
    </main>
  );
}
