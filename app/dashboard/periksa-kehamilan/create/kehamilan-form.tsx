'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import {
  kehamilanFormSchema,
  defaultValues,
} from '@/lib/periksa-kehamilan-types';
import { createKehamilanPatient } from '@/app/lib/actions';
import { SubmitButton } from '@/app/dashboard/periksa-kehamilan/create/_component/button';

// Form section component
import GeneralInformation from '@/app/dashboard/periksa-kehamilan/create/form-section/general-information';
import Section2 from '@/app/dashboard/periksa-kehamilan/create/form-section/Section2';
import RencanaPersalinan from '@/app/dashboard/periksa-kehamilan/create/form-section/rencana-persalinan';
import RiwayatKehamilan from '@/app/dashboard/periksa-kehamilan/create/form-section/riwayat-kehamilan';
import Persalinan from '@/app/dashboard/periksa-kehamilan/create/form-section/Persalinan';
import PemeriksaanPNC from '@/app/dashboard/periksa-kehamilan/create/form-section/pemeriksaan-pnc';
import FaktorResiko from '@/app/dashboard/periksa-kehamilan/create/form-section/faktor-resiko';
import KunjunganNifas from '@/app/dashboard/periksa-kehamilan/create/form-section/kunjungan-nifas';

export default function KehamilanForm() {
  const form = useForm<z.infer<typeof kehamilanFormSchema>>({
    resolver: zodResolver(kehamilanFormSchema),
    defaultValues,
  });

  // function onSubmit(data: z.infer<typeof kehamilanFormSchema>) {
  function onSubmit(data: any) {
    createKehamilanPatient(data);
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
        <SubmitButton />
      </form>
    </Form>
  );
}
