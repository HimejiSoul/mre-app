import React from 'react';

export default function Register() {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-white">
      <img
        src="/loginPage/eclipse-3.svg"
        className="absolute left-0 top-0 h-[200px] w-[200px] "
      />
      <img
        src="/loginPage/rectangle-1.svg"
        className="absolute bottom-7 right-7 h-[200px] w-[200px]"
      />
      <img
        src="/loginPage/vector-1.svg"
        className="absolute right-0 top-0 z-0 h-[500px] w-[600px]"
      />
      <img
        src="/loginPage/vector-2.svg"
        className="absolute bottom-0 left-0 z-0 h-[500px] w-[600px]"
      />
      <div className="z-10 flex w-[400px] flex-col rounded-2xl bg-white px-7 py-12 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
        <form>
          <div className="font-urbanist mb-12 flex flex-col gap-0 text-center text-[#393939]">
            <p className="text-lg font-semibold">Selamat Datang</p>
            <p className="text-3xl font-bold">
              Buat akun Anda untuk melakukan reservasi
            </p>
          </div>
          <div className="font-inter mb-3 flex flex-col gap-4 text-sm text-black text-opacity-30">
            <div className="flex w-full appearance-none gap-2 rounded-lg border px-3 py-2 text-black shadow focus:outline-none">
              <img src="/loginPage/usernameFace.svg" />
              <input
                id="fullName"
                type="text"
                placeholder="Nama Panjang"
                className="w-full focus:outline-none"
              />
            </div>
            <div className="flex w-full appearance-none gap-2 rounded-lg border px-3 py-2 text-black shadow focus:outline-none">
              <img src="/loginPage/usernameFace.svg" />
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="w-full focus:outline-none"
              />
            </div>
            <div className="flex w-full appearance-none gap-2 rounded-lg border px-3 py-2 text-black shadow focus:outline-none">
              <img src="/registerPage/alternate_email.svg" />
              <input
                id="email"
                type="text"
                placeholder="Email"
                className="w-full focus:outline-none"
              />
            </div>
            <div className="flex w-full appearance-none gap-2 rounded-lg border px-3 py-2 text-black shadow focus:outline-none">
              <img src="/registerPage/call.svg" />
              <input
                id="hpNum"
                type="text"
                placeholder="Nomor Handphone"
                className="w-full focus:outline-none"
              />
            </div>
            <div className="flex w-full appearance-none gap-2 rounded-lg border px-3 py-2 text-black shadow">
              <img src="/loginPage/passKey.svg" />
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full focus:outline-none"
              />
              <img src="/loginPage/passEye.svg" />
            </div>
          </div>
          <input
            type="submit"
            value="Buat Akun"
            className="mb-12 mt-2 w-full rounded-md bg-[#1479FF] px-3 py-2 text-center text-sm text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-center text-sm font-semibold text-black text-opacity-30">
            Sudah punya akun?{' '}
            <a
              href="/login"
              className="font-bold text-[#1479FF] hover:underline hover:underline-offset-2"
            >
              Masuk
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
