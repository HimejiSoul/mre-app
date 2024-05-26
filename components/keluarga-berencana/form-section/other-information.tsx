import {
  FormWrapper,
  InputField,
  Row,
  TitleSection,
} from '@/components/form-content';
import { useState } from 'react';
import { calculateAge } from '@/lib/calculate-age';
import { ENUM_VALUES } from '@/lib/types/keluarga-berencana/kb-schema';

export default function OtherInformation({ form }: any) {
  const [birthDate, setBirthDate] = useState<Date | string>('');
  const age = calculateAge(birthDate);

  return (
    <section className="_OTHER_INFORMATION space-y-4">
      <TitleSection title="OtherInformation" subtitle="Masukkan data pasien" />
      <FormWrapper>
        <Row>
          <InputField
            name="otherInformation.jmlAnakHidup.jmlAnakLaki"
            form={form}
            placeholder="0"
            label="Jumlah Anak Hidup (Lk)"
            type="number"
          />
          <InputField
            name="otherInformation.jmlAnakHidup.jmlAnakPr"
            form={form}
            placeholder="0"
            label="Jumlah Anak Hidup (Pr)"
            type="number"
          />
          <InputField
            name="otherInformation.umurAnakKecil.umurKecilLaki"
            form={form}
            placeholder="0"
            label="Umur Anak Hidup (Lk)"
            type="number"
            className="arrow-hide "
            // suffix="Thn"
          />
          <InputField
            name="otherInformation.umurAnakKecil.umurKecilPr"
            form={form}
            placeholder="0"
            label="Umur Anak Hidup (Pr)"
            type="number"
            className="arrow-hide "
            // suffix="Thn"
          />
        </Row>
        <Row>
          <InputField
            name="otherInformation.caraKBTerakhir"
            form={form}
            placeholder="Cara KB Terakhir"
            type="select"
            data={ENUM_VALUES.caraKb
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
            label="Cara KB Terakhir"
            className="col-span-6"
          />
          <InputField
            name="otherInformation.statusPesertaKB"
            form={form}
            placeholder="Status Peserta KB"
            type="select"
            data={ENUM_VALUES.statusPesertaKB
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
            label="Status Peserta KB"
            className="col-span-6"
          />
        </Row>
      </FormWrapper>
    </section>
  );
}
