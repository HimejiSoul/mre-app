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
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';

import { useFieldArray } from 'react-hook-form';
import {
  ENUM_VALUES,
  defaultValues,
} from '@/lib/types/imunisasi/imunisasi-types';
import { TableButtonGroup } from '@/components/Buttons';

export default function PemeriksaanNeonatus({ form }: any) {
  const { fields, append, remove } = useFieldArray({
    name: 'pemeriksaanNeonatus',
    control: form.control,
  });

  return (
    <section className="_PEMERIKSAANNEONATUS space-y-4">
      <TitleSection
        title="Pemeriksaan Neonatus ( 6 Jam - 28 Hari )"
        subtitle="Masukkan data bayi"
      />
      <FormWrapper>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead colSpan={6} className="text-center">
                Pemeriksaan
              </TableHead>
              <TableHead colSpan={4} className="text-center">
                Pencegahan
              </TableHead>
              <TableHead colSpan={2} className="text-center">
                Integrasi Program
              </TableHead>
              <TableHead colSpan={8} className="text-center">
                Diagnosis
              </TableHead>
            </TableRow>
            <TableRow className="whitespace-nowrap">
              <TableHead>Tanggal</TableHead>
              <TableHead>Umur (Hari)</TableHead>
              <TableHead>KN</TableHead>
              <TableHead>Nakes (D/B/P)</TableHead>
              <TableHead>Asi Ekslusif</TableHead>
              <TableHead>Berat Badan</TableHead>
              <TableHead>Tinggi Badan</TableHead>
              <TableHead>Vit. K1</TableHead>
              <TableHead>Hep. B</TableHead>
              <TableHead>BCG</TableHead>
              <TableHead>Lain-Lain</TableHead>
              <TableHead>Kontrimoksasol/ Profiaksis</TableHead>
              <TableHead>Pemberian Susu Formula</TableHead>
              <TableHead>Pneumoni</TableHead>
              <TableHead>Hipotermi</TableHead>
              <TableHead>Ikterus</TableHead>
              <TableHead>Tetanus</TableHead>
              <TableHead>Infeksi</TableHead>
              <TableHead>Diare</TableHead>
              <TableHead>Hematologi</TableHead>
              {/* <TableHead>Lain - lain</TableHead> */}
              <TableHead>Klasifikasi MTBM</TableHead>
              <TableHead>Keadaan Pulang</TableHead>
              <TableHead>Dirujuk Ke</TableHead>
              <TableHead>Keadaan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fields.map((field: any, index: number) => (
              <TableRow key={field.id}>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatus.${index}.tglDatang`}
                    form={form}
                    type="date"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatus.${index}.pemeriksaan.umur`}
                    form={form}
                    placeholder="Umur"
                  />
                </TableCell>
                <TableCell className="">
                  <InputField
                    name={`pemeriksaanNeonatus.${index}.pemeriksaan.kn`}
                    placeholder="KN"
                    form={form}
                    type="select"
                    data={ENUM_VALUES.pemeriksaanNeonatus.kn
                      .filter((data) => data !== '')
                      .map((data) => ({
                        value: data,
                        label: data,
                      }))}
                    className="w-20"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatus.${index}.pemeriksaan.nakes`}
                    placeholder="Nakes"
                    form={form}
                    type="select"
                    data={ENUM_VALUES.pemeriksaanNeonatus.nakes
                      .filter((data) => data !== '')
                      .map((data) => ({
                        value: data,
                        label: data,
                      }))}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatus.${index}.pemeriksaan.asiEkslusif`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatus.${index}.pemeriksaan.bb`}
                    placeholder="Berat Badan"
                    form={form}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatus.${index}.pemeriksaan.tb`}
                    placeholder="Tinggi Badan"
                    form={form}
                  />
                </TableCell>

                {ENUM_VALUES.pemeriksaanNeonatus.pencegahan.map((item) => (
                  <TableCell key={item.id}>
                    <FormField
                      control={form.control}
                      name={`pemeriksaanNeonatus.${index}.pencegahan`}
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex justify-center space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value: any) => value !== item.id,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                          </FormItem>
                        );
                      }}
                    />
                  </TableCell>
                ))}
                {/* <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatus.${index}.pencegahan.vitk1`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatus.${index}.pencegahan.hepB`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatus.${index}.pencegahan.bcg`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell> */}
                {ENUM_VALUES.pemeriksaanNeonatus.integrasiProgram.map(
                  (item) => (
                    <TableCell key={item.id}>
                      <FormField
                        control={form.control}
                        name={`pemeriksaanNeonatus.${index}.integrasiProgram`}
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex justify-center space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value: any) => value !== item.id,
                                          ),
                                        );
                                  }}
                                />
                              </FormControl>
                            </FormItem>
                          );
                        }}
                      />
                    </TableCell>
                  ),
                )}
                {/* <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatus.${index}.integrasiProgram.kontrimoksasol`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatus.${index}.integrasiProgram.susuFormula`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell> */}
                {/* <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatus.${index}.diagnosis.pneuoni`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatus.${index}.diagnosis.hipoermi`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatus.${index}.diagnosis.ikteus`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatus.${index}.diagnosis.tetaus`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatus.${index}.diagnosis.infesi`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatus.${index}.diagnosis.diare`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatus.${index}.diagnosis.hemaologi`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell> */}
                {ENUM_VALUES.pemeriksaanNeonatus.diagnosis.map((item) => (
                  <TableCell key={item.id}>
                    <FormField
                      control={form.control}
                      name={`pemeriksaanNeonatus.${index}.diagnosis`}
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex justify-center space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value: any) => value !== item.id,
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                          </FormItem>
                        );
                      }}
                    />
                  </TableCell>
                ))}
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatus.${index}.mbtm`}
                    placeholder="Klasifikasi MTBM"
                    form={form}
                    type="select"
                    data={ENUM_VALUES.pemeriksaanNeonatus.mbtm
                      .filter((data) => data !== '')
                      .map((data) => ({
                        value: data,
                        label: data,
                      }))}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatus.${index}.keadaanPulang`}
                    placeholder="Keadaan Pulang"
                    form={form}
                    type="select"
                    data={ENUM_VALUES.pemeriksaanNeonatus.keadaanPulang
                      .filter((data) => data !== '')
                      .map((data) => ({
                        value: data,
                        label: data,
                      }))}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatus.${index}.dirujukKe`}
                    placeholder="Dirujuk Ke"
                    form={form}
                    type="select"
                    data={ENUM_VALUES.pemeriksaanNeonatus.dirujukKe
                      .filter((data) => data !== '')
                      .map((data) => ({
                        value: data,
                        label: data,
                      }))}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatus.${index}.keadaan`}
                    placeholder="Keadaan"
                    form={form}
                    type="select"
                    data={ENUM_VALUES.pemeriksaanNeonatus.keadaan
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
          data={defaultValues.pemeriksaanNeonatus}
        />
      </FormWrapper>
    </section>
  );
}
