'use client';

import { format } from 'date-fns';
import { CalendarIcon, Subtitles } from 'lucide-react';
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
import { ReactNode } from 'react';
import {
  kehamilanFormSchema,
  defaultValues,
} from '@/lib/periksa-kehamilan-types';

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
        <GeneralInformation form={form} />
        <Section2 form={form} />
        <RencanaPersalinan form={form} />
        <RiwayatKehamilanSebelumnya form={form} />
        <Persalinan form={form} />
        <PemeriksaanPNC form={form} />
        <KunjunganNifas form={form} />
        <MendeteksiFaktroResikoDanResikoTinggi form={form} />
        <Button type="submit" className="w-fit bg-blue-600 hover:bg-blue-500">
          Tambah Pasien
        </Button>
      </form>
    </Form>
  );
}

type TitleSectionProps = {
  title: string;
  subtitle: string;
};

function TitleSection({ title, subtitle }: TitleSectionProps) {
  return (
    <div>
      <h1 className={`${urbanist.className} text-xl font-bold`}>{title}</h1>
      <p className="text-sm font-medium text-[#597395]">{subtitle}</p>
    </div>
  );
}

type FormWrapperProps = {
  children: ReactNode;
};

function FormWrapper({ children }: FormWrapperProps) {
  return (
    <section className="w-full space-y-4 rounded-md bg-white p-6">
      {children}
    </section>
  );
}

type RowProps = {
  children: ReactNode;
};

function Row({ children }: RowProps) {
  return <div className="flex w-full gap-4">{children}</div>;
}

function GeneralInformation({ form }: any) {
  return (
    <section className="_GENERAL_INFORMATION space-y-4">
      <TitleSection
        title="General Information"
        subtitle="Masukkan data pasien"
      />
      <FormWrapper>
        <Row>
          <div className="_NO_IBU w-1/3">
            <FormField
              control={form.control}
              name="generalInformation.noIbu"
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
        </Row>
        <Row>
          <div className="_NAMA_LENGKAP w-1/3">
            <FormField
              control={form.control}
              name="generalInformation.namaLengkap"
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
              name="generalInformation.namaSuami"
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
        </Row>
        <Row>
          <div className="_TANGGAL_LAHIR w-1/3">
            <FormField
              control={form.control}
              name="generalInformation.tanggalLahir"
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
                            date > new Date() || date < new Date('1900-01-01')
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
              name="generalInformation.umur"
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
        </Row>
        <Row>
          <div className="_ALAMAT_DOMISILI w-1/3">
            <FormField
              control={form.control}
              name="generalInformation.alamatDomisili"
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
              name="generalInformation.rtrw"
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
        </Row>
        <Row>
          <div className="_DESA w-1/3">
            <FormField
              control={form.control}
              name="generalInformation.desa"
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
              name="generalInformation.kecamatan"
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
        </Row>
        <Row>
          <div className="_KABUPATEN w-1/3">
            <FormField
              control={form.control}
              name="generalInformation.kabupaten"
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
              name="generalInformation.provinsi"
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
        </Row>
        <Row>
          <div className="_PENDIDIKAN w-1/3">
            <FormField
              control={form.control}
              name="generalInformation.pendidikan"
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
              name="generalInformation.agama"
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
        </Row>
        <Row>
          <div className="_PEKERJAAN w-1/3">
            <FormField
              control={form.control}
              name="generalInformation.pekerjaan"
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
              name="generalInformation.tanggalRegister"
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
                            date > new Date() || date < new Date('1900-01-01')
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
        </Row>
      </FormWrapper>
    </section>
  );
}

function Section2({ form }: any) {
  return (
    <section className="_SECTION02 space-y-4">
      <TitleSection title="Section 2" subtitle="Masukkan data pasien" />
      <FormWrapper>
        <Row>
          <div className="_POSYANDU w-1/3">
            <FormField
              control={form.control}
              name="section2.posyandu"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Posyandu</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_JAMKESMAS w-1/3">
            <FormField
              control={form.control}
              name="section2.jamkesmas"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jamkesmas</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex h-10 items-center space-x-2"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Iya</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
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
        </Row>
        <Row>
          <div className="_NAMA_KADER w-1/3">
            <FormField
              control={form.control}
              name="section2.namaKader"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Kader</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_GOL_DARAH w-1/3">
            <FormField
              control={form.control}
              name="section2.golDarah"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gol. Darah</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih Golongan Darah" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="A">A</SelectItem>
                      <SelectItem value="B">B</SelectItem>
                      <SelectItem value="AB">AB</SelectItem>
                      <SelectItem value="O">O</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_NAMA_DUKUN w-1/3">
            <FormField
              control={form.control}
              name="section2.namaDukun"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Dukun</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_HP w-1/3">
            <FormField
              control={form.control}
              name="section2.noTelp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telp./HP</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <h1 className="w-1/3 font-semibold">RIWAYAT OBSTETRIK</h1>
          <h1 className="w-1/3 font-semibold">PEMERIKSAAN BIDAN</h1>
        </Row>
        <Row>
          <div className="_GRAVIDA w-1/3">
            <FormField
              control={form.control}
              name="section2.riwayatObstetrik.gravida"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gravida</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_TANGGAL_PERIKSA w-1/3">
            <FormField
              control={form.control}
              name="section2.pemeriksaanBidan.tanggalPeriksa"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tanggal Periksa</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_BB_SEBELUM_HAMIL w-1/3">
            <FormField
              control={form.control}
              name="section2.pemeriksaanBidan.bbSebelumHamil"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>BB sebelum Hamil</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_PARTUS w-1/3">
            <FormField
              control={form.control}
              name="section2.riwayatObstetrik.partus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Partus</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_TANGGAL_HPHT w-1/3">
            <FormField
              control={form.control}
              name="section2.pemeriksaanBidan.tanggalHPHT"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tanggal HPHT</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_TB w-1/3">
            <FormField
              control={form.control}
              name="section2.pemeriksaanBidan.tb"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>TB</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_ABORTUS w-1/3">
            <FormField
              control={form.control}
              name="section2.riwayatObstetrik.abortus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Abortus</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_TAKSIRAN_PERSALINAN w-1/3">
            <FormField
              control={form.control}
              name="section2.pemeriksaanBidan.taksiranPersalinan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Taksiran Persalinan</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_BUKU_KIA w-1/3">
            <FormField
              control={form.control}
              name="section2.pemeriksaanBidan.bukuKIA"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Buku KIA</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_HIDUP w-1/3">
            <FormField
              control={form.control}
              name="section2.riwayatObstetrik.hidup"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hidup</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_PERSALINAN_SEBELUMNYA w-1/3">
            <FormField
              control={form.control}
              name="section2.pemeriksaanBidan.persalinanSebelumnya"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Persalinan Sebelumnya</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_NULL w-1/3"></div>
        </Row>
        <Row>
          <div className="_RIWAYAT_KOMPLIKASI_KEBIDANAN w-2/3">
            <FormField
              control={form.control}
              name="section2.pemeriksaanBidan.penyakitKronisDanAlergi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Penyakit Kronis dan Alergi</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_PENYAKIT_KRONIS_DAN_ALERGI w-2/3">
            <FormField
              control={form.control}
              name="section2.pemeriksaanBidan.riwayatKomplikasiKebidanan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Riwayat Komplikasi Kebidanan</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
      </FormWrapper>
    </section>
  );
}

function RencanaPersalinan({ form }: any) {
  return (
    <section className="_RENCANA_PERSALINAN space-y-4">
      <TitleSection
        title="Rencana Persalinan"
        subtitle="Masukkan data pasien"
      />
      <FormWrapper>
        <Row>
          <div className="_TANGGAL w-1/3">
            <FormField
              control={form.control}
              name="rencanaPersalinan.tanggal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tanggal</FormLabel>
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
                            date > new Date() || date < new Date('1900-01-01')
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
          <div className="_PENOLONG w-1/3">
            <FormField
              control={form.control}
              name="rencanaPersalinan.penolong"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Penolong</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih Penolong" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="keluarga">Keluarga</SelectItem>
                      <SelectItem value="dukun">Dukun</SelectItem>
                      <SelectItem value="bidan">Bidan</SelectItem>
                      <SelectItem value="drUmum">Dr.Umum</SelectItem>
                      <SelectItem value="drSpesialis">Dr. Spesial</SelectItem>
                      <SelectItem value="lain">Lain-lain</SelectItem>
                      <SelectItem value="tidakAda">Tidak ada</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_TEMPAT w-1/3">
            <FormField
              control={form.control}
              name="rencanaPersalinan.tempat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tempat</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih tempat" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="rumah">Rumah</SelectItem>
                      <SelectItem value="poskesdes">Poskesdes</SelectItem>
                      <SelectItem value="pustu">Pustu</SelectItem>
                      <SelectItem value="puskesmas">Puskesmas</SelectItem>
                      <SelectItem value="rb">RB</SelectItem>
                      <SelectItem value="rs">RS</SelectItem>
                      <SelectItem value="rsia">RSIA</SelectItem>
                      <SelectItem value="rsOdha">RS. Odha</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="Pendamping w-1/3">
            <FormField
              control={form.control}
              name="rencanaPersalinan.pendamping"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pendamping</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih pendamping" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="suami">Suami</SelectItem>
                      <SelectItem value="keluarga">Keluarga</SelectItem>
                      <SelectItem value="teman">Teman</SelectItem>
                      <SelectItem value="tetangga">Tetangga</SelectItem>
                      <SelectItem value="lain">Lain-lain</SelectItem>
                      <SelectItem value="tidakAda">Tidak ada</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_TRANSPORTASI w-1/3">
            <FormField
              control={form.control}
              name="rencanaPersalinan.transportasi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transportasi</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih transportasi" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="mobil">Mobil</SelectItem>
                      <SelectItem value="motor">Motor</SelectItem>
                      <SelectItem value="angkutanUmum">
                        Angkutan Umum
                      </SelectItem>
                      <SelectItem value="lain">Lain-lain</SelectItem>
                      <SelectItem value="tidakAda">Tidak ada</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_PENDONOR w-1/3">
            <FormField
              control={form.control}
              name="rencanaPersalinan.pendonor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pendonor</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih pendonor" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="suami">Suami</SelectItem>
                      <SelectItem value="keluarga">Keluarga</SelectItem>
                      <SelectItem value="teman">Teman</SelectItem>
                      <SelectItem value="lain">Lain-lain</SelectItem>
                      <SelectItem value="tidakAda">Tidak ada</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
      </FormWrapper>
    </section>
  );
}

function RiwayatKehamilanSebelumnya({ form }: any) {
  return (
    <section className="_RIWAYAT_KEHAMILAN_SEBELUMNYA space-y-4">
      <TitleSection
        title="Riwayat Kehamilan Sebelumnya"
        subtitle="Masukkan data pasien"
      />
      <FormWrapper>
        <Row>
          <div className="_G w-1/3">
            <FormField
              control={form.control}
              name="riwayatKehamilanSebelumnya.g"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gravida</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_P w-1/3">
            <FormField
              control={form.control}
              name="riwayatKehamilanSebelumnya.p"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Partus</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_A w-1/3">
            <FormField
              control={form.control}
              name="riwayatKehamilanSebelumnya.a"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Abortus</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_TAHUN w-1/3">
            <FormField
              control={form.control}
              name="riwayatKehamilanSebelumnya.tahun"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tahun</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_JENIS_KELAMIN w-1/3">
            <FormField
              control={form.control}
              name="riwayatKehamilanSebelumnya.jenisKelamin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jenis Kelamin</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih jenis kelamin" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="l">Laki-laki</SelectItem>
                      <SelectItem value="p">Perempuan</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_HASIL_PERSALINAN w-1/3">
            <FormField
              control={form.control}
              name="riwayatKehamilanSebelumnya.hasilPersalinan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hasil Persalinan</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih hasil persalinan" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="lh">LH</SelectItem>
                      <SelectItem value="lm">LM</SelectItem>
                      <SelectItem value="ab">AB</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_JENIS_PERSALINAN w-1/3">
            <FormField
              control={form.control}
              name="riwayatKehamilanSebelumnya.jenisPersalinan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jenis Persalinan</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_KEADAAN_SAAT_LAHIR w-1/3">
            <FormField
              control={form.control}
              name="riwayatKehamilanSebelumnya.keadaanSaatLahir"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keadaan Saat Lahir</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_BBL w-1/3">
            <FormField
              control={form.control}
              name="riwayatKehamilanSebelumnya.bbl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>BBL</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_LAMA_MENYUSUI w-1/3">
            <FormField
              control={form.control}
              name="riwayatKehamilanSebelumnya.lamaMenyusui"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lama Menyusui</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_PENOLONG_PERSALINAN w-1/3">
            <FormField
              control={form.control}
              name="riwayatKehamilanSebelumnya.penolongPersalinan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Penolong Persalinan</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_PENYULIT w-1/3">
            <FormField
              control={form.control}
              name="riwayatKehamilanSebelumnya.penyulit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Penyulit</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_KETERANGAN w-1/3">
            <FormField
              control={form.control}
              name="riwayatKehamilanSebelumnya.keterangan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keterangan</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
      </FormWrapper>
    </section>
  );
}

function Persalinan({ form }: any) {
  return (
    <section className="_PERSALINAN space-y-4">
      <TitleSection title="Persalinan" subtitle="Masukkan data pasien" />
      <FormWrapper>
        <Row>
          <h1 className="w-1/3 font-semibold">Kala I Aktif</h1>
        </Row>
        <Row>
          <div className="_TANGGAL w-1/3">
            <FormField
              control={form.control}
              name="persalinan.kalaIAktif.tanggal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tanggal</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_JAM w-1/3">
            <FormField
              control={form.control}
              name="persalinan.kalaIAktif.tanggal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jam</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <h1 className="w-1/3 font-semibold">Kala II</h1>
        </Row>
        <Row>
          <div className="_TANGGAL w-1/3">
            <FormField
              control={form.control}
              name="persalinan.kalaII.tanggal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tanggal</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_JAM w-1/3">
            <FormField
              control={form.control}
              name="persalinan.kalaII.jam"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jam</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <h1 className="w-1/3 font-semibold">Bayi Lahir</h1>
        </Row>
        <Row>
          <div className="_TANGGAL w-1/3">
            <FormField
              control={form.control}
              name="persalinan.bayiLahir.tanggal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tanggal</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_JAM w-1/3">
            <FormField
              control={form.control}
              name="persalinan.bayiLahir.tanggal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jam</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <h1 className="w-1/3 font-semibold">Plasenta Lahir</h1>
        </Row>
        <Row>
          <div className="_TANGGAL w-1/3">
            <FormField
              control={form.control}
              name="persalinan.plasentaLahir.tanggal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tanggal</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_JAM w-1/3">
            <FormField
              control={form.control}
              name="persalinan.plasentaLahir.tanggal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jam</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_USIA_KEHAMILAN w-1/3">
            <FormField
              control={form.control}
              name="persalinan.usiaKehamilan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Usia Kehamilan</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_USIA_HPHT w-1/3">
            <FormField
              control={form.control}
              name="persalinan.usiaHPHT"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Usia HPHT</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_KEADAAN_IBU w-1/3">
            <FormField
              control={form.control}
              name="persalinan.keadaanIbu"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keadaan Ibu</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_KEADAAN_BAYI w-1/3">
            <FormField
              control={form.control}
              name="persalinan.keadaanBayi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keadaan Bayi</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_BERAT_BAYI w-1/3">
            <FormField
              control={form.control}
              name="persalinan.beratBayi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Berat Bayi</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_PERDARAHAN_KALA_IV w-1/3">
            <FormField
              control={form.control}
              name="persalinan.perdarahanKalaIV"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Perdarahan Kala IV jam Pospartum</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_PRESENTASI w-1/3">
            <FormField
              control={form.control}
              name="persalinan.presentasi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Presentasi</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_TEMPAT w-1/3">
            <FormField
              control={form.control}
              name="persalinan.tempat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tempat</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_PENOLONG w-1/3">
            <FormField
              control={form.control}
              name="persalinan.penolong"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Penolong</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_CARA_PERSALINAN w-1/3">
            <FormField
              control={form.control}
              name="persalinan.caraPersalinan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cara Persalinan</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_MANAJEMEN_AKHIR_KALA_III w-1/3">
            <FormField
              control={form.control}
              name="persalinan.manajemenAktifKalaIII"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Manajemen Aktif Kala III</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_PELAYANAN w-1/3">
            <FormField
              control={form.control}
              name="persalinan.pelayanan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pelayanan</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_INTEGRASI_PROGRAM w-1/3">
            <FormField
              control={form.control}
              name="persalinan.integrasiProgram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Integrasi Program</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_KOMPLIKASI w-1/3">
            <FormField
              control={form.control}
              name="persalinan.komplikasi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Komplikasi</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_DIRUJUK_KE w-1/3">
            <FormField
              control={form.control}
              name="persalinan.dirujukKe"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pelayanan</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_KEADAAN_TIBA w-1/3">
            <FormField
              control={form.control}
              name="persalinan.keadaanTiba"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keadaan Tiba</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_KEADAAN_PULANG w-1/3">
            <FormField
              control={form.control}
              name="persalinan.keadaanPulang"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keadaan Pulang</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_ALAMAT_BERSALIN w-1/3">
            <FormField
              control={form.control}
              name="persalinan.alamatBersalin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alamat Bersalin</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
      </FormWrapper>
    </section>
  );
}

function PemeriksaanPNC({ form }: any) {
  return (
    <section className="_PEMERIKSAAN_PNC space-y-4">
      <TitleSection title="Pemeriksaan PNC" subtitle="Masukkan data pasien" />
      <FormWrapper>
        <Row>
          <div className="_TANGGAL w-1/3">
            <FormField
              control={form.control}
              name="pemeriksaanPNC.tanggal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tanggal</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_HARI_KE w-1/3">
            <FormField
              control={form.control}
              name="pemeriksaanPNC.hariKeKF"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hari ke/ KF</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_TD w-1/3">
            <FormField
              control={form.control}
              name="pemeriksaanPNC.tandaVital.td"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>TD (mmHg)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_SUHU w-1/3">
            <FormField
              control={form.control}
              name="pemeriksaanPNC.tandaVital.suhu"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Suhu C</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="CATAT_DI_BUKU_KIA w-1/3">
            <FormField
              control={form.control}
              name="pemeriksaanPNC.pelayanan.catatDiBukuKIA"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Catat di Buku KIA</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_FE w-1/3">
            <FormField
              control={form.control}
              name="pemeriksaanPNC.pelayanan.fe"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fe (tab/botol)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_VIT_A w-1/3">
            <FormField
              control={form.control}
              name="pemeriksaanPNC.pelayanan.vitA"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vit A*</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_CD4 w-1/4">
            <FormField
              control={form.control}
              name="pemeriksaanPNC.integrasiProgram.cd4"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CD4 (kopi/ml)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_ANTI_MALARIA w-1/4">
            <FormField
              control={form.control}
              name="pemeriksaanPNC.integrasiProgram.antiMalaria"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Anti Malaria**</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_ANTI_TB w-1/4">
            <FormField
              control={form.control}
              name="pemeriksaanPNC.integrasiProgram.antiTB"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Anti TB***</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className=" w-1/4">
            <FormField
              control={form.control}
              name="pemeriksaanPNC.integrasiProgram.fotoThorax"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Foto Thorax(+/-)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_PPP w-1/4">
            <FormField
              control={form.control}
              name="pemeriksaanPNC.komplikasi.ppp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PPP</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_INFEKSI w-1/4">
            <FormField
              control={form.control}
              name="pemeriksaanPNC.komplikasi.infeksi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Infeksi</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_HDK w-1/4">
            <FormField
              control={form.control}
              name="pemeriksaanPNC.komplikasi.hdk"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>HDK</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_LAINNYA w-1/4">
            <FormField
              control={form.control}
              name="pemeriksaanPNC.komplikasi.lainnya"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lainnya</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_TIBA w-1/3">
            <FormField
              control={form.control}
              name="pemeriksaanPNC.keadaan.tiba"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keadaan Tiba</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_PULANG w-1/3">
            <FormField
              control={form.control}
              name="pemeriksaanPNC.keadaan.pulang"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keadaan Pulang</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
      </FormWrapper>
    </section>
  );
}

function KunjunganNifas({ form }: any) {
  return (
    <section className="_KUNJUNGAN_NIFAS space-y-4">
      <TitleSection
        title="Kunjungan Nifas (KF)"
        subtitle="Masukkan data pasien"
      />
      <FormWrapper>
        <Row>
          <div className="_TANGGAL my-auto w-[200px]">
            <h1 className="w-1/3 font-semibold">MAL</h1>
          </div>
          <div className="_RENCANA w-1/3">
            <FormField
              control={form.control}
              name="kunjunganNifas.mal.rencana"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rencana</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_PELAKSANAAN w-1/3">
            <FormField
              control={form.control}
              name="kunjunganNifas.mal.pelaksanaan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pelaksanaan</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_TANGGAL my-auto w-[200px]">
            <h1 className="w-1/3 font-semibold">KONDOM</h1>
          </div>
          <div className="_RENCANA w-1/3">
            <FormField
              control={form.control}
              name="kunjunganNifas.kondom.rencana"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rencana</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_PELAKSANAAN w-1/3">
            <FormField
              control={form.control}
              name="kunjunganNifas.kondom.pelaksanaan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pelaksanaan</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_TANGGAL my-auto w-[200px]">
            <h1 className="w-1/3 font-semibold">PIL</h1>
          </div>
          <div className="_RENCANA w-1/3">
            <FormField
              control={form.control}
              name="kunjunganNifas.pil.rencana"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rencana</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_PELAKSANAAN w-1/3">
            <FormField
              control={form.control}
              name="kunjunganNifas.pil.pelaksanaan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pelaksanaan</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_TANGGAL my-auto w-[200px]">
            <h1 className="w-1/3 font-semibold">SUNTIK</h1>
          </div>
          <div className="_RENCANA w-1/3">
            <FormField
              control={form.control}
              name="kunjunganNifas.suntik.rencana"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rencana</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_PELAKSANAAN w-1/3">
            <FormField
              control={form.control}
              name="kunjunganNifas.suntik.pelaksanaan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pelaksanaan</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_TANGGAL my-auto w-[200px]">
            <h1 className="w-1/3 font-semibold">AKDR</h1>
          </div>
          <div className="_RENCANA w-1/3">
            <FormField
              control={form.control}
              name="kunjunganNifas.akdr.rencana"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rencana</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_PELAKSANAAN w-1/3">
            <FormField
              control={form.control}
              name="kunjunganNifas.akdr.pelaksanaan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pelaksanaan</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_TANGGAL my-auto w-[200px]">
            <h1 className="w-1/3 font-semibold">INPLANT</h1>
          </div>
          <div className="_RENCANA w-1/3">
            <FormField
              control={form.control}
              name="kunjunganNifas.inplant.rencana"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rencana</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_PELAKSANAAN w-1/3">
            <FormField
              control={form.control}
              name="kunjunganNifas.inplant.pelaksanaan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pelaksanaan</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_TANGGAL my-auto w-[200px]">
            <h1 className="w-1/3 font-semibold">MOW</h1>
          </div>
          <div className="_RENCANA w-1/3">
            <FormField
              control={form.control}
              name="kunjunganNifas.mow.rencana"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rencana</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_PELAKSANAAN w-1/3">
            <FormField
              control={form.control}
              name="kunjunganNifas.mow.pelaksanaan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pelaksanaan</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
        <Row>
          <div className="_TANGGAL my-auto w-[200px]">
            <h1 className="w-1/3 font-semibold">MOP</h1>
          </div>
          <div className="_RENCANA w-1/3">
            <FormField
              control={form.control}
              name="kunjunganNifas.mop.rencana"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rencana</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_PELAKSANAAN w-1/3">
            <FormField
              control={form.control}
              name="kunjunganNifas.mop.pelaksanaan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pelaksanaan</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
      </FormWrapper>
    </section>
  );
}

function MendeteksiFaktroResikoDanResikoTinggi({ form }: any) {
  return (
    <section className="_KUNJUNGAN_NIFAS space-y-4">
      <TitleSection
        title="Kunjungan Nifas (KF)"
        subtitle="Masukkan data pasien"
      />
      <FormWrapper>
        <Row>
          <div className="_UMUR w-1/3">
            <FormField
              control={form.control}
              name="mendeteksiFaktorResikoDanResikoTinggi.faktorResiko.umur"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel className="text-md">
                    Umur &lt; 20 tahun / &gt; 35 tahun
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex h-10 items-center space-x-2"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Ya</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
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
          <div className="_KPD w-1/3">
            <FormField
              control={form.control}
              name="mendeteksiFaktorResikoDanResikoTinggi.resikoTinggi.kpd"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel className="text-md">KPD</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex h-10 items-center space-x-2"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Ya</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
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
        </Row>
        <Row>
          <div className="_PARITAS w-1/3">
            <FormField
              control={form.control}
              name="mendeteksiFaktorResikoDanResikoTinggi.faktorResiko.paritas"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel className="text-md">Paritas &gt; 4x</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex h-10 items-center space-x-2"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Ya</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
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
          <div className="_PERDARAHAN w-1/3">
            <FormField
              control={form.control}
              name="mendeteksiFaktorResikoDanResikoTinggi.resikoTinggi.perdarahan"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel className="text-md">Perdarahan</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex h-10 items-center space-x-2"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Ya</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
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
        </Row>
        <Row>
          <div className="_SPASING w-1/3">
            <FormField
              control={form.control}
              name="mendeteksiFaktorResikoDanResikoTinggi.faktorResiko.spasing"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel className="text-md">
                    Spasing &lt; 2 tahun
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex h-10 items-center space-x-2"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Ya</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
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
          <div className="_INFEKSI w-1/3">
            <FormField
              control={form.control}
              name="mendeteksiFaktorResikoDanResikoTinggi.resikoTinggi.infeksi"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel className="text-md">Infeksi</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex h-10 items-center space-x-2"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Ya</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
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
        </Row>
        <Row>
          <div className="_BB w-1/3">
            <FormField
              control={form.control}
              name="mendeteksiFaktorResikoDanResikoTinggi.faktorResiko.bb"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel className="text-md">
                    BB &lt; 38 kg / LILA &lt; 23,5 cm / penambahan BB &lt; 9 kg
                    selama hamil
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex h-10 items-center space-x-2"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Ya</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
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
          <div className="_PREEKLAMSI w-1/3">
            <FormField
              control={form.control}
              name="mendeteksiFaktorResikoDanResikoTinggi.resikoTinggi.preeklamsi"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel className="text-md">Infeksi</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex h-10 items-center space-x-2"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Ya</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
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
        </Row>
        <Row>
          <div className="_TB w-1/3">
            <FormField
              control={form.control}
              name="mendeteksiFaktorResikoDanResikoTinggi.faktorResiko.tb"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel className="text-md">
                    TB &lt; 145 cm, Scoliosis, Khiposis
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex h-10 items-center space-x-2"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Ya</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
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
          <div className="_HB w-1/3">
            <FormField
              control={form.control}
              name="mendeteksiFaktorResikoDanResikoTinggi.resikoTinggi.hb"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel className="text-md">HB &lt; 8gr %</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex h-10 items-center space-x-2"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Ya</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
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
        </Row>
        <Row>
          <div className="_SAKIT_KRONIS w-1/3">
            <FormField
              control={form.control}
              name="mendeteksiFaktorResikoDanResikoTinggi.faktorResiko.sakitKronis"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel className="text-md">
                    Sedang/pernah sakit kronis: TB, kel.Jantung hati, ginjal,
                    psikologis, SLE, DM, Hipertensi
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex h-10 items-center space-x-2"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Ya</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
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
          <div className="_KELAINAN_LETAK w-1/3">
            <FormField
              control={form.control}
              name="mendeteksiFaktorResikoDanResikoTinggi.resikoTinggi.kelainanLetak"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel className="text-md">
                    Kelainan Letak (Sungsang/Lintang)
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex h-10 items-center space-x-2"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Ya</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
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
        </Row>
        <Row>
          <div className="_ABORTUS w-1/3">
            <FormField
              control={form.control}
              name="mendeteksiFaktorResikoDanResikoTinggi.faktorResiko.abortus"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel className="text-md">
                    Pernah abortus berulang, KET, Mola Hidati-dosa, APP, KPD,
                    Bayi Cacat Kongenital
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex h-10 items-center space-x-2"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Ya</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
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
          <div className="_ANAK_BESAR w-1/3">
            <FormField
              control={form.control}
              name="mendeteksiFaktorResikoDanResikoTinggi.resikoTinggi.anakBesarHidramnion"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel className="text-md">
                    Anak Besar Hidramnion, Gemeli
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex h-10 items-center space-x-2"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Ya</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
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
        </Row>
        <Row>
          <div className="_SC w-1/3">
            <FormField
              control={form.control}
              name="mendeteksiFaktorResikoDanResikoTinggi.faktorResiko.sc"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel className="text-md">
                    Riwayat SC, Forcep V Ekstrasi
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex h-10 items-center space-x-2"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Ya</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
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
          <div className="_ANCAMAN_PREMATUR w-1/3">
            <FormField
              control={form.control}
              name="mendeteksiFaktorResikoDanResikoTinggi.resikoTinggi.ancamanPrematur"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel className="text-md">Ancaman Prematur</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex h-10 items-center space-x-2"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Ya</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
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
        </Row>
        <Row>
          <div className="_RIWAYAT_HPP w-1/3">
            <FormField
              control={form.control}
              name="mendeteksiFaktorResikoDanResikoTinggi.faktorResiko.hpp"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel className="text-md">
                    Riwayat HPP, Infeksi Nifas
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex h-10 items-center space-x-2"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Ya</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
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
          <div className="_INFEKSI_DBD w-1/3">
            <FormField
              control={form.control}
              name="mendeteksiFaktorResikoDanResikoTinggi.resikoTinggi.infeksiDBD"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel className="text-md">
                    Infeksi (DBD, Thipoid, Sepsis)
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex h-10 items-center space-x-2"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Ya</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
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
        </Row>
        <Row>
          <div className="_RIWAYAT_BAYI_BESAR w-1/3">
            <FormField
              control={form.control}
              name="mendeteksiFaktorResikoDanResikoTinggi.faktorResiko.bayiBesar"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel className="text-md">
                    Riwayat bayi besar &gt; 400 gr
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex h-10 items-center space-x-2"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Ya</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
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
          <div className="_DISTOCIA w-1/3">
            <FormField
              control={form.control}
              name="mendeteksiFaktorResikoDanResikoTinggi.resikoTinggi.distocia"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel className="text-md">Distocia</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex h-10 items-center space-x-2"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Ya</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
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
        </Row>
        <Row>
          <div className="_HB w-1/3">
            <FormField
              control={form.control}
              name="mendeteksiFaktorResikoDanResikoTinggi.faktorResiko.hb"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel className="text-md">HB &lt; 11 gr %</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex h-10 items-center space-x-2"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Ya</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
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
          <div className="_DUA_FAKTOR_RESIKO w-1/3">
            <FormField
              control={form.control}
              name="mendeteksiFaktorResikoDanResikoTinggi.resikoTinggi.terdapat2FaktorResiko"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel className="text-md">
                    Terdapat &gt; 2 Faktor Resiko
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex h-10 items-center space-x-2"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Ya</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
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
        </Row>
        <Row>
          <div className="_DITEMUKAN_TANGGAL w-1/3">
            <FormField
              control={form.control}
              name="kunjunganNifas.resikoTinggi.ditemukanTanggal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ditemukan Tanggal</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="_JENIS_RESIKO w-1/3">
            <FormField
              control={form.control}
              name="kunjunganNifas.resikoTinggi.jenisResiko"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jenis Resiko</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </Row>
      </FormWrapper>
    </section>
  );
}
