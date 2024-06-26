import { fetchReservasi } from '@/lib/data';

export default async function PickReservasi() {
  const layanan = ['Keluarga Berencana', 'Periksa Kehamilan', 'Imunisasi'];
  const date = new Date();
  const formatDateAPI = (date: Date | undefined) => {
    if (!date) return '';

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0'); // Get day of the month

    const formattedDate = `${year}-${month}-${day}`;
    // console.log(formattedDate);
    return formattedDate;
  };

  const datareservasi = await fetchReservasi(formatDateAPI(date));
  // console.log(selectedDate);

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
