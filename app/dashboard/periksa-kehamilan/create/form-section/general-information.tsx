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
import { FormWrapper, Row, TitleSection } from '../_component/form-card';
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
      <TitleSection
        title="General Information"
        subtitle="Masukkan data pasien"
      />
      <FormWrapper>
        <Row>
          <FormField
            control={form.control}
            name="generalInformation.noIbu"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>No. IBU</FormLabel>
                <FormControl>
                  <Input placeholder="00/00/00" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="generalInformation.namaLengkap"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Nama Lengkap</FormLabel>
                <FormControl>
                  <Input placeholder="Firda Rizky" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="generalInformation.namaSuami"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Nama Suami</FormLabel>
                <FormControl>
                  <Input placeholder="Hilmy Aziz" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="generalInformation.tanggalLahir"
            render={({ field }) => (
              <FormItem className="col-span-2">
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
                            format(field.value, 'dd-MM-yyyy')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarLahir
                        mode="single"
                        required
                        defaultMonth={field.value}
                        selected={field.value}
                        onSelect={(date) => {
                          field.onChange(date);
                          setBirthDate(date || '');
                        }}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                {age === 0 ? null : (
                  <FormDescription className="absolute pl-1 text-xs">
                    {age} Tahun
                  </FormDescription>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="generalInformation.umur"
            render={({ field }) => (
              <FormItem className="relative col-span-1">
                <FormLabel>Umur</FormLabel>
                <FormControl>
                  <Input placeholder="0" {...field} />
                </FormControl>
                <span className="absolute -right-8 bottom-2.5 text-sm text-black/50">
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
            name="generalInformation.alamatDomisili"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Alamat Domisili</FormLabel>
                <FormControl>
                  <Input placeholder="Masukan alamat" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="generalInformation.rtrw"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>RT/RW</FormLabel>
                <FormControl>
                  <Input placeholder="Masukan RT/RW" {...field} />
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
        </Row>
        <Row>
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
        <Row>
          <FormField
            control={form.control}
            name="generalInformation.pendidikan"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Pendidikan</FormLabel>
                <FormControl>
                  <Input placeholder="Masukan Pendidikan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="generalInformation.agama"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Agama</FormLabel>
                <FormControl>
                  <Input placeholder="Masukan Agama" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="generalInformation.pekerjaan"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Pekerjaan</FormLabel>
                <FormControl>
                  <Input placeholder="Masukan Pekerjaan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="generalInformation.tanggalRegister"
            render={({ field }) => (
              <FormItem className="col-span-3">
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
                            format(field.value, 'dd-MM-yyyy')
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
        </Row>
      </FormWrapper>
    </section>
  );
}
