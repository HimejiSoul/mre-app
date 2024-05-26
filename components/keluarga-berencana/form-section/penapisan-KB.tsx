import {
  FormWrapper,
  InputField,
  Row,
  TitleSection,
} from '@/components/form-content';
import { useState } from 'react';
import { calculateAge } from '@/lib/calculate-age';
import { ENUM_VALUES } from '@/lib/types/keluarga-berencana/kb-schema';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function PenapisanKB({ form }: any) {
  const [birthDate, setBirthDate] = useState<Date | string>('');
  const age = calculateAge(birthDate);

  return (
    <section className="PENAPISAN_KB space-y-4">
      <TitleSection
        title="Penapisan KB"
        subtitle="Apakah klien menderita penyakit"
      />
      <FormWrapper>
        <Table>
          <TableBody>
            {ENUM_VALUES.PenapisanKB.map((d, i) => (
              <TableRow key={d.id}>
                <TableCell className="font-medium">{d.name}</TableCell>
                <TableCell className="border-r-2">
                  <InputField name={d.Fname} form={form} type="radio" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </FormWrapper>
    </section>
  );
}
