import KBForm from '@/app/ui/keluarga-berencana/kb-form';
import { fetchCustomers } from '@/app/lib/data';
import { ChevronLeft, Link } from 'lucide-react';
import { urbanist } from '@/app/ui/fonts';
import { SectionTitle } from '@/app/ui/section-title';

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <SectionTitle>Tambah Pasien Layanan Keluarga Berencana</SectionTitle>
      <KBForm />
    </main>
  );
}
