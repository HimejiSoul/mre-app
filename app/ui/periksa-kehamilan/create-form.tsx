'use client';

import { format } from 'date-fns';
import { CalendarIcon, Subtitles } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { string, number, z } from 'zod';
import { urbanist } from '@/app/ui/fonts';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const kehamilanFormSchema = z.object({
  noIbu: z.string(),
  namaLengkap: z.string().min(2, {
    message: 'Nama lengkap harus lebih dari 2 karakter.',
  }),
  namaSuami: z.string().min(2, {
    message: 'Nama lengkap harus lebih dari 2 karakter.',
  }),
  tanggalLahir: z.date({
    required_error: 'A date of birth is required.',
  }),
  alamatDomisili: z.string(),
  desa: z.string(),
  kabupaten: z.string(),
  pendidikan: z.string(),
  pekerjaan: z.string(),
  umur: z.string(), //idk why cant use number :/
  rtrw: z.string(),
  kecamatan: z.string(),
  provinsi: z.string(),
  agama: z.string(),
  tanggalRegister: z.date({
    required_error: 'A date of birth is required.',
  }),
});

// This can come from your database or API.
const defaultValues: Partial<z.infer<typeof kehamilanFormSchema>> = {
  namaLengkap: '',
  noIbu: '',
  namaSuami: '',
  umur: '',
  alamatDomisili: '',
  rtrw: '',
  desa: '',
  kecamatan: '',
  kabupaten: '',
  provinsi: '',
  pendidikan: '',
  agama: '',
  pekerjaan: '',
};

export default function KehamilanForm() {
  const form = useForm<z.infer<typeof kehamilanFormSchema>>({
    resolver: zodResolver(kehamilanFormSchema),
    defaultValues,
  });

  function onSubmit(data: z.infer<typeof kehamilanFormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-8 rounded-xl bg-[#D0E4FF] px-4 py-6"
      >
        <section className="_SECTION01 space-y-4">
          <TitleSection
            title="General Information"
            subtitle="Masukkan data pasien"
          />
          <div className="_FORM_WRAPPER w-full space-y-4 rounded-md bg-white p-6">
            <div className="_ROW1 flex w-full gap-4">
              <div className="_NO_IBU w-1/3">
                <FormField
                  control={form.control}
                  name="noIbu"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>No. IBU</FormLabel>
                      <FormControl>
                        <Input placeholder="00/00/00" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="_ROW2 flex w-full gap-4">
              <div className="_NAMA_LENGKAP w-1/3">
                <FormField
                  control={form.control}
                  name="namaLengkap"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl>
                        <Input placeholder="Firda Rizky" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="_NAMA_SUAMI w-1/3">
                <FormField
                  control={form.control}
                  name="namaSuami"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Suami</FormLabel>
                      <FormControl>
                        <Input placeholder="Hilmy Aziz" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="_ROW3 flex w-full gap-4">
              <div className="_TANGGAL_LAHIR w-1/3">
                <FormField
                  control={form.control}
                  name="tanggalLahir"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tanggal Lahir</FormLabel>
                      <div>
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
                                  <span>Pick a date</span>
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
                                date > new Date() ||
                                date < new Date('1900-01-01')
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="_UMUR w-1/3">
                <FormField
                  control={form.control}
                  name="umur"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Umur</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukan umur"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="_ROW4 flex w-full gap-4">
              <div className="_ALAMAT_DOMISILI w-1/3">
                <FormField
                  control={form.control}
                  name="alamatDomisili"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Alamat Domisili</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukan alamat" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="_RTRW w-1/3">
                <FormField
                  control={form.control}
                  name="rtrw"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>RT/RW</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukan RT/RW" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="_ROW5 flex w-full gap-4">
              <div className="_DESA w-1/3">
                <FormField
                  control={form.control}
                  name="desa"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Desa</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukan Desa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="_KECAMATAN w-1/3">
                <FormField
                  control={form.control}
                  name="kecamatan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kecamatan</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukan Kecamatan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="_ROW6 flex w-full gap-4">
              <div className="_KABUPATEN w-1/3">
                <FormField
                  control={form.control}
                  name="kabupaten"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kabupaten</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukan Kabupaten" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="_PROVINSI w-1/3">
                <FormField
                  control={form.control}
                  name="provinsi"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Provinsi</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukan Provinsi" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="_ROW7 flex w-full gap-4">
              <div className="_PENDIDIKAN w-1/3">
                <FormField
                  control={form.control}
                  name="pendidikan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pendidikan</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukan Pendidikan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="_AGAMA w-1/3">
                <FormField
                  control={form.control}
                  name="agama"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Agama</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukan Agama" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="_ROW8 flex w-full gap-4">
              <div className="_PEKERJAAN w-1/3">
                <FormField
                  control={form.control}
                  name="pekerjaan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pekerjaan</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukan Pekerjaan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="_TANGGAL_REGISTER w-1/3">
                <FormField
                  control={form.control}
                  name="tanggalRegister"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tanggal Register</FormLabel>
                      <div>
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
                                  <span>Pick a date</span>
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
                                date > new Date() ||
                                date < new Date('1900-01-01')
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </section>

        <Button type="submit" className="w-fit bg-blue-600 hover:bg-blue-500">
          Tambah Pasien
        </Button>
      </form>
    </Form>
  );
}

interface TitleSectionProps {
  title: string;
  subtitle: string;
}

function TitleSection({ title, subtitle }: TitleSectionProps) {
  return (
    <div>
      <h1 className={`${urbanist.className} text-xl font-bold`}>{title}</h1>
      <p className="text-sm font-medium text-[#597395]">{subtitle}</p>
    </div>
  );
}
