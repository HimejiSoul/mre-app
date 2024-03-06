import KBForm from '@/app/ui/invoices/kb-form';
import { fetchCustomers } from '@/app/lib/data';
import { ChevronLeft, Link } from 'lucide-react';
import { urbanist } from '@/app/ui/fonts';

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <>
      <div
        className={`${urbanist.className} flex items-center py-3 text-xl font-bold`}
      >
        <a href="/dashboard/invoices">
          <ChevronLeft className="mr-3 h-5 w-5" />
        </a>
        <span>Tambah Pasien Layanan Keluarga Berencana</span>
      </div>
      <KBForm />
    </>
  );
}
