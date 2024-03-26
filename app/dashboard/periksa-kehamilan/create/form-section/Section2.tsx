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
import { Calendar, CalendarLahir } from '@/components/ui/calendar';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function Section2({ form }: any) {
  return (
    <section className="_SECTION02 space-y-4">
      <TitleSection title="Section 2" subtitle="Masukkan data pasien" />
      <FormWrapper>
        <Row>
          <FormField
            control={form.control}
            name="section2.posyandu"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Posyandu</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="section2.jamkesmas"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jamkesmas</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex h-10 items-center space-x-2"
                  >
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="true" />
                      </FormControl>
                      <FormLabel className="font-normal">Iya</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="false" />
                      </FormControl>
                      <FormLabel className="font-normal">Tidak</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="section2.namaKader"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Kader</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="section2.golDarah"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gol. Darah</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih Golongan Darah" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="A">A</SelectItem>
                    <SelectItem value="B">B</SelectItem>
                    <SelectItem value="AB">AB</SelectItem>
                    <SelectItem value="O">O</SelectItem>
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
            name="section2.namaDukun"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Dukun</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="section2.noTelp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telp./HP</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <h1 className="pt-6 font-semibold">RIWAYAT OBSTETRIK</h1>
          <h1 className="pt-6 font-semibold">PEMERIKSAAN BIDAN</h1>
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="section2.riwayatObstetrik.gravida"
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
            name="section2.pemeriksaanBidan.tanggalPeriksa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tanggal Periksa</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="section2.pemeriksaanBidan.bbSebelumHamil"
            render={({ field }) => (
              <FormItem>
                <FormLabel>BB sebelum Hamil</FormLabel>
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
            name="section2.riwayatObstetrik.partus"
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
            name="section2.pemeriksaanBidan.tanggalHPHT"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tanggal HPHT</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="section2.pemeriksaanBidan.tb"
            render={({ field }) => (
              <FormItem>
                <FormLabel>TB</FormLabel>
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
            name="section2.riwayatObstetrik.abortus"
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
          <FormField
            control={form.control}
            name="section2.pemeriksaanBidan.taksiranPersalinan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Taksiran Persalinan</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="section2.pemeriksaanBidan.bukuKIA"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Buku KIA</FormLabel>
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
            name="section2.riwayatObstetrik.hidup"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hidup</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="section2.pemeriksaanBidan.persalinanSebelumnya"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Persalinan Sebelumnya</FormLabel>
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
            name="section2.pemeriksaanBidan.penyakitKronisDanAlergi"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Penyakit Kronis dan Alergi</FormLabel>
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
            name="section2.pemeriksaanBidan.riwayatKomplikasiKebidanan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Riwayat Komplikasi Kebidanan</FormLabel>
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
