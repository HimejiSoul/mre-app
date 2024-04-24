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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

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
                        <Input type="date" {...field} />
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
                        <Input type="time" {...field} />
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
                        <Input type="date" {...field} />
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
                        <Input type="time" {...field} />
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
                        <Input type="date" {...field} />
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
                        <Input type="time" {...field} />
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
                        <Input type="date" {...field} />
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
                        <Input type="time" {...field} />
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
              <FormItem className="relative col-span-6">
                <FormLabel>Perdarahan Kala IV jam Pospartum</FormLabel>
                <FormControl>
                  <Input placeholder="Perdarahan Kala IV" {...field} />
                </FormControl>
                <span className="absolute bottom-2.5 right-2.5 text-sm text-black/50">
                  cc
                </span>
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
              <FormItem className="relative col-span-3">
                <FormLabel>Usia Kehamilan</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="arrow-hide"
                    placeholder="Usia kehamilan"
                    {...field}
                  />
                </FormControl>
                <span className="absolute bottom-2.5 right-2.5 text-sm text-black/50">
                  minggu
                </span>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.usiaHPHT"
            render={({ field }) => (
              <FormItem className="relative col-span-3">
                <FormLabel>Usia HPHT</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="arrow-hide"
                    placeholder="Usia HPHT"
                    {...field}
                  />
                </FormControl>
                <span className="absolute bottom-2.5 right-2.5 text-sm text-black/50">
                  minggu
                </span>
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
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Keadaan Ibu" />
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
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="persalinan.keadaanBayi"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Keadaan Bayi</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Keadaan Bayi" />
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
          <FormField
            control={form.control}
            name="persalinan.beratBayi"
            render={({ field }) => (
              <FormItem className="relative col-span-3">
                <FormLabel>Berat Bayi</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="arrow-hide"
                    placeholder="Berat bayi"
                    {...field}
                  />
                </FormControl>
                <span className="absolute bottom-2.5 right-2.5 text-sm text-black/50">
                  gram
                </span>
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
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Presentasi" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="pucuk-kepala">Pucuk Kepala</SelectItem>
                    <SelectItem value="belakang-kepala">
                      Belakang Kepala
                    </SelectItem>
                    <SelectItem value="lintang">Lintang/Oblique</SelectItem>
                    <SelectItem value="menumbung">Menumbung</SelectItem>
                    <SelectItem value="bokong">Bokong</SelectItem>
                    <SelectItem value="dahi">Dahi</SelectItem>
                    <SelectItem value="muka">Muka</SelectItem>
                    <SelectItem value="kaki">Kaki</SelectItem>
                    <SelectItem value="campuran">Campuran</SelectItem>
                  </SelectContent>
                </Select>
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
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Tempat" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="rumah">Rumah</SelectItem>
                    <SelectItem value="polindes">Polindes</SelectItem>
                    <SelectItem value="pustu">Pustu</SelectItem>
                    <SelectItem value="puskesmas">Puskesmas</SelectItem>
                    <SelectItem value="rb">RB</SelectItem>
                    <SelectItem value="rsia">RSIA</SelectItem>
                    <SelectItem value="rs">RS</SelectItem>
                    <SelectItem value="rs-odha">RS.ODHA</SelectItem>
                  </SelectContent>
                </Select>
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
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Penolong" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="keluarga">Keluarga</SelectItem>
                    <SelectItem value="dukun">Dukun</SelectItem>
                    <SelectItem value="bidan">Bidan</SelectItem>
                    <SelectItem value="dr-spesialis">Dr. Spesialis</SelectItem>
                    <SelectItem value="dr">Dr.</SelectItem>
                    <SelectItem value="lainnya">Lainnya</SelectItem>
                    <SelectItem value="tidak-ada">Tidak Ada</SelectItem>
                  </SelectContent>
                </Select>
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
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Cara persalinan" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="vacum">Vacum</SelectItem>
                    <SelectItem value="forceps">Forceps</SelectItem>
                    <SelectItem value="secio-caesaria">
                      Secio Caesaria
                    </SelectItem>
                  </SelectContent>
                </Select>
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
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Manajemen aktif kala III" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="injeksi-oksitosin">
                      Injeksi Oksitosin
                    </SelectItem>
                    <SelectItem value="peregangan-tali-pusat">
                      Peregangan Tali Pusat
                    </SelectItem>
                    <SelectItem value="masase-fundus-uteri">
                      Masase Fundus Uteri
                    </SelectItem>
                  </SelectContent>
                </Select>
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
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pelayanan" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="imd-<1jam">IMD: &lt; 1Jam</SelectItem>
                    <SelectItem value="imd->1jam">IMD: &gt; 1Jam</SelectItem>
                    <SelectItem value="menggunakan-partograf">
                      Menggunakan Partograf
                    </SelectItem>
                    <SelectItem value="catat-di-buku-kia">
                      Catat di Buku KIA
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="persalinan.integrasiProgram.jenisObat"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Integrasi Program</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Integrasi program" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="arv-profilaksis">
                      ARV Profilaksis
                    </SelectItem>
                    <SelectItem value="obat-anti-malaria">
                      Obat Anti Malaria
                    </SelectItem>
                    <SelectItem value="obat-anti-tb">Obat Anti TB</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.integrasiProgram.namaObat"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Obat yang diberikan</FormLabel>
                <FormControl>
                  <Input placeholder="Nama obat" {...field} />
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
                    <SelectItem value="distosia">Distosia</SelectItem>
                    <SelectItem value="hdk">HDK</SelectItem>
                    <SelectItem value="ppp">PPP</SelectItem>
                    <SelectItem value="infeksi">Infeksi</SelectItem>
                    <SelectItem value="lainnya">Lainnya</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="persalinan.dirujukKe"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Dirujuk ke</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Dirujuk ke" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="puskesmas">Puskesmas</SelectItem>
                    <SelectItem value="rb">RB</SelectItem>
                    <SelectItem value="rsia">RSIA</SelectItem>
                    <SelectItem value="rs">RS</SelectItem>
                    <SelectItem value="lainnya">Lainnya</SelectItem>
                    <SelectItem value="tidak-di-rujuk">
                      Tidak di Rujuk
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.keadaanTiba"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Keadaan Tiba</FormLabel>
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
          <FormField
            control={form.control}
            name="persalinan.keadaanPulang"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Keadaan Pulang</FormLabel>
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
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="persalinan.alamatBersalin"
            render={({ field }) => (
              <FormItem className="col-span-9">
                <FormLabel>Alamat Bersalin</FormLabel>
                <FormControl>
                  <Textarea placeholder="Alamat bersalin" {...field} />
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
