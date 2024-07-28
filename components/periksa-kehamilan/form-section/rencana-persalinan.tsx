'use client';

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

export default function RencanaPersalinan({ form }: any) {
  const { fields, append, remove } = useFieldArray({
    name: 'rencanaPersalinan',
    control: form.control,
  });

  return (
    <section className="_RENCANA_PERSALINAN space-y-4">
      <TitleSection title="Rencana Persalinan" />
      <FormWrapper>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tanggal</TableHead>
              <TableHead>Penolong</TableHead>
              <TableHead>Tempat</TableHead>
              <TableHead>Pendamping</TableHead>
              <TableHead>Transportasi</TableHead>
              <TableHead>Pendonor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fields.map((field: any, index: number) => (
              <TableRow key={field.id}>
                <TableCell>
                  <InputField
                    name={`rencanaPersalinan.${index}.tanggal`}
                    form={form}
                    type="date"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`rencanaPersalinan.${index}.penolong`}
                    form={form}
                    type="select"
                    placeholder="Pilih Penolong"
                    data={ENUM_VALUES.rencanaPersalinan.penolong
                      .filter((data) => data !== '')
                      .map((data) => ({
                        value: data,
                        label: data,
                      }))}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`rencanaPersalinan.${index}.tempat`}
                    form={form}
                    type="select"
                    placeholder="Pilih Tempat"
                    data={ENUM_VALUES.rencanaPersalinan.tempat
                      .filter((data) => data !== '')
                      .map((data) => ({
                        value: data,
                        label: data,
                      }))}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`rencanaPersalinan.${index}.pendamping`}
                    form={form}
                    type="select"
                    placeholder="Pilih Pendamping"
                    data={ENUM_VALUES.rencanaPersalinan.pendamping
                      .filter((data) => data !== '')
                      .map((data) => ({
                        value: data,
                        label: data,
                      }))}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`rencanaPersalinan.${index}.transportasi`}
                    form={form}
                    type="select"
                    placeholder="Pilih Transportasi"
                    data={ENUM_VALUES.rencanaPersalinan.transportasi
                      .filter((data) => data !== '')
                      .map((data) => ({
                        value: data,
                        label: data,
                      }))}
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`rencanaPersalinan.${index}.pendonor`}
                    form={form}
                    type="select"
                    placeholder="Pilih Pendonor"
                    data={ENUM_VALUES.rencanaPersalinan.pendonor
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
          data={defaultValues.rencanaPersalinan}
        />
      </FormWrapper>
    </section>
  );
}
