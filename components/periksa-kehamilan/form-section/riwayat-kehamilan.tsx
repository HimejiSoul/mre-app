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
import { useFieldArray } from 'react-hook-form';
import {
  ENUM_VALUES,
  defaultValues,
} from '@/lib/types/periksa-kehamilan-types';
import { TableButtonGroup } from '@/components/Buttons';

export default function RiwayatKehamilan({ form }: any) {
  const { fields, append, remove } = useFieldArray({
    name: 'riwayatKehamilan.data',
    control: form.control,
  });

  return (
    <section className="_RIWAYAT_KEHAMILAN space-y-4">
      <TitleSection
        title="Riwayat Kehamilan Sebelumnya"
        subtitle="Masukkan data pasien"
      />
      <FormWrapper>
        <Row>
          <InputField
            name="riwayatKehamilan.g"
            form={form}
            label="Gravida"
            placeholder="Masukan Nilai G"
            type="number"
            className="col-span-2"
          />
          <InputField
            name="riwayatKehamilan.p"
            form={form}
            label="Partus"
            placeholder="Masukan Nilai P"
            type="number"
            className="col-span-2"
          />
          <InputField
            name="riwayatKehamilan.a"
            form={form}
            label="Abortus"
            placeholder="Masukan Nilai A"
            type="number"
            className="col-span-2"
          />
        </Row>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tahun</TableHead>
              <TableHead>Jenis Kelamin</TableHead>
              <TableHead>Hasil Persalinan</TableHead>
              <TableHead>Jenis Persalinan</TableHead>
              <TableHead>Keadaan Saat Lahir</TableHead>
              <TableHead>BBL</TableHead>
              <TableHead>Lama Menyusui</TableHead>
              <TableHead>Penolong Persalinan</TableHead>
              <TableHead>Penyulit</TableHead>
              <TableHead>Keterangan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fields.map((field: any, index: number) => (
              <TableRow key={field.id}>
                <TableCell>
                  <InputField
                    name={`riwayatKehamilan.data.${index}.tahun`}
                    form={form}
                    placeholder="Tahun"
                    type="number"
                    className="arrow-hide"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`riwayatKehamilan.data.${index}.jenisKelamin`}
                    form={form}
                    placeholder="Pilih Jenis Kelamin"
                    type="select"
                    data={ENUM_VALUES.riwayatKehamilan.data.jenisKelamin
                      .filter((data) => data !== '')
                      .map((data) => ({
                        value: data,
                        label: data,
                      }))}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`riwayatKehamilan.data.${index}.hasilPersalinan`}
                    form={form}
                    placeholder="Pilih Hasil Persalinan"
                    type="select"
                    data={ENUM_VALUES.riwayatKehamilan.data.hasilPersalinan
                      .filter((data) => data !== '')
                      .map((data) => ({
                        value: data,
                        label: data,
                      }))}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`riwayatKehamilan.data.${index}.jenisPersalinan`}
                    form={form}
                    placeholder="Jenis Persalinan"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`riwayatKehamilan.data.${index}.keadaanSaatLahir`}
                    form={form}
                    placeholder="Keadaan Saat Lahir"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`riwayatKehamilan.data.${index}.bbl`}
                    form={form}
                    placeholder="BBL"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`riwayatKehamilan.data.${index}.lamaMenyusui`}
                    form={form}
                    placeholder="Lama Menyusui"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`riwayatKehamilan.data.${index}.penolongPersalinan`}
                    form={form}
                    placeholder="Penolong Persalinan"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`riwayatKehamilan.data.${index}.penyulit`}
                    form={form}
                    placeholder="Penyulit"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`riwayatKehamilan.data.${index}.keterangan`}
                    form={form}
                    placeholder="Keterangan"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableButtonGroup
          remove={remove}
          append={append}
          fields={fields}
          data={
            defaultValues.riwayatKehamilan
              ? defaultValues.riwayatKehamilan.data
              : []
          }
        />
      </FormWrapper>
    </section>
  );
}
