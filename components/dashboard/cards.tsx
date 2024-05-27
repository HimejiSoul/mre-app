import { urbanist } from '@/components/fonts';
import { fetchPatientData } from '@/lib/data';
import * as Icon from '@/components/icons';
import { Separator } from '@/components/ui/separator';

const iconMap = {
  kb: Icon.KBFilled,
  kehamilan: Icon.KehamilanFilled,
  imunisasi: Icon.ImunisasiFilled,
  ibu: Icon.IbuFilled,
  anak: Icon.AnakFilled,
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
        <Card title="Keluarga Berencana" value={jumlah_pasienKB} layanan="kb" />
      </div>
      <div className="col-span-2">
        <Card
          title="Periksa Kehamilan"
          value={jumlah_pasienHamil}
          layanan="kehamilan"
        />
      </div>
      <div className="col-span-2">
        <Card
          title="Layanan Imunisasi"
          value={jumlah_pasienImun}
          layanan="imunisasi"
        />
      </div>
      <div className="col-span-3">
        <Card title="Layanan Ibu" value={jumlah_pasienIbu} layanan="ibu" />
      </div>
      <div className="col-span-3">
        <Card title="Layanan Anak" value={jumlah_pasienAnak} layanan="anak" />
      </div>
    </>
  );
}

export function Card({
  title,
  value,
  layanan,
}: {
  title: string;
  value: number | string;
  layanan: 'kb' | 'kehamilan' | 'imunisasi' | 'ibu' | 'anak';
}) {
  const Icon = iconMap[layanan];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm ">
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
          Terakhir diubah 3 Januari 2023, 19:23
        </p>
      </div>
    </div>
  );
}
