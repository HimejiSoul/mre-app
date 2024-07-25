import { fetchReservasi } from '@/lib/data';
import { cookies } from 'next/headers';
import { ScrollArea } from '../ui/scroll-area';

export default async function PickReservasi() {
  const layanan = ['Keluarga Berencana', 'Periksa Kehamilan', 'Imunisasi'];

  const cookieStore = cookies();
  const selectedDate = cookieStore.get('selectedDate');
  // console.log(selectedDate);
  let datareservasi = [];
  datareservasi = await fetchReservasi(selectedDate?.value);
  // console.log('tanggal', datareservasi);

  if (!datareservasi || datareservasi.length === 0) {
    return <p className="py-2 text-sm">Tidak ada jadwal reservasi hari ini.</p>;
  }

  return (
    <ScrollArea className="h-[400px] pr-3">
      {datareservasi.map((res: any) => (
        <>
          <div key={res._id} className="flex items-center justify-between py-2">
            <div>
              <h3 className="text-sm">{res.nama}</h3>
              <p className="text-xs font-normal text-[#A5A5A5]">
                {layanan[res.id_layanan]}
              </p>
            </div>
            <div>
              <p className="text-xs text-[#A5A5A5]">{res.waktuTersedia}</p>
            </div>
          </div>
        </>
      ))}
    </ScrollArea>
  );
}
