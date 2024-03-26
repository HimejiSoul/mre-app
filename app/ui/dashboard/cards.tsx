import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchPatientData } from '@/app/lib/data';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const jumlah_pasienKB = await fetchPatientData('0');
  const jumlah_pasienHamil = await fetchPatientData('1');
  const jumlah_pasienImun = await fetchPatientData('2');
  const jumlah_pasienIbu = await fetchPatientData('3');
  const jumlah_pasienAnak = await fetchPatientData('4');
  return (
    <>
      <div className="col-span-2">
        <Card
          title="Keluarga Berencana"
          value={jumlah_pasienKB}
          type="collected"
        />
      </div>
      <div className="col-span-2">
        <Card
          title="Periksa Kehamilan"
          value={jumlah_pasienHamil}
          type="pending"
        />
      </div>

      <div className="col-span-2">
        <Card
          title="Layanan Imunisasi"
          value={jumlah_pasienImun}
          type="invoices"
        />
      </div>
      <div className="col-span-3">
        <Card title="Layanan Ibu" value={jumlah_pasienIbu} type="customers" />
      </div>
      <div className="col-span-3">
        <Card title="Layanan Anak" value={jumlah_pasienAnak} type="customers" />
      </div>
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm ">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
