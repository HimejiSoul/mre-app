'use client';

import { createPatient, editPatient } from '@/lib/actions';
import {
  KBSchema,
  defaultValues,
} from '@/lib/types/keluarga-berencana/kb-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import { ButtonSubmitForm } from '@/components/Buttons';
import { useState } from 'react';
import GeneralInformation from '@/components/keluarga-berencana/form-section/general-information';
import OtherInformation from '@/components/keluarga-berencana/form-section/other-information';
import Skrining from '@/components/keluarga-berencana/form-section/skrining';
import Hasil from '@/components/keluarga-berencana/form-section/hasil';
import PenapisanKB from '@/components/keluarga-berencana/form-section/penapisan-KB';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';

interface KBFormProps {
  id?: string | number;
  value?: z.infer<typeof KBSchema>;
}

export default function KBForm({ id, value }: KBFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof KBSchema>>({
    resolver: zodResolver(KBSchema),
    defaultValues: value,
  });

  const pathname = usePathname();
  const manyPathname = pathname.split('/');
  const lastPathname = manyPathname[manyPathname.length - 1];
  // console.log('Pathname', pathname);
  // console.log('Many Pathname', manyPathname);
  // console.log('Last pathname', lastPathname);

  async function onSubmit(data: any) {
    setIsLoading(true);
    const id_layanan = 0;
    // await console.log(data);
    if (lastPathname == 'edit' && id) {
      try {
        await editPatient(data, id, id_layanan);
        router.push(`/dashboard/keluarga-berencana`);
        toast({
          title: `Berhasil Edit Data Pasien`,
        });
      } catch (error) {
        toast({
          title: `${error}`,
        });
      }
    } else {
      try {
        const id_pasien = await createPatient(data, id_layanan);
        router.push(`/dashboard/keluarga-berencana/${id_pasien}/soap`);
        toast({
          title: `Berhasil Menginputkan Data Pasien`,
        });
      } catch (error) {
        toast({
          title: `${error}`,
        });
      }
    }
    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-8 rounded-xl bg-[#D0E4FF] px-4 py-6"
      >
        <GeneralInformation form={form} />
        <OtherInformation form={form} />
        <Skrining form={form} />
        <Hasil form={form} />
        <PenapisanKB form={form} />
        <ButtonSubmitForm
          isLoading={isLoading}
          label={lastPathname === 'edit' && id ? 'Edit pasien' : undefined}
        />
      </form>
    </Form>
  );
}
