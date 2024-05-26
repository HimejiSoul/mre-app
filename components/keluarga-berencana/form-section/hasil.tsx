import {
  FormWrapper,
  InputField,
  Row,
  TitleSection,
} from '@/components/form-content';
import { useState } from 'react';
import { calculateAge } from '@/lib/calculate-age';
import { ENUM_VALUES } from '@/lib/types/keluarga-berencana/kb-schema';

export default function Hasil({ form }: any) {
  const [birthDate, setBirthDate] = useState<Date | string>('');
  const age = calculateAge(birthDate);

  return (
    <section className="_HASIL space-y-4">
      <TitleSection title="Hasil" subtitle="Masukkan data pasien" />
      <FormWrapper>
        <Row>
          <InputField
            name="hasil.metodeKontrasepsi"
            form={form}
            placeholder="Metode dan Jenis Alat Kontrasepsi yang dipilih"
            type="select"
            data={ENUM_VALUES.alatKontrasepsiArray
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
            label="Alat Kontrasepsi"
            className="col-span-12"
          />
        </Row>
        <Row>
          <InputField
            name="hasil.tglDilayani"
            form={form}
            type="date"
            label="Tanggal Dilayani"
            className="col-span-4"
          />
          <InputField
            name="hasil.tglDipesanKembali"
            form={form}
            type="date"
            label="Tanggal Dipesan Kembali"
            className="col-span-4"
          />
          <InputField
            name="hasil.tglDicabut"
            form={form}
            type="date"
            label="Tanggal dicabut (Khusus Implant/IUD)"
            className="col-span-4"
          />
        </Row>
      </FormWrapper>
    </section>
  );
}
