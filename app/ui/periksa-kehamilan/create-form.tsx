'use client';

import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
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

const FormSchema = z.object({
  generalInformation: z.object({
    noFaskes: z.string().min(2, {
      message: 'Harap Diisi',
    }),
    noSeriKartu: z.string().min(2, {
      message: 'Harap Diisi',
    }),
    tglDatang: z.date({
      required_error: 'Harap Diisi',
    }),
    namaPeserta: z.string().min(2, {
      message: 'Harap Diisi',
    }),
    tglLahir: z.date({
      required_error: 'Harap Diisi',
    }),
    usia: z.string().min(2, {
      message: 'Harap Diisi',
    }),
    namaPasangan: z.string().min(2, {
      message: 'Harap Diisi',
    }),
    jenisPasangan: z.string().min(2, {
      message: 'Harap Diisi',
    }),
    pendidikanAkhir: z.string().min(2, {
      message: 'Harap Diisi',
    }),
    alamat: z.string().min(2, {
      message: 'Harap Diisi',
    }),
    pekerjaanPasangan: z.string().min(2, {
      message: 'Harap Diisi',
    }),
    statusJkn: z.string().min(2, {
      message: 'Harap Diisi',
    }),
  }),
  otherInformation: z.object({
    jmlAnakHidup: z.object({
      jmlAnakLaki: z.string().min(2, {
        message: 'Harap Diisi',
      }),
      jmlAnakPr: z.string().min(2, {
        message: 'Harap Diisi',
      }),
    }),
    umurAnakKecil: z.object({
      umurKecilLaki: z.string().min(2, {
        message: 'Harap Diisi',
      }),
      umurKecilPr: z.string().min(2, {
        message: 'Harap Diisi',
      }),
    }),
    caraKBTerakhir: z.string().min(2, {
      message: 'Harap Diisi',
    }),
    statusPesertaKB: z.string().min(2, {
      message: 'Harap Diisi',
    }),
  }),
  skrining: z.object({
    anamsesa: z.object({
      haidTerakhir: z.date({
        required_error: 'Harap Diisi',
      }),
      hamil: z.enum(['True', 'False'], {
        required_error: 'Harap Diisi',
      }),
      jumlahGpa: z.object({
        gravida: z.string().min(2, {
          message: 'Harap Diisi',
        }),
        partus: z.string().min(2, {
          message: 'Harap Diisi',
        }),
        abortus: z.string().min(2, {
          message: 'Harap Diisi',
        }),
      }),
      riwayatPenyakitSebelumnya: z.object({
        sakitKuning: z.string().min(2, {
          message: 'Harap Diisi',
        }),
        perdarahanVaginam: z.string().min(2, {
          message: 'Harap Diisi',
        }),
        keputihanLama: z.string().min(2, {
          message: 'Harap Diisi',
        }),
        tumor: z.string().min(2, {
          message: 'Harap Diisi',
        }),
      }),
    }),
  }),
});

export default function KehamilanForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      generalInformation: {
        noFaskes: '',
        noSeriKartu: '',
        namaPeserta: '',
        usia: '',
        jenisPasangan: '',
        namaPasangan: '',
        pendidikanAkhir: '',
        alamat: '',
        pekerjaanPasangan: '',
        statusJkn: '',
      },
      otherInformation: {
        jmlAnakHidup: {
          jmlAnakLaki: '',
          jmlAnakPr: '',
        },
        umurAnakKecil: {
          umurKecilLaki: '',
          umurKecilPr: '',
        },
        caraKBTerakhir: '',
        statusPesertaKB: '',
      },
      skrining: {
        anamsesa: {
          jumlahGpa: {
            abortus: '',
            gravida: '',
            partus: '',
          },
          riwayatPenyakitSebelumnya: {
            keputihanLama: '',
            perdarahanVaginam: '',
            sakitKuning: '',
            tumor: '',
          },
        },
      },
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div className="rounded-xl bg-[#D0E4FF] px-4 py-6 ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col"
        >
          {/* General Information */}
          <div>
            <p className={` ${urbanist.className} text-xl font-bold`}>
              General Information
            </p>
            <p className="mb-2 block text-sm font-medium text-[#597395]">
              Masukkan data pasien
            </p>
          </div>

          <div className="mb-8 flex w-full flex-col gap-3 rounded-md bg-white px-6 py-4">
            {/* kolom 1 */}
            <div className="flex w-full gap-4">
              <div className="w-1/3">
                <FormField
                  control={form.control}
                  name="generalInformation.noFaskes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nomor Faskes</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Provinsi | Kab/Kota | Faskes"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* <hr className="h-4/5 border border-[#C5D3E3]" /> */}
              <div className="w-1/3">
                <FormField
                  control={form.control}
                  name="generalInformation.noSeriKartu"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nomor Seri Kartu</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nomor Urut | Tahun"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* <hr className="h-4/5 border border-[#C5D3E3] " /> */}
              <div className="w-1/3">
                <FormField
                  control={form.control}
                  name="generalInformation.tglDatang"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tanggal Datang</FormLabel>
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
                              date > new Date() || date < new Date('1900-01-01')
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
              <div className="w-7/12">
                <FormField
                  control={form.control}
                  name="generalInformation.namaPeserta"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Peserta</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nama Peserta"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-3/12">
                <FormField
                  control={form.control}
                  name="generalInformation.tglLahir"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tanggal Lahir</FormLabel>
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
                              date > new Date() || date < new Date('1900-01-01')
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
              <div className="w-2/12">
                <FormField
                  control={form.control}
                  name="generalInformation.usia"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Usia</FormLabel>
                      <FormControl>
                        <Input placeholder="Usia" type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* kolom 3 */}
            <div className="flex w-full gap-4">
              <div className="w-7/12">
                <FormField
                  control={form.control}
                  name="generalInformation.namaPasangan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Pasangan</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nama Peserta"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-2/12">
                <FormField
                  control={form.control}
                  name="generalInformation.jenisPasangan"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormLabel className="text-white">Pasangan</FormLabel>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Suami" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="suami">Suami</SelectItem>
                          <SelectItem value="m@google.com">Istri</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-3/12">
                <FormField
                  control={form.control}
                  name="generalInformation.pendidikanAkhir"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pendidikan Terakhir</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pendidikan" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Tidak Tamat SD">
                            Tidak Tamat SD
                          </SelectItem>
                          <SelectItem value="Tamat SLTA">Tamat SLTA</SelectItem>
                          <SelectItem value="Tamat SD">Tamat SD</SelectItem>
                          <SelectItem value="Tamat PT">Tamat PT</SelectItem>
                          <SelectItem value="Tamat SLTP">Tamat SLTP</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* kolom 4 */}
            <div className="flex w-full gap-4">
              <div className="w-6/12">
                <FormField
                  control={form.control}
                  name="generalInformation.alamat"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Alamat</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Jl. Soekarno No. 52"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-2/12">
                <FormField
                  control={form.control}
                  name="generalInformation.jenisPasangan"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormLabel className="text-white">Pasangan</FormLabel>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Suami" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="suami">Suami</SelectItem>
                          <SelectItem value="m@google.com">Istri</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-4/12">
                <FormField
                  control={form.control}
                  name="generalInformation.pekerjaanPasangan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Pekerjaan</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pekerjaan" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Pegawai Pemerintahan">
                            Pegawai Pemerintahan
                          </SelectItem>
                          <SelectItem value="Pegawai Swasta">
                            Pegawai Swasta
                          </SelectItem>
                          <SelectItem value="Petani">Petani</SelectItem>
                          <SelectItem value="Nelayan">Nelayan</SelectItem>
                          <SelectItem value="Lain-Lain">Lain-Lain</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* kolom 5 */}
            <div className="flex w-full gap-4">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="generalInformation.statusJkn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status JKN</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Status JKN" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="guru">Guru</SelectItem>
                          <SelectItem value="karyawanNegri">
                            Karyawan Negri
                          </SelectItem>
                          <SelectItem value="karyawanSwasta">
                            Karyawan Swasta
                          </SelectItem>
                          <SelectItem value="buruh">Buruh</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          <>
            <p className={` ${urbanist.className} text-xl font-bold`}>
              Other Information
            </p>
            <p className="mb-2 block text-sm font-medium text-[#597395]">
              Masukkan data pasien
            </p>
          </>

          <div className="mb-8 flex w-full flex-col gap-3 rounded-md bg-white px-6 py-4">
            {/* kolom 1 */}
            <div className="flex h-fit w-full gap-4">
              <div className="w-1/6">
                <FormField
                  control={form.control}
                  name="otherInformation.jmlAnakHidup.jmlAnakLaki"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jumlah Anak Hidup</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Laki-Laki"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-1/6">
                <FormField
                  control={form.control}
                  name="otherInformation.jmlAnakHidup.jmlAnakPr"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Jumlah Anak Hidup
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Perempuan"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* <hr className="h-4/5 border border-[#C5D3E3]" /> */}
              <div className="w-1/6">
                <FormField
                  control={form.control}
                  name="otherInformation.umurAnakKecil.umurKecilLaki"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Umur Anak Terkecil</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Laki-Laki"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-1/6">
                <FormField
                  control={form.control}
                  name="otherInformation.umurAnakKecil.umurKecilPr"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Umur Anak Terkecil
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Perempuan"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* <hr className="h-4/5 border border-[#C5D3E3] " /> */}
              <div className="w-2/6">
                <FormField
                  control={form.control}
                  name="otherInformation.caraKBTerakhir"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cara KB Terakhir</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Cara KB Terakhir" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="iud">IUD</SelectItem>
                          <SelectItem value="mow">MOW</SelectItem>
                          <SelectItem value="mop">MOP</SelectItem>
                          <SelectItem value="random">Random</SelectItem>
                          <SelectItem value="implant">Implant</SelectItem>
                          <SelectItem value="suntikan">Suntikan</SelectItem>
                          <SelectItem value="pil">Pil</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            {/* kolom 2 */}
            <div className="flex h-fit w-full gap-4">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="otherInformation.statusPesertaKB"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status Peserta KB</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Status Peserta KB" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Baru Pertama Kali">
                            Baru Pertama Kali
                          </SelectItem>
                          <SelectItem value="Pernah pakai alat KB berhenti sesudah bersalin/keguguran">
                            Pernah pakai alat KB berhenti sesudah
                            bersalin/keguguran
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          <>
            <p className={` ${urbanist.className} text-xl font-bold`}>
              Penapisan (skrining)
            </p>
            <p className="mb-2 block text-sm font-medium text-[#597395]">
              Dilakukan untuk menentukan alat kontrasepsi yang dapat digunakan
              calon peserta KB. Hanya boleh dilakukan oleh pelaksana yang telah
              dilatih dalam pelayanan kontrasepsi.
            </p>
          </>

          <div className="mb-8 flex w-full flex-col gap-3 rounded-md bg-white px-6 py-4">
            <p className={`${urbanist.className} font-semibold`}>Anamsesa</p>
            {/* kolom 1 */}
            <div className="flex h-fit w-full gap-4">
              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="skrining.anamsesa.haidTerakhir"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Haid Terakhir</FormLabel>
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
                              date > new Date() || date < new Date('1900-01-01')
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
              <div className="w-1/3">
                <FormField
                  control={form.control}
                  name="skrining.anamsesa.hamil"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Hamil/Diduga Hamil</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-row"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="True" />
                            </FormControl>
                            <FormLabel className="font-normal">Iya</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="False" />
                            </FormControl>
                            <FormLabel className="font-normal">Tidak</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* kolom 2 */}
            <div className="flex h-fit w-full flex-col">
              <p className="text-sm font-semibold">Jumlah GPA</p>
              <div className="flex h-fit w-full gap-4">
                <div className="w-1/6">
                  <FormField
                    control={form.control}
                    name="skrining.anamsesa.jumlahGpa.gravida"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gravida (Kehamilan)</FormLabel>
                        <FormControl>
                          <Input placeholder="00" type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-1/6">
                  <FormField
                    control={form.control}
                    name="skrining.anamsesa.jumlahGpa.partus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Partus (Persalinan)</FormLabel>
                        <FormControl>
                          <Input placeholder="00" type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-1/6">
                  <FormField
                    control={form.control}
                    name="skrining.anamsesa.jumlahGpa.abortus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Abortus (Keguguran)</FormLabel>
                        <FormControl>
                          <Input placeholder="00" type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            {/* kolom 3 */}
            <div className="flex gap-5">
              <div className="flex h-fit w-1/2 flex-col">
                <p className="text-sm font-semibold">
                  Riwayat Penyakit Sebelumnya
                </p>
                <ul className=" ml-4 flex list-outside list-disc flex-col gap-1">
                  {/* Sakit Kuning */}
                  <FormField
                    control={form.control}
                    name="skrining.anamsesa.riwayatPenyakitSebelumnya.sakitKuning"
                    render={({ field }) => (
                      <FormItem className=" my-3 flex flex-col">
                        <div className="flex flex-row items-center">
                          <FormLabel className="w-full pr-10 ">
                            <li>Sakit Kuning</li>
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-row"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="True" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Iya
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="False" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Tidak
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Pervaaginam */}
                  <FormField
                    control={form.control}
                    name="skrining.anamsesa.riwayatPenyakitSebelumnya.perdarahanVaginam"
                    render={({ field }) => (
                      <FormItem className="my-3 flex flex-col ">
                        <div className="flex flex-row items-center">
                          <FormLabel className=" w-full pr-10">
                            <li>
                              Perdarahan pervaginam yang tidak diketahui
                              sebabnya
                            </li>
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-row"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="True" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Iya
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="False" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Tidak
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Keputihan Lama */}
                  <FormField
                    control={form.control}
                    name="skrining.anamsesa.riwayatPenyakitSebelumnya.keputihanLama"
                    render={({ field }) => (
                      <FormItem className="my-3 flex flex-col">
                        <div className="items.center flex flex-row">
                          <FormLabel className=" w-full pr-10">
                            <li>Keputihan Lama </li>
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-row"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="True" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Iya
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="False" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Tidak
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Tumor */}
                  <FormField
                    control={form.control}
                    name="skrining.anamsesa.riwayatPenyakitSebelumnya.tumor"
                    render={({ field }) => (
                      <FormItem className="my-3 flex flex-col">
                        <div className="items.center flex flex-row">
                          <FormLabel className=" w-full pr-10">
                            <li>Tumor </li>
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-row"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="True" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Iya
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="False" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Tidak
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </ul>
              </div>
              <ul className="my-auto ml-4 flex h-fit w-1/2 list-outside list-disc flex-col gap-1 rounded-md border-2 border-[#DF645F] px-7 py-3 text-xs text-[#DF645F]">
                <li>
                  Bila semua jawaban TIDAK, dapat diberikan salah satu dari cara
                  KB (Kecuali IUD dan MOW).
                </li>
                <li>Bila salah satu jawaban YA, rujuk ke Dokter.</li>
              </ul>
            </div>
          </div>

          <Button
            type="submit"
            className="mt-5 w-fit bg-blue-600 hover:bg-blue-400"
          >
            Tambah Pasien
          </Button>
        </form>
      </Form>
    </div>
  );
}
