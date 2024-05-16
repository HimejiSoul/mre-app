'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import {
  imunisasiFormSchema,
  defaultValues,
} from '@/lib/types/imunisasi/imunisasi-types';
import { useState } from 'react';
import { ButtonSubmitForm } from '@/components/Buttons';

// Form section component
import GeneralInformation from '@/components/imunisasi/form-section/general-information';
import DetailBayi from '@/components/imunisasi/form-section/detail-bayi';
import PemeriksaanNeonatus from '@/components/imunisasi/form-section/pemeriksaan-neonatus';
import PemeriksaanNeonatusLanjutan from '@/components/imunisasi/form-section/pemeriksaan-neonatus-lanjutan';
import PemeriksaanBalita from '@/components/imunisasi/form-section/pemeriksaan-balita';
import { createImunisasiPatient } from '@/app/lib/actions';

interface ImunisasiFormProps {
  id?: string | number;
  value?: z.infer<typeof imunisasiFormSchema>;
}

export default function ImunisasiForm({ id, value }: ImunisasiFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof imunisasiFormSchema>>({
    resolver: zodResolver(imunisasiFormSchema),
    defaultValues: value ? value : defaultValues,
  });

  // function onSubmit(data: z.infer<typeof kehamilanFormSchema>) {
  async function onSubmit(data: any) {
    setIsLoading(true);
    // await console.log(data);
    await createImunisasiPatient(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-8 rounded-xl bg-[#D0E4FF] px-4 py-6"
      >
        <GeneralInformation form={form} />
        <DetailBayi form={form} />
        <PemeriksaanNeonatus form={form} />
        <PemeriksaanNeonatusLanjutan form={form} />
        <PemeriksaanBalita form={form} />
        <ButtonSubmitForm isLoading={isLoading} />
      </form>
    </Form>
  );
}
