'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import {
  imunisasiFormSchema,
  defaultValues,
} from '@/app/dashboard/imunisasi/_types/imunisasi-types';
import { createKehamilanPatient } from '@/app/lib/actions';
import { useState } from 'react';
import { ButtonSubmitForm } from '@/components/Buttons';

// Form section component
import GeneralInformation from '@/app/dashboard/imunisasi/create/_component/form-section/general-information';
import DetailBayi from '@/app/dashboard/imunisasi/create/_component/form-section/detail-bayi';
import RencanaPersalinan from '@/app/dashboard/imunisasi/create/_component/form-section/rencana-persalinan';
import RiwayatKehamilan from '@/app/dashboard/imunisasi/create/_component/form-section/riwayat-kehamilan';
import Persalinan from '@/app/dashboard/imunisasi/create/_component/form-section/persalinan';
import PemeriksaanPNC from '@/app/dashboard/imunisasi/create/_component/form-section/pemeriksaan-pnc';
import FaktorResiko from '@/app/dashboard/imunisasi/create/_component/form-section/faktor-resiko';
import KunjunganNifas from '@/app/dashboard/imunisasi/create/_component/form-section/kunjungan-nifas';

export default function ImunisasiForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof imunisasiFormSchema>>({
    resolver: zodResolver(imunisasiFormSchema),
    defaultValues,
  });

  // function onSubmit(data: z.infer<typeof kehamilanFormSchema>) {
  async function onSubmit(data: any) {
    setIsLoading(true);
    await console.log(data);
    // await createKehamilanPatient(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-8 rounded-xl bg-[#D0E4FF] px-4 py-6"
      >
        <GeneralInformation form={form} />
        <DetailBayi form={form} />
        <RencanaPersalinan form={form} />
        <RiwayatKehamilan form={form} />
        <Persalinan form={form} />
        <PemeriksaanPNC form={form} />
        <KunjunganNifas form={form} />
        <FaktorResiko form={form} />
        <ButtonSubmitForm isLoading={isLoading} />
      </form>
    </Form>
  );
}
