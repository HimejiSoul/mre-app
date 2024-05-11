'use client';

import { SectionTitle } from '@/app/ui/section-title';
import { useFormStatus } from 'react-dom';
import { createKBSOAPPatient } from '@/app/lib/actions';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { urbanist } from '@/app/ui/fonts';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { toast } from '@/components/ui/use-toast';
import { ButtonSubmitForm } from '@/components/Buttons';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const FormSchema = z.object({
  tglDatang: z.date({
    required_error: 'Harap Diisi',
  }),
  s: z.string(),
  td: z.string(),
  bb: z.string(),
  hpht: z.string(),
  lain2: z.string(),
  a: z.string(),
  p: z.string(),
});

export default function KBForm({ params }: { params: { id: string } }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      tglDatang: new Date(),
      s: '10',
      td: '10',
      bb: '10',
      hpht: '10',
      lain2: '10',
      a: '10',
      p: '10',
    },
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    const id = params.id;
    try {
      // console.log(id);
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
    <main>
      <SectionTitle>
        Tambah Histori Pasien Layanan Keluarga Berencana
      </SectionTitle>
      <div className="rounded-xl bg-[#D0E4FF] px-4 py-6 ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full flex-col"
          >
            <Soap form={form} />
            <ButtonSubmitForm isLoading={isLoading} />
          </form>
        </Form>
      </div>
    </main>
  );
}

const Soap = ({ form }: any) => {
  return (
    <div>
      <div>
        <p className={` ${urbanist.className} text-xl font-bold`}>Soap KB </p>
        <p className="mb-2 block text-sm font-medium text-[#597395]">
          Masukkan data pasien
        </p>
      </div>

      <div className="mb-8 flex w-full flex-col gap-3 rounded-md bg-white px-6 py-4">
        {/* kolom 1 */}
        <div className="flex w-full gap-4">
          {/* <hr className="h-4/5 border border-[#C5D3E3] " /> */}
          <div className="w-1/3">
            <FormField
              control={form.control}
              name="tglDatang"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tanggal Kedatangan</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span className="text-[#A9BCD6]">Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date() || date < new Date('1900-01-01')
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* kolom 2 */}
        <div className="flex w-full gap-4">
          <div className="w-4/12">
            <FormField
              control={form.control}
              name="s"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>S (Subjective)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Isi S"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-4/12">
            <FormField
              control={form.control}
              name="a"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>A (Assessment)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Isi A"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-4/12">
            <FormField
              control={form.control}
              name="p"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>P (Plan)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Isi P"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* kolom 3 */}
        <div className=" w-full gap-4">
          <p className="my-3 text-xs font-medium">O (Objective)</p>
          <div className="flex gap-4">
            <div className="w-3/12">
              <FormField
                control={form.control}
                name="td"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>TD</FormLabel> */}
                    <FormControl>
                      <Input placeholder="Isi TD" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-3/12">
              <FormField
                control={form.control}
                name="bb"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>BB</FormLabel> */}
                    <FormControl>
                      <Input placeholder="Isi BB" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-3/12">
              <FormField
                control={form.control}
                name="hpht"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>HPHT</FormLabel> */}
                    <FormControl>
                      <Input placeholder="Isi HPHT" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-3/12">
              <FormField
                control={form.control}
                name="lain2"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Lain-Lain</FormLabel> */}
                    <FormControl>
                      <Input
                        placeholder="Isi Lain-Lain"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
