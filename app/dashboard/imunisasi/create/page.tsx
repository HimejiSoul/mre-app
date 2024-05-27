import ImunisasiForm from '@/app/dashboard/imunisasi/create/imunisasi-form';
import { SectionTitle } from '@/components/section-title';

export default async function Page() {
  return (
    <main>
      <SectionTitle>Tambah Pasien Imunisasi</SectionTitle>
      <ImunisasiForm />
    </main>
  );
}
