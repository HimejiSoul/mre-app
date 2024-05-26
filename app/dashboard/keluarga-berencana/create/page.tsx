import KBForm from '@/app/dashboard/keluarga-berencana/create/kb-form';
import { SectionTitle } from '@/app/ui/section-title';

export default async function Page() {
  return (
    <main>
      <SectionTitle>Tambah Pasien Layanan Keluarga Berencana</SectionTitle>
      <KBForm />
    </main>
  );
}
