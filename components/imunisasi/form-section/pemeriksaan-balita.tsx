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
import { FormControl, FormField, FormItem } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';

import { useFieldArray } from 'react-hook-form';
import {
  ENUM_VALUES,
  defaultValues,
} from '@/lib/types/imunisasi/imunisasi-types';
import { TableButtonGroup } from '@/components/Buttons';

export default function PemeriksaanBalita({ form }: any) {
  const { fields, append, remove } = useFieldArray({
    name: 'pemeriksaanBalita',
    control: form.control,
  });

  return (
    <section className="_PEMERIKSAANBALITA space-y-4">
      <TitleSection
        // title="Pemeriksaan Balita ( > 1 - 5 Tahun )"
        title="Pemeriksaan Balita ( &gt; 1 - 5 Tahun )"
        subtitle="Masukkan data balita"
      />
      <FormWrapper>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead colSpan={3} className="text-center">
                Umur
              </TableHead>
              <TableHead colSpan={3} className="text-center">
                Pemeriksaan
              </TableHead>
              <TableHead colSpan={4} className="text-center">
                Gizi
              </TableHead>
              <TableHead colSpan={3} className="text-center">
                Integrasi Program
              </TableHead>
              <TableHead colSpan={2} className="text-center">
                Imunisasi
              </TableHead>
            </TableRow>
            <TableRow className="whitespace-nowrap">
              <TableHead>Tanggal</TableHead>
              <TableHead>Tahun</TableHead>
              <TableHead>Bulan</TableHead>
              <TableHead>Hari</TableHead>
              <TableHead>Asi</TableHead>
              <TableHead>MP ASI</TableHead>
              <TableHead>SDI DTK</TableHead>
              <TableHead>Berat Badan (Kg)</TableHead>
              <TableHead>Tinggi Badan (cm)</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Vit. A Anak</TableHead>
              <TableHead>Sorologi HIV</TableHead>
              <TableHead>CD4</TableHead>
              <TableHead>Mendapat Kelambu</TableHead>
              <TableHead>DPT HB HIB Booster</TableHead>
              <TableHead>Campak Booster</TableHead>
              <TableHead>Keterangan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fields.map((field: any, index: number) => (
              <TableRow key={field.id}>
                <TableCell>
                  <InputField
                    name={`pemeriksaanBalita.${index}.tglDatang`}
                    form={form}
                    type="date"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanBalita.${index}.umur.tahun`}
                    form={form}
                    placeholder="Tahun"
                    className="w-12"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanBalita.${index}.umur.bulan`}
                    placeholder="Bulan"
                    form={form}
                    className="w-12"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanBalita.${index}.umur.hari`}
                    placeholder="Hari"
                    form={form}
                    className="w-12"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanBalita.${index}.pemeriksaan.asiEkslusif`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanBalita.${index}.pemeriksaan.mpasi`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanBalita.${index}.pemeriksaan.sdidtk`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanBalita.${index}.gizi.bb`}
                    placeholder="Berat Badan"
                    form={form}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanBalita.${index}.gizi.tb`}
                    placeholder="Tinggi Badan"
                    form={form}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanBalita.${index}.gizi.status`}
                    placeholder="Status"
                    form={form}
                    className="w-40"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanBalita.${index}.gizi.vitA`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell>
                {ENUM_VALUES.pemeriksaanNeonatusLanjutan.integrasiProgram.map(
                  (item) => (
                    <TableCell key={item.id}>
                      <FormField
                        control={form.control}
                        name={`pemeriksaanBalita.${index}.integrasiProgram`}
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
                {ENUM_VALUES.pemeriksaanBalita.imunisasi.map((item) => (
                  <TableCell key={item.id}>
                    <FormField
                      control={form.control}
                      name={`pemeriksaanBalita.${index}.imunisasi`}
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
                    name={`pemeriksaanBalita.${index}.ket`}
                    form={form}
                    type="textarea"
                    placeholder="Keterangan"
                    className="w-40"
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
          data={defaultValues.pemeriksaanBalita}
        />
      </FormWrapper>
    </section>
  );
}
