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

export default function PemeriksaanNeonatusLanjutan({ form }: any) {
  const { fields, append, remove } = useFieldArray({
    name: 'pemeriksaanNeonatusLanjutan',
    control: form.control,
  });

  return (
    <section className="_PEMERIKSAANNEONATUSLANJUTAN space-y-4">
      {/* <TitleSection
        title="Pemeriksaan Neonatus ( 6 Jam - 28 Hari )"
        subtitle="Masukkan data bayi"
      /> */}
      <FormWrapper>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead colSpan={6} className="text-center">
                Pemeriksaan
              </TableHead>
              <TableHead colSpan={3} className="text-center">
                Gizi
              </TableHead>
              <TableHead colSpan={6} className="text-center">
                Pencegahan
              </TableHead>
              <TableHead colSpan={3} className="text-center">
                Integrasi Program
              </TableHead>
            </TableRow>
            <TableRow className="whitespace-nowrap">
              <TableHead>Tanggal</TableHead>
              <TableHead>Umur (Th)</TableHead>
              <TableHead>Umur (Bl)</TableHead>
              <TableHead>Umur (Hr)</TableHead>
              <TableHead>Asi Ekslusif</TableHead>
              <TableHead>MP ASI</TableHead>
              <TableHead>SDI DTK</TableHead>
              <TableHead>Berat Badan</TableHead>
              <TableHead>Tinggi Badan</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>BCG</TableHead>
              <TableHead>DPT HB HIB</TableHead>
              <TableHead>POLIO</TableHead>
              <TableHead>CAMPAK</TableHead>
              <TableHead>IPV</TableHead>
              <TableHead>Vit. A</TableHead>
              <TableHead>Sorologi HIV</TableHead>
              <TableHead>CD4</TableHead>
              <TableHead>Mendapat Kelambu</TableHead>
              <TableHead>Keterangan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fields.map((field: any, index: number) => (
              <TableRow key={field.id}>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatusLanjutan.${index}.tglDatang`}
                    form={form}
                    type="date"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatusLanjutan.${index}.pemeriksaan.umurth`}
                    form={form}
                    placeholder="Umur (TH)"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatusLanjutan.${index}.pemeriksaan.umurbi`}
                    placeholder="Umur (BI)"
                    form={form}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatusLanjutan.${index}.pemeriksaan.umurhr`}
                    placeholder="Umur (HR)"
                    form={form}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatusLanjutan.${index}.pemeriksaan.asiEkslusif`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatusLanjutan.${index}.pemeriksaan.mpasi`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatusLanjutan.${index}.pemeriksaan.sdidtk`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatusLanjutan.${index}.gizi.bb`}
                    placeholder="Berat Badan"
                    form={form}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatusLanjutan.${index}.gizi.tb`}
                    placeholder="Tinggi Badan"
                    form={form}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatusLanjutan.${index}.gizi.status`}
                    placeholder="Status"
                    form={form}
                    className="w-40"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatusLanjutan.${index}.pencegahan.bcg`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatusLanjutan.${index}.pencegahan.dpthbib`}
                    placeholder="DPT HB BIB"
                    form={form}
                    type="select"
                    data={ENUM_VALUES.pemeriksaanNeonatusLanjutan.dpthbib
                      .filter((data) => data !== '')
                      .map((data) => ({
                        value: data,
                        label: data,
                      }))}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatusLanjutan.${index}.pencegahan.polio`}
                    placeholder="POLIO"
                    form={form}
                    type="select"
                    data={ENUM_VALUES.pemeriksaanNeonatusLanjutan.polio
                      .filter((data) => data !== '')
                      .map((data) => ({
                        value: data,
                        label: data,
                      }))}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatusLanjutan.${index}.pencegahan.campak`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatusLanjutan.${index}.pencegahan.ipv`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatusLanjutan.${index}.pencegahan.vitA`}
                    form={form}
                    type="checkbox"
                  />
                </TableCell>
                {ENUM_VALUES.pemeriksaanNeonatusLanjutan.integrasiProgram.map(
                  (item) => (
                    <TableCell key={item.id}>
                      <FormField
                        control={form.control}
                        name={`pemeriksaanNeonatusLanjutan.${index}.integrasiProgram`}
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
                <TableCell>
                  <InputField
                    name={`pemeriksaanNeonatusLanjutan.${index}.ket`}
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
          data={defaultValues.pemeriksaanNeonatusLanjutan}
        />
      </FormWrapper>
    </section>
  );
}
