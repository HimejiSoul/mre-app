'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  soapImunisasiFormSchema,
  defaultValues,
  ENUM_VALUES,
} from '@/lib/types/imunisasi/soap-imunisasi-types';
import { Form } from '@/components/ui/form';
import {
  FormWrapper,
  InputField,
  Row,
  TitleSection,
} from '@/components/form-content';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import { useState } from 'react';
import { ButtonSubmitForm } from '@/components/Buttons';
import { createSoapImunisasiPatient } from '@/lib/actions';

export function SoapImunisasiForm({ params }: { params: { id: string } }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof soapImunisasiFormSchema>>({
    resolver: zodResolver(soapImunisasiFormSchema),
    defaultValues,
  });

  // function onSubmit(data: z.infer<typeof soapKehamilanFormSchema>) {
  const onSubmit = async (data: any) => {
    const id = params.id;
    setIsLoading(true);
    try {
      // await console.log(data);
      await createSoapImunisasiPatient(data, id);
      toast({
        title: `Berhasil Menginputkan SOAP Pasien`,
      });
    } catch {
      toast({
        title: `Gagal Menginputkan Data Pasien`,
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-8 rounded-xl bg-[#D0E4FF] px-4 py-6"
      >
        <section className="_SOAPIMUNISASI space-y-4">
          <TitleSection
            title="Soap Imunisasi"
            subtitle="Masukkan data pasien"
          />
          <FormWrapper>
            <Row>
              <InputField
                name="tglDatang"
                form={form}
                label="Tanggal Datang"
                type="date"
              />
            </Row>
            <Row>
              <InputField
                name="s"
                placeholder="Soap (S)"
                label="Soap (S)"
                form={form}
                type="textarea"
                className="col-span-4"
              />
              <InputField
                name="a"
                placeholder="A (Assessment)"
                label="A (Assessment)"
                form={form}
                type="textarea"
                className="col-span-4"
              />
              <InputField
                name="p"
                placeholder="P (Plan)"
                label="P (Plan)"
                form={form}
                type="textarea"
                className="col-span-4"
              />
            </Row>
            <p className="text-xs font-medium">O (Objective)</p>
            <Row>
              <InputField
                name="o.td"
                placeholder="TD"
                label="Isi TD"
                form={form}
              />
              <InputField
                name="o.pb"
                placeholder="PB"
                label="Isi PB"
                form={form}
              />
              <InputField
                name="o.lk"
                placeholder="LK"
                label="Isi LK"
                form={form}
              />
              <InputField
                name="o.lain2"
                placeholder="Lain-Lain"
                label="Isi Lain-Lain"
                form={form}
              />
            </Row>
          </FormWrapper>
        </section>
        <ButtonSubmitForm isLoading={isLoading} />
      </form>
    </Form>
  );
}
