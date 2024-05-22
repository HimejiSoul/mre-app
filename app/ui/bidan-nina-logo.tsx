import { urbanist } from '@/app/ui/fonts';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/bidan-nina-logo.png';

export default function BidanNinaLogo() {
  return (
    <Link
      className="mb-10 flex h-10 items-center justify-start rounded-lg border border-black/10 p-4 shadow-md transition duration-100 ease-in hover:translate-y-1 hover:scale-[0.99] hover:shadow-sm md:h-20"
      href="/"
    >
      <div
        className={`${urbanist.className} flex w-full flex-row items-center gap-2 align-middle font-semibold text-[#56C1EB]`}
      >
        <Image alt="Logo Bidan Nina" src={Logo} width={32} height={32} />
        <p className="text-[24px]">Bidan Nina</p>
      </div>
    </Link>
  );
}
