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
              <FormItem>
                <FormLabel>Tanggal</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pemeriksaanPNC.hariKeKF"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hari ke/ KF</FormLabel>
                <FormControl>
                  <Input {...field} />
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
              <FormItem>
                <FormLabel>TD (mmHg)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pemeriksaanPNC.tandaVital.suhu"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Suhu C</FormLabel>
                <FormControl>
                  <Input {...field} />
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
              <FormItem>
                <FormLabel>Catat di Buku KIA</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pemeriksaanPNC.pelayanan.fe"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fe (tab/botol)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pemeriksaanPNC.pelayanan.vitA"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vit A*</FormLabel>
                <FormControl>
                  <Input {...field} />
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
              <FormItem>
                <FormLabel>CD4 (kopi/ml)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pemeriksaanPNC.integrasiProgram.antiMalaria"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Anti Malaria**</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pemeriksaanPNC.integrasiProgram.antiTB"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Anti TB***</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pemeriksaanPNC.integrasiProgram.fotoThorax"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Foto Thorax(+/-)</FormLabel>
                <FormControl>
                  <Input {...field} />
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
              <FormItem>
                <FormLabel>PPP</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pemeriksaanPNC.komplikasi.infeksi"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Infeksi</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pemeriksaanPNC.komplikasi.hdk"
            render={({ field }) => (
              <FormItem>
                <FormLabel>HDK</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pemeriksaanPNC.komplikasi.lainnya"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lainnya</FormLabel>
                <FormControl>
                  <Input {...field} />
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
              <FormItem>
                <FormLabel>Keadaan Tiba</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pemeriksaanPNC.keadaan.pulang"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Keadaan Pulang</FormLabel>
                <FormControl>
                  <Input {...field} />
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
