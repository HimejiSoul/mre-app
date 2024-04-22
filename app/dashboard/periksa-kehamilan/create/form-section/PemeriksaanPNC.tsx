import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FormWrapper, Row, TitleSection } from '../create-form';

export function PemeriksaanPNC({ form }: any) {
  return (
    <section className="_PERSALINAN space-y-4">
      <TitleSection title="Pemeriksaan PNC" subtitle="Masukkan data pasien" />
      <FormWrapper>
        <Row>
          <FormField
            control={form.control}
            name="pemeriksaanPNC.tanggal"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Tanggal</FormLabel>
                <FormControl>
                  <Input placeholder="Tanggal" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pemeriksaanPNC.hariKeKF"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Hari ke/ KF</FormLabel>
                <FormControl>
                  <Input placeholder="Hari ke" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="pemeriksaanPNC.tandaVital.td"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>TD (mmHg)</FormLabel>
                <FormControl>
                  <Input placeholder="Nilai TD" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pemeriksaanPNC.tandaVital.suhu"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Suhu C</FormLabel>
                <FormControl>
                  <Input placeholder="Nilai suhu" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="pemeriksaanPNC.pelayanan.catatDiBukuKIA"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Catat di Buku KIA</FormLabel>
                <FormControl>
                  <Input placeholder="Catat di buku KIA" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pemeriksaanPNC.pelayanan.fe"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Fe (tab/botol)</FormLabel>
                <FormControl>
                  <Input placeholder="Nilai Fe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pemeriksaanPNC.pelayanan.vitA"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Vit A*</FormLabel>
                <FormControl>
                  <Input placeholder="Nilai Vit A" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="pemeriksaanPNC.integrasiProgram.cd4"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>CD4 (kopi/ml)</FormLabel>
                <FormControl>
                  <Input placeholder="Nilai CD4" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pemeriksaanPNC.integrasiProgram.antiMalaria"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Anti Malaria**</FormLabel>
                <FormControl>
                  <Input placeholder="Nilai anti malaria" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pemeriksaanPNC.integrasiProgram.antiTB"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Anti TB***</FormLabel>
                <FormControl>
                  <Input placeholder="Nilai anti TB" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pemeriksaanPNC.integrasiProgram.fotoThorax"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Foto Thorax(+/-)</FormLabel>
                <FormControl>
                  <Input placeholder="Nilai foto thorax" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="pemeriksaanPNC.komplikasi.ppp"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>PPP</FormLabel>
                <FormControl>
                  <Input placeholder="Nilai PPP" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pemeriksaanPNC.komplikasi.infeksi"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Infeksi</FormLabel>
                <FormControl>
                  <Input placeholder="Nilai infkesi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pemeriksaanPNC.komplikasi.hdk"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>HDK</FormLabel>
                <FormControl>
                  <Input placeholder="Nilai HDK" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pemeriksaanPNC.komplikasi.lainnya"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Lainnya</FormLabel>
                <FormControl>
                  <Input placeholder="Nilai lainnya" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="pemeriksaanPNC.keadaan.tiba"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Keadaan Tiba</FormLabel>
                <FormControl>
                  <Input placeholder="Nilai keadaan tiba" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pemeriksaanPNC.keadaan.pulang"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Keadaan Pulang</FormLabel>
                <FormControl>
                  <Input placeholder="Nilai keadaan pulang" {...field} />
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
