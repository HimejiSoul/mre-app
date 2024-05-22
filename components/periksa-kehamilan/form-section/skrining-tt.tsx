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
import { defaultValues } from '@/lib/types/periksa-kehamilan-types';
import { TableButtonGroup } from '@/components/Buttons';

export default function SkriningTT({ form }: any) {
  const { fields, append, remove } = useFieldArray({
    name: 'skriningTT',
    control: form.control,
  });

  return (
    <section className="_SKRINING_TT space-y-4">
      <TitleSection title="Skrining TT" subtitle="Masukkan data pasien" />
      <FormWrapper>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Tahun</TableHead>
              <TableHead>Keterangan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fields.map((field: any, index: number) => (
              <TableRow key={field.id}>
                <TableCell>
                  <InputField
                    name={`skriningTT.${index}.tanggal`}
                    form={form}
                    type="date"
                    className="w-[150px]"
                  />
                </TableCell>
                <TableCell>
                  <InputField
                    name={`skriningTT.${index}.keterangan`}
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
          data={defaultValues ? defaultValues.skriningTT : []}
        />
      </FormWrapper>
    </section>
  );
}
