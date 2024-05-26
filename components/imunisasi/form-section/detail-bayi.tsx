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
  InputField,
  Row,
  TitleSection,
} from '@/components/form-content';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ENUM_VALUES } from '@/lib/types/imunisasi/imunisasi-types';

export default function DetailBayi({ form }: any) {
  return (
    <section className="_DETAILBAYI space-y-4">
      <TitleSection title="Detail Bayi" subtitle="Masukkan data bayi" />
      <FormWrapper>
        <Row>
          <InputField
            name="detailBayi.tglLahir"
            form={form}
            type="datetime-local"
            label="Tanggal Lahir"
          />
          <InputField
            name="detailBayi.tempatLahir"
            form={form}
            label="Tempat Lahir"
            placeholder="Tempat Lahir"
            className="col-span-4"
          />
        </Row>
        <Row>
          <InputField
            name="detailBayi.jenisPersalinan"
            form={form}
            label="Jenis Persalinan"
            placeholder="Jenis Persalinan"
            type="select"
            data={ENUM_VALUES.detailBayi.jenisPersalinan
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
          <InputField
            name="detailBayi.jenisKelamin"
            form={form}
            label="Jenis Kelamin"
            placeholder="Jenis Kelamin"
            type="select"
            data={ENUM_VALUES.detailBayi.jenisKelamin
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
          <InputField
            name="detailBayi.golDarah"
            form={form}
            label="Gologan Darah"
            placeholder="Gologan Darah"
            type="select"
            data={ENUM_VALUES.detailBayi.golDarah
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
        </Row>
        <Row>
          <InputField
            name="detailBayi.beratBayi"
            form={form}
            label="Berat Bayi"
            placeholder="Berat Bayi"
            type="number"
            suffix="Kg"
            className="arrow-hide"
          />
          <InputField
            name="detailBayi.panjangBayi"
            form={form}
            label="Panjang Bayi"
            placeholder="Panjang Bayi"
            type="number"
            suffix="cm"
            className="arrow-hide"
          />
          <InputField
            name="detailBayi.lingkarKepala"
            form={form}
            label="Lingkar Kepala Lahir"
            placeholder="Trimester ke"
            type="number"
            suffix="cm"
            className="arrow-hide"
          />
        </Row>
        <Row>
          <InputField
            name="detailBayi.anakKe"
            placeholder="Anak Ke-"
            label="Anak Ke-"
            form={form}
            type="number"
          />
          <InputField
            name="detailBayi.keadaanLahir"
            form={form}
            label="Keadaan Lahir"
            placeholder="Keadaan Lahir"
            type="select"
            data={ENUM_VALUES.detailBayi.keadaanLahir
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
          <InputField
            name="detailBayi.bukuKIA"
            form={form}
            label="Buku KIA / KMS"
            placeholder="Buku KIA / KMS "
            type="select"
            data={ENUM_VALUES.detailBayi.bukuKIA
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
        </Row>
        <p className="text-xs font-semibold">Komplikasi</p>
        <div className="grid grid-cols-3 gap-5">
          {ENUM_VALUES.detailBayi.komplikasi.map((item) => (
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
                          if (checked) {
                            field.value
                              ? field.onChange([...field.value, item.id])
                              : field.onChange([item.id]);
                          } else {
                            field.onChange(
                              field.value?.filter(
                                (value: any) => value !== item.id,
                              ),
                            );
                          }
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
          <InputField
            name="detailBayi.resisutasi"
            form={form}
            label="Resisutasi"
            placeholder="Resisutasi "
            type="select"
            data={ENUM_VALUES.detailBayi.resisutasi
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
          <InputField
            name="detailBayi.imd"
            form={form}
            label="IMD"
            placeholder="IMD "
            type="select"
            data={ENUM_VALUES.detailBayi.imd
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
        </Row>
        <p className="text-xs font-semibold">Pencegahan</p>
        <div className="grid grid-cols-3 gap-5">
          {ENUM_VALUES.detailBayi.pencegahan.map((item) => (
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
                          if (checked) {
                            field.value
                              ? field.onChange([...field.value, item.id])
                              : field.onChange([item.id]);
                          } else {
                            field.onChange(
                              field.value?.filter(
                                (value: any) => value !== item.id,
                              ),
                            );
                          }
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
          <InputField
            name="detailBayi.keadaanPulang"
            form={form}
            label="Keadaan Pulang"
            placeholder="Keadaan Pulang"
            type="select"
            data={ENUM_VALUES.detailBayi.keadaanPulang
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
        </Row>
      </FormWrapper>
    </section>
  );
}
