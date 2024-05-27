import KBForm from '@/app/dashboard/keluarga-berencana/create/kb-form';
import { SectionTitle } from '@/components/section-title';

export default async function Page() {
  return (
    <main>
      <SectionTitle>Tambah Pasien Layanan Keluarga Berencana</SectionTitle>
      <KBForm />
    </main>
  );
}
