'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import {
  kehamilanFormSchema,
  defaultValues,
} from '@/lib/types/periksa-kehamilan-types';
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
import { createPatient, editPatient } from '@/lib/actions';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';

interface KehamilanFormProps {
  id?: string | number;
  value?: z.infer<typeof kehamilanFormSchema>;
}

export default function KehamilanForm({ id, value }: KehamilanFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof kehamilanFormSchema>>({
    resolver: zodResolver(kehamilanFormSchema),
    defaultValues: value ? value : defaultValues,
  });

  const pathname = usePathname();
  const manyPathname = pathname.split('/');
  const lastPathname = manyPathname[manyPathname.length - 1];
  // console.log('Pathname', pathname);
  // console.log('Many Pathname', manyPathname);
  // console.log('Last pathname', lastPathname);

  async function onSubmit(data: any) {
    setIsLoading(true);
    const id_layanan = 1;
    // await console.log(data);
    if (lastPathname == 'edit' && id) {
      try {
        await editPatient(data, id, id_layanan);
        router.push(`/dashboard/periksa-kehamilan`);
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
        await createPatient(data, id_layanan);
        router.push(`/dashboard/periksa-kehamilan/${id}/soap`);
        toast({
          title: `Berhasil Menginputkan Data Pasien`,
        });
      } catch (error) {
        toast({
          title: `${error}`,
        });
      }
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
