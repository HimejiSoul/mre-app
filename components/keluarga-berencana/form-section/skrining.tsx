import {
  FormWrapper,
  InputField,
  Row,
  TitleSection,
} from '@/components/form-content';
import { useState } from 'react';
import { calculateAge } from '@/lib/calculate-age';
import { ENUM_VALUES } from '@/lib/types/keluarga-berencana/kb-schema';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';

export default function Skrining({ form }: any) {
  const [birthDate, setBirthDate] = useState<Date | string>('');
  const age = calculateAge(birthDate);

  return (
    <section className="_SKRINING space-y-4">
      <TitleSection
        title="Skrining"
        subtitle="Dilakukan untuk menentukan alat kontrasepsi yang dapat digunakan calon
          peserta KB. Hanya boleh dilakukan oleh pelaksana yang telah dilatih
          dalam pelayanan kontrasepsi."
      />
      <FormWrapper>
        <h1 className="col-span-3 font-semibold">Anamsesa</h1>
        <Row>
          <InputField
            name="skrining.anamsesa.haidTerakhir"
            form={form}
            label="Haid Terakhir"
            type="date"
          />
          <InputField
            name="skrining.anamsesa.hamil"
            form={form}
            label="Hamil/Diduga Hamil"
            type="radio"
          />
        </Row>
        <h1 className="col-span-3 pt-6 text-xs font-semibold">Jumlah GPA</h1>
        <Row>
          <InputField
            name="skrining.anamsesa.jumlahGpa.gravida"
            form={form}
            label="Gravida (Kehamilan)"
            placeholder="0"
            type="number"
          />
          <InputField
            name="skrining.anamsesa.jumlahGpa.partus"
            form={form}
            label="Partus (Persalinan)"
            placeholder="0"
            type="number"
          />
          <InputField
            name="skrining.anamsesa.jumlahGpa.abortus"
            form={form}
            label="Abortus (Keguguran)"
            placeholder="0"
            type="number"
          />
        </Row>
        <div className="flex gap-5">
          <div className="flex h-fit w-1/2 flex-col">
            <p className="text-xs font-semibold">Riwayat Penyakit Sebelumnya</p>
            <ul className=" ml-4 flex list-outside list-disc flex-col gap-1">
              {/* Sakit Kuning */}
              <FormField
                control={form.control}
                name="skrining.anamsesa.riwayatPenyakitSebelumnya.sakitKuning"
                render={({ field }) => (
                  <FormItem className=" my-3 flex flex-col">
                    <div className="flex flex-row items-center">
                      <FormLabel className="w-full pr-10 ">
                        <li>Sakit Kuning</li>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-row"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="true" />
                            </FormControl>
                            <FormLabel className="font-normal">Iya</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="false" />
                            </FormControl>
                            <FormLabel className="font-normal">Tidak</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Pervaaginam */}
              <FormField
                control={form.control}
                name="skrining.anamsesa.riwayatPenyakitSebelumnya.perdarahanVaginam"
                render={({ field }) => (
                  <FormItem className="my-3 flex flex-col ">
                    <div className="flex flex-row items-center">
                      <FormLabel className=" w-full pr-10">
                        <li>
                          Perdarahan pervaginam yang tidak diketahui sebabnya
                        </li>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-row"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="true" />
                            </FormControl>
                            <FormLabel className="font-normal">Iya</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="false" />
                            </FormControl>
                            <FormLabel className="font-normal">Tidak</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Keputihan Lama */}
              <FormField
                control={form.control}
                name="skrining.anamsesa.riwayatPenyakitSebelumnya.keputihanLama"
                render={({ field }) => (
                  <FormItem className="my-3 flex flex-col">
                    <div className="items.center flex flex-row">
                      <FormLabel className=" w-full pr-10">
                        <li>Keputihan Lama </li>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-row"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="true" />
                            </FormControl>
                            <FormLabel className="font-normal">Iya</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="false" />
                            </FormControl>
                            <FormLabel className="font-normal">Tidak</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Tumor */}
              <FormField
                control={form.control}
                name="skrining.anamsesa.riwayatPenyakitSebelumnya.tumor"
                render={({ field }) => (
                  <FormItem className="my-3 flex flex-col">
                    <div className="items.center flex flex-row">
                      <FormLabel className=" w-full pr-10">
                        <li>Tumor </li>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-row"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="true" />
                            </FormControl>
                            <FormLabel className="font-normal">Iya</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="false" />
                            </FormControl>
                            <FormLabel className="font-normal">Tidak</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </ul>
          </div>
          <ul className="my-auto ml-4 flex h-fit w-1/2 list-outside list-disc flex-col gap-1 rounded-md border-2 border-[#DF645F] px-7 py-3 text-xs text-[#DF645F]">
            <li>
              Bila semua jawaban <b>TIDAK</b>, dapat diberikan salah satu dari
              cara KB (Kecuali IUD dan MOW).
            </li>
            <li>
              Bila salah satu jawaban <b>YA</b>, rujuk ke Dokter.
            </li>
          </ul>
        </div>
        <h1 className="col-span-3 pt-6 font-semibold">Pemeriksaan</h1>
        <Row>
          <InputField
            name="skrining.pemeriksaan.keadaanUmum"
            form={form}
            label="Keadaan Umum"
            placeholder="Keadaan Umum"
            type="select"
            data={ENUM_VALUES.keadaaanUmum
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
          <InputField
            name="skrining.pemeriksaan.posisiRahim"
            form={form}
            label="Posisi Rahim"
            placeholder="Posisi Rahim"
            type="select"
            data={ENUM_VALUES.posisiRahim
              .filter((data) => data !== '')
              .map((data) => ({
                value: data,
                label: data,
              }))}
          />
        </Row>
        <Row>
          <InputField
            name="skrining.pemeriksaan.tekananDarah"
            form={form}
            label="Tekanan Darah"
            placeholder="0"
            type="number"
          />
          <InputField
            name="skrining.pemeriksaan.beratBadan"
            form={form}
            label="Berat Badan"
            placeholder="0"
            type="number"
          />
        </Row>
        <div className="flex gap-5">
          <div className="flex h-fit w-1/2 flex-col">
            <p className="text-xs font-semibold">
              Sebelum dilakukan pemasangan IUD atau MOW dilakukan pemeriksaan
              dalam:
            </p>
            <ul className=" ml-4 flex list-outside list-disc flex-col gap-1">
              {/* Tanda Radang*/}
              <FormField
                control={form.control}
                name="skrining.pemeriksaan.tandaRadang"
                render={({ field }) => (
                  <FormItem className=" my-3 flex flex-col">
                    <div className="flex flex-row items-center">
                      <FormLabel className="w-full pr-10 ">
                        <li>Tanda-Tanda Radang</li>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-row"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="true" />
                            </FormControl>
                            <FormLabel className="font-normal">Iya</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="false" />
                            </FormControl>
                            <FormLabel className="font-normal">Tidak</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Tumor */}
              <FormField
                control={form.control}
                name="skrining.pemeriksaan.tumor"
                render={({ field }) => (
                  <FormItem className="my-3 flex flex-col ">
                    <div className="flex flex-row items-center">
                      <FormLabel className=" w-full pr-10">
                        <li>Tumor/ Keganasan Ginekologi</li>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-row"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="true" />
                            </FormControl>
                            <FormLabel className="font-normal">Iya</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="false" />
                            </FormControl>
                            <FormLabel className="font-normal">Tidak</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </ul>
          </div>
          <ul className="my-auto ml-4 flex h-fit w-1/2 list-outside list-disc flex-col gap-1 rounded-md border-2 border-[#DF645F] px-7 py-3 text-xs text-[#DF645F]">
            <li>
              Bila semua jawaban <b>TIDAK</b>, pemasangan IUD atau tindakan MOW
              dapat dilakukan.
            </li>
            <li>
              Bila salah satu jawaban <b>YA</b>, rujuk ke Dokter.
            </li>
          </ul>
        </div>
        <div className="flex gap-5">
          <div className="flex h-fit w-1/2 flex-col">
            <p className="text-xs font-semibold">Pemeriksaan Tambahan:</p>
            <p className="text-[9px] font-medium text-[#6F90BA]">
              (Khusus untuk calon MOP dan MOW)
            </p>
            <ul className=" ml-4 flex list-outside list-disc flex-col gap-1">
              {/* Tanda Diabet*/}
              <FormField
                control={form.control}
                name="skrining.pemeriksaan.tambahan.tandaDiabet"
                render={({ field }) => (
                  <FormItem className=" my-3 flex flex-col">
                    <div className="flex flex-row items-center">
                      <FormLabel className="w-full pr-10 ">
                        <li>Tanda-Tanda Diabetes</li>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-row"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="true" />
                            </FormControl>
                            <FormLabel className="font-normal">Iya</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="false" />
                            </FormControl>
                            <FormLabel className="font-normal">Tidak</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Kelainan Pembekuan Darah */}
              <FormField
                control={form.control}
                name="skrining.pemeriksaan.tambahan.radangOrchild"
                render={({ field }) => (
                  <FormItem className="my-3 flex flex-col ">
                    <div className="flex flex-row items-center">
                      <FormLabel className=" w-full pr-10">
                        <li>Radang Orchild/epididymitish</li>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-row"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="true" />
                            </FormControl>
                            <FormLabel className="font-normal">Iya</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="false" />
                            </FormControl>
                            <FormLabel className="font-normal">Tidak</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Radang Orchild */}
              <FormField
                control={form.control}
                name="skrining.pemeriksaan.tambahan.kelainanPembekuanDarah"
                render={({ field }) => (
                  <FormItem className="my-3 flex flex-col ">
                    <div className="flex flex-row items-center">
                      <FormLabel className=" w-full pr-10">
                        <li>Kelainan pembekuan darah</li>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-row"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="true" />
                            </FormControl>
                            <FormLabel className="font-normal">Iya</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="false" />
                            </FormControl>
                            <FormLabel className="font-normal">Tidak</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Tumor */}
              <FormField
                control={form.control}
                name="skrining.pemeriksaan.tambahan.tumor"
                render={({ field }) => (
                  <FormItem className="my-3 flex flex-col ">
                    <div className="flex flex-row items-center">
                      <FormLabel className=" w-full pr-10">
                        <li>Tumor/ Keganasan ginekologi</li>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-row"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="true" />
                            </FormControl>
                            <FormLabel className="font-normal">Iya</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="false" />
                            </FormControl>
                            <FormLabel className="font-normal">Tidak</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </ul>
          </div>
          <ul className="my-auto ml-4 flex h-fit w-1/2 list-outside list-disc flex-col gap-1 rounded-md border-2 border-[#DF645F] px-7 py-3 text-xs text-[#DF645F]">
            <li>
              Bila semua jawaban <b>TIDAK</b>, dapat dilakukan vasektomi.
            </li>
            <li>
              Bila salah satu jawaban <b>YA</b>, maka rujuklah ke FASKES/RS yang
              lengkap.
            </li>
          </ul>
        </div>
        <p className="text-xs font-semibold">
          Alat kontrasepsi yang boleh dipergunakan:
        </p>
        <div className="grid grid-cols-3 gap-5">
          {ENUM_VALUES.alatKontrasepsi.map((item) => (
            <FormField
              key={item.id}
              control={form.control}
              name="skrining.pemeriksaan.alatKontrasepsi"
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
      </FormWrapper>
    </section>
  );
}
