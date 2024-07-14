'use client';

import { AtSign, KeyRound, AlertCircle, Loader2Icon } from 'lucide-react';
import { Button } from '@/components/button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/lib/actions';
import { urbanist } from '@/components/fonts';
import { useState } from 'react';

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const togglePasswordVisibility = () => {
    setShowPassword((prev): any => !prev);
  };

  return (
    <form
      action={dispatch}
      className="z-10 mx-8 max-w-[420px] rounded-2xl bg-white px-4 py-16 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] sm:px-8"
    >
      <section className="_TITLE mb-16 text-center">
        <h2
          className={`${urbanist.className} text-lg font-semibold text-rme-blue-500`}
        >
          Selamat Datang
        </h2>
        <h1
          className={`${urbanist.className} text-2xl font-bold text-rme-black sm:text-3xl`}
        >
          Masuk untuk Melakukan Rekam Medis
        </h1>
      </section>
      <section className="_FORM w-full space-y-2">
        <label htmlFor="username"></label>
        <div className="relative">
          <input
            className="peer block w-full rounded-md border border-gray-200 py-3 pl-10 text-sm outline-2 placeholder:text-rme-gray-300"
            id="username"
            name="username"
            placeholder="Username"
            required
          />
          <AtSign className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-rme-gray-300 peer-focus:text-gray-900" />
        </div>
        <label htmlFor="password"></label>
        <div className="relative">
          <input
            className="peer block w-full rounded-md border border-gray-200 py-3 pl-10 text-sm outline-2 placeholder:text-rme-gray-300"
            id="password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            required
            minLength={6}
            autoComplete="current-password"
          />
          <KeyRound className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-rme-gray-300 peer-focus:text-gray-900" />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-3 rounded-e-md"
          >
            <svg
              className="size-3.5 flex-shrink-0 text-gray-400 dark:text-neutral-600"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {showPassword ? (
                <>
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </>
              ) : (
                <>
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                  <line x1="2" x2="22" y1="2" y2="22"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </section>
      <LoginButton />
      {errorMessage && (
        <section
          className="_ERROR_MESSAGE animate-fade-in-top mt-2 flex w-full text-sm text-red-500 duration-200"
          aria-live="polite"
          aria-atomic="true"
        >
          <AlertCircle className="mr-2 h-5 w-5" />
          <p>{errorMessage}</p>
        </section>
      )}
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      {pending ? (
        <>
          <Loader2Icon size={20} className="mr-2 animate-spin" /> Loading...
        </>
      ) : (
        'Masuk'
      )}
    </Button>
  );
}
