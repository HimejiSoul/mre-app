import { urbanist } from '@/components/fonts';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/bidan-nina-logo.png';

export default function BidanNinaLogo() {
  return (
    <Link
      className="flex h-10 items-center justify-start rounded-xl border border-black/10 p-4 md:h-20"
      href="/"
    >
      <div
        className={`${urbanist.className} flex w-full flex-row items-center gap-2 align-middle font-semibold text-[#56C1EB]`}
      >
        <Image alt="Logo Bidan Nina" src={Logo} width={32} height={32} />
        <p className="text-[24px]">Ninasys</p>
      </div>
    </Link>
  );
}
