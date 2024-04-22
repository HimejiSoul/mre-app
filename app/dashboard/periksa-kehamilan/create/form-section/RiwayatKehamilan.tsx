import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FormWrapper, Row, TitleSection } from '../create-form';
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

export function RiwayatKehamilanSebelumnya({ form }: any) {
  return (
    <section className="_RIWAYAT_KEHAMILAN_SEBELUMNYA space-y-4">
      <TitleSection
        title="Riwayat Kehamilan Sebelumnya"
        subtitle="Masukkan data pasien"
      />
      <FormWrapper>
        <Row>
          <FormField
            control={form.control}
            name="riwayatKehamilanSebelumnya.g"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Gravida</FormLabel>
                <FormControl>
                  <Input placeholder="Nilai G" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="riwayatKehamilanSebelumnya.p"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Partus</FormLabel>
                <FormControl>
                  <Input placeholder="Nilai P" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="riwayatKehamilanSebelumnya.a"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Abortus</FormLabel>
                <FormControl>
                  <Input placeholder="Nilai A" {...field} />
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
            <TableRow>
              <TableCell>
                <FormField
                  control={form.control}
                  name="riwayatKehamilanSebelumnya.tahun"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Tahun" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="riwayatKehamilanSebelumnya.jenisKelamin"
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
                  name="riwayatKehamilanSebelumnya.hasilPersalinan"
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
                  name="riwayatKehamilanSebelumnya.jenisPersalinan"
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
                  name="riwayatKehamilanSebelumnya.keadaanSaatLahir"
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
                  name="riwayatKehamilanSebelumnya.bbl"
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
                  name="riwayatKehamilanSebelumnya.lamaMenyusui"
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
                  name="riwayatKehamilanSebelumnya.penolongPersalinan"
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
                  name="riwayatKehamilanSebelumnya.penyulit"
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
                  name="riwayatKehamilanSebelumnya.keterangan"
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
          </TableBody>
        </Table>
      </FormWrapper>
    </section>
  );
}
