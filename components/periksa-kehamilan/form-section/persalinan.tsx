import {
  FormWrapper,
  InputField,
  Row,
  TitleSection,
} from '@/components/form-content';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ENUM_VALUES } from '../../../lib/types/periksa-kehamilan-types';

export default function Persalinan({ form }: any) {
  return (
    <section className="_PERSALINAN space-y-4">
      <TitleSection title="Persalinan" />
      <FormWrapper>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Persalinan</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Jam</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Kala I Aktif</TableCell>
              <TableCell>
                <InputField
                  name="persalinan.kalaIAktif.tanggal"
                  form={form}
                  type="date"
                />
              </TableCell>
              <TableCell>
                <InputField
                  name="persalinan.kalaIAktif.jam"
                  form={form}
                  type="time"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Kala II</TableCell>
              <TableCell>
                <InputField
                  name="persalinan.kalaII.tanggal"
                  form={form}
                  type="date"
                />
              </TableCell>
              <TableCell>
                <InputField
                  name="persalinan.kalaII.jam"
                  form={form}
                  type="time"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bayi Lahir</TableCell>
              <TableCell>
                <InputField
                  name="persalinan.bayiLahir.tanggal"
                  form={form}
                  type="date"
                />
              </TableCell>
              <TableCell>
                <InputField
                  name="persalinan.bayiLahir.jam"
                  form={form}
                  type="time"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Plasenta Lahir</TableCell>
              <TableCell>
                <InputField
                  name="persalinan.plasentaLahir.tanggal"
                  form={form}
                  type="date"
                />
              </TableCell>
              <TableCell>
                <InputField
                  name="persalinan.plasentaLahir.jam"
                  form={form}
                  type="time"
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Row>
          <InputField
            name="persalinan.perdarahanKalaIV"
            form={form}
            label="Perdarahan Kala IV Jam Pospartum"
            placeholder="Masukan Data"
            suffix="cc"
            className="col-span-6"
          />
        </Row>
        <Row>
          <InputField
            name="persalinan.usiaKehamilan"
            form={form}
            label="Usia Kehamilan"
            placeholder="Masukan Usia Kehamilan"
            type="number"
            className="arrow-hide"
            suffix="minggu"
          />
          <InputField
            name="persalinan.usiaHPHT"
            form={form}
            label="Usia HPHT"
            placeholder="Masukan Usia HPHT"
            type="number"
            className="arrow-hide"
            suffix="minggu"
          />
          <InputField
            name="persalinan.keadaanIbu"
            form={form}
            label="Keadaan Ibu"
            placeholder="Keadaan Ibu"
            type="select"
            data={ENUM_VALUES.persalinan.keadaanIbu
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
        </Row>
        <Row>
          <InputField
            name="persalinan.keadaanBayi"
            form={form}
            label="Keadaan Bayi"
            placeholder="Keadaan Bayi"
            type="select"
            data={ENUM_VALUES.persalinan.keadaanBayi
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
          <InputField
            name="persalinan.beratBayi"
            form={form}
            label="Berat Bayi"
            placeholder="Masukan Berat Bayi"
            type="number"
            className="arrow-hide"
            suffix="gram"
          />
        </Row>
        <Row>
          <InputField
            name="persalinan.presentasi"
            form={form}
            label="Presentasi"
            placeholder="Presentasi"
            type="select"
            data={ENUM_VALUES.persalinan.presentasi
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
          <InputField
            name="persalinan.tempat"
            form={form}
            label="Tempat"
            placeholder="Tempat"
            type="select"
            data={ENUM_VALUES.persalinan.tempat
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
          <InputField
            name="persalinan.penolong"
            form={form}
            label="Penolong"
            placeholder="Penolong"
            type="select"
            data={ENUM_VALUES.persalinan.penolong
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
        </Row>
        <Row>
          <InputField
            name="persalinan.caraPersalinan"
            form={form}
            label="Cara Persalinan"
            placeholder="Cara Persalinan"
            type="select"
            data={ENUM_VALUES.persalinan.caraPersalinan
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
          <InputField
            name="persalinan.manajemenAktifKalaIII"
            form={form}
            label="Manajemen Aktif Kala III"
            placeholder="Manajemen Aktif Kala III"
            type="select"
            data={ENUM_VALUES.persalinan.manajemenAktifKalaIII
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
          <InputField
            name="persalinan.pelayanan"
            form={form}
            label="Pelayanan"
            placeholder="Pelayanan"
            type="select"
            data={ENUM_VALUES.persalinan.pelayanan
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
        </Row>
        <Row>
          <InputField
            name="persalinan.integrasiProgram.jenisObat"
            form={form}
            label="Integrasi Program"
            placeholder="Integrasi Program"
            type="select"
            data={ENUM_VALUES.persalinan.integrasiProgram.jenisObat
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
          <InputField
            name="persalinan.integrasiProgram.namaObat"
            form={form}
            label="Obat yang Diberikan"
            placeholder="Nama Obat yang diberikan"
          />
          <InputField
            name="persalinan.komplikasi"
            form={form}
            label="Komplikasi"
            placeholder="Komplikasi"
            type="select"
            data={ENUM_VALUES.persalinan.komplikasi
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
        </Row>
        <Row>
          <InputField
            name="persalinan.dirujukKe"
            form={form}
            label="Dirujuk Ke"
            placeholder="Dirujuk Ke"
            type="select"
            data={ENUM_VALUES.persalinan.dirujukKe
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
          <InputField
            name="persalinan.keadaanTiba"
            form={form}
            label="Keadaan Tiba"
            placeholder="Keadaan Tiba"
            type="select"
            data={ENUM_VALUES.persalinan.keadaanTiba
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
          <InputField
            name="persalinan.keadaanPulang"
            form={form}
            label="Keadaan Pulang"
            placeholder="Keadaan Pulang"
            type="select"
            data={ENUM_VALUES.persalinan.keadaanPulang
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
        </Row>
        <Row>
          <InputField
            name="persalinan.alamatBersalin"
            form={form}
            label="Alamat Bersalin"
            placeholder="Masukan Alamat Bersalin"
            type="textarea"
            className="col-span-9"
          />
        </Row>
      </FormWrapper>
    </section>
  );
}
