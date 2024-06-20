import {
  FormWrapper,
  InputField,
  Row,
  TitleSection,
} from '@/components/form-content';
import { useState } from 'react';
import { calculateAge } from '@/lib/calculate-age';
import { ENUM_VALUES } from '@/lib/types/keluarga-berencana/kb-schema';

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
          <InputField
            name="generalInformation.noFaskes"
            form={form}
            placeholder="00/00/00"
            label="Nomor Faskes"
            className="col-span-4"
          />
          <InputField
            name="generalInformation.noSeriKartu"
            form={form}
            placeholder="Nomor Urut | Tahun"
            label="Nomor Seri Kartu"
            className="col-span-4"
          />
          <InputField
            name="generalInformation.tglDatang"
            form={form}
            label="Tanggal Datang"
            type="date"
          />
        </Row>
        <Row>
          <InputField
            name="generalInformation.namaPeserta"
            form={form}
            placeholder="Nama Peserta"
            label="Nama Peserta"
            className="col-span-5"
          />
          <InputField
            name="generalInformation.tglLahir"
            form={form}
            label="Tanggal Lahir"
            type="date"
          />
          <InputField
            name="generalInformation.usia"
            form={form}
            placeholder="0"
            label="Usia"
            className="arrow-hide "
            // suffix="Thn"
            type="number"
          />
        </Row>
        <Row>
          <InputField
            name="generalInformation.namaPasangan"
            form={form}
            placeholder="Nama Pasangan"
            label="Nama Pasangan"
            className="col-span-5"
          />
          <InputField
            name="generalInformation.jenisPasangan"
            placeholder="Pasangan"
            form={form}
            type="select"
            data={ENUM_VALUES.jenisPasangan
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
            label="Pasangan"
          />
          <InputField
            name="generalInformation.pendidikanAkhir"
            placeholder="Pendidikan"
            form={form}
            type="select"
            data={ENUM_VALUES.pendidikan
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
            label="Pendidikan"
            className="arrow-hide"
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
          <InputField
            name="generalInformation.pekerjaanPasangan"
            placeholder="Pekerjaan"
            form={form}
            type="select"
            data={ENUM_VALUES.pekerjaan
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
            label="Pekerjaan"
            className="col-span-3"
          />
          <InputField
            name="generalInformation.noHP"
            form={form}
            placeholder="08xxx"
            label="No. HP"
            className="arrow-hide col-span-3"
            type="number"
          />
        </Row>
        <Row>
          <InputField
            name="generalInformation.statusJkn"
            placeholder="Status JKN"
            form={form}
            type="select"
            data={ENUM_VALUES.statusjkn
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
            label="Status JKN"
            className="col-span-12"
          />
        </Row>
      </FormWrapper>
    </section>
  );
}
