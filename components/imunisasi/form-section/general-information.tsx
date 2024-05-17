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
  InputField,
  Row,
  TitleSection,
} from '@/components/form-content';
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
          <InputField
            name="generalInformation.nomor"
            form={form}
            placeholder="00/00/00"
            label="Nomor Register"
          />
          <InputField
            name="generalInformation.puskesmas"
            form={form}
            placeholder="Nama Puskesmas"
            label="Puskesmas"
          />
          <InputField
            name="generalInformation.bidan"
            form={form}
            placeholder="Nama Bidan"
            label="Bidan"
          />
        </Row>
        <Row>
          <InputField
            name="generalInformation.nomorBayi"
            form={form}
            placeholder="00/00/00"
            label="No. Bayi"
          />
          <InputField
            name="generalInformation.namaBayi"
            form={form}
            placeholder="Nama Bayi"
            label="Nama Bayi"
          />
        </Row>
        <Row>
          <InputField
            name="generalInformation.namaAyah"
            form={form}
            placeholder="Nama Ayah"
            label="Nama Ayah"
          />
          <InputField
            name="generalInformation.usiaAyah"
            form={form}
            placeholder="0"
            label="Usia"
            className="arrow-hide col-span-2"
            suffix="Thn"
            type="number"
          />
          <InputField
            name="generalInformation.namaIbu"
            form={form}
            placeholder="Nama Ibu"
            label="Nama Ibu"
          />
          <InputField
            name="generalInformation.usiaIbu"
            form={form}
            placeholder="0"
            label="Usia"
            className="arrow-hide col-span-2"
            suffix="Thn"
            type="number"
          />
        </Row>
        <Row>
          <InputField
            name="generalInformation.alamat"
            form={form}
            placeholder="Alamat"
            label="Alamat"
            type="textarea"
            className="col-span-6"
          />
        </Row>
        <Row>
          <InputField
            name="generalInformation.desa"
            form={form}
            placeholder="Desa"
            label="Desa"
          />
          <InputField
            name="generalInformation.kecamatan"
            form={form}
            placeholder="Kecamatan"
            label="Kecamatan"
          />
          <InputField
            name="generalInformation.kabupaten"
            form={form}
            placeholder="Kabupaten"
            label="Kabupaten"
          />
          <InputField
            name="generalInformation.provinsi"
            form={form}
            placeholder="Provinsi"
            label="Provinsi"
          />
        </Row>
      </FormWrapper>
    </section>
  );
}
