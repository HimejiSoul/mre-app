import { AtSign, KeyRound, CircleUser, Phone } from 'lucide-react';
import { Button } from '@/components/button';
import { urbanist } from '@/components/fonts';
import Link from 'next/link';

export default function Register() {
  return (
    <form className="z-10 mx-8 max-w-[420px] rounded-2xl bg-white px-8 py-16 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
      <section className="_TITLE mb-16 text-center">
        <h2
          className={`${urbanist.className} text-lg font-semibold text-rme-blue-500`}
        >
          Selamat Datang
        </h2>
        <h1
          className={`${urbanist.className} text-3xl font-bold text-rme-black`}
        >
          BuatAkun Anda untuk Melakukan Reservasi
        </h1>
      </section>
      <section className="_FORM w-full space-y-2">
        <label htmlFor="fullname"></label>
        <div className="relative">
          <input
            className="peer block w-full rounded-md border border-gray-200 py-3 pl-10 text-sm outline-2 placeholder:text-rme-gray-300"
            id="fullname"
            type="text"
            name="fullname"
            placeholder="Nama Panjang"
            required
          />
          <CircleUser className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-rme-gray-300 peer-focus:text-gray-900" />
        </div>
        <label htmlFor="username"></label>
        <div className="relative">
          <input
            className="peer block w-full rounded-md border border-gray-200 py-3 pl-10 text-sm outline-2 placeholder:text-rme-gray-300"
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            required
          />
          <CircleUser className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-rme-gray-300 peer-focus:text-gray-900" />
        </div>
        <label htmlFor="email"></label>
        <div className="relative">
          <input
            className="peer block w-full rounded-md border border-gray-200 py-3 pl-10 text-sm outline-2 placeholder:text-rme-gray-300"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <AtSign className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-rme-gray-300 peer-focus:text-gray-900" />
        </div>
        <label htmlFor="notelp"></label>
        <div className="relative">
          <input
            className="peer block w-full rounded-md border border-gray-200 py-3 pl-10 text-sm outline-2 placeholder:text-rme-gray-300"
            id="notelp"
            type="number"
            name="notelp"
            placeholder="Nomor Handphonne"
            required
          />
          <Phone className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-rme-gray-300 peer-focus:text-gray-900" />
        </div>
        <label htmlFor="password"></label>
        <div className="relative">
          <input
            className="peer block w-full rounded-md border border-gray-200 py-3 pl-10 text-sm outline-2 placeholder:text-rme-gray-300"
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            required
            minLength={6}
          />
          <KeyRound className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-rme-gray-300 peer-focus:text-gray-900" />
        </div>
      </section>
      <Button className="mt-4 w-full">Buat Akun</Button>
      <section className="_CREATE_ACCOUNT mt-4 text-center text-sm font-semibold text-rme-gray-500">
        Sudah punya akun?{' '}
        <Link
          href="/login"
          className="font-bold text-rme-blue-500 hover:underline hover:underline-offset-2"
        >
          Masuk
        </Link>
      </section>
    </form>
  );
}
