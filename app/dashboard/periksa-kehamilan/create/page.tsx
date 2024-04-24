import KehamilanForm from '@/app/dashboard/periksa-kehamilan/create/kehamilan-form';
import { SectionTitle } from '@/app/ui/section-title';

export default async function Page() {
  return (
    <main>
      <SectionTitle>Tambah Pasien Layanan Kehamilan</SectionTitle>
      <KehamilanForm />
    </main>
  );
}
