'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { urbanist } from '@/app/ui/fonts';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { ReactNode } from 'react';
import {
  kehamilanFormSchema,
  defaultValues,
} from '@/lib/periksa-kehamilan-types';
import { GeneralInformation } from './form-section/GeneralInformation';
import { Section2 } from './form-section/Section2';
import { RencanaPersalinan } from './form-section/RencanaPersalinan';
import { RiwayatKehamilanSebelumnya } from './form-section/RiwayatKehamilan';
import { Persalinan } from './form-section/Persalinan';
import { PemeriksaanPNC } from './form-section/PemeriksaanPNC';
import { MendeteksiFaktroResikoDanResikoTinggi } from './form-section/FaktorResiko';
import { KunjunganNifas } from './form-section/KunjunganNifas';

export default function KehamilanForm() {
  const form = useForm<z.infer<typeof kehamilanFormSchema>>({
    resolver: zodResolver(kehamilanFormSchema),
    defaultValues,
  });

  function onSubmit(data: z.infer<typeof kehamilanFormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-8 rounded-xl bg-[#D0E4FF] px-4 py-6"
      >
        <GeneralInformation form={form} />
        <Section2 form={form} />
        <RencanaPersalinan form={form} />
        <RiwayatKehamilanSebelumnya form={form} />
        <Persalinan form={form} />
        <PemeriksaanPNC form={form} />
        <KunjunganNifas form={form} />
        <MendeteksiFaktroResikoDanResikoTinggi form={form} />
        <Button type="submit" className="w-fit bg-blue-600 hover:bg-blue-500">
          Tambah Pasien
        </Button>
      </form>
    </Form>
  );
}

type TitleSectionProps = {
  title: string;
  subtitle: string;
};

export function TitleSection({ title, subtitle }: TitleSectionProps) {
  return (
    <div>
      <h1 className={`${urbanist.className} text-xl font-bold`}>{title}</h1>
      <p className="text-sm font-medium text-[#597395]">{subtitle}</p>
    </div>
  );
}

type FormWrapperProps = {
  children: ReactNode;
};

export function FormWrapper({ children }: FormWrapperProps) {
  return (
    <section className="w-full space-y-4 rounded-md bg-white p-6">
      {children}
    </section>
  );
}

type RowProps = {
  children: ReactNode;
};

export function Row({ children }: RowProps) {
  return <div className="grid grid-cols-12 gap-4">{children}</div>;
}
