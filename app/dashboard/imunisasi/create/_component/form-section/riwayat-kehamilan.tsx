import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  FormWrapper,
  Row,
  TitleSection,
} from '@/app/dashboard/periksa-kehamilan/create/_component/form-content';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
          <FormField
            control={form.control}
            name="riwayatKehamilan.g"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Gravida</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukan gravida"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="riwayatKehamilan.p"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Partus</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukan partus"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="riwayatKehamilan.a"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Abortus</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukan abortus"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
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
                  <FormField
                    control={form.control}
                    name={`riwayatKehamilan.data.${index}.tahun`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Tahun"
                            type="number"
                            className="arrow-hide"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <FormField
                    control={form.control}
                    name={`riwayatKehamilan.data.${index}.jenisKelamin`}
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih jenis kelamin" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="l">Laki-laki</SelectItem>
                            <SelectItem value="p">Perempuan</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <FormField
                    control={form.control}
                    name={`riwayatKehamilan.data.${index}.hasilPersalinan`}
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih hasil persalinan" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="lh">LH</SelectItem>
                            <SelectItem value="lm">LM</SelectItem>
                            <SelectItem value="ab">AB</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <FormField
                    control={form.control}
                    name={`riwayatKehamilan.data.${index}.jenisPersalinan`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Jenis persalinan" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <FormField
                    control={form.control}
                    name={`riwayatKehamilan.data.${index}.keadaanSaatLahir`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Keadaan saat lahir" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <FormField
                    control={form.control}
                    name={`riwayatKehamilan.data.${index}.bbl`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="BBL" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <FormField
                    control={form.control}
                    name={`riwayatKehamilan.data.${index}.lamaMenyusui`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Lama menyusui" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <FormField
                    control={form.control}
                    name={`riwayatKehamilan.data.${index}.penolongPersalinan`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Penolong persalinan" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <FormField
                    control={form.control}
                    name={`riwayatKehamilan.data.${index}.penyulit`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Penyulit" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <FormField
                    control={form.control}
                    name={`riwayatKehamilan.data.${index}.keterangan`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Keterangan" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
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
