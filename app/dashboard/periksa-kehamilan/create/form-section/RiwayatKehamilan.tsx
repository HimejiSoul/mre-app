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
              <FormItem>
                <FormLabel>Gravida</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="riwayatKehamilanSebelumnya.p"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Partus</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="riwayatKehamilanSebelumnya.a"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Abortus</FormLabel>
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
            name="riwayatKehamilanSebelumnya.tahun"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tahun</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="riwayatKehamilanSebelumnya.jenisKelamin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jenis Kelamin</FormLabel>
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
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="riwayatKehamilanSebelumnya.hasilPersalinan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hasil Persalinan</FormLabel>
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
          <FormField
            control={form.control}
            name="riwayatKehamilanSebelumnya.jenisPersalinan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jenis Persalinan</FormLabel>
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
            name="riwayatKehamilanSebelumnya.keadaanSaatLahir"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Keadaan Saat Lahir</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="riwayatKehamilanSebelumnya.bbl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>BBL</FormLabel>
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
            name="riwayatKehamilanSebelumnya.lamaMenyusui"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lama Menyusui</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="riwayatKehamilanSebelumnya.penolongPersalinan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Penolong Persalinan</FormLabel>
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
            name="riwayatKehamilanSebelumnya.penyulit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Penyulit</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="riwayatKehamilanSebelumnya.keterangan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Keterangan</FormLabel>
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
