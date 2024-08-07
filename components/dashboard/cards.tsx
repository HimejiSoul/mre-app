import { urbanist } from '@/components/fonts';
import { fetchPatientData } from '@/lib/data';
import * as Icon from '@/components/icons';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const iconMap = {
  kb: Icon.KBFilled,
  kehamilan: Icon.KehamilanFilled,
  imunisasi: Icon.ImunisasiFilled,
  ibu: Icon.IbuFilled,
  anak: Icon.AnakFilled,
};

export default async function CardWrapper() {
  let pasienKB, pasienHamil, pasienImun, pasienIbu, pasienAnak;

  try {
    [pasienKB, pasienHamil, pasienImun, pasienIbu, pasienAnak] =
      await Promise.all([
        fetchPatientData('0'),
        fetchPatientData('1'),
        fetchPatientData('2'),
        fetchPatientData('3'),
        fetchPatientData('4'),
      ]);
  } catch (error) {
    console.error('Error fetching patient data:', error);
    pasienKB = { jumlah: 0, lastUpdate: null };
    pasienHamil = { jumlah: 0, lastUpdate: null };
    pasienImun = { jumlah: 0, lastUpdate: null };
    pasienIbu = { jumlah: 0, lastUpdate: null };
    pasienAnak = { jumlah: 0, lastUpdate: null };
  }

  return (
    <>
      <div className="col-span-3 lg:col-span-2">
        <Card
          title="Keluarga Berencana"
          value={pasienKB.jumlah}
          layanan="kb"
          detail={convertTimestamp(pasienKB.lastUpdate)}
        />
      </div>
      <div className="col-span-3 lg:col-span-2">
        <Card
          title="Periksa Kehamilan"
          value={pasienHamil.jumlah}
          layanan="kehamilan"
          detail={convertTimestamp(pasienHamil.lastUpdate)}
        />
      </div>
      <div className="col-span-3 lg:col-span-2">
        <Card
          title="Layanan Imunisasi"
          value={pasienImun.jumlah}
          layanan="imunisasi"
          detail={convertTimestamp(pasienImun.lastUpdate)}
        />
      </div>
      <div className="col-span-3">
        <Card
          title="Layanan Ibu"
          value={pasienIbu.jumlah}
          layanan="ibu"
          className="cursor-not-allowed opacity-50"
        />
      </div>
      <div className="col-span-3">
        <Card
          title="Layanan Anak"
          value={pasienAnak.jumlah}
          layanan="anak"
          className="cursor-not-allowed opacity-50"
        />
      </div>
    </>
  );
}

export function Card({
  title,
  value,
  layanan,
  className,
  detail,
  ...props
}: {
  title: string;
  value: number | string;
  layanan: 'kb' | 'kehamilan' | 'imunisasi' | 'ibu' | 'anak';
  className?: string;
  detail?: string;
}) {
  const Icon = iconMap[layanan];

  return (
    <div
      className={cn('h-full rounded-xl bg-gray-50 p-2 shadow-sm', className)}
      {...props}
    >
      <div className="flex flex-col gap-3 p-4">
        <div className="w-fit rounded-xl bg-[#D0E4FF] p-2">
          {Icon ? <Icon className="h-8 w-8 text-rme-blue-500" /> : null}
        </div>
        <h3 className="font-medium text-rme-gray-500">{title}</h3>
        <h1
          className={`${urbanist.className} truncate rounded-xl text-4xl font-bold`}
        >
          {value}
        </h1>
        <Separator />
        <p className="text-sm text-rme-gray-300">
          {detail ? `Terakhir diubah ${detail} WIB` : 'Tidak ada data layanan'}
        </p>
      </div>
    </div>
  );
}

function convertTimestamp(timestamp: any) {
  // Create a Date object
  const date = new Date(timestamp);

  // Array of month names in Indonesian
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  // Get date components
  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');

  // Format the date
  return `${day} ${month} ${year}, ${hours}:${minutes}`;
}
