import KehamilanForm from '@/app/ui/periksa-kehamilan/create-form';
import { SectionTitle } from '@/app/ui/section-title';

export default async function Page() {
  return (
    <main>
      <SectionTitle>Tambah Pasien Layanan Kehamilan</SectionTitle>
      <KehamilanForm />
    </main>
  );
}
