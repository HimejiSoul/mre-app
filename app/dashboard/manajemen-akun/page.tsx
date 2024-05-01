import { urbanist } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manajemen Akun',
};

export default function Page() {
  return (
    <div className="w-full rounded-2xl bg-[#D0E4FF] p-5">
      <div className="flex w-full flex-col justify-between">
        <h1 className={`${urbanist.className} text-2xl font-bold`}>
          Manajemen Akun
        </h1>
        <span className="font-sm font-medium text-[#6F90BA]">
          Tambah, Edit, dan Hapus Bidan Anda 😊
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <h1>Hello Guys</h1>
      </div>
    </div>
  );
}
