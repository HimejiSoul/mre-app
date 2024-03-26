import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { FormWrapper, Row, TitleSection } from '../create-form';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function Persalinan({ form }: any) {
  return (
    <section className="_PERSALINAN space-y-4">
      <TitleSection title="Persalinan" subtitle="Masukkan data pasien" />
      <FormWrapper>
        <Row>
          <h1 className="font-semibold">Kala I Aktif</h1>
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="persalinan.kalaIAktif.tanggal"
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
            name="persalinan.kalaIAktif.tanggal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jam</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <h1 className="font-semibold">Kala II</h1>
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="persalinan.kalaII.tanggal"
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
            name="persalinan.kalaII.jam"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jam</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <h1 className="font-semibold">Bayi Lahir</h1>
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="persalinan.bayiLahir.tanggal"
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
            name="persalinan.bayiLahir.tanggal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jam</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <h1 className="font-semibold">Plasenta Lahir</h1>
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="persalinan.plasentaLahir.tanggal"
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
            name="persalinan.plasentaLahir.tanggal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jam</FormLabel>
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
            name="persalinan.usiaKehamilan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usia Kehamilan</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.usiaHPHT"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usia HPHT</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.keadaanIbu"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Keadaan Ibu</FormLabel>
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
            name="persalinan.keadaanBayi"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Keadaan Bayi</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.beratBayi"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Berat Bayi</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.perdarahanKalaIV"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Perdarahan Kala IV jam Pospartum</FormLabel>
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
            name="persalinan.presentasi"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Presentasi</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.tempat"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tempat</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.penolong"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Penolong</FormLabel>
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
            name="persalinan.caraPersalinan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cara Persalinan</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.manajemenAktifKalaIII"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Manajemen Aktif Kala III</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.pelayanan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pelayanan</FormLabel>
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
            name="persalinan.integrasiProgram"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Integrasi Program</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.komplikasi"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Komplikasi</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.dirujukKe"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pelayanan</FormLabel>
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
            name="persalinan.keadaanTiba"
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
            name="persalinan.keadaanPulang"
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
          <FormField
            control={form.control}
            name="persalinan.alamatBersalin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alamat Bersalin</FormLabel>
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
