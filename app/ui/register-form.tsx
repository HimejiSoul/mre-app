'use client';

import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch}>
      <div className="flex w-[400px] flex-col rounded-2xl bg-white px-7 py-12 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
        <div className="mb-12 flex flex-col gap-0 text-center text-[#393939]">
          <p className="text-lg font-semibold">Selamat Datang</p>
          <p className="text-3xl font-bold">
            Masuk untuk Melihat Rekam Medis Anda
          </p>
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="email"></label>
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="email"
              type="email"
              name="email"
              placeholder="Username"
              required
            />
            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          <label htmlFor="password"></label>
          <div className="relative">
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              required
              minLength={6}
            />
            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
        <p className=" mt-2 text-right text-xs font-medium text-black text-opacity-30">
          Lupa Password?
        </p>
        <LoginButton />
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
        <p className="text-center text-sm font-semibold text-black text-opacity-30">
          Belum punya akun?{' '}
          <a
            href="/register"
            className="font-bold text-[#1479FF] hover:underline hover:underline-offset-2"
          >
            Buat Akun
          </a>
        </p>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full justify-center " aria-disabled={pending}>
      Masuk
    </Button>
  );
}
