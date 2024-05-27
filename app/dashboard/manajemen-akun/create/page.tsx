import ManajemenAkunForm from '@/app/dashboard/manajemen-akun/create/manajemen-akun-form';
import { SectionTitle } from '@/components/section-title';

export default async function Page() {
  return (
    <main>
      <SectionTitle>Tambah Pasien Layanan Kehamilan</SectionTitle>
      <ManajemenAkunForm />
    </main>
  );
}
