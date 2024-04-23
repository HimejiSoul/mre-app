'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import {
  kehamilanFormSchema,
  defaultValues,
} from '@/lib/periksa-kehamilan-types';

// Form section component
import GeneralInformation from './form-section/general-information';
import Section2 from './form-section/section2';
import RencanaPersalinan from './form-section/rencana-persalinan';
import RiwayatKehamilan from './form-section/riwayat-kehamilan';
import Persalinan from './form-section/persalinan';
import PemeriksaanPNC from './form-section/pemeriksaan-pnc';
import FaktorResiko from './form-section/faktor-resiko';
import KunjunganNifas from './form-section/kunjungan-nifas';

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
        <RiwayatKehamilan form={form} />
        <Persalinan form={form} />
        <PemeriksaanPNC form={form} />
        <KunjunganNifas form={form} />
        <FaktorResiko form={form} />
        <Button type="submit" className="w-fit bg-blue-600 hover:bg-blue-500">
          Tambah Pasien
        </Button>
      </form>
    </Form>
  );
}
