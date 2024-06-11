'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import {
  kehamilanFormSchema,
  defaultValues,
} from '@/lib/types/periksa-kehamilan-types';
import { createKehamilanPatient, editKehamilanPatient } from '@/lib/actions';
import { useState } from 'react';
import { ButtonSubmitForm } from '@/components/Buttons';

// Form section component
import GeneralInformation from '@/components/periksa-kehamilan/form-section/general-information';
import Section2 from '@/components/periksa-kehamilan/form-section/section2';
import RencanaPersalinan from '@/components/periksa-kehamilan/form-section/rencana-persalinan';
import RiwayatKehamilan from '@/components/periksa-kehamilan/form-section/riwayat-kehamilan';
import Persalinan from '@/components/periksa-kehamilan/form-section/persalinan';
import PemeriksaanPNC from '@/components/periksa-kehamilan/form-section/pemeriksaan-pnc';
import FaktorResiko from '@/components/periksa-kehamilan/form-section/faktor-resiko';
import KunjunganNifas from '@/components/periksa-kehamilan/form-section/kunjungan-nifas';
import SkriningTT from '@/components/periksa-kehamilan/form-section/skrining-tt';

// Dummy Test
import dummyJson from '@/app/dashboard/periksa-kehamilan/data.json';
import { fromZodError } from 'zod-validation-error';
import { notFound } from 'next/navigation';
const response = kehamilanFormSchema.safeParse(dummyJson.data);
if (!response.success) {
  console.error(fromZodError(response.error));
  notFound();
}

interface KehamilanFormProps {
  id?: string | number;
  value?: z.infer<typeof kehamilanFormSchema>;
}

export default function KehamilanForm({ id, value }: KehamilanFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof kehamilanFormSchema>>({
    resolver: zodResolver(kehamilanFormSchema),
    defaultValues: value ? value : defaultValues,
    // defaultValues: value ? value : response.data,
  });

  async function onSubmit(data: z.infer<typeof kehamilanFormSchema>) {
    setIsLoading(true);

    if (id) {
      await editKehamilanPatient(data, id);
    } else {
      await createKehamilanPatient(data);
    }
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
        <FaktorResiko form={form} />
        <Persalinan form={form} />
        <PemeriksaanPNC form={form} />
        <KunjunganNifas form={form} />
        <SkriningTT form={form} />
        <ButtonSubmitForm isLoading={isLoading} />
      </form>
    </Form>
  );
}
