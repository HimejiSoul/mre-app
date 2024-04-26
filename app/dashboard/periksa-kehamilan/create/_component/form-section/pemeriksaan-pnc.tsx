import { FormField, FormItem, FormMessage } from '@/components/ui/form';
import {
  FormWrapper,
  TitleSection,
} from '@/app/dashboard/periksa-kehamilan/create/_component/form-content';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { useFieldArray } from 'react-hook-form';
import { defaultValues } from '@/app/dashboard/periksa-kehamilan/_types/periksa-kehamilan-types';
import { TableButtonGroup } from '@/app/dashboard/periksa-kehamilan/create/_component/button';
import { FormInput } from '@/app/dashboard/periksa-kehamilan/create/_component/form-field';

const dataColPNC = [
  {
    id: 1,
    type: 'date',
    name: 'Tanggal',
    schemaName: 'tanggal',
    placeholder: 'Tanggal',
    styles: '',
    options: [],
  },
  {
    id: 2,
    type: 'number',
    name: 'Hari ke/KF',
    schemaName: 'hariKeKF',
    placeholder: 'Hari ke KF',
    styles: 'arrow-hide',
    options: [],
  },
  {
    id: 3,
    type: 'number',
    name: 'TD (mmHg)',
    schemaName: 'tandaVital.td',
    placeholder: 'Nilai TD',
    styles: 'arrow-hide',
    options: [],
  },
  {
    id: 4,
    type: 'number',
    name: 'Suhu C',
    schemaName: 'tandaVital.suhu',
    placeholder: 'Nilai suhu',
    styles: 'arrow-hide',
    options: [],
  },
  {
    id: 5,
    type: 'text',
    name: 'Catat di Buku KIA',
    schemaName: 'pelayanan.catatDiBukuKIA',
    placeholder: 'Catat di buku KIA',
    styles: '',
    options: [],
  },
  {
    id: 6,
    type: 'text',
    name: 'Fe (tab/botol)',
    schemaName: 'pelayanan.fe',
    placeholder: 'Nilai Fe',
    styles: '',
    options: [],
  },
  {
    id: 7,
    type: 'checkbox',
    name: 'Vit A',
    schemaName: 'pelayanan.vitA',
    placeholder: '',
    styles: '',
    options: [],
  },
  {
    id: 8,
    type: 'text',
    name: 'CD4 (kopi/ml)',
    schemaName: 'integrasiProgram.cd4',
    placeholder: 'Nilai CD4',
    styles: '',
    options: [],
  },
  {
    id: 9,
    type: 'text',
    name: 'Anti Malaria',
    schemaName: 'integrasiProgram.antiMalaria',
    placeholder: 'Nilai anti malaria',
    styles: '',
    options: [],
  },
  {
    id: 10,
    type: 'text',
    name: 'Anti TB',
    schemaName: 'integrasiProgram.antiTB',
    placeholder: 'Nilai anti TB',
    styles: '',
    options: [],
  },
  {
    id: 11,
    type: 'text',
    name: 'Foto Thorax (+/-)',
    schemaName: 'integrasiProgram.fotoThorax',
    placeholder: 'Nilai foto thorax',
    styles: '',
    options: [],
  },
  {
    id: 12,
    type: 'select',
    name: 'Komplikasi',
    schemaName: 'komplikasi',
    placeholder: 'Komplikasi',
    styles: '',
    options: [
      { value: 'ppp', label: 'PPP' },
      { value: 'infeksi', label: 'Infeksi' },
      { value: 'hdk', label: 'HDK' },
      { value: 'lainnya', label: 'Lainnya' },
    ],
  },
  {
    id: 13,
    type: 'select',
    name: 'Dirujuk Ke',
    schemaName: 'ditujukKe',
    placeholder: 'Ditujuk ke',
    styles: '',
    options: [
      { value: 'pkm', label: 'PKM' },
      { value: 'rb', label: 'RB' },
      { value: 'rsia/rsb', label: 'RSIA/RSB' },
      { value: 'rs', label: 'RS' },
      { value: 'lainnya', label: 'Lainnya' },
    ],
  },
  {
    id: 14,
    type: 'select',
    name: 'Keadaan Tiba',
    schemaName: 'keadaan.tiba',
    placeholder: 'Keadaan tiba',
    styles: '',
    options: [
      { value: 'hidup', label: 'Hidup' },
      { value: 'mati', label: 'Mati' },
    ],
  },
  {
    id: 15,
    type: 'select',
    name: 'Keadaan Pulang',
    schemaName: 'keadaan.pulang',
    placeholder: 'Keadaan pulang',
    styles: '',
    options: [
      { value: 'hidup', label: 'Hidup' },
      { value: 'mati', label: 'Mati' },
    ],
  },
];

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
          <TableHeader>
            <TableRow>
              {dataColPNC.map((d) => (
                <TableHead key={d.id}>{d.name}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {fields.map((field: any, index: number) => (
              <TableRow key={field.id}>
                {dataColPNC.map((d) => (
                  <TableCell key={d.id}>
                    <FormField
                      control={form.control}
                      name={`pemeriksaanPNC.${index}.${d.schemaName}`}
                      render={({ field }) => (
                        <FormItem>
                          {/* Custom component for decide which input type based on data given */}
                          <FormInput data={d} field={field} />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </TableCell>
                ))}
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
