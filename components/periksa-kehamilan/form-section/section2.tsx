import {
  FormWrapper,
  InputField,
  Row,
  TitleSection,
} from '@/components/form-content';
import { ENUM_VALUES } from '../../../lib/types/periksa-kehamilan-types';

export default function Section2({ form }: any) {
  return (
    <section className="_SECTION02 space-y-4">
      <TitleSection title="Section 2" subtitle="Masukkan data pasien" />
      <FormWrapper>
        <Row>
          <InputField
            name="section2.posyandu"
            form={form}
            label="Posyandu"
            placeholder="Masukan Posyandu"
          />
          <InputField
            name="section2.jamkesmas"
            form={form}
            label="Jamkesmas"
            type="radio"
          />
        </Row>
        <Row>
          <InputField
            name="section2.namaKader"
            form={form}
            label="Nama Kader"
            placeholder="Masukan Nama Kader"
          />
          <InputField
            name="section2.golDarah"
            form={form}
            label="Gol. Darah"
            type="select"
            placeholder="Pilih Gol. Darah"
            data={ENUM_VALUES.section2.golDarah
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
        </Row>
        <Row>
          <InputField
            name="section2.namaDukun"
            form={form}
            label="Nama Dukun"
            placeholder="Masukan Nama Dukun"
          />
          <InputField
            name="section2.noTelp"
            form={form}
            label="Telp./HP"
            placeholder="Masukan No. Telp"
          />
        </Row>
        <Row>
          <h1 className="col-span-3 pt-6 font-medium">RIWAYAT OBSTETRIK</h1>
          <br className="col-span-1" />
          <h1 className="col-span-3 pt-6 font-medium">PEMERIKSAAN BIDAN</h1>
        </Row>
        <Row>
          <InputField
            name="section2.riwayatObstetrik.gravida"
            form={form}
            label="Gravida"
            placeholder="Masukan Nilai Gravida"
            type="number"
          />
          <div className="col-span-1"></div>
          <InputField
            name="section2.pemeriksaanBidan.tanggalPeriksa"
            form={form}
            label="Tanggal Periksa"
            type="date"
          />
          <InputField
            name="section2.pemeriksaanBidan.bbSebelumHamil"
            form={form}
            label="BB Sebelum Hamil"
            type="number"
            className="arrow-hide col-span-2"
            suffix="kg"
          />
        </Row>
        <Row>
          <InputField
            name="section2.riwayatObstetrik.partus"
            form={form}
            label="Partus"
            placeholder="Masukan Nilai Partus"
            type="number"
          />
          <div className="col-span-1"></div>
          <InputField
            name="section2.pemeriksaanBidan.tanggalHPHT"
            form={form}
            label="Tanggal HPHT"
            type="date"
          />
          <InputField
            name="section2.pemeriksaanBidan.tb"
            form={form}
            label="TB"
            type="number"
            className="arrow-hide col-span-2"
            suffix="cm"
          />
        </Row>
        <Row>
          <InputField
            name="section2.riwayatObstetrik.abortus"
            form={form}
            label="Abortus"
            placeholder="Masukan Nilai Abortus"
            type="number"
          />
          <div className="col-span-1"></div>
          <InputField
            name="section2.pemeriksaanBidan.taksiranPersalinan"
            form={form}
            label="Taksiran Persalinan"
            type="date"
          />
          <InputField
            name="section2.pemeriksaanBidan.bukuKIA"
            form={form}
            label="Buku KIA"
            type="select"
            placeholder="Memiliki Buku KIA?"
            data={ENUM_VALUES.section2.pemeriksaanBidan.bukuKIA
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
        </Row>
        <Row>
          <InputField
            name="section2.riwayatObstetrik.hidup"
            form={form}
            label="Hidup"
            placeholder="Masukan Nilai Hidup"
            type="number"
          />
          <div className="col-span-1"></div>
          <InputField
            name="section2.pemeriksaanBidan.persalinanSebelumnya"
            form={form}
            label="Persalinan Sebelumnya"
            type="number"
          />
        </Row>
        <Row>
          <InputField
            name="section2.pemeriksaanBidan.penyakitKronisDanAlergi"
            form={form}
            label="Penyakit Kronis dan Alergi"
            placeholder="Masukan Penyakit Kronis dan Alergi"
            className="col-span-7"
          />
        </Row>
        <Row>
          <InputField
            name="section2.pemeriksaanBidan.riwayatKomplikasiKebidanan"
            form={form}
            label="Riwayat Komplikasi Kebidanan"
            placeholder="Masukan Riwayat Komplikasi Kebidanan"
            className="col-span-7"
          />
        </Row>
      </FormWrapper>
    </section>
  );
}
