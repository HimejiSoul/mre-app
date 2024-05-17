import ImunisasiForm from '@/app/dashboard/imunisasi/create/imunisasi-form';
import { SectionTitle } from '@/app/ui/section-title';

export default async function Page() {
  return (
    <main>
      <SectionTitle>Tambah Pasien Imunisasi</SectionTitle>
      <ImunisasiForm />
    </main>
  );
}
