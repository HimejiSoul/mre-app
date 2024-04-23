import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FormWrapper, TitleSection } from '../_component/form-card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useFieldArray } from 'react-hook-form';
import { Button } from '@/components/ui/button';

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
                  <FormField
                    control={form.control}
                    name={`pemeriksaanPNC.${index}.tanggal`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="date" placeholder="Tanggal" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <FormField
                    control={form.control}
                    name={`pemeriksaanPNC.${index}.hariKeKF`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="number"
                            className="arrow-hide"
                            placeholder="Hari ke"
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
                    name={`pemeriksaanPNC.${index}.tandaVital.td`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="number"
                            className="arrow-hide"
                            placeholder="Nilai TD"
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
                    name={`pemeriksaanPNC.${index}.tandaVital.suhu`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="number"
                            className="arrow-hide"
                            placeholder="Nilai suhu"
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
                    name={`pemeriksaanPNC.${index}.pelayanan.catatDiBukuKIA`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Catat di buku KIA" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <FormField
                    control={form.control}
                    name={`pemeriksaanPNC.${index}.pelayanan.fe`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Nilai Fe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <FormField
                    control={form.control}
                    name={`pemeriksaanPNC.${index}.pelayanan.vitA`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
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
                    name={`pemeriksaanPNC.${index}.integrasiProgram.cd4`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Nilai CD4" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <FormField
                    control={form.control}
                    name={`pemeriksaanPNC.${index}.integrasiProgram.antiMalaria`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Nilai anti malaria" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <FormField
                    control={form.control}
                    name={`pemeriksaanPNC.${index}.integrasiProgram.antiTB`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Nilai anti TB" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <FormField
                    control={form.control}
                    name={`pemeriksaanPNC.${index}.integrasiProgram.fotoThorax`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Nilai foto thorax" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <FormField
                    control={form.control}
                    name={`pemeriksaanPNC.${index}.komplikasi`}
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Komplikasi" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ppp">PPP</SelectItem>
                            <SelectItem value="infeksi">Infeksi</SelectItem>
                            <SelectItem value="hdk">HDK</SelectItem>
                            <SelectItem value="lainnya">Lainnya</SelectItem>
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
                    name={`pemeriksaanPNC.${index}.ditujukKe`}
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Ditujuk ke" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="pkm">PKM</SelectItem>
                            <SelectItem value="rb">RB</SelectItem>
                            <SelectItem value="rsia/rsb">RSIA/RSB</SelectItem>
                            <SelectItem value="rs">RS</SelectItem>
                            <SelectItem value="lainnya">Lainnya</SelectItem>
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
                    name={`pemeriksaanPNC.${index}.keadaan.tiba`}
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Keadaan tiba" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="hidup">Hidup</SelectItem>
                            <SelectItem value="mati">Mati</SelectItem>
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
                    name={`pemeriksaanPNC.${index}.keadaan.pulang`}
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Keadaan pulang" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="hidup">Hidup</SelectItem>
                            <SelectItem value="mati">Mati</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex gap-2">
          <Button
            type="button"
            variant={'outline'}
            className="border-red-500 text-red-500 hover:text-red-600"
            onClick={() => remove(fields.length - 1)}
          >
            Hapus
          </Button>
          <Button
            type="button"
            className="w-full border-rme-blue-500 text-rme-blue-500 hover:text-rme-blue-500"
            variant={'outline'}
            onClick={() =>
              append({
                tanggal: '',
                hariKeKF: '',
                tandaVital: {
                  td: '',
                  suhu: '',
                },
                pelayanan: {
                  catatDiBukuKIA: '',
                  fe: '',
                  vitA: false,
                },
                integrasiProgram: {
                  cd4: '',
                  antiMalaria: '',
                  antiTB: '',
                  fotoThorax: '',
                },
                komplikasi: '',
                ditujukKe: '',
                keadaan: {
                  tiba: '',
                  pulang: '',
                },
              })
            }
          >
            Tambah
          </Button>
        </div>
      </FormWrapper>
    </section>
  );
}
