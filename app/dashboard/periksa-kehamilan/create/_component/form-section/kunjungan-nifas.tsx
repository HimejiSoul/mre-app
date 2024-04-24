import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  FormWrapper,
  TitleSection,
} from '@/app/dashboard/periksa-kehamilan/create/_component/form-card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function KunjunganNifas({ form }: any) {
  return (
    <section className="_KUNJUNGAN_NIFAS space-y-4">
      <TitleSection
        title="Kunjungan Nifas (KF)"
        subtitle="Masukkan data pasien"
      />
      <FormWrapper>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Metode Kontrasepsi</TableHead>
              <TableHead>Rencana</TableHead>
              <TableHead>Pelaksanaan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">MAL</TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="kunjunganNifas.mal.rencana"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Rencana" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="kunjunganNifas.mal.pelaksanaan"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Pelaksanaan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">KONDOM</TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="kunjunganNifas.kondom.rencana"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Kondom" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="kunjunganNifas.kondom.pelaksanaan"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Pelaksanaan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">PIL</TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="kunjunganNifas.pil.rencana"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Rencana" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell>
                {' '}
                <FormField
                  control={form.control}
                  name="kunjunganNifas.pil.pelaksanaan"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Pelaksanaan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">SUNTIK</TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="kunjunganNifas.suntik.rencana"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Rencana" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="kunjunganNifas.suntik.pelaksanaan"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Pelaksanaan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">AKDR</TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="kunjunganNifas.akdr.rencana"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Rencana" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="kunjunganNifas.akdr.pelaksanaan"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Pelaksanaan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INPLANT</TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="kunjunganNifas.inplant.rencana"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Rencana" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="kunjunganNifas.inplant.pelaksanaan"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Pelaksanaan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">MOW</TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="kunjunganNifas.mow.rencana"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Rencana" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="kunjunganNifas.mow.pelaksanaan"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Pelaksanaan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">MOP</TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="kunjunganNifas.mop.rencana"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Rencana" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="kunjunganNifas.mop.pelaksanaan"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Pelaksanaan" {...field} />
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
