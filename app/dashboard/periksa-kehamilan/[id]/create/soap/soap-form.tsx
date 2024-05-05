'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  soapKehamilanFormSchema,
  defaultValues,
} from '@/app/dashboard/periksa-kehamilan/_types/soap-kehamilan-types';
import { Form } from '@/components/ui/form';
import {
  FormWrapper,
  InputField,
  Row,
  TitleSection,
} from '@/app/dashboard/periksa-kehamilan/create/_component/form-content';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import { createSoapKehamilanPatient } from '@/app/lib/actions';
import { useState } from 'react';
import { ButtonSubmitForm } from '@/components/Buttons';

export function SoapKehamilanForm({ params }: { params: { id: string } }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof soapKehamilanFormSchema>>({
    resolver: zodResolver(soapKehamilanFormSchema),
    defaultValues,
  });

  // function onSubmit(data: z.infer<typeof soapKehamilanFormSchema>) {
  const onSubmit = async (data: any) => {
    const id = params.id;
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
  };

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
                data={[
                  {
                    value: 'APS: Atas Permintaan Sendiri',
                    label: 'APS: Atas Permintaan Sendiri',
                  },
                  {
                    value: 'Dr: Rujukan Dokter',
                    label: 'Dr: Rujukan Dokter',
                  },
                  {
                    value: 'Bd: Rujukan Bidan',
                    label: 'Bd: Rujukan Bidan',
                  },
                  {
                    value: 'Dn: Rujukan Dukun',
                    label: 'Dn: Rujukan Dukun',
                  },
                  {
                    value: 'Pol: Rujukan Polindes',
                    label: 'Pol: Rujukan Polindes',
                  },
                  {
                    value: 'Pst: Rujukan Pustu',
                    label: 'Pst: Rujukan Pustu',
                  },
                  {
                    value: 'Pks: Rujukan Puskesmas',
                    label: 'Pks: Rujukan Puskesmas',
                  },
                  {
                    value: 'RB: Rujukan Rumah Bersalin',
                    label: 'RB: Rujukan Rumah Bersalin',
                  },
                  {
                    value: 'RSIA: Rujukan RS Ibu dan Anak',
                    label: 'RSIA: Rujukan RS Ibu dan Anak',
                  },
                ]}
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
                type="number"
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
                data={[
                  {
                    value: 'LILA < 23,5 cm: KEK (K)',
                    label: 'LILA < 23,5 cm: KEK (K)',
                  },
                  {
                    value: 'LILA > 23,5 cm: Normal (N)',
                    label: 'LILA > 23,5 cm: Normal (N)',
                  },
                ]}
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
                data={[
                  {
                    value: 'Masuk: M',
                    label: 'Masuk: M',
                  },
                  {
                    value: 'Belum Masuk: BM',
                    label: 'Belum Masuk: BM',
                  },
                ]}
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
                data={[
                  {
                    value: 'KP: Kepala',
                    label: 'KP: Kepala',
                  },
                  {
                    value: 'BS: Bokong/Sungsang',
                    label: 'BS: Bokong/Sungsang',
                  },
                  {
                    value: 'LLO: Letak Lintang/Oblique',
                    label: 'LLO: Letak Lintang/Oblique',
                  },
                ]}
              />
              <InputField
                name="table1.pemeriksaan.bayi.jumlahJanin"
                form={form}
                label="Jumlah Janin"
                placeholder="Jumlah Janin"
                type="select"
                data={[
                  {
                    value: 'T: Tunggal',
                    label: 'T: Tunggal',
                  },
                  {
                    value: 'G: Ganda',
                    label: 'G: Ganda',
                  },
                ]}
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
                data={[
                  {
                    value: 'TD',
                    label: 'TD',
                  },
                  {
                    value: 'T1',
                    label: 'T1',
                  },
                  {
                    value: 'T2',
                    label: 'T2',
                  },
                  {
                    value: 'T3',
                    label: 'T3',
                  },
                  {
                    value: 'T4',
                    label: 'T4',
                  },
                  {
                    value: 'T5',
                    label: 'T5',
                  },
                ]}
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
              />
              <InputField
                name="table1.pelayanan.fe"
                form={form}
                label="Fe (tab/botol)"
                placeholder="Nilai Fe"
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
              />
              <InputField
                name="table1.laboratorium.periksaHB.hasil"
                form={form}
                label="Periksa HB: Hasil"
                placeholder="Hasil?"
              />
              <InputField
                name="table1.laboratorium.periksaHB.anemia"
                form={form}
                label="Periksa HB: Anemia (+/-)"
                placeholder="Anemia?"
              />
              <InputField
                name="table1.laboratorium.proteinUrin"
                form={form}
                label="Protein Urin (+/-)"
                placeholder="Protein Urin?"
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
              />
              <InputField
                name="table1.laboratorium.sifilis"
                form={form}
                label="Sifilis (+/-)"
                placeholder="Sifilis"
              />
              <InputField
                name="table1.laboratorium.hbsag"
                form={form}
                label="HBSAg (+/-)"
                placeholder="HBSAg"
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
              />
              <InputField
                name="table1.integrasiProgram.pmtct.periksaDarah"
                form={form}
                label="Periksa Darah"
                placeholder="Nilai periksa darah"
              />
              <InputField
                name="table1.integrasiProgram.pmtct.serologi"
                form={form}
                label="Serologi (+/-)"
                placeholder="Nilai serologi"
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
              />
              <InputField
                name="table1.integrasiProgram.malaria.malaria"
                form={form}
                label="Malaria (+/-)"
                placeholder="Nilai malaria"
              />
              <InputField
                name="table1.integrasiProgram.malaria.obat"
                form={form}
                label="Obat"
                placeholder="Nilai obat"
              />
              <InputField
                name="table1.integrasiProgram.malaria.kelambuBerinsektisida"
                form={form}
                label="Kelambu Berinsektisida"
                placeholder="Nilai kelambu"
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
              />
              <InputField
                name="table1.integrasiProgram.tb.tbc"
                form={form}
                label="TBC (+/-)"
                placeholder="Nilai malaria"
              />
              <InputField
                name="table1.integrasiProgram.tb.obat"
                form={form}
                label="Obat"
                placeholder="Nilai obat"
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
        <section className="_SKRINING_TT space-y-4">
          <TitleSection title="Skrining TT" subtitle="Masukkan data pasien" />
          <FormWrapper>
            <Row>
              <InputField
                name="table2.tanggal"
                form={form}
                label="Tanggal"
                type="date"
              />
              <InputField
                name="table2.keterangan"
                form={form}
                label="Keterangan"
                placeholder="Keterangan"
                className="col-span-6"
              />
            </Row>
          </FormWrapper>
        </section>
        <section className="_TABLE_3 space-y-4">
          <TitleSection title="Table 3" subtitle="Masukkan data pasien" />
          <FormWrapper>
            <Row>
              <InputField
                name="table3.tanggal"
                form={form}
                label="Tanggal"
                type="date"
              />
            </Row>
            <Row>
              <InputField
                name="table3.resikoTerdeteksiPertamaKaliOleh"
                form={form}
                label="Resiko Terdeteksi Pertama Kali Oleh"
                placeholder="Resiko terdeteksi pertama kali oleh"
                type="select"
                data={[
                  {
                    value: 'Pasien',
                    label: 'Pasien',
                  },
                  {
                    value: 'Keluarga',
                    label: 'Keluarga',
                  },
                  {
                    value: 'Masyarakat',
                    label: 'Masyarakat',
                  },
                  {
                    value: 'Dukun',
                    label: 'Dukun',
                  },
                  {
                    value: 'Kader',
                    label: 'Kader',
                  },
                  {
                    value: 'Bidan',
                    label: 'Bidan',
                  },
                  {
                    value: 'Perawat',
                    label: 'Perawat',
                  },
                  {
                    value: 'Dokter',
                    label: 'Dokter',
                  },
                  {
                    value: 'DSOG',
                    label: 'DSOG',
                  },
                ]}
              />
              <InputField
                name="table3.komplikasi"
                form={form}
                label="Komplikasi"
                placeholder="Komplikasi"
                className="col-span-2"
                type="select"
                data={[
                  {
                    value: 'HDK',
                    label: 'HDK',
                  },
                  {
                    value: 'Abortus',
                    label: 'Abortus',
                  },
                  {
                    value: 'Perdarahan',
                    label: 'Perdarahan',
                  },
                  {
                    value: 'Infeksi',
                    label: 'Infeksi',
                  },
                  {
                    value: 'KPD',
                    label: 'KPD',
                  },
                  {
                    value: 'Lain-lain',
                    label: 'Lain-lain',
                  },
                ]}
              />
              <InputField
                name="table3.dirujukKe"
                form={form}
                label="Dirujuk Ke"
                placeholder="Dirujuk ke"
                className="col-span-2"
                type="select"
                data={[
                  {
                    value: 'Puskesmas',
                    label: 'Puskesmas',
                  },
                  {
                    value: 'RB',
                    label: 'RB',
                  },
                  {
                    value: 'RSIA/RSB',
                    label: 'RSIA/RSB',
                  },
                  {
                    value: 'RS',
                    label: 'RS',
                  },
                  {
                    value: 'Lain-lain',
                    label: 'Lain-lain',
                  },
                ]}
              />
              <InputField
                name="table3.keadaan.tiba"
                form={form}
                label="Keadaan Tiba"
                placeholder="Keadaan tiba"
                className="col-span-2"
                type="select"
                data={[
                  {
                    value: 'Hidup',
                    label: 'Hidup',
                  },
                  {
                    value: 'Mati',
                    label: 'Mati',
                  },
                ]}
              />
              <InputField
                name="table3.keadaan.pulang"
                form={form}
                label="Keadaan Pulang"
                placeholder="Keadaan pulang"
                className="col-span-2"
                type="select"
                data={[
                  {
                    value: 'Hidup',
                    label: 'Hidup',
                  },
                  {
                    value: 'Mati',
                    label: 'Mati',
                  },
                ]}
              />
              <InputField
                name="table3.keterangan"
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
              />
              <InputField
                name="soapAnc.o"
                form={form}
                label="O (Pemeriksaan)"
                placeholder="Pemeriksaan"
              />
              <InputField
                name="soapAnc.a"
                form={form}
                label="A (Diagnosa/Masalah)"
                placeholder="Diagnosa/Masalah"
              />
              <InputField
                name="soapAnc.p"
                form={form}
                label="P (Penatalaksanaan)"
                placeholder="Penatalaksanaan"
              />
            </Row>
          </FormWrapper>
        </section>
        <ButtonSubmitForm isLoading={isLoading} />
      </form>
    </Form>
  );
}
