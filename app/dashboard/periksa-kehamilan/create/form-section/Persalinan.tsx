import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FormWrapper, Row, TitleSection } from '../_component/form-card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function Persalinan({ form }: any) {
  return (
    <section className="_PERSALINAN space-y-4">
      <TitleSection title="Persalinan" subtitle="Masukkan data pasien" />
      <FormWrapper>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Persalinan</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Jam</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Kala I Aktif</TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="persalinan.kalaIAktif.tanggal"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Tanggal" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="persalinan.kalaIAktif.jam"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Jam" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Kala II</TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="persalinan.kalaII.tanggal"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Tanggal" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="persalinan.kalaII.jam"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Jam" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bayi Lahir</TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="persalinan.bayiLahir.tanggal"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Tanggal" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="persalinan.bayiLahir.jam"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Jam" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Plasenta Lahir</TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="persalinan.plasentaLahir.tanggal"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Tanggal" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="persalinan.plasentaLahir.jam"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Jam" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Row>
          <FormField
            control={form.control}
            name="persalinan.perdarahanKalaIV"
            render={({ field }) => (
              <FormItem className="col-span-6">
                <FormLabel>Perdarahan Kala IV jam Pospartum</FormLabel>
                <FormControl>
                  <Input placeholder="Perdarahan Kala IV" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="persalinan.usiaKehamilan"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Usia Kehamilan</FormLabel>
                <FormControl>
                  <Input placeholder="Usia kehamilan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.usiaHPHT"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Usia HPHT</FormLabel>
                <FormControl>
                  <Input placeholder="Usia HPHT" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.keadaanIbu"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Keadaan Ibu</FormLabel>
                <FormControl>
                  <Input placeholder="Keadaan ibu" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="persalinan.keadaanBayi"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Keadaan Bayi</FormLabel>
                <FormControl>
                  <Input placeholder="Keadaan bayi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.beratBayi"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Berat Bayi</FormLabel>
                <FormControl>
                  <Input placeholder="Berat bayi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>

        <Row>
          <FormField
            control={form.control}
            name="persalinan.presentasi"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Presentasi</FormLabel>
                <FormControl>
                  <Input placeholder="Presentasi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.tempat"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Tempat</FormLabel>
                <FormControl>
                  <Input placeholder="Tempat" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.penolong"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Penolong</FormLabel>
                <FormControl>
                  <Input placeholder="Penolong" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="persalinan.caraPersalinan"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Cara Persalinan</FormLabel>
                <FormControl>
                  <Input placeholder="Cara persalinan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.manajemenAktifKalaIII"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Manajemen Aktif Kala III</FormLabel>
                <FormControl>
                  <Input placeholder="Manajemen aktif kala III" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.pelayanan"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Pelayanan</FormLabel>
                <FormControl>
                  <Input placeholder="Pelayanan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="persalinan.integrasiProgram"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Integrasi Program</FormLabel>
                <FormControl>
                  <Input placeholder="Integrasi program" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.komplikasi"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Komplikasi</FormLabel>
                <FormControl>
                  <Input placeholder="Komplikasi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.dirujukKe"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Dirujuk ke</FormLabel>
                <FormControl>
                  <Input placeholder="Dirujuk ke" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="persalinan.keadaanTiba"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Keadaan Tiba</FormLabel>
                <FormControl>
                  <Input placeholder="Keadaan tiba" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.keadaanPulang"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Keadaan Pulang</FormLabel>
                <FormControl>
                  <Input placeholder="Keadaan pulang" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.alamatBersalin"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Alamat Bersalin</FormLabel>
                <FormControl>
                  <Input placeholder="Alamat bersalin" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
      </FormWrapper>
    </section>
  );
}
