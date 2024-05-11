import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
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
import { Checkbox } from '@/components/ui/checkbox';

export default function DetailBayi({ form }: any) {
  const komplikasi = [
    {
      id: 'Asfiksi',
      label: 'Asfiksi',
    },
    {
      id: 'Hiportemi',
      label: 'Hiportemi',
    },
    {
      id: 'Infeksi',
      label: 'Infeksi',
    },
    {
      id: 'Tetanus',
      label: 'Tetanus',
    },
    {
      id: 'BBLR',
      label: 'BBLR',
    },
    {
      id: 'Lain-Lain',
      label: 'Lain-Lain',
    },
  ] as const;

  const pencegahan = [
    {
      id: 'Vit. K',
      label: 'Vit. K',
    },
    {
      id: 'Heb. B0',
      label: 'Heb. B0',
    },
    {
      id: 'Salep Mata',
      label: 'Salep Mata',
    },
  ];
  return (
    <section className="_DETAILBAYI space-y-4">
      <TitleSection title="Detail Bayi" subtitle="Masukkan data bayi" />
      <FormWrapper>
        <Row>
          <FormField
            control={form.control}
            name="detailBayi.tglLahir"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Tanggal Lahir</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="detailBayi.jamLahir"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Jam Lahir</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="detailBayi.tempatLahir"
            render={({ field }) => (
              <FormItem className="col-span-4">
                <FormLabel>Tempat Lahir</FormLabel>
                <FormControl>
                  <Input placeholder="Tempat Lahir" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="detailBayi.jamkesmas"
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
          /> */}
        </Row>
        <Row>
          <FormField
            control={form.control}
            name="persalinan.jenisPersalinan"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Jenis Persalinan</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Jenis Persalinan" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Normal">Normal</SelectItem>
                    <SelectItem value="SC">SC</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="persalinan.jenisKelamin"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Jenis Kelamin</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Jenis Kelamin" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Laki-Laki">Laki-Laki</SelectItem>
                    <SelectItem value="Perempuan">Perempuan</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="detailBayi.golDarah"
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
          <FormField
            control={form.control}
            name="persalinan.panjangBayi"
            render={({ field }) => (
              <FormItem className="relative col-span-3">
                <FormLabel>Panjang Bayi</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="arrow-hide"
                    placeholder="Panjang bayi"
                    {...field}
                  />
                </FormControl>
                <span className="absolute bottom-2.5 right-2.5 text-sm text-black/50">
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
            name="detailBayi.keadaanLahir"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Keadaan Lahir</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Keadaan Lahir" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Hidup">Hidup</SelectItem>
                    <SelectItem value="Mati">Mati</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="detailBayi.bukuKIA"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Buku KIA/KMS</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Buku KIA/KMS" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Memiliki">Memiliki</SelectItem>
                    <SelectItem value="Tidak Memiliki">
                      Tidak Memiliki
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <p className="text-xs font-semibold">Komplikasi</p>
        <div className="grid grid-cols-3 gap-5">
          {komplikasi.map((item) => (
            <FormField
              key={item.id}
              control={form.control}
              name="detailBayi.komplikasi"
              render={({ field }) => {
                return (
                  <FormItem
                    key={item.id}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(item.id)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, item.id])
                            : field.onChange(
                                field.value?.filter(
                                  (value: any) => value !== item.id,
                                ),
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">{item.label}</FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
          <FormMessage />
        </div>
        <Row>
          <FormField
            control={form.control}
            name="detailBayi.resisutasi"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Resisutasi</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Resisutasi" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Ya">Ya</SelectItem>
                    <SelectItem value="Tidak">Tidak</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="detailBayi.imd"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>IMD</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="IMD" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="< 1 Jam"> &lt; 1 Jam</SelectItem>
                    <SelectItem value="> 1 Jam">&gt; 1 Jam </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <p className="text-xs font-semibold">Pencegahan</p>
        <div className="grid grid-cols-3 gap-5">
          {pencegahan.map((item) => (
            <FormField
              key={item.id}
              control={form.control}
              name="detailBayi.pencegahan"
              render={({ field }) => {
                return (
                  <FormItem
                    key={item.id}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(item.id)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, item.id])
                            : field.onChange(
                                field.value?.filter(
                                  (value: any) => value !== item.id,
                                ),
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">{item.label}</FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
          <FormMessage />
        </div>
        <Row>
          <FormField
            control={form.control}
            name="detailBayi.keadaanPulang"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Keadaan Pulang</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Keadaan Pulang" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Hidup>"> Hidup</SelectItem>
                    <SelectItem value="Mati">Mati </SelectItem>
                    <SelectItem value="Dirujuk">Dirujuk </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
      </FormWrapper>
    </section>
  );
}
