import { z } from 'zod';

export const ENUM_VALUES = {
  boolean: ['true', 'false', ''],
  plusMinus: ['+', '-', ''],
  table1: {
    register: {
      caraMasuk: [
        'APS: Atas Permintaan Sendiri',
        'Dr: Rujukan Dokter',
        'Bd: Rujukan Bidan',
        'Dn: Rujukan Dukun',
        'Pol: Rujukan Polindes',
        'Pst: Rujukan Pustu',
        'Pks: Rujukan Puskesmas',
        'RB: Rujukan Rumah Bersalin',
        'RSIA: Rujukan RS Ibu dan Anak',
        '',
      ],
    },
    pemeriksaan: {
      ibu: {
        statusGizi: [
          'LILA < 23,5 cm: KEK (K)',
          'LILA > 23,5 cm: Normal (N)',
          '',
        ],
        refleksPatella: ['+', '-', ''],
      },
      bayi: {
        kepalaTerhadapPAP: ['Masuk: M', 'Belum Masuk: BM', ''],
        presentasi: [
          'KP: Kepala',
          'BS: Bokong/Sungsang',
          'LLO: Letak Lintang/Oblique',
          '',
        ],
        jumlahJanin: ['T: Tunggal', 'G: Ganda', ''],
      },
    },
    statusImunisasiTT: ['TD', 'T1', 'T2', 'T3', 'T4', 'T5', ''],
    pelayanan: {
      fe: ['Tab', 'Botol', ''],
    },
    laboratorium: {
      periksaHB: {
        anemia: ['+', '-', ''],
      },
      proteinUrin: ['+', '-', ''],
      thalasemia: ['+', '-', ''],
      sifilis: ['+', '-', ''],
      hbsag: ['+', '-', ''],
    },
    integrasiProgram: {
      pmtct: {
        serologi: ['+', '-', ''],
      },
      malaria: {
        malaria: ['+', '-', ''],
      },
      tb: {
        tbc: ['+', '-', ''],
      },
    },
  },
  table2: {
    resikoTerdeteksiPertamaKaliOleh: [
      'Pasien',
      'Keluarga',
      'Masyarakat',
      'Dukun',
      'Kader',
      'Bidan',
      'Perawat',
      'Dokter',
      'DSOG',
      '',
    ],
    komplikasi: [
      'HDK',
      'Abortus',
      'Perdarahan',
      'Infeksi',
      'KPD',
      'Lain-lain',
      '',
    ],
    dirujukKe: ['Puskesmas', 'RB', 'RSIA/RSB', 'RS', 'Lain-lain', ''],
    keadaan: {
      tiba: ['Hidup', 'Mati', ''],
      pulang: ['Hidup', 'Mati', ''],
    },
  },
} as const;

export const soapKehamilanFormSchema = z.object({
  table1: z.object({
    register: z.object({
      tanggal: z
        .string()
        .or(z.date())
        .transform((arg) => new Date(arg)),
      jamkesmas: z.string().max(50).optional(),
      caraMasuk: z.enum(ENUM_VALUES.table1.register.caraMasuk),
      usiaKlinis: z.coerce.number().int().min(0).max(9999),
      trimesterKe: z.coerce.number().int().min(0).max(9999),
    }),
    pemeriksaan: z.object({
      ibu: z.object({
        anamnesis: z.string().max(150).optional(),
        bb: z.coerce.number().int().min(0).max(9999),
        td: z.string().max(50).optional(),
        lila: z.coerce.number().int().min(0).max(9999),
        statusGizi: z.enum(ENUM_VALUES.table1.pemeriksaan.ibu.statusGizi),
        tfu: z.string().max(150).optional(),
        refleksPatella: z.enum(
          ENUM_VALUES.table1.pemeriksaan.ibu.refleksPatella,
        ),
      }),
      bayi: z.object({
        djj: z.string().max(150).optional(),
        kepalaTerhadapPAP: z.enum(
          ENUM_VALUES.table1.pemeriksaan.bayi.kepalaTerhadapPAP,
        ),
        tbj: z.coerce.number().int().min(0).max(9999),
        presentasi: z.enum(ENUM_VALUES.table1.pemeriksaan.bayi.presentasi),
        jumlahJanin: z.enum(ENUM_VALUES.table1.pemeriksaan.bayi.jumlahJanin),
      }),
    }),
    statusImunisasiTT: z.enum(ENUM_VALUES.table1.statusImunisasiTT),
    pelayanan: z.object({
      injeksiTT: z.string().max(150).optional(),
      catatDiBukuKIA: z.boolean(),
      fe: z.enum(ENUM_VALUES.table1.pelayanan.fe),
    }),
    laboratorium: z.object({
      periksaHB: z.object({
        dilakukan: z.boolean(),
        hasil: z.string().max(150).optional(),
        anemia: z.enum(ENUM_VALUES.table1.laboratorium.periksaHB.anemia),
      }),
      proteinUrin: z.enum(ENUM_VALUES.table1.laboratorium.proteinUrin),
      gulaDarah: z.string().max(150).optional(),
      thalasemia: z.enum(ENUM_VALUES.table1.laboratorium.thalasemia),
      sifilis: z.enum(ENUM_VALUES.table1.laboratorium.sifilis),
      hbsag: z.enum(ENUM_VALUES.table1.laboratorium.hbsag),
    }),
    integrasiProgram: z.object({
      pmtct: z.object({
        vct: z.boolean(),
        periksaDarah: z.string().max(150).optional(),
        serologi: z.enum(ENUM_VALUES.table1.integrasiProgram.pmtct.serologi),
        profilaksis: z.string().max(150).optional(),
        arv: z.boolean(),
      }),
      malaria: z.object({
        periksaDarah: z.boolean(),
        malaria: z.enum(ENUM_VALUES.table1.integrasiProgram.malaria.malaria),
        obat: z.boolean(),
        kelambuBerinsektisida: z.boolean(),
      }),
      tb: z.object({
        periksaDahak: z.boolean(),
        tbc: z.enum(ENUM_VALUES.table1.integrasiProgram.tb.tbc),
        obat: z.boolean(),
      }),
    }),
    keterangan: z.string().max(999).optional(),
  }),
  table2: z.object({
    tanggal: z
      .string()
      .or(z.date())
      .transform((arg) => new Date(arg)),
    resikoTerdeteksiPertamaKaliOleh: z.enum(
      ENUM_VALUES.table2.resikoTerdeteksiPertamaKaliOleh,
    ),
    komplikasi: z.enum(ENUM_VALUES.table2.komplikasi),
    dirujukKe: z.enum(ENUM_VALUES.table2.dirujukKe),
    keadaan: z.object({
      tiba: z.enum(ENUM_VALUES.table2.keadaan.tiba),
      pulang: z.enum(ENUM_VALUES.table2.keadaan.pulang),
    }),
    keterangan: z.string().max(999).optional(),
  }),
  soapAnc: z.object({
    tanggal: z
      .string()
      .or(z.date())
      .transform((arg) => new Date(arg)),
    s: z.string().max(999).optional(),
    o: z.string().max(999).optional(),
    a: z.string().max(999).optional(),
    p: z.string().max(999).optional(),
  }),
});

export const defaultValues: Partial<z.infer<typeof soapKehamilanFormSchema>> = {
  table1: {
    register: {
      tanggal: new Date(),
      jamkesmas: '',
      caraMasuk: '',
      usiaKlinis: 0,
      trimesterKe: 0,
    },
    pemeriksaan: {
      ibu: {
        anamnesis: '',
        bb: 0,
        td: '',
        lila: 0,
        statusGizi: '',
        tfu: '',
        refleksPatella: '',
      },
      bayi: {
        djj: '',
        kepalaTerhadapPAP: '',
        tbj: 0,
        presentasi: '',
        jumlahJanin: '',
      },
    },
    statusImunisasiTT: '',
    pelayanan: {
      injeksiTT: '',
      catatDiBukuKIA: false,
      fe: '',
    },
    laboratorium: {
      periksaHB: {
        dilakukan: false,
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
        vct: false,
        periksaDarah: '',
        serologi: '',
        profilaksis: '',
        arv: false,
      },
      malaria: {
        periksaDarah: false,
        malaria: '',
        obat: false,
        kelambuBerinsektisida: false,
      },
      tb: {
        periksaDahak: false,
        tbc: '',
        obat: false,
      },
    },
    keterangan: '',
  },
  table2: {
    tanggal: new Date(),
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
    tanggal: new Date(),
    s: '',
    o: '',
    a: '',
    p: '',
  },
};
