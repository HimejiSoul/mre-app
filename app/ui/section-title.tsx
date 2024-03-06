'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { urbanist } from '@/app/ui/fonts';

interface Props {
  children: string;
}

export function SectionTitle({ children }: Props) {
  const router = useRouter();
  return (
    <div
      className={`${urbanist.className} flex items-center py-3 text-xl font-bold`}
    >
      <button type="button" onClick={() => router.back()}>
        <ChevronLeft className="mr-3 h-5 w-5" />
      </button>
      {children}
    </div>
  );
}
