import { z } from 'zod';

export const soapKehamilanFormSchema = z.object({
  table1: z.object({
    register: z.object({
      tanggal: z.string().optional(),
      jamkesmas: z.string().optional(),
      caraMasuk: z.string().optional(),
      usiaKlinis: z.string().optional(),
      trimesterKe: z.string().optional(),
    }),
    pemeriksaan: z.object({
      ibu: z.object({
        anamnesis: z.string().optional(),
        bb: z.string().optional(),
        td: z.string().optional(),
        lila: z.string().optional(),
        statusGizi: z.string().optional(),
        tfu: z.string().optional(),
        refleksPatella: z.string().optional(),
      }),
      bayi: z.object({
        djj: z.string().optional(),
        kepalaTerhadapPAP: z.string().optional(),
        tbj: z.string().optional(),
        presentasi: z.string().optional(),
        jumlahJanin: z.string().optional(),
      }),
    }),
    statusImunisasiTT: z.string().optional(),
    pelayanan: z.object({
      injeksiTT: z.string().optional(),
      catatDiBukuKIA: z.string().optional(),
      fe: z.string().optional(),
    }),
    laboratorium: z.object({
      periksaHB: z.object({
        dilakukan: z.string().optional(),
        hasil: z.string().optional(),
        anemia: z.string().optional(),
      }),
      proteinUrin: z.string().optional(),
      gulaDarah: z.string().optional(),
      thalasemia: z.string().optional(),
      sifilis: z.string().optional(),
      hbsag: z.string().optional(),
    }),
    integrasiProgram: z.object({
      pmtct: z.object({
        vct: z.string().optional(),
        periksaDarah: z.string().optional(),
        serologi: z.string().optional(),
        profilaksis: z.string().optional(),
        arv: z.string().optional(),
      }),
      malaria: z.object({
        periksaDarah: z.string().optional(),
        malaria: z.string().optional(),
        obat: z.string().optional(),
        kelambuBerinsektisida: z.string().optional(),
      }),
      tb: z.object({
        periksaDahak: z.string().optional(),
        tbc: z.string().optional(),
        obat: z.string().optional(),
      }),
    }),
    keterangan: z.string().optional(),
  }),
  table2: z.object({
    tanggal: z.string().optional(),
    keterangan: z.string().optional(),
  }),
  table3: z.object({
    tanggal: z.string().optional(),
    resikoTerdeteksiPertamaKaliOleh: z.string().optional(),
    komplikasi: z.string().optional(),
    dirujukKe: z.string().optional(),
    keadaan: z.object({
      tiba: z.string().optional(),
      pulang: z.string().optional(),
    }),
    keterangan: z.string().optional(),
  }),
  soapAnc: z.object({
    tanggal: z.string().optional(),
    s: z.string().optional(),
    o: z.string().optional(),
    a: z.string().optional(),
    p: z.string().optional(),
  }),
});

export const defaultValues: Partial<z.infer<typeof soapKehamilanFormSchema>> = {
  table1: {
    register: {
      tanggal: '',
      jamkesmas: '',
      caraMasuk: '',
      usiaKlinis: '',
      trimesterKe: '',
    },
    pemeriksaan: {
      ibu: {
        anamnesis: '',
        bb: '',
        td: '',
        lila: '',
        statusGizi: '',
        tfu: '',
        refleksPatella: '',
      },
      bayi: {
        djj: '',
        kepalaTerhadapPAP: '',
        tbj: '',
        presentasi: '',
        jumlahJanin: '',
      },
    },
    statusImunisasiTT: '',
    pelayanan: {
      injeksiTT: '',
      catatDiBukuKIA: '',
      fe: '',
    },
    laboratorium: {
      periksaHB: {
        dilakukan: '',
        hasil: '',
        anemia: '',
      },
      proteinUrin: '',
      gulaDarah: '',
      thalasemia: '',
      sifilis: '',
      hbsag: '',
    },
    integrasiProgram: {
      pmtct: {
        vct: '',
        periksaDarah: '',
        serologi: '',
        profilaksis: '',
        arv: '',
      },
      malaria: {
        periksaDarah: '',
        malaria: '',
        obat: '',
        kelambuBerinsektisida: '',
      },
      tb: {
        periksaDahak: '',
        tbc: '',
        obat: '',
      },
    },
    keterangan: '',
  },
  table2: {
    tanggal: '',
    keterangan: '',
  },
  table3: {
    tanggal: '',
    resikoTerdeteksiPertamaKaliOleh: '',
    komplikasi: '',
    dirujukKe: '',
    keadaan: {
      tiba: '',
      pulang: '',
    },
    keterangan: '',
  },
  soapAnc: {
    tanggal: '',
    s: '',
    o: '',
    a: '',
    p: '',
  },
};
