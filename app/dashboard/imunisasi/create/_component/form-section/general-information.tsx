import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  FormWrapper,
  Row,
  TitleSection,
} from '@/app/dashboard/imunisasi/create/_component/form-content';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Calendar, CalendarLahir } from '@/components/ui/calendar';
import { useState } from 'react';
import { calculateAge } from '@/lib/calculate-age';

export default function GeneralInformation({ form }: any) {
  const [birthDate, setBirthDate] = useState<Date | string>('');
  const age = calculateAge(birthDate);

  return (
    <section className="_GENERAL_INFORMATION space-y-4">
      <TitleSection title="Kartu Bayi" subtitle="Masukkan data bayi" />
      <FormWrapper>
        <Row>
          <FormField
            control={form.control}
            name="generalInformation.nomor"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Nomor</FormLabel>
                <FormControl>
                  <Input placeholder="00/00/00" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="generalInformation.puskesmas"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Puskesmas</FormLabel>
                <FormControl>
                  <Input placeholder="Nama Puskesmas" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="generalInformation.bidan"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Bidan</FormLabel>
                <FormControl>
                  <Input placeholder="Nama Bidan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="generalInformation.nomorBayi"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>No. Bayi</FormLabel>
                <FormControl>
                  <Input placeholder="Nomor Bayi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="generalInformation.namaBayi"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Nama</FormLabel>
                <FormControl>
                  <Input placeholder="Nama Bayi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="generalInformation.namaSuami"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Nama Suami</FormLabel>
                <FormControl>
                  <Input placeholder="Nama Suami" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="generalInformation.usiaSuami"
            render={({ field }) => (
              <FormItem className="relative col-span-2">
                <FormLabel>Usia</FormLabel>
                <FormControl>
                  <Input placeholder="0" {...field} />
                </FormControl>
                <span className="absolute bottom-2.5 right-2.5 text-sm text-black/50">
                  Thn
                </span>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="generalInformation.namaIbu"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Nama Ibu</FormLabel>
                <FormControl>
                  <Input placeholder="Nama Ibu" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="generalInformation.usiaIbu"
            render={({ field }) => (
              <FormItem className="relative col-span-2">
                <FormLabel>Usia</FormLabel>
                <FormControl>
                  <Input placeholder="0" {...field} />
                </FormControl>
                <span className="absolute bottom-2.5 right-2.5 text-sm text-black/50">
                  Thn
                </span>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="generalInformation.alamat"
            render={({ field }) => (
              <FormItem className="col-span-6">
                <FormLabel>Alamat</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Alamat Lengkap"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="generalInformation.desa"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Desa</FormLabel>
                <FormControl>
                  <Input placeholder="Masukan Desa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="generalInformation.kecamatan"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Kecamatan</FormLabel>
                <FormControl>
                  <Input placeholder="Masukan Kecamatan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="generalInformation.kabupaten"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Kabupaten</FormLabel>
                <FormControl>
                  <Input placeholder="Masukan Kabupaten" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="generalInformation.provinsi"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Provinsi</FormLabel>
                <FormControl>
                  <Input placeholder="Masukan Provinsi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
      </FormWrapper>
    </section>
  );
}
