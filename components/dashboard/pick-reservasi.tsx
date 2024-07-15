import { fetchReservasi } from '@/lib/data';
import { cookies } from 'next/headers';

export default async function PickReservasi() {
  const layanan = ['Keluarga Berencana', 'Periksa Kehamilan', 'Imunisasi'];

  const cookieStore = cookies();
  const selectedDate = cookieStore.get('selectedDate');
  console.log(selectedDate);
  const datareservasi = await fetchReservasi(selectedDate?.value);
  console.log('tanggal', datareservasi);

  if (datareservasi.length === 0) {
    return <div>No reservations found for this date.</div>; // Handle case when there is no data
  } else if (datareservasi) {
    return (
      <div className="text-black">
        {datareservasi.map((res: any) => (
          <div key={res._id} className="my-2 flex flex-row justify-between">
            <div className="h-10">
              <div className="text-sm">{res.nama}</div>
              <div className="text-xs font-normal text-[#A5A5A5]">
                {layanan[res.id_layanan]}
              </div>
            </div>
            <div className="self-center text-xs text-[#A5A5A5]">
              {res.waktuTersedia}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
