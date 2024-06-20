'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  bidanFormSchema,
  defaultValues,
} from '@/lib/types/manajemen-akun/manajemen-akun-types';
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
import { createBidan } from '@/lib/actions';
import { useRouter } from 'next/navigation';

export default function ManajemenAkunForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof bidanFormSchema>>({
    resolver: zodResolver(bidanFormSchema),
    defaultValues,
  });

  // function onSubmit(data: z.infer<typeof soapKehamilanFormSchema>) {
  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      await createBidan(data);
      router.prefetch('/dashboard/manajemen-akun');
      router.push('/dashboard/manajemen-akun');
      toast({
        title: `Berhasil Menambahkan Bidan`,
      });
    } catch (error) {
      toast({
        title: `${error}`,
      });
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-8 rounded-xl bg-[#D0E4FF] px-4 py-6"
      >
        <section className="_MANAJEMENAKUNFORM space-y-4">
          <TitleSection
            title="Input Bidan Baru"
            subtitle="Masukkan data Bidan"
          />
          <FormWrapper>
            <Row>
              <InputField
                name="full_name"
                placeholder="Masukkan Nama Lengkap"
                label="Nama Lengkap"
                form={form}
                className="col-span-6"
              />
            </Row>
            <Row>
              <InputField
                name="email"
                placeholder="Masukkan Email"
                label="Email"
                form={form}
              />
              <InputField
                name="phone_number"
                placeholder="No. HP"
                label="Masukkan No. HP"
                form={form}
              />
            </Row>
            <Row>
              <InputField
                name="username"
                placeholder="Masukkan Username"
                label="Username"
                form={form}
              />
              <InputField
                name="password"
                placeholder="Masukkan Password"
                label="Password"
                form={form}
                type="password"
              />
            </Row>
          </FormWrapper>
        </section>

        <ButtonSubmitForm isLoading={isLoading} />
      </form>
    </Form>
  );
}
