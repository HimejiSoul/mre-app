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
import {
  FormWrapper,
  Row,
  TitleSection,
} from '@/app/dashboard/periksa-kehamilan/create/_component/form-content';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

export default function Section2({ form }: any) {
  return (
    <section className="_SECTION02 space-y-4">
      <TitleSection title="Section 2" subtitle="Masukkan data pasien" />
      <FormWrapper>
        <Row>
          <FormField
            control={form.control}
            name="section2.posyandu"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Posyandu</FormLabel>
                <FormControl>
                  <Input placeholder="Posyandu" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="section2.jamkesmas"
            render={({ field }) => (
              <FormItem className="col-span-3">
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
              <FormItem className="col-span-3">
                <FormLabel>Nama Kader</FormLabel>
                <FormControl>
                  <Input placeholder="Nama kader" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="section2.golDarah"
            render={({ field }) => (
              <FormItem className="col-span-3">
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
              <FormItem className="col-span-3">
                <FormLabel>Nama Dukun</FormLabel>
                <FormControl>
                  <Input placeholder="Nama dukun" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="section2.noTelp"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Telp./HP</FormLabel>
                <FormControl>
                  <Input placeholder="Masukan no. telp" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <h1 className="col-span-3 pt-6 font-medium">RIWAYAT OBSTETRIK</h1>
          <br className="col-span-1" />
          <h1 className="col-span-3 pt-6 font-medium">PEMERIKSAAN BIDAN</h1>
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="section2.riwayatObstetrik.gravida"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Gravida</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukan gravida"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-1"></div>
          <FormField
            control={form.control}
            name="section2.pemeriksaanBidan.tanggalPeriksa"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Tanggal Periksa</FormLabel>
                <div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'dd-MM-yyyy')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="section2.pemeriksaanBidan.bbSebelumHamil"
            render={({ field }) => (
              <FormItem className="relative col-span-3">
                <FormLabel>BB sebelum Hamil</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <span className="absolute bottom-2.5 right-10 text-sm text-black/50">
                  kg
                </span>
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
              <FormItem className="col-span-3">
                <FormLabel>Partus</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukan partus"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-1"></div>
          <FormField
            control={form.control}
            name="section2.pemeriksaanBidan.tanggalHPHT"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Tanggal HPHT</FormLabel>
                <div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'dd-MM-yyyy')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="section2.pemeriksaanBidan.tb"
            render={({ field }) => (
              <FormItem className="relative col-span-3">
                <FormLabel>TB</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <span className="absolute bottom-2.5 right-10 text-sm text-black/50">
                  cm
                </span>
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
              <FormItem className="col-span-3">
                <FormLabel>Abortus</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukan abortus"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-1"></div>
          <FormField
            control={form.control}
            name="section2.pemeriksaanBidan.taksiranPersalinan"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Taksiran Persalinan</FormLabel>
                <div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'dd-MM-yyyy')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="section2.pemeriksaanBidan.bukuKIA"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Buku KIA</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Memiliki buku KIA?" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="memiliki">Memiliki</SelectItem>
                    <SelectItem value="tidak memiliki">
                      Tidak Memiliki
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
            name="section2.riwayatObstetrik.hidup"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Hidup</FormLabel>
                <FormControl>
                  <Input placeholder="Masukan hidup" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-1"></div>

          <FormField
            control={form.control}
            name="section2.pemeriksaanBidan.persalinanSebelumnya"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Persalinan Sebelumnya</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
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
              <FormItem className="col-span-7">
                <FormLabel>Penyakit Kronis dan Alergi</FormLabel>
                <FormControl>
                  <Input placeholder="Penyakit kronis dan alergi" {...field} />
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
              <FormItem className="col-span-7">
                <FormLabel>Riwayat Komplikasi Kebidanan</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Riwayat komplikasi kebidanan"
                    {...field}
                  />
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
