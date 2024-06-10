import {
  FormWrapper,
  InputField,
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

export default function PemeriksaanPNC({ form }: any) {
  const { fields, append, remove } = useFieldArray({
    name: 'pemeriksaanPNC',
    control: form.control,
  });

  return (
    <section className="_PERSALINAN space-y-4">
      <TitleSection title="Pemeriksaan PNC" subtitle="Masukkan data pasien" />
      <FormWrapper>
        <Table>
          <TableHeader className="whitespace-nowrap">
            <TableRow>
              <TableHead>Tanggal</TableHead>
              <TableHead>Hari ke/KF</TableHead>
              <TableHead>TD (mmHg)</TableHead>
              <TableHead>Suhu C</TableHead>
              <TableHead>Catat di Buku KIA</TableHead>
              <TableHead>Fe (tab/botol)</TableHead>
              <TableHead>Vit A</TableHead>
              <TableHead>CD4 (kopi/ml)</TableHead>
              <TableHead>Anti Malaria</TableHead>
              <TableHead>Anti TB</TableHead>
              <TableHead>Foto Thorax (+/-)</TableHead>
              <TableHead>Komplikasi</TableHead>
              <TableHead>Dirujuk Ke</TableHead>
              <TableHead>Keadaan Tiba</TableHead>
              <TableHead>Keadaan Pulang</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fields.map((field: any, index: number) => (
              <TableRow key={field.id}>
                <TableCell>
                  <InputField
                    name={`pemeriksaanPNC.${index}.tanggal`}
                    form={form}
                    type="date"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanPNC.${index}.hariKeKF`}
                    form={form}
                    placeholder="Hari ke KF"
                    type="select"
                    data={ENUM_VALUES.pemeriksaanPNC.hariKeKF
                      .filter((data) => data !== '')
                      .map((data) => ({
                        value: data,
                        label: data,
                      }))}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanPNC.${index}.tandaVital.td`}
                    placeholder="Nilai TD"
                    form={form}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanPNC.${index}.tandaVital.suhu`}
                    placeholder="Nilai Suhu"
                    form={form}
                    type="number"
                    className="arrow-hide"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanPNC.${index}.pelayanan.catatDiBukuKIA`}
                    placeholder="Catat di Buku KIA"
                    form={form}
                    type="checkbox"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanPNC.${index}.pelayanan.fe`}
                    placeholder="Nilai FE"
                    form={form}
                    type="select"
                    data={ENUM_VALUES.pemeriksaanPNC.pelayanan.fe
                      .filter((data) => data !== '')
                      .map((data) => ({
                        value: data,
                        label: data,
                      }))}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanPNC.${index}.pelayanan.vitA`}
                    placeholder="Nilai Vit A"
                    form={form}
                    type="checkbox"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanPNC.${index}.integrasiProgram.cd4`}
                    placeholder="Nilai CD4"
                    form={form}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanPNC.${index}.integrasiProgram.antiMalaria`}
                    placeholder="Nilai Anti Malaria"
                    form={form}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanPNC.${index}.integrasiProgram.antiTB`}
                    placeholder="Anti TB"
                    form={form}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanPNC.${index}.integrasiProgram.fotoThorax`}
                    placeholder="Foto Thorax"
                    form={form}
                    type="toggle-group"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanPNC.${index}.komplikasi`}
                    placeholder="Komplikasi"
                    form={form}
                    type="select"
                    data={ENUM_VALUES.pemeriksaanPNC.komplikasi
                      .filter((data) => data !== '')
                      .map((data) => ({
                        value: data,
                        label: data,
                      }))}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanPNC.${index}.ditujukKe`}
                    placeholder="Ditujuk Ke"
                    form={form}
                    type="select"
                    data={ENUM_VALUES.pemeriksaanPNC.ditujukKe
                      .filter((data) => data !== '')
                      .map((data) => ({
                        value: data,
                        label: data,
                      }))}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanPNC.${index}.keadaan.tiba`}
                    placeholder="Keadaan Tiba"
                    form={form}
                    type="select"
                    data={ENUM_VALUES.pemeriksaanPNC.keadaan.tiba
                      .filter((data) => data !== '')
                      .map((data) => ({
                        value: data,
                        label: data,
                      }))}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanPNC.${index}.keadaan.pulang`}
                    placeholder="Keadaan Pulang"
                    form={form}
                    type="select"
                    data={ENUM_VALUES.pemeriksaanPNC.keadaan.pulang
                      .filter((data) => data !== '')
                      .map((data) => ({
                        value: data,
                        label: data,
                      }))}
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
          data={defaultValues.pemeriksaanPNC}
        />
      </FormWrapper>
    </section>
  );
}
