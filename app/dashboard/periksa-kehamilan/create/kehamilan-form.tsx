'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import {
  kehamilanFormSchema,
  defaultValues,
  soapKehamilanFormSchema,
  soapDefaultValues,
} from '@/app/dashboard/periksa-kehamilan/_types/periksa-kehamilan-types';
import { createKehamilanPatient } from '@/app/lib/actions';
import { SubmitButton } from '@/app/dashboard/periksa-kehamilan/create/_component/button';

// Form section component
import GeneralInformation from '@/app/dashboard/periksa-kehamilan/create/_component/form-section/general-information';
import Section2 from '@/app/dashboard/periksa-kehamilan/create/_component/form-section/section2';
import RencanaPersalinan from '@/app/dashboard/periksa-kehamilan/create/_component/form-section/rencana-persalinan';
import RiwayatKehamilan from '@/app/dashboard/periksa-kehamilan/create/_component/form-section/riwayat-kehamilan';
import Persalinan from '@/app/dashboard/periksa-kehamilan/create/_component/form-section/persalinan';
import PemeriksaanPNC from '@/app/dashboard/periksa-kehamilan/create/_component/form-section/pemeriksaan-pnc';
import FaktorResiko from '@/app/dashboard/periksa-kehamilan/create/_component/form-section/faktor-resiko';
import KunjunganNifas from '@/app/dashboard/periksa-kehamilan/create/_component/form-section/kunjungan-nifas';
import Table1 from '@/app/dashboard/periksa-kehamilan/create/_component/soap-section/table1';

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

export function SoapKehamilanForm() {
  const form = useForm<z.infer<typeof soapKehamilanFormSchema>>({
    resolver: zodResolver(soapKehamilanFormSchema),
    defaultValues: soapDefaultValues,
  });

  function onSubmit(data: z.infer<typeof soapKehamilanFormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-8 rounded-xl bg-[#D0E4FF] px-4 py-6"
      >
        <Table1 form={form} />
        <SubmitButton />
      </form>
    </Form>
  );
}