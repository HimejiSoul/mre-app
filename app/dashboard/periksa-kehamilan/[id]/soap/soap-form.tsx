'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  soapKehamilanFormSchema,
  defaultValues,
  ENUM_VALUES,
} from '@/lib/types/soap-kehamilan-types';
import { Form } from '@/components/ui/form';
import {
  FormWrapper,
  InputField,
  Row,
  TitleSection,
} from '@/components/form-content';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import { createSoapKehamilanPatient } from '@/lib/actions';
import { useState } from 'react';
import { ButtonSubmitForm } from '@/components/Buttons';

// Dummy Test
import dummyJson from '@/app/dashboard/periksa-kehamilan/data-soap.json';
import { fromZodError } from 'zod-validation-error';
import { notFound } from 'next/navigation';
const response = soapKehamilanFormSchema.safeParse(dummyJson.data);
if (!response.success) {
  console.error(fromZodError(response.error));
  notFound();
}

interface SoapKehamilanFormProps {
  id: number;
  value?: z.infer<typeof soapKehamilanFormSchema>;
}

export function SoapKehamilanForm({ id, value }: SoapKehamilanFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof soapKehamilanFormSchema>>({
    resolver: zodResolver(soapKehamilanFormSchema),
    defaultValues: value ? value : defaultValues,
    // defaultValues: value ? value : response.data,
  });

  async function onSubmit(data: z.infer<typeof soapKehamilanFormSchema>) {
    setIsLoading(true);

    try {
      await createSoapKehamilanPatient(data, id);
      toast({
        title: `Berhasil Menginputkan SOAP Pasien`,
      });
    } catch {
      toast({
        title: `Gagal Menginputkan Data Pasien`,
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-8 rounded-xl bg-[#D0E4FF] px-4 py-6"
      >
        <section className="_TABLE_1 space-y-4">
          <TitleSection title="Table 1" subtitle="Masukkan data pasien" />
          <FormWrapper>
            <h1 className="text-base font-medium">Register</h1>
            <Row>
              <InputField
                name="table1.register.tanggal"
                form={form}
                label="Tanggal"
                type="date"
              />
            </Row>
            <Row>
              <InputField
                name="table1.register.jamkesmas"
                form={form}
                label="Jamkesmas"
                placeholder="Jamkesmas"
              />
              <InputField
                name="table1.register.caraMasuk"
                form={form}
                label="Cara Masuk"
                placeholder="Cara masuk"
                type="select"
                data={ENUM_VALUES.table1.register.caraMasuk
                  .filter((data) => data !== '')
                  .map((data) => ({
                    value: data,
                    label: data,
                  }))}
              />
              <InputField
                name="table1.register.usiaKlinis"
                form={form}
                label="Usia Klinis"
                placeholder="Usia klinis"
                type="number"
              />
              <InputField
                name="table1.register.trimesterKe"
                form={form}
                label="Trimester Ke"
                placeholder="Trimester ke"
                type="number"
              />
            </Row>
            <Separator />
            <h1 className="text-base font-medium">Pemeriksaan Ibu</h1>
            <Row>
              <InputField
                name="table1.pemeriksaan.ibu.anamnesis"
                form={form}
                label="Anamnesis"
                placeholder="Anamnesis"
              />
              <InputField
                name="table1.pemeriksaan.ibu.bb"
                form={form}
                label="Berat Badan (Kg)"
                placeholder="68"
                type="number"
                className="col-span-2"
              />
              <InputField
                name="table1.pemeriksaan.ibu.td"
                form={form}
                label="TD (mmHg)"
                placeholder="Nilai TD"
                className="col-span-2"
              />
              <InputField
                name="table1.pemeriksaan.ibu.lila"
                form={form}
                label="LILA (cm)"
                placeholder="Nilai LILA"
                type="number"
                className="col-span-2"
              />
            </Row>
            <Row>
              <InputField
                name="table1.pemeriksaan.ibu.statusGizi"
                form={form}
                label="Status Gizi"
                placeholder="Status gizi"
                type="select"
                data={ENUM_VALUES.table1.pemeriksaan.ibu.statusGizi
                  .filter((data) => data !== '')
                  .map((data) => ({
                    value: data,
                    label: data,
                  }))}
              />
              <InputField
                name="table1.pemeriksaan.ibu.tfu"
                form={form}
                label="TFU"
                placeholder="Nilai TFU"
              />
              <InputField
                name="table1.pemeriksaan.ibu.refleksPatella"
                form={form}
                label="Refleks Patella (+/-)"
                placeholder="Nilai Refleks Patella"
                type="toggle-group"
              />
            </Row>
            <h1 className="pt-4 text-base font-medium">Pemeriksaan Bayi</h1>
            <Row>
              <InputField
                name="table1.pemeriksaan.bayi.djj"
                form={form}
                label="DJJ (x/menit)"
                placeholder="Nilai DJJ"
              />
              <InputField
                name="table1.pemeriksaan.bayi.kepalaTerhadapPAP"
                form={form}
                label="Kepala Terhadap PAP"
                placeholder="Kepala terhadap PAP"
                type="select"
                data={ENUM_VALUES.table1.pemeriksaan.bayi.kepalaTerhadapPAP
                  .filter((data) => data !== '')
                  .map((data) => ({
                    value: data,
                    label: data,
                  }))}
              />
              <InputField
                name="table1.pemeriksaan.bayi.tbj"
                form={form}
                label="TBJ (gram)"
                placeholder="Nilai TBJ"
                type="number"
              />
            </Row>
            <Row>
              <InputField
                name="table1.pemeriksaan.bayi.presentasi"
                form={form}
                label="Presentasi"
                placeholder="Presentasi"
                type="select"
                data={ENUM_VALUES.table1.pemeriksaan.bayi.presentasi
                  .filter((data) => data !== '')
                  .map((data) => ({
                    value: data,
                    label: data,
                  }))}
              />
              <InputField
                name="table1.pemeriksaan.bayi.jumlahJanin"
                form={form}
                label="Jumlah Janin"
                placeholder="Jumlah Janin"
                type="select"
                data={ENUM_VALUES.table1.pemeriksaan.bayi.jumlahJanin
                  .filter((data) => data !== '')
                  .map((data) => ({
                    value: data,
                    label: data,
                  }))}
              />
            </Row>
            <Separator />
            <Row>
              <InputField
                name="table1.statusImunisasiTT"
                form={form}
                label="Status Imunisasi TT"
                placeholder="Status Imunisasi"
                type="select"
                data={ENUM_VALUES.table1.statusImunisasiTT
                  .filter((data) => data !== '')
                  .map((data) => ({
                    value: data,
                    label: data,
                  }))}
              />
            </Row>
            <Separator />
            <h1 className="pt-4 text-base font-medium">Pelayanan</h1>
            <Row>
              <InputField
                name="table1.pelayanan.injeksiTT"
                form={form}
                label="Injeksi TT"
                placeholder="Injeksi TT"
              />
              <InputField
                name="table1.pelayanan.catatDiBukuKIA"
                form={form}
                label="Catat di Buku KIA"
                placeholder="Catat di buku KIA"
                type="checkbox"
              />
              <InputField
                name="table1.pelayanan.fe"
                form={form}
                label="Fe (tab/botol)"
                placeholder="Nilai Fe"
                type="select"
                data={ENUM_VALUES.table1.pelayanan.fe
                  .filter((data) => data !== '')
                  .map((data) => ({
                    value: data,
                    label: data,
                  }))}
              />
            </Row>
            <Separator />
            <h1 className="pt-4 text-base font-medium">Laboratorium</h1>
            <Row>
              <InputField
                name="table1.laboratorium.periksaHB.dilakukan"
                form={form}
                label="Periksa HB: Dilakukan"
                placeholder="Dilakukan?"
                type="checkbox"
              />
              <InputField
                name="table1.laboratorium.periksaHB.hasil"
                form={form}
                label="Periksa HB: Hasil"
                placeholder="Hasil?"
                type="checkbox"
              />
              <InputField
                name="table1.laboratorium.periksaHB.anemia"
                form={form}
                label="Periksa HB: Anemia (+/-)"
                placeholder="Anemia?"
                type="toggle-group"
              />
              <InputField
                name="table1.laboratorium.proteinUrin"
                form={form}
                label="Protein Urin (+/-)"
                placeholder="Protein Urin?"
                type="toggle-group"
              />
            </Row>
            <Row>
              <InputField
                name="table1.laboratorium.gulaDarah"
                form={form}
                label="Gula Darah"
                placeholder="Gula darah"
              />
              <InputField
                name="table1.laboratorium.thalasemia"
                form={form}
                label="Thalasemia (+/-)"
                placeholder="Thalasemia"
                type="toggle-group"
              />
              <InputField
                name="table1.laboratorium.sifilis"
                form={form}
                label="Sifilis (+/-)"
                placeholder="Sifilis"
                type="toggle-group"
              />
              <InputField
                name="table1.laboratorium.hbsag"
                form={form}
                label="HBSAg (+/-)"
                placeholder="HBSAg"
                type="toggle-group"
              />
            </Row>
            <Separator />
            <h1 className="pt-4 text-base font-medium">
              Integrasi Program - PMTCT
            </h1>
            <Row>
              <InputField
                name="table1.integrasiProgram.pmtct.vct"
                form={form}
                label="VCT"
                placeholder="Nilai VCT"
                type="checkbox"
                className="col-span-1"
              />
              <InputField
                name="table1.integrasiProgram.pmtct.periksaDarah"
                form={form}
                label="Periksa Darah"
                placeholder="Nilai periksa darah"
                type="checkbox"
              />
              <InputField
                name="table1.integrasiProgram.pmtct.serologi"
                form={form}
                label="Serologi (+/-)"
                placeholder="Nilai serologi"
                type="toggle-group"
                className="col-span-2"
              />
              <InputField
                name="table1.integrasiProgram.pmtct.profilaksis"
                form={form}
                label="Profilaksis"
                placeholder="Nilai profilaksis"
              />
              <InputField
                name="table1.integrasiProgram.pmtct.arv"
                form={form}
                label="ARV"
                placeholder="Nilai ARV"
                type="checkbox"
                className="col-span-1"
              />
            </Row>
            <Separator />
            <h1 className="pt-4 text-base font-medium">
              Integrasi Program - MALARIA
            </h1>
            <Row>
              <InputField
                name="table1.integrasiProgram.malaria.periksaDarah"
                form={form}
                label="Periksa Darah"
                placeholder="Nilai periksa darah"
                type="checkbox"
              />
              <InputField
                name="table1.integrasiProgram.malaria.malaria"
                form={form}
                label="Malaria (+/-)"
                placeholder="Nilai malaria"
                type="toggle-group"
              />
              <InputField
                name="table1.integrasiProgram.malaria.obat"
                form={form}
                label="Obat"
                placeholder="Nilai obat"
                type="checkbox"
              />
              <InputField
                name="table1.integrasiProgram.malaria.kelambuBerinsektisida"
                form={form}
                label="Kelambu Berinsektisida"
                placeholder="Nilai kelambu"
                type="checkbox"
              />
            </Row>
            <Separator />
            <h1 className="pt-4 text-base font-medium">
              Integrasi Program - TB
            </h1>
            <Row>
              <InputField
                name="table1.integrasiProgram.tb.periksaDahak"
                form={form}
                label="Periksa Dahak"
                placeholder="Nilai periksa dahak"
                type="checkbox"
              />
              <InputField
                name="table1.integrasiProgram.tb.tbc"
                form={form}
                label="TBC (+/-)"
                placeholder="Nilai malaria"
                type="toggle-group"
              />
              <InputField
                name="table1.integrasiProgram.tb.obat"
                form={form}
                label="Obat"
                placeholder="Nilai obat"
                type="checkbox"
              />
            </Row>
            <Separator />
            <Row>
              <InputField
                name="table1.keterangan"
                form={form}
                label="Keterangan"
                placeholder="Keterangan"
                type="textarea"
                className="col-span-6"
              />
            </Row>
          </FormWrapper>
        </section>
        <section className="_TABLE_2 space-y-4">
          <TitleSection title="Table 2" subtitle="Masukkan data pasien" />
          <FormWrapper>
            <Row>
              <InputField
                name="table2.tanggal"
                form={form}
                label="Tanggal"
                type="date"
              />
            </Row>
            <Row>
              <InputField
                name="table2.resikoTerdeteksiPertamaKaliOleh"
                form={form}
                label="Resiko Terdeteksi Pertama Kali Oleh"
                placeholder="Resiko terdeteksi pertama kali oleh"
                type="select"
                data={ENUM_VALUES.table2.resikoTerdeteksiPertamaKaliOleh
                  .filter((data) => data !== '')
                  .map((data) => ({
                    value: data,
                    label: data,
                  }))}
              />
              <InputField
                name="table2.komplikasi"
                form={form}
                label="Komplikasi"
                placeholder="Komplikasi"
                className="col-span-2"
                type="select"
                data={ENUM_VALUES.table2.komplikasi
                  .filter((data) => data !== '')
                  .map((data) => ({
                    value: data,
                    label: data,
                  }))}
              />
              <InputField
                name="table2.dirujukKe"
                form={form}
                label="Dirujuk Ke"
                placeholder="Dirujuk ke"
                className="col-span-2"
                type="select"
                data={ENUM_VALUES.table2.dirujukKe
                  .filter((data) => data !== '')
                  .map((data) => ({
                    value: data,
                    label: data,
                  }))}
              />
              <InputField
                name="table2.keadaan.tiba"
                form={form}
                label="Keadaan Tiba"
                placeholder="Keadaan tiba"
                className="col-span-2"
                type="select"
                data={ENUM_VALUES.table2.keadaan.tiba
                  .filter((data) => data !== '')
                  .map((data) => ({
                    value: data,
                    label: data,
                  }))}
              />
              <InputField
                name="table2.keadaan.pulang"
                form={form}
                label="Keadaan Pulang"
                placeholder="Keadaan pulang"
                className="col-span-2"
                type="select"
                data={ENUM_VALUES.table2.keadaan.pulang
                  .filter((data) => data !== '')
                  .map((data) => ({
                    value: data,
                    label: data,
                  }))}
              />
              <InputField
                name="table2.keterangan"
                form={form}
                label="Keterangan"
                placeholder="Keterangan"
                className="col-span-6"
                type="textarea"
              />
            </Row>
          </FormWrapper>
        </section>
        <section className="_SOAP_ANC space-y-4">
          <TitleSection title="SOAP ANC" subtitle="Masukkan data pasien" />
          <FormWrapper>
            <Row>
              <InputField
                name="soapAnc.tanggal"
                form={form}
                label="Tanggal"
                type="date"
              />
            </Row>
            <Row>
              <InputField
                name="soapAnc.s"
                form={form}
                label="S (Keluhan)"
                placeholder="Keluhan"
                type="textarea"
                className="col-span-6"
              />
              <InputField
                name="soapAnc.o"
                form={form}
                label="O (Pemeriksaan)"
                placeholder="Pemeriksaan"
                type="textarea"
                className="col-span-6"
              />
              <InputField
                name="soapAnc.a"
                form={form}
                label="A (Diagnosa/Masalah)"
                placeholder="Diagnosa/Masalah"
                type="textarea"
                className="col-span-6"
              />
              <InputField
                name="soapAnc.p"
                form={form}
                label="P (Penatalaksanaan)"
                placeholder="Penatalaksanaan"
                type="textarea"
                className="col-span-6"
              />
            </Row>
          </FormWrapper>
        </section>
        {!value && <ButtonSubmitForm isLoading={isLoading} />}
      </form>
    </Form>
  );
}
