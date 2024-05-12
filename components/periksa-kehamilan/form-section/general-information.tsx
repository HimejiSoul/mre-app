import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  FormWrapper,
  InputField,
  Row,
  TitleSection,
} from '@/components/form-content';
import { useState } from 'react';
import { calculateAge } from '@/lib/calculate-age';

// TODO: Fix any types
export default function GeneralInformation({ form }: any) {
  const [birthDate, setBirthDate] = useState<string>(
    new Date().toISOString().slice(0, 10),
  );
  const age = calculateAge(birthDate);

  return (
    <section className="_GENERAL_INFORMATION space-y-4">
      <TitleSection
        title="General Information"
        subtitle="Masukkan data pasien"
      />
      <FormWrapper>
        <Row>
          <InputField
            name="generalInformation.noIbu"
            form={form}
            label="No. IBU"
            placeholder="00/00/00"
          />
        </Row>
        <Row>
          <InputField
            name="generalInformation.namaLengkap"
            form={form}
            label="Nama Lengkap"
            placeholder="Firda Rizky"
          />
          <InputField
            name="generalInformation.namaSuami"
            form={form}
            label="Nama Suami"
            placeholder="Hilmy Aziz"
          />

          {/* TODO: Get value and put in useState birthDate */}
          {/* <FormField
            control={form.control}
            name="generalInformation.tanggalLahir"
            render={({ field }) => {
              if (typeof field.value !== 'string') {
                // Change date with typeof object to string. Output: yyyy-MM-dd
                field.value = field.value.toISOString().slice(0, 10);
              }
              return (
                <FormItem className="col-span-2">
                  <FormLabel>Tanggal Lahir</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  {age === 0 ? null : (
                    <FormDescription className="absolute pl-1 text-xs">
                      {age} Tahun
                    </FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              );
            }}
          /> */}
          <InputField
            name="generalInformation.tanggalLahir"
            form={form}
            label="Tanggal Lahir"
            type="date"
          />
          <InputField
            name="generalInformation.umur"
            form={form}
            label="Umur"
            type="number"
            className="arrow-hide col-span-2"
            suffix="Thn"
          />
        </Row>
        <Row>
          <InputField
            name="generalInformation.alamatDomisili"
            form={form}
            label="Alamat Domisili"
            placeholder="Masukan Domisili"
          />
          <InputField
            name="generalInformation.rtrw"
            form={form}
            label="RT/RW"
            placeholder="Masukan RT/RW"
          />
        </Row>
        <Row>
          <InputField
            name="generalInformation.desa"
            form={form}
            label="Desa"
            placeholder="Masukan Desa"
          />
          <InputField
            name="generalInformation.kecamatan"
            form={form}
            label="Kecamatan"
            placeholder="Masukan Kecamatan"
          />
        </Row>
        <Row>
          <InputField
            name="generalInformation.kabupaten"
            form={form}
            label="Kabupaten"
            placeholder="Masukan Kabupaten"
          />
          <InputField
            name="generalInformation.provinsi"
            form={form}
            label="Provinsi"
            placeholder="Masukan Provinsi"
          />
        </Row>
        <Row>
          <InputField
            name="generalInformation.pendidikan"
            form={form}
            label="Pendidikan"
            placeholder="Masukan Pendidikan"
          />
          <InputField
            name="generalInformation.agama"
            form={form}
            label="Agama"
            placeholder="Masukan Agama"
          />
        </Row>
        <Row>
          <InputField
            name="generalInformation.pekerjaan"
            form={form}
            label="Pekerjaan"
            placeholder="Masukan Pekerjaan"
          />
          <InputField
            name="generalInformation.tanggalRegister"
            form={form}
            label="Tanggal Registrasi"
            type="date"
          />
        </Row>
      </FormWrapper>
    </section>
  );
}
