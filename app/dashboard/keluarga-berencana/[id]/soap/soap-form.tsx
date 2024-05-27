'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  soapKBSchema,
  defaultValues,
} from '@/lib/types/keluarga-berencana/soap-kb-types';
import { Form } from '@/components/ui/form';
import {
  FormWrapper,
  InputField,
  Row,
  TitleSection,
} from '@/components/form-content';
import { toast } from '@/components/ui/use-toast';
import { useState } from 'react';
import { ButtonSubmitForm } from '@/components/Buttons';
import { createKBSOAPPatient } from '@/lib/actions';

export function SoapKBForm({ params }: { params: { id: string } }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof soapKBSchema>>({
    resolver: zodResolver(soapKBSchema),
    defaultValues,
  });

  // function onSubmit(data: z.infer<typeof soapKehamilanFormSchema>) {
  const onSubmit = async (data: any) => {
    const id = params.id;
    setIsLoading(true);
    try {
      // await console.log(data);
      await createKBSOAPPatient(data, id);
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
        <section className="_SOAP_KB space-y-4">
          <TitleSection title="Soap KB" subtitle="Masukkan data pasien" />
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
