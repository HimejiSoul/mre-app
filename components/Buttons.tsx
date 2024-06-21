'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader2Icon, PlusIcon } from 'lucide-react';
import Link from 'next/link';
import { HTMLAttributes, useState } from 'react';

// TODO: Fix ts data type
export function TableButtonGroup({ remove, append, fields, data }: any) {
  return (
    <div className="flex gap-2">
      <Button
        type="button"
        variant={'outline'}
        className="border-red-500 text-red-500 hover:text-red-600"
        onClick={() => remove(fields.length - 1)}
      >
        Hapus
      </Button>
      <Button
        type="button"
        className="w-full border-rme-blue-500 text-rme-blue-500 hover:text-rme-blue-500"
        variant={'outline'}
        onClick={() => append(data)}
      >
        Tambah
      </Button>
    </div>
  );
}

interface ButtonLinkProps {
  href: string;
  name: string;
  useIcon?: boolean;
}

export function ButtonLink({ href, name, useIcon = true }: ButtonLinkProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Button
      asChild={!isLoading}
      disabled={isLoading}
      className="bg-blue-600 text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      onClick={() => setIsLoading(!isLoading)}
    >
      {isLoading ? (
        <>
          <Loader2Icon size={20} className="mr-2 animate-spin" /> Loading...
        </>
      ) : (
        <Link href={href}>
          <span className="hidden md:block">{name}</span>
          {useIcon && <PlusIcon className="h-5 md:ml-4" />}
        </Link>
      )}
    </Button>
  );
}

// idk why i need to use interface for this >:(
type ButtonSubmitFormProps = HTMLAttributes<HTMLDivElement> & {
  label?: string;
  isLoading: boolean;
};

export function ButtonSubmitForm({
  isLoading,
  label,
  className,
}: ButtonSubmitFormProps) {
  return (
    <Button
      className={cn('w-fit bg-blue-600 hover:bg-blue-500', className)}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2Icon size={20} className="mr-2 animate-spin" /> Loading...
        </>
      ) : label ? (
        label
      ) : (
        'Tambah Pasien'
      )}
    </Button>
  );
}
