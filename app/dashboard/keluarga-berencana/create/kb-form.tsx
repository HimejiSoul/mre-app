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
        await createPatient(data, id_layanan);
        router.push(`/dashboard/keluarga-berencana/${id}/soap`);
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
        <OtherInformation form={form} />
        <Skrining form={form} />
        <Hasil form={form} />
        <PenapisanKB form={form} />
        <ButtonSubmitForm isLoading={isLoading} />
      </form>
    </Form>
  );
}

// const GeneralInformation = ({ form }: any) => {
//   return (
//     <div>
//       {/* General Information */}
//       <div>
//         <p className={` ${urbanist.className} text-xl font-bold`}>
//           General Information
//         </p>
//         <p className="mb-2 block text-sm font-medium text-[#597395]">
//           Masukkan data pasien
//         </p>
//       </div>

//       <div className="mb-8 flex w-full flex-col gap-3 rounded-md bg-white px-6 py-4">
//         {/* kolom 1 */}
//         <div className="flex w-full gap-4">
//           <div className="w-1/3">
//             <FormField
//               control={form.control}
//               name="generalInformation.noFaskes"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Nomor Faskes</FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="Provinsi | Kab/Kota | Faskes"
//                       type="number"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           {/* <hr className="h-4/5 border border-[#C5D3E3]" /> */}
//           <div className="w-1/3">
//             <FormField
//               control={form.control}
//               name="generalInformation.noSeriKartu"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Nomor Seri Kartu</FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="Nomor Urut | Tahun"
//                       type="number"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           {/* <hr className="h-4/5 border border-[#C5D3E3] " /> */}
//           <div className="w-1/3">
//             <FormField
//               control={form.control}
//               name="generalInformation.tglDatang"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Tanggal Datang</FormLabel>
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <FormControl>
//                         <Button
//                           variant={'outline'}
//                           className={cn(
//                             'w-full pl-3 text-left font-normal',
//                             !field.value && 'text-muted-foreground',
//                           )}
//                         >
//                           {field.value ? (
//                             format(field.value, 'PPP')
//                           ) : (
//                             <span className="text-[#A9BCD6]">Pick a date</span>
//                           )}
//                           <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                         </Button>
//                       </FormControl>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0" align="start">
//                       <CalendarLahir
//                         mode="single"
//                         selected={field.value}
//                         onSelect={field.onChange}
//                         disabled={(date) =>
//                           date > new Date() || date < new Date('1900-01-01')
//                         }
//                         initialFocus
//                       />
//                     </PopoverContent>
//                   </Popover>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//         </div>

//         {/* kolom 2 */}
//         <div className="flex w-full gap-4">
//           <div className="w-7/12">
//             <FormField
//               control={form.control}
//               name="generalInformation.namaPeserta"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Nama Peserta</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Nama Peserta" type="text" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           <div className="w-3/12">
//             <FormField
//               control={form.control}
//               name="generalInformation.tglLahir"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Tanggal Lahir</FormLabel>
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <FormControl>
//                         <Button
//                           variant={'outline'}
//                           className={cn(
//                             'w-full pl-3 text-left font-normal',
//                             !field.value && 'text-muted-foreground',
//                           )}
//                         >
//                           {field.value ? (
//                             format(field.value, 'PPP')
//                           ) : (
//                             <span className="text-[#A9BCD6]">Pick a date</span>
//                           )}
//                           <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                         </Button>
//                       </FormControl>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0" align="start">
//                       <Calendar
//                         mode="single"
//                         selected={field.value}
//                         onSelect={field.onChange}
//                         disabled={(date) =>
//                           date > new Date() || date < new Date('1900-01-01')
//                         }
//                         initialFocus
//                       />
//                     </PopoverContent>
//                   </Popover>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           <div className="w-2/12">
//             <FormField
//               control={form.control}
//               name="generalInformation.usia"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Usia</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Usia" type="number" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//         </div>

//         {/* kolom 3 */}
//         <div className="flex w-full gap-4">
//           <div className="w-7/12">
//             <FormField
//               control={form.control}
//               name="generalInformation.namaPasangan"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Nama Pasangan</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Nama Peserta" type="text" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           <div className="w-2/12">
//             <FormField
//               control={form.control}
//               name="generalInformation.jenisPasangan"
//               render={({ field }) => (
//                 <FormItem>
//                   <Select
//                     onValueChange={field.onChange}
//                     defaultValue={field.value}
//                   >
//                     <FormLabel className="text-white">Pasangan</FormLabel>
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Suami" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       <SelectItem value="suami">Suami</SelectItem>
//                       <SelectItem value="istri">Istri</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           <div className="w-3/12">
//             <FormField
//               control={form.control}
//               name="generalInformation.pendidikanAkhir"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Pendidikan Terakhir</FormLabel>
//                   <Select
//                     onValueChange={field.onChange}
//                     defaultValue={field.value}
//                   >
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Pendidikan" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       <SelectItem value="Tidak Tamat SD">
//                         Tidak Tamat SD
//                       </SelectItem>
//                       <SelectItem value="Tamat SLTA">Tamat SLTA</SelectItem>
//                       <SelectItem value="Tamat SD">Tamat SD</SelectItem>
//                       <SelectItem value="Tamat PT">Tamat PT</SelectItem>
//                       <SelectItem value="Tamat SLTP">Tamat SLTP</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//         </div>

//         {/* kolom 4 */}
//         <div className="flex w-full gap-4">
//           <div className="w-6/12">
//             <FormField
//               control={form.control}
//               name="generalInformation.alamat"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Alamat</FormLabel>
//                   <FormControl>
//                     <Textarea
//                       placeholder="Jl. Soekarno No. 52"
//                       className="resize-none"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           <div className="w-4/12">
//             <FormField
//               control={form.control}
//               name="generalInformation.pekerjaanPasangan"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Pekerjaan</FormLabel>
//                   <Select
//                     onValueChange={field.onChange}
//                     defaultValue={field.value}
//                   >
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Pekerjaan" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       <SelectItem value="Pegawai Pemerintahan">
//                         Pegawai Pemerintahan
//                       </SelectItem>
//                       <SelectItem value="Pegawai Swasta">
//                         Pegawai Swasta
//                       </SelectItem>
//                       <SelectItem value="Petani">Petani</SelectItem>
//                       <SelectItem value="Nelayan">Nelayan</SelectItem>
//                       <SelectItem value="Lain-Lain">Lain-Lain</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//         </div>

//         {/* kolom 5 */}
//         <div className="flex w-full gap-4">
//           <div className="w-full">
//             <FormField
//               control={form.control}
//               name="generalInformation.statusJkn"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Status JKN</FormLabel>
//                   <Select
//                     onValueChange={field.onChange}
//                     defaultValue={field.value}
//                   >
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Status JKN" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       <SelectItem value="guru">Guru</SelectItem>
//                       <SelectItem value="karyawanNegri">
//                         Karyawan Negri
//                       </SelectItem>
//                       <SelectItem value="karyawanSwasta">
//                         Karyawan Swasta
//                       </SelectItem>
//                       <SelectItem value="buruh">Buruh</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const OtherInformation = ({ form }: any) => {
//   return (
//     <div>
//       <>
//         <p className={` ${urbanist.className} text-xl font-bold`}>
//           Other Information
//         </p>
//         <p className="mb-2 block text-sm font-medium text-[#597395]">
//           Masukkan data pasien
//         </p>
//       </>

//       <div className="mb-8 flex w-full flex-col gap-3 rounded-md bg-white px-6 py-4">
//         {/* kolom 1 */}
//         <div className="flex h-fit w-full gap-4">
//           <div className="w-1/6">
//             <FormField
//               control={form.control}
//               name="otherInformation.jmlAnakHidup.jmlAnakLaki"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Jumlah Anak Hidup</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Laki-Laki" type="number" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           <div className="w-1/6">
//             <FormField
//               control={form.control}
//               name="otherInformation.jmlAnakHidup.jmlAnakPr"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-white">
//                     Jumlah Anak Hidup
//                   </FormLabel>
//                   <FormControl>
//                     <Input placeholder="Perempuan" type="number" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           {/* <hr className="h-4/5 border border-[#C5D3E3]" /> */}
//           <div className="w-1/6">
//             <FormField
//               control={form.control}
//               name="otherInformation.umurAnakKecil.umurKecilLaki"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Umur Anak Terkecil</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Laki-Laki" type="number" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           <div className="w-1/6">
//             <FormField
//               control={form.control}
//               name="otherInformation.umurAnakKecil.umurKecilPr"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-white">
//                     Umur Anak Terkecil
//                   </FormLabel>
//                   <FormControl>
//                     <Input placeholder="Perempuan" type="number" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           {/* <hr className="h-4/5 border border-[#C5D3E3] " /> */}
//           <div className="w-2/6">
//             <FormField
//               control={form.control}
//               name="otherInformation.caraKBTerakhir"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Cara KB Terakhir</FormLabel>
//                   <Select
//                     onValueChange={field.onChange}
//                     defaultValue={field.value}
//                   >
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Cara KB Terakhir" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       <SelectItem value="IUD">IUD</SelectItem>
//                       <SelectItem value="MOW">MOW</SelectItem>
//                       <SelectItem value="MOP">MOP</SelectItem>
//                       <SelectItem value="Random">Random</SelectItem>
//                       <SelectItem value="Implant">Implant</SelectItem>
//                       <SelectItem value="Suntikan">Suntikan</SelectItem>
//                       <SelectItem value="Pil">Pil</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//         </div>
//         {/* kolom 2 */}
//         <div className="flex h-fit w-full gap-4">
//           <div className="w-full">
//             <FormField
//               control={form.control}
//               name="otherInformation.statusPesertaKB"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Status Peserta KB</FormLabel>
//                   <Select
//                     onValueChange={field.onChange}
//                     defaultValue={field.value}
//                   >
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Status Peserta KB" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       <SelectItem value="Baru Pertama Kali">
//                         Baru Pertama Kali
//                       </SelectItem>
//                       <SelectItem value="Pernah pakai alat KB berhenti sesudah bersalin/keguguran">
//                         Pernah pakai alat KB berhenti sesudah bersalin/keguguran
//                       </SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const alatKontrasepsi = [
//   {
//     id: 'IUD',
//     label: 'IUD',
//   },
//   {
//     id: 'MOW',
//     label: 'MOW',
//   },
//   {
//     id: 'MOP',
//     label: 'MOP',
//   },
//   {
//     id: 'Suntikan',
//     label: 'Suntikan',
//   },
//   {
//     id: 'Pil',
//     label: 'Pil',
//   },
//   {
//     id: 'Inplanon',
//     label: 'Inplanon',
//   },
//   {
//     id: 'Kondom',
//     label: 'Kondom',
//   },
//   {
//     id: 'ObatVaginal',
//     label: 'Obat Vaginal',
//   },
//   {
//     id: 'Implant',
//     label: 'Implant',
//   },
// ] as const;

// const Skrining = ({ form }: any) => {
//   return (
//     <div>
//       <>
//         <p className={` ${urbanist.className} text-xl font-bold`}>
//           Penapisan (skrining)
//         </p>
//         <p className="mb-2 block text-sm font-medium text-[#597395]">
//           Dilakukan untuk menentukan alat kontrasepsi yang dapat digunakan calon
//           peserta KB. Hanya boleh dilakukan oleh pelaksana yang telah dilatih
//           dalam pelayanan kontrasepsi.
//         </p>
//       </>

//       <div className="mb-8 flex w-full flex-col gap-3 rounded-md bg-white px-6 py-4">
//         <p className={`${urbanist.className} font-semibold`}>Anamsesa</p>
//         {/* kolom 1 */}
//         <div className="flex h-fit w-full gap-4">
//           <div className="w-1/2">
//             <FormField
//               control={form.control}
//               name="skrining.anamsesa.haidTerakhir"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Haid Terakhir</FormLabel>
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <FormControl>
//                         <Button
//                           variant={'outline'}
//                           className={cn(
//                             'w-full pl-3 text-left font-normal',
//                             !field.value && 'text-muted-foreground',
//                           )}
//                         >
//                           {field.value ? (
//                             format(field.value, 'PPP')
//                           ) : (
//                             <span className="text-[#A9BCD6]">Pick a date</span>
//                           )}
//                           <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                         </Button>
//                       </FormControl>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0" align="start">
//                       <Calendar
//                         mode="single"
//                         selected={field.value}
//                         onSelect={field.onChange}
//                         disabled={(date) =>
//                           date > new Date() || date < new Date('1900-01-01')
//                         }
//                         initialFocus
//                       />
//                     </PopoverContent>
//                   </Popover>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           <div className="w-1/3">
//             <FormField
//               control={form.control}
//               name="skrining.anamsesa.hamil"
//               render={({ field }) => (
//                 <FormItem className="space-y-3">
//                   <FormLabel>Hamil/Diduga Hamil</FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-row"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="true" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Iya</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="false" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Tidak</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//         </div>

//         {/* kolom 2 */}
//         <div className="flex h-fit w-full flex-col">
//           <p className="text-xs font-semibold">Jumlah GPA</p>
//           <div className="flex h-fit w-full gap-4">
//             <div className="w-1/6">
//               <FormField
//                 control={form.control}
//                 name="skrining.anamsesa.jumlahGpa.gravida"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Gravida (Kehamilan)</FormLabel>
//                     <FormControl>
//                       <Input placeholder="00" type="number" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="w-1/6">
//               <FormField
//                 control={form.control}
//                 name="skrining.anamsesa.jumlahGpa.partus"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Partus (Persalinan)</FormLabel>
//                     <FormControl>
//                       <Input placeholder="00" type="number" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="w-1/6">
//               <FormField
//                 control={form.control}
//                 name="skrining.anamsesa.jumlahGpa.abortus"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Abortus (Keguguran)</FormLabel>
//                     <FormControl>
//                       <Input placeholder="00" type="number" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//           </div>
//         </div>

//         {/* kolom 3 */}
//         <div className="flex gap-5">
//           <div className="flex h-fit w-1/2 flex-col">
//             <p className="text-xs font-semibold">Riwayat Penyakit Sebelumnya</p>
//             <ul className=" ml-4 flex list-outside list-disc flex-col gap-1">
//               {/* Sakit Kuning */}
//               <FormField
//                 control={form.control}
//                 name="skrining.anamsesa.riwayatPenyakitSebelumnya.sakitKuning"
//                 render={({ field }) => (
//                   <FormItem className=" my-3 flex flex-col">
//                     <div className="flex flex-row items-center">
//                       <FormLabel className="w-full pr-10 ">
//                         <li>Sakit Kuning</li>
//                       </FormLabel>
//                       <FormControl>
//                         <RadioGroup
//                           onValueChange={field.onChange}
//                           defaultValue={field.value}
//                           className="flex flex-row"
//                         >
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="true" />
//                             </FormControl>
//                             <FormLabel className="font-normal">Iya</FormLabel>
//                           </FormItem>
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="false" />
//                             </FormControl>
//                             <FormLabel className="font-normal">Tidak</FormLabel>
//                           </FormItem>
//                         </RadioGroup>
//                       </FormControl>
//                     </div>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               {/* Pervaaginam */}
//               <FormField
//                 control={form.control}
//                 name="skrining.anamsesa.riwayatPenyakitSebelumnya.perdarahanVaginam"
//                 render={({ field }) => (
//                   <FormItem className="my-3 flex flex-col ">
//                     <div className="flex flex-row items-center">
//                       <FormLabel className=" w-full pr-10">
//                         <li>
//                           Perdarahan pervaginam yang tidak diketahui sebabnya
//                         </li>
//                       </FormLabel>
//                       <FormControl>
//                         <RadioGroup
//                           onValueChange={field.onChange}
//                           defaultValue={field.value}
//                           className="flex flex-row"
//                         >
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="true" />
//                             </FormControl>
//                             <FormLabel className="font-normal">Iya</FormLabel>
//                           </FormItem>
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="false" />
//                             </FormControl>
//                             <FormLabel className="font-normal">Tidak</FormLabel>
//                           </FormItem>
//                         </RadioGroup>
//                       </FormControl>
//                     </div>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               {/* Keputihan Lama */}
//               <FormField
//                 control={form.control}
//                 name="skrining.anamsesa.riwayatPenyakitSebelumnya.keputihanLama"
//                 render={({ field }) => (
//                   <FormItem className="my-3 flex flex-col">
//                     <div className="items.center flex flex-row">
//                       <FormLabel className=" w-full pr-10">
//                         <li>Keputihan Lama </li>
//                       </FormLabel>
//                       <FormControl>
//                         <RadioGroup
//                           onValueChange={field.onChange}
//                           defaultValue={field.value}
//                           className="flex flex-row"
//                         >
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="true" />
//                             </FormControl>
//                             <FormLabel className="font-normal">Iya</FormLabel>
//                           </FormItem>
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="false" />
//                             </FormControl>
//                             <FormLabel className="font-normal">Tidak</FormLabel>
//                           </FormItem>
//                         </RadioGroup>
//                       </FormControl>
//                     </div>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               {/* Tumor */}
//               <FormField
//                 control={form.control}
//                 name="skrining.anamsesa.riwayatPenyakitSebelumnya.tumor"
//                 render={({ field }) => (
//                   <FormItem className="my-3 flex flex-col">
//                     <div className="items.center flex flex-row">
//                       <FormLabel className=" w-full pr-10">
//                         <li>Tumor </li>
//                       </FormLabel>
//                       <FormControl>
//                         <RadioGroup
//                           onValueChange={field.onChange}
//                           defaultValue={field.value}
//                           className="flex flex-row"
//                         >
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="true" />
//                             </FormControl>
//                             <FormLabel className="font-normal">Iya</FormLabel>
//                           </FormItem>
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="false" />
//                             </FormControl>
//                             <FormLabel className="font-normal">Tidak</FormLabel>
//                           </FormItem>
//                         </RadioGroup>
//                       </FormControl>
//                     </div>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </ul>
//           </div>
//           <ul className="my-auto ml-4 flex h-fit w-1/2 list-outside list-disc flex-col gap-1 rounded-md border-2 border-[#DF645F] px-7 py-3 text-xs text-[#DF645F]">
//             <li>
//               Bila semua jawaban <b>TIDAK</b>, dapat diberikan salah satu dari
//               cara KB (Kecuali IUD dan MOW).
//             </li>
//             <li>
//               Bila salah satu jawaban <b>YA</b>, rujuk ke Dokter.
//             </li>
//           </ul>
//         </div>

//         <p className={`${urbanist.className} font-semibold`}>Pemeriksaan</p>

//         <div className="flex h-fit w-1/2 flex-col gap-1 pr-5 ">
//           {/* Keadaan Umum */}
//           <FormField
//             control={form.control}
//             name="skrining.pemeriksaan.keadaanUmum"
//             render={({ field }) => (
//               <FormItem className=" my-3 flex flex-col">
//                 <div className="flex flex-row items-center">
//                   <FormLabel className="w-full pr-10 ">Keadaan Umum</FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-row"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="Baik" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Baik</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="Sedang" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Sedang</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="Kurang" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Kurang</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           {/* Kolom BB & TD */}
//           <div className="flex flex-row gap-2">
//             <div className="w-1/2">
//               <FormField
//                 control={form.control}
//                 name="skrining.pemeriksaan.tekananDarah"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Tekanan Darah</FormLabel>
//                     <FormControl>
//                       <Input placeholder="00" type="number" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <div className="w-1/2">
//               <FormField
//                 control={form.control}
//                 name="skrining.pemeriksaan.beratBadan"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Berat Badan</FormLabel>
//                     <FormControl>
//                       <Input placeholder="00" type="number" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//           </div>

//           {/* Posisi Rahim */}
//           <FormField
//             control={form.control}
//             name="skrining.pemeriksaan.posisiRahim"
//             render={({ field }) => (
//               <FormItem className="my-3 flex flex-col">
//                 <div className="items.center flex flex-row">
//                   <FormLabel className=" w-full pr-10">Posisi Rahim</FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-row"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="Retrofleksi" />
//                         </FormControl>
//                         <FormLabel className="font-normal">
//                           Retrofleksi
//                         </FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="Anterfleksi" />
//                         </FormControl>
//                         <FormLabel className="font-normal">
//                           Anterfleksi
//                         </FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>

//         <div className="flex gap-5">
//           <div className="flex h-fit w-1/2 flex-col">
//             <p className="text-xs font-semibold">
//               Sebelum dilakukan pemasangan IUD atau MOW dilakukan pemeriksaan
//               dalam:
//             </p>
//             <ul className=" ml-4 flex list-outside list-disc flex-col gap-1">
//               {/* Tanda Radang*/}
//               <FormField
//                 control={form.control}
//                 name="skrining.pemeriksaan.tandaRadang"
//                 render={({ field }) => (
//                   <FormItem className=" my-3 flex flex-col">
//                     <div className="flex flex-row items-center">
//                       <FormLabel className="w-full pr-10 ">
//                         <li>Tanda-Tanda Radang</li>
//                       </FormLabel>
//                       <FormControl>
//                         <RadioGroup
//                           onValueChange={field.onChange}
//                           defaultValue={field.value}
//                           className="flex flex-row"
//                         >
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="true" />
//                             </FormControl>
//                             <FormLabel className="font-normal">Iya</FormLabel>
//                           </FormItem>
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="false" />
//                             </FormControl>
//                             <FormLabel className="font-normal">Tidak</FormLabel>
//                           </FormItem>
//                         </RadioGroup>
//                       </FormControl>
//                     </div>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               {/* Tumor */}
//               <FormField
//                 control={form.control}
//                 name="skrining.pemeriksaan.tumor"
//                 render={({ field }) => (
//                   <FormItem className="my-3 flex flex-col ">
//                     <div className="flex flex-row items-center">
//                       <FormLabel className=" w-full pr-10">
//                         <li>Tumor/ Keganasan Ginekologi</li>
//                       </FormLabel>
//                       <FormControl>
//                         <RadioGroup
//                           onValueChange={field.onChange}
//                           defaultValue={field.value}
//                           className="flex flex-row"
//                         >
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="true" />
//                             </FormControl>
//                             <FormLabel className="font-normal">Iya</FormLabel>
//                           </FormItem>
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="false" />
//                             </FormControl>
//                             <FormLabel className="font-normal">Tidak</FormLabel>
//                           </FormItem>
//                         </RadioGroup>
//                       </FormControl>
//                     </div>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </ul>
//           </div>
//           <ul className="my-auto ml-4 flex h-fit w-1/2 list-outside list-disc flex-col gap-1 rounded-md border-2 border-[#DF645F] px-7 py-3 text-xs text-[#DF645F]">
//             <li>
//               Bila semua jawaban <b>TIDAK</b>, pemasangan IUD atau tindakan MOW
//               dapat dilakukan.
//             </li>
//             <li>
//               Bila salah satu jawaban <b>YA</b>, rujuk ke Dokter.
//             </li>
//           </ul>
//         </div>

//         <div className="flex gap-5">
//           <div className="flex h-fit w-1/2 flex-col">
//             <p className="text-xs font-semibold">Pemeriksaan Tambahan:</p>
//             <p className="text-[9px] font-medium text-[#6F90BA]">
//               (Khusus untuk calon MOP dan MOW)
//             </p>
//             <ul className=" ml-4 flex list-outside list-disc flex-col gap-1">
//               {/* Tanda Diabet*/}
//               <FormField
//                 control={form.control}
//                 name="skrining.pemeriksaan.tambahan.tandaDiabet"
//                 render={({ field }) => (
//                   <FormItem className=" my-3 flex flex-col">
//                     <div className="flex flex-row items-center">
//                       <FormLabel className="w-full pr-10 ">
//                         <li>Tanda-Tanda Diabetes</li>
//                       </FormLabel>
//                       <FormControl>
//                         <RadioGroup
//                           onValueChange={field.onChange}
//                           defaultValue={field.value}
//                           className="flex flex-row"
//                         >
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="true" />
//                             </FormControl>
//                             <FormLabel className="font-normal">Iya</FormLabel>
//                           </FormItem>
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="false" />
//                             </FormControl>
//                             <FormLabel className="font-normal">Tidak</FormLabel>
//                           </FormItem>
//                         </RadioGroup>
//                       </FormControl>
//                     </div>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               {/* Kelainan Pembekuan Darah */}
//               <FormField
//                 control={form.control}
//                 name="skrining.pemeriksaan.tambahan.radangOrchild"
//                 render={({ field }) => (
//                   <FormItem className="my-3 flex flex-col ">
//                     <div className="flex flex-row items-center">
//                       <FormLabel className=" w-full pr-10">
//                         <li>Radang Orchild/epididymitish</li>
//                       </FormLabel>
//                       <FormControl>
//                         <RadioGroup
//                           onValueChange={field.onChange}
//                           defaultValue={field.value}
//                           className="flex flex-row"
//                         >
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="true" />
//                             </FormControl>
//                             <FormLabel className="font-normal">Iya</FormLabel>
//                           </FormItem>
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="false" />
//                             </FormControl>
//                             <FormLabel className="font-normal">Tidak</FormLabel>
//                           </FormItem>
//                         </RadioGroup>
//                       </FormControl>
//                     </div>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               {/* Radang Orchild */}
//               <FormField
//                 control={form.control}
//                 name="skrining.pemeriksaan.tambahan.kelainanPembekuanDarah"
//                 render={({ field }) => (
//                   <FormItem className="my-3 flex flex-col ">
//                     <div className="flex flex-row items-center">
//                       <FormLabel className=" w-full pr-10">
//                         <li>Kelainan pembekuan darah</li>
//                       </FormLabel>
//                       <FormControl>
//                         <RadioGroup
//                           onValueChange={field.onChange}
//                           defaultValue={field.value}
//                           className="flex flex-row"
//                         >
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="true" />
//                             </FormControl>
//                             <FormLabel className="font-normal">Iya</FormLabel>
//                           </FormItem>
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="false" />
//                             </FormControl>
//                             <FormLabel className="font-normal">Tidak</FormLabel>
//                           </FormItem>
//                         </RadioGroup>
//                       </FormControl>
//                     </div>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               {/* Tumor */}
//               <FormField
//                 control={form.control}
//                 name="skrining.pemeriksaan.tambahan.tumor"
//                 render={({ field }) => (
//                   <FormItem className="my-3 flex flex-col ">
//                     <div className="flex flex-row items-center">
//                       <FormLabel className=" w-full pr-10">
//                         <li>Tumor/ Keganasan ginekologi</li>
//                       </FormLabel>
//                       <FormControl>
//                         <RadioGroup
//                           onValueChange={field.onChange}
//                           defaultValue={field.value}
//                           className="flex flex-row"
//                         >
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="true" />
//                             </FormControl>
//                             <FormLabel className="font-normal">Iya</FormLabel>
//                           </FormItem>
//                           <FormItem className="flex items-center space-x-3 space-y-0">
//                             <FormControl>
//                               <RadioGroupItem value="false" />
//                             </FormControl>
//                             <FormLabel className="font-normal">Tidak</FormLabel>
//                           </FormItem>
//                         </RadioGroup>
//                       </FormControl>
//                     </div>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </ul>
//           </div>
//           <ul className="my-auto ml-4 flex h-fit w-1/2 list-outside list-disc flex-col gap-1 rounded-md border-2 border-[#DF645F] px-7 py-3 text-xs text-[#DF645F]">
//             <li>
//               Bila semua jawaban <b>TIDAK</b>, dapat dilakukan vasektomi.
//             </li>
//             <li>
//               Bila salah satu jawaban <b>YA</b>, maka rujuklah ke FASKES/RS yang
//               lengkap.
//             </li>
//           </ul>
//         </div>

//         <div className="flex h-fit w-full flex-col gap-3">
//           <p className="text-xs font-semibold">
//             Alat kontrasepsi yang boleh dipergunakan:
//           </p>
//           <FormField
//             control={form.control}
//             name="skrining.pemeriksaan.alatKontrasepsi"
//             render={() => (
//               <FormItem className="grid grid-cols-3 gap-5">
//                 {alatKontrasepsi.map((item) => (
//                   <FormField
//                     key={item.id}
//                     control={form.control}
//                     name="skrining.pemeriksaan.alatKontrasepsi"
//                     render={({ field }) => {
//                       return (
//                         <FormItem
//                           key={item.id}
//                           className="flex flex-row items-start space-x-3 space-y-0"
//                         >
//                           <FormControl>
//                             <Checkbox
//                               checked={field.value?.includes(item.id)}
//                               onCheckedChange={(checked) => {
//                                 return checked
//                                   ? field.onChange([...field.value, item.id])
//                                   : field.onChange(
//                                       field.value?.filter(
//                                         (value: any) => value !== item.id,
//                                       ),
//                                     );
//                               }}
//                             />
//                           </FormControl>
//                           <FormLabel className="font-normal">
//                             {item.label}
//                           </FormLabel>
//                         </FormItem>
//                       );
//                     }}
//                   />
//                 ))}
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Hasil = ({ form }: any) => {
//   return (
//     <div>
//       <>
//         <p className={` ${urbanist.className} text-xl font-bold`}>Hasil </p>
//         <p className="mb-2 block text-sm font-medium text-[#597395]">
//           Supported text needed
//         </p>
//       </>

//       <div className="mb-8 flex w-full flex-col gap-3 rounded-md bg-white px-6 py-4">
//         {/* kolom 1 */}
//         <div className="flex h-fit w-full gap-4">
//           <div className="w-full">
//             <FormField
//               control={form.control}
//               name="hasil.metodeKontrasepsi"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>
//                     Metode dan Jenis Alat Kontrasepsi yang dipilih
//                   </FormLabel>
//                   <Select
//                     onValueChange={field.onChange}
//                     defaultValue={field.value}
//                   >
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue placeholder="Status KB" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       <SelectItem value="IUD">IUD</SelectItem>
//                       <SelectItem value="MOW">MOW</SelectItem>
//                       <SelectItem value="MOP">MOP</SelectItem>
//                       <SelectItem value="Suntikan">Suntikan</SelectItem>
//                       <SelectItem value="Pil">Pil</SelectItem>
//                       <SelectItem value="Inplanon">Inplanon</SelectItem>
//                       <SelectItem value="Kondom">Kondom</SelectItem>
//                       <SelectItem value="Obat Vaginal">Obat Vaginal</SelectItem>
//                       <SelectItem value="Implant">Implant</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//         </div>
//         {/* kolom 2 */}
//         <div className="flex h-fit w-full gap-4">
//           <div className="w-1/3">
//             <FormField
//               control={form.control}
//               name="hasil.tglDilayani"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Tanggal Dilayani</FormLabel>
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <FormControl>
//                         <Button
//                           variant={'outline'}
//                           className={cn(
//                             'w-full pl-3 text-left font-normal',
//                             !field.value && 'text-muted-foreground',
//                           )}
//                         >
//                           {field.value ? (
//                             format(field.value, 'PPP')
//                           ) : (
//                             <span className="text-[#A9BCD6]">Pick a date</span>
//                           )}
//                           <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                         </Button>
//                       </FormControl>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0" align="start">
//                       <Calendar
//                         mode="single"
//                         selected={field.value}
//                         onSelect={field.onChange}
//                         disabled={(date) =>
//                           date > new Date() || date < new Date('1900-01-01')
//                         }
//                         initialFocus
//                       />
//                     </PopoverContent>
//                   </Popover>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           {/* <hr className="h-4/5 border border-[#C5D3E3]" /> */}
//           <div className="w-1/3">
//             <FormField
//               control={form.control}
//               name="hasil.tglDipesanKembali"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Tanggal Dipesan Kembali</FormLabel>
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <FormControl>
//                         <Button
//                           variant={'outline'}
//                           className={cn(
//                             'w-full pl-3 text-left font-normal',
//                             !field.value && 'text-muted-foreground',
//                           )}
//                         >
//                           {field.value ? (
//                             format(field.value, 'PPP')
//                           ) : (
//                             <span className="text-[#A9BCD6]">Pick a date</span>
//                           )}
//                           <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                         </Button>
//                       </FormControl>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0" align="start">
//                       <Calendar
//                         mode="single"
//                         selected={field.value}
//                         onSelect={field.onChange}
//                         disabled={(date) =>
//                           date > new Date() || date < new Date('1900-01-01')
//                         }
//                         initialFocus
//                       />
//                     </PopoverContent>
//                   </Popover>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//           {/* <hr className="h-4/5 border border-[#C5D3E3] " /> */}
//           <div className="w-1/3">
//             <FormField
//               control={form.control}
//               name="hasil.tglDicabut"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Tanggal dicabut (Khusus Implant/IUD)</FormLabel>
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <FormControl>
//                         <Button
//                           variant={'outline'}
//                           className={cn(
//                             'w-full pl-3 text-left font-normal',
//                             !field.value && 'text-muted-foreground',
//                           )}
//                         >
//                           {field.value ? (
//                             format(field.value, 'PPP')
//                           ) : (
//                             <span className="text-[#A9BCD6]">Pick a date</span>
//                           )}
//                           <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                         </Button>
//                       </FormControl>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0" align="start">
//                       <Calendar
//                         mode="single"
//                         selected={field.value}
//                         onSelect={field.onChange}
//                         disabled={(date) =>
//                           date > new Date() || date < new Date('1900-01-01')
//                         }
//                         initialFocus
//                       />
//                     </PopoverContent>
//                   </Popover>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const PenapisanKB = ({ form }: any) => {
//   return (
//     <div>
//       <>
//         <p className={` ${urbanist.className} text-xl font-bold`}>
//           Penapisan Keluarga Berencana
//         </p>
//         <p className="mb-2 block text-sm font-medium text-[#597395]">
//           Apakah klien menderita penyakit
//         </p>
//       </>

//       <div className="mb-8 flex w-full flex-col gap-3 rounded-md bg-white px-6 py-4">
//         <ul className="flex h-fit w-1/2 flex-col gap-1">
//           <FormField
//             control={form.control}
//             name="penapisanKB.TeV"
//             render={({ field }) => (
//               <FormItem className=" my-3 flex flex-col">
//                 <div className="flex flex-row items-center">
//                   <FormLabel className="w-full pr-10 ">
//                     Trombo emboli Vena
//                   </FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-row"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="true" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Iya</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="false" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Tidak</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="penapisanKB.kardiovaskuler"
//             render={({ field }) => (
//               <FormItem className=" my-3 flex flex-col">
//                 <div className="flex flex-row items-center">
//                   <FormLabel className="w-full pr-10 ">
//                     Kardiovaskuler
//                   </FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-row"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="true" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Iya</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="false" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Tidak</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="penapisanKB.hipertensi"
//             render={({ field }) => (
//               <FormItem className=" my-3 flex flex-col">
//                 <div className="flex flex-row items-center">
//                   <FormLabel className="w-full pr-10 ">Hipertensi</FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-row"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="true" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Iya</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="false" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Tidak</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="penapisanKB.obesitas"
//             render={({ field }) => (
//               <FormItem className=" my-3 flex flex-col">
//                 <div className="flex flex-row items-center">
//                   <FormLabel className="w-full pr-10 ">Obesitas </FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-row"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="true" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Iya</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="false" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Tidak</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="penapisanKB.diabetes"
//             render={({ field }) => (
//               <FormItem className=" my-3 flex flex-col">
//                 <div className="flex flex-row items-center">
//                   <FormLabel className="w-full pr-10 ">Diabetes </FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-row"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="true" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Iya</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="false" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Tidak</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="penapisanKB.merokok"
//             render={({ field }) => (
//               <FormItem className=" my-3 flex flex-col">
//                 <div className="flex flex-row items-center">
//                   <FormLabel className="w-full pr-10 ">Merokok </FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-row"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="true" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Iya</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="false" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Tidak</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="penapisanKB.obatLain"
//             render={({ field }) => (
//               <FormItem className=" my-3 flex flex-col">
//                 <div className="flex flex-row items-center">
//                   <FormLabel className="w-full pr-10 ">
//                     Interaksi Obat - obatan lain
//                   </FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-row"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="true" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Iya</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="false" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Tidak</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="penapisanKB.hiv"
//             render={({ field }) => (
//               <FormItem className=" my-3 flex flex-col">
//                 <div className="flex flex-row items-center">
//                   <FormLabel className="w-full pr-10 ">HIV </FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-row"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="true" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Iya</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="false" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Tidak</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="penapisanKB.ims"
//             render={({ field }) => (
//               <FormItem className=" my-3 flex flex-col">
//                 <div className="flex flex-row items-center">
//                   <FormLabel className="w-full pr-10 ">
//                     Infeksi Menular Seksual (IMS)
//                   </FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-row"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="true" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Iya</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="false" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Tidak</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="penapisanKB.radangPanggul"
//             render={({ field }) => (
//               <FormItem className=" my-3 flex flex-col">
//                 <div className="flex flex-row items-center">
//                   <FormLabel className="w-full pr-10 ">
//                     Radang Panggul
//                   </FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-row"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="true" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Iya</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="false" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Tidak</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="penapisanKB.sepsis"
//             render={({ field }) => (
//               <FormItem className=" my-3 flex flex-col">
//                 <div className="flex flex-row items-center">
//                   <FormLabel className="w-full pr-10 ">Sepsis</FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-row"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="true" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Iya</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="false" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Tidak</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="penapisanKB.postpartum"
//             render={({ field }) => (
//               <FormItem className=" my-3 flex flex-col">
//                 <div className="flex flex-row items-center">
//                   <FormLabel className="w-full pr-10 ">
//                     Postpartum dan Menyusui
//                   </FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-row"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="true" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Iya</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="false" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Tidak</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="penapisanKB.remaja"
//             render={({ field }) => (
//               <FormItem className=" my-3 flex flex-col">
//                 <div className="flex flex-row items-center">
//                   <FormLabel className="w-full pr-10 ">Usia Remaja</FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-row"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="true" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Iya</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="false" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Tidak</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="penapisanKB.perdarahanVaginam"
//             render={({ field }) => (
//               <FormItem className=" my-3 flex flex-col">
//                 <div className="flex flex-row items-center">
//                   <FormLabel className="w-full pr-10 ">
//                     Perdarahan per vaginam
//                   </FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-row"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="true" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Iya</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="false" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Tidak</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="penapisanKB.miomaUteri"
//             render={({ field }) => (
//               <FormItem className=" my-3 flex flex-col">
//                 <div className="flex flex-row items-center">
//                   <FormLabel className="w-full pr-10 ">Mioma Uteri</FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-row"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="true" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Iya</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="false" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Tidak</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="penapisanKB.nullipara"
//             render={({ field }) => (
//               <FormItem className=" my-3 flex flex-col">
//                 <div className="flex flex-row items-center">
//                   <FormLabel className="w-full pr-10 ">Nullipara</FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-row"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="true" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Iya</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="false" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Tidak</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="penapisanKB.kistaOvarium"
//             render={({ field }) => (
//               <FormItem className=" my-3 flex flex-col">
//                 <div className="flex flex-row items-center">
//                   <FormLabel className="w-full pr-10 ">Kista Ovarium</FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-row"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="true" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Iya</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="false" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Tidak</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />{' '}
//           <FormField
//             control={form.control}
//             name="penapisanKB.neoplasiaServikal"
//             render={({ field }) => (
//               <FormItem className=" my-3 flex flex-col">
//                 <div className="flex flex-row items-center">
//                   <FormLabel className="w-full pr-10 ">
//                     Neoplasia Servikal
//                   </FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-row"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="true" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Iya</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="false" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Tidak</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="penapisanKB.kankerServiks"
//             render={({ field }) => (
//               <FormItem className=" my-3 flex flex-col">
//                 <div className="flex flex-row items-center">
//                   <FormLabel className="w-full pr-10 ">
//                     Kanker Serviks
//                   </FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-row"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="true" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Iya</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="false" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Tidak</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="penapisanKB.kankerPayudara"
//             render={({ field }) => (
//               <FormItem className=" my-3 flex flex-col">
//                 <div className="flex flex-row items-center">
//                   <FormLabel className="w-full pr-10 ">
//                     Kanker Payudara
//                   </FormLabel>
//                   <FormControl>
//                     <RadioGroup
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                       className="flex flex-row"
//                     >
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="true" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Iya</FormLabel>
//                       </FormItem>
//                       <FormItem className="flex items-center space-x-3 space-y-0">
//                         <FormControl>
//                           <RadioGroupItem value="false" />
//                         </FormControl>
//                         <FormLabel className="font-normal">Tidak</FormLabel>
//                       </FormItem>
//                     </RadioGroup>
//                   </FormControl>
//                 </div>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//         </ul>
//       </div>
//     </div>
//   );
// };
