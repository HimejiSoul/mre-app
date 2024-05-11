import { z } from 'zod';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

export const ENUM_VALUES = {
  boolean: ['true', 'false', ''],
  section2: {
    golDarah: ['', 'A', 'B', 'AB', 'O'],
    pemeriksaanBidan: {
      bukuKIA: ['Memiliki', 'Tidak Memiliki', ''],
    },
  },
  rencanaPersalinan: {
    penolong: [
      'Keluarga',
      'Dukun',
      'Bidan',
      'Dr. Umum',
      'Dr. Spesial',
      'Lain-lain',
      'Tidak ada',
      '',
    ],
    tempat: [
      'Rumah',
      'Poskesdes',
      'Pustu',
      'Puskesmas',
      'RB',
      'RS',
      'RSIA',
      'RS. Odha',
      '',
    ],
    pendamping: [
      'Suami',
      'Keluarga',
      'Teman',
      'Tetangga',
      'Lain-lain',
      'Tidak ada',
      '',
    ],
    transportasi: [
      'Mobil',
      'Motor',
      'Angkutan Umum',
      'Lain-lain',
      'Tidak ada',
      '',
    ],
    pendonor: ['Suami', 'Keluarga', 'Teman', 'Lain-lain', 'Tidak ada', ''],
  },
  riwayatKehamilan: {
    data: {
      jenisKelamin: ['Laki-laki', 'Perempuan', ''],
      hasilPersalinan: ['LH', 'LM', 'AB', ''],
    },
  },
  persalinan: {
    keadaanIbu: ['Mati', 'Hidup', ''],
    keadaanBayi: ['Mati', 'Hidup', ''],
    presentasi: [
      'Pucuk Kepala',
      'Bokong',
      'Belakang Kepala',
      'Dahi',
      'Lintang/Oblique',
      'Muka',
      'Kaki',
      'Menumbung',
      'Campuran',
      '',
    ],
    tempat: [
      'Rumah',
      'Polindes',
      'Pustu',
      'Puskesmas',
      'RB',
      'RSIA',
      'RS',
      'RS. ODHA',
      '',
    ],
    penolong: [
      'Keluarga',
      'Dukun',
      'Bidan',
      'Dr. Spesialis',
      'Dr.',
      'Lainnya',
      'Tidak Ada',
      '',
    ],
    caraPersalinan: ['Normal', 'Vacum', 'Forceps', 'Secio Caesaria', ''],
    manajemenAktifKalaIII: [
      'Injeksi Oksitosin',
      'Peregangan Tali Pusat',
      'Masase Fundus Uteri',
      '',
    ],
    pelayanan: [
      'IMD: < 1 Jam',
      'IMD: > 1 Jam',
      'Menggunakan Partograf',
      'Catat di Buku KIA',
      '',
    ],
    integrasiProgram: {
      jenisObat: ['ARV Profilaksis', 'Obat Anti Malaria', 'Obat Anti TB', ''],
    },
    komplikasi: ['Distosia', 'HDK', 'PPP', 'Infeksi', 'Lainnya', ''],
    dirujukKe: [
      'Puskesmas',
      'RB',
      'RSIA',
      'RS',
      'Lainnya',
      'Tidak di Rujuk',
      '',
    ],
    keadaanTiba: ['Hidup', 'Mati', ''],
    keadaanPulang: ['Hidup', 'Mati', ''],
  },
  pemeriksaanPNC: {
    hariKeKF: ['KF 1', 'KF 2', 'KF 3', ''],
    pelayanan: {
      fe: ['Tab', 'Botol', ''],
    },
    integrasiProgram: {
      fotoThorax: ['+', '-', ''],
    },
    komplikasi: ['PPP', 'Infeksi', 'HDK', 'Lainnya', ''],
    ditujukKe: ['PKM', 'RB', 'RSIA/RSB', 'RS', 'Lainnya', ''],
    keadaan: {
      tiba: ['Hidup', 'Mati', ''],
      pulang: ['Hidup', 'Mati', ''],
    },
  },
} as const;

export const kehamilanFormSchema = z.object({
  generalInformation: z.object({
    noIbu: z.string().max(50).optional(),
    namaLengkap: z.string().min(2).max(50),
    namaSuami: z.string().min(2).max(50),
    tanggalLahir: z
      .string()
      .or(z.date())
      .transform((arg) => new Date(arg)),
    umur: z.coerce.number().int().min(0).max(150),
    alamatDomisili: z.string().max(100).optional(),
    rtrw: z.string().max(50).optional(),
    desa: z.string().max(50).optional(),
    kecamatan: z.string().max(50).optional(),
    kabupaten: z.string().max(50).optional(),
    provinsi: z.string().max(50).optional(),
    pendidikan: z.string().max(50).optional(),
    agama: z.string().max(50).optional(),
    pekerjaan: z.string().max(50).optional(),
    tanggalRegister: z
      .string()
      .or(z.date())
      .transform((arg) => new Date(arg)),
  }),
  section2: z.object({
    posyandu: z.string().max(50).optional(),
    jamkesmas: z.enum(ENUM_VALUES.boolean),
    namaKader: z.string().max(50).optional(),
    golDarah: z.enum(ENUM_VALUES.section2.golDarah),
    namaDukun: z.string().max(50).optional(),
    noTelp: z.string().regex(phoneRegex, 'Invalid Phone Number!'), //TODO: Make this can be filled with empty string
    riwayatObstetrik: z.object({
      gravida: z.coerce.number().int().min(0).max(99),
      partus: z.coerce.number().int().min(0).max(99),
      abortus: z.coerce.number().int().min(0).max(99),
      hidup: z.coerce.number().int().min(0).max(99),
    }),
    pemeriksaanBidan: z.object({
      tanggalPeriksa: z
        .string()
        .or(z.date())
        .transform((arg) => new Date(arg)),
      tanggalHPHT: z
        .string()
        .or(z.date())
        .transform((arg) => new Date(arg)),
      taksiranPersalinan: z
        .string()
        .or(z.date())
        .transform((arg) => new Date(arg)),
      persalinanSebelumnya: z.coerce.number().int().min(0).max(9999),
      bbSebelumHamil: z.coerce.number().int().min(0).max(999),
      tb: z.coerce.number().int().min(0).max(999),
      bukuKIA: z.enum(ENUM_VALUES.section2.pemeriksaanBidan.bukuKIA),
      riwayatKomplikasiKebidanan: z.string().max(150).optional(),
      penyakitKronisDanAlergi: z.string().max(150).optional(),
    }),
  }),
  rencanaPersalinan: z.array(
    z.object({
      tanggal: z
        .string()
        .or(z.date())
        .transform((arg) => new Date(arg)),
      penolong: z.enum(ENUM_VALUES.rencanaPersalinan.penolong),
      tempat: z.enum(ENUM_VALUES.rencanaPersalinan.tempat),
      pendamping: z.enum(ENUM_VALUES.rencanaPersalinan.pendamping),
      transportasi: z.enum(ENUM_VALUES.rencanaPersalinan.transportasi),
      pendonor: z.enum(ENUM_VALUES.rencanaPersalinan.pendonor),
    }),
  ),
  riwayatKehamilan: z.object({
    g: z.coerce.number().int().min(0).max(99),
    p: z.coerce.number().int().min(0).max(99),
    a: z.coerce.number().int().min(0).max(99),
    data: z.array(
      z.object({
        tahun: z.coerce.number().int().min(0).max(9999),
        jenisKelamin: z.enum(ENUM_VALUES.riwayatKehamilan.data.jenisKelamin),
        hasilPersalinan: z.enum(
          ENUM_VALUES.riwayatKehamilan.data.hasilPersalinan,
        ),
        jenisPersalinan: z.string().max(50).optional(),
        keadaanSaatLahir: z.string().max(50).optional(),
        bbl: z.string().max(50).optional(),
        lamaMenyusui: z.string().max(50).optional(),
        penolongPersalinan: z.string().max(50).optional(),
        penyulit: z.string().max(50).optional(),
        keterangan: z.string().max(50).optional(),
      }),
    ),
  }),
  persalinan: z.object({
    kalaIAktif: z.object({
      tanggal: z
        .string()
        .or(z.date())
        .transform((arg) => new Date(arg)),
      jam: z.string().time(),
    }),
    kalaII: z.object({
      tanggal: z
        .string()
        .or(z.date())
        .transform((arg) => new Date(arg)),
      jam: z.string().time(),
    }),
    bayiLahir: z.object({
      tanggal: z
        .string()
        .or(z.date())
        .transform((arg) => new Date(arg)),
      jam: z.string().time(),
    }),
    plasentaLahir: z.object({
      tanggal: z
        .string()
        .or(z.date())
        .transform((arg) => new Date(arg)),
      jam: z.string().time(),
    }),
    usiaKehamilan: z.coerce.number().int().min(0).max(999),
    usiaHPHT: z.coerce.number().int().min(0).max(999),
    keadaanIbu: z.enum(ENUM_VALUES.persalinan.keadaanIbu),
    keadaanBayi: z.enum(ENUM_VALUES.persalinan.keadaanBayi),
    beratBayi: z.coerce.number().int().min(0).max(99999),
    perdarahanKalaIV: z.string().max(150).optional(),
    presentasi: z.enum(ENUM_VALUES.persalinan.presentasi),
    tempat: z.enum(ENUM_VALUES.persalinan.tempat),
    penolong: z.enum(ENUM_VALUES.persalinan.penolong),
    caraPersalinan: z.enum(ENUM_VALUES.persalinan.caraPersalinan),
    manajemenAktifKalaIII: z.enum(ENUM_VALUES.persalinan.manajemenAktifKalaIII),
    pelayanan: z.enum(ENUM_VALUES.persalinan.pelayanan),
    integrasiProgram: z.object({
      jenisObat: z.enum(ENUM_VALUES.persalinan.integrasiProgram.jenisObat),
      namaObat: z.string().max(50).optional(),
    }),
    komplikasi: z.enum(ENUM_VALUES.persalinan.komplikasi),
    dirujukKe: z.enum(ENUM_VALUES.persalinan.dirujukKe),
    keadaanTiba: z.enum(ENUM_VALUES.persalinan.keadaanTiba),
    keadaanPulang: z.enum(ENUM_VALUES.persalinan.keadaanPulang),
    alamatBersalin: z.string().max(150).optional(),
  }),
  pemeriksaanPNC: z.array(
    z.object({
      tanggal: z
        .string()
        .or(z.date())
        .transform((arg) => new Date(arg)),
      hariKeKF: z.enum(ENUM_VALUES.pemeriksaanPNC.hariKeKF),
      tandaVital: z.object({
        td: z.string().max(50).optional(),
        suhu: z.coerce.number().int().min(0).max(999),
      }),
      pelayanan: z.object({
        catatDiBukuKIA: z.boolean().default(false).optional(),
        fe: z.enum(ENUM_VALUES.pemeriksaanPNC.pelayanan.fe),
        vitA: z.boolean().default(false).optional(),
      }),
      integrasiProgram: z.object({
        cd4: z.string().max(50).optional(),
        antiMalaria: z.string().max(50).optional(),
        antiTB: z.string().max(50).optional(),
        fotoThorax: z.enum(
          ENUM_VALUES.pemeriksaanPNC.integrasiProgram.fotoThorax,
        ),
      }),
      komplikasi: z.enum(ENUM_VALUES.pemeriksaanPNC.komplikasi),
      ditujukKe: z.enum(ENUM_VALUES.pemeriksaanPNC.ditujukKe),
      keadaan: z.object({
        tiba: z.enum(ENUM_VALUES.pemeriksaanPNC.keadaan.tiba),
        pulang: z.enum(ENUM_VALUES.pemeriksaanPNC.keadaan.pulang),
      }),
    }),
  ),
  kunjunganNifas: z.object({
    mal: z.object({
      rencana: z.string().max(150).optional(),
      pelaksanaan: z.string().max(150).optional(),
    }),
    kondom: z.object({
      rencana: z.string().max(150).optional(),
      pelaksanaan: z.string().max(150).optional(),
    }),
    pil: z.object({
      rencana: z.string().max(150).optional(),
      pelaksanaan: z.string().max(150).optional(),
    }),
    suntik: z.object({
      rencana: z.string().max(150).optional(),
      pelaksanaan: z.string().max(150).optional(),
    }),
    akdr: z.object({
      rencana: z.string().max(150).optional(),
      pelaksanaan: z.string().max(150).optional(),
    }),
    inplant: z.object({
      rencana: z.string().max(150).optional(),
      pelaksanaan: z.string().max(150).optional(),
    }),
    mow: z.object({
      rencana: z.string().max(150).optional(),
      pelaksanaan: z.string().max(150).optional(),
    }),
    mop: z.object({
      rencana: z.string().max(150).optional(),
      pelaksanaan: z.string().max(150).optional(),
    }),
  }),
  mendeteksiFaktorResikoDanResikoTinggi: z.object({
    faktorResiko: z.object({
      umur: z.enum(ENUM_VALUES.boolean),
      paritas: z.enum(ENUM_VALUES.boolean),
      spasing: z.enum(ENUM_VALUES.boolean),
      bb: z.enum(ENUM_VALUES.boolean),
      tb: z.enum(ENUM_VALUES.boolean),
      sakitKronis: z.enum(ENUM_VALUES.boolean),
      abortus: z.enum(ENUM_VALUES.boolean),
      sc: z.enum(ENUM_VALUES.boolean),
      hpp: z.enum(ENUM_VALUES.boolean),
      bayiBesar: z.enum(ENUM_VALUES.boolean),
      hb: z.enum(ENUM_VALUES.boolean),
    }),
    resikoTinggi: z.object({
      kpd: z.enum(ENUM_VALUES.boolean),
      perdarahan: z.enum(ENUM_VALUES.boolean),
      infeksi: z.enum(ENUM_VALUES.boolean),
      preeklamsi: z.enum(ENUM_VALUES.boolean),
      hb: z.enum(ENUM_VALUES.boolean),
      kelainanLetak: z.enum(ENUM_VALUES.boolean),
      anakBesarHidramnion: z.enum(ENUM_VALUES.boolean),
      ancamanPrematur: z.enum(ENUM_VALUES.boolean),
      infeksiDBD: z.enum(ENUM_VALUES.boolean),
      distocia: z.enum(ENUM_VALUES.boolean),
      terdapat2FaktroResiko: z.enum(ENUM_VALUES.boolean),
    }),
    resikoTinggiLainnya: z.object({
      ditemukanTanggal: z
        .string()
        .or(z.date())
        .transform((arg) => new Date(arg)),
      jenisResiko: z.string().max(150).optional(),
    }),
  }),
});

// This can come from your database or API.
export const defaultValues: Partial<z.infer<typeof kehamilanFormSchema>> = {
  generalInformation: {
    noIbu: '',
    namaLengkap: 'Firda Rizky Tester',
    namaSuami: 'Hilmy Aziz Tester',
    tanggalLahir: new Date('1999-1-1'),
    umur: 0,
    alamatDomisili: '',
    rtrw: '',
    desa: '',
    kecamatan: '',
    kabupaten: '',
    provinsi: '',
    pendidikan: '',
    agama: '',
    pekerjaan: '',
    tanggalRegister: new Date(),
  },
  section2: {
    posyandu: '',
    jamkesmas: 'true',
    namaKader: '',
    golDarah: '',
    namaDukun: '',
    noTelp: '08123456789',
    riwayatObstetrik: {
      gravida: 0,
      partus: 0,
      abortus: 0,
      hidup: 0,
    },
    pemeriksaanBidan: {
      tanggalPeriksa: new Date(),
      tanggalHPHT: new Date(),
      taksiranPersalinan: new Date(),
      persalinanSebelumnya: 1999,
      bbSebelumHamil: 0,
      tb: 0,
      bukuKIA: '',
      riwayatKomplikasiKebidanan: '',
      penyakitKronisDanAlergi: '',
    },
  },
  rencanaPersalinan: [
    {
      tanggal: new Date(),
      penolong: '',
      tempat: '',
      pendamping: '',
      transportasi: '',
      pendonor: '',
    },
  ],
  riwayatKehamilan: {
    g: 0,
    p: 0,
    a: 0,
    data: [
      {
        tahun: 0,
        jenisKelamin: '',
        hasilPersalinan: '',
        jenisPersalinan: '',
        keadaanSaatLahir: '',
        bbl: '',
        lamaMenyusui: '',
        penolongPersalinan: '',
        penyulit: '',
        keterangan: '',
      },
    ],
  },
  persalinan: {
    kalaIAktif: {
      tanggal: new Date(),
      jam: '00:00:00',
    },
    kalaII: {
      tanggal: new Date(),
      jam: '00:00:00',
    },
    bayiLahir: {
      tanggal: new Date(),
      jam: '00:00:00',
    },
    plasentaLahir: {
      tanggal: new Date(),
      jam: '00:00:00',
    },
    usiaKehamilan: 0,
    usiaHPHT: 0,
    keadaanIbu: '',
    keadaanBayi: '',
    beratBayi: 0,
    perdarahanKalaIV: '',
    presentasi: '',
    tempat: '',
    penolong: '',
    caraPersalinan: '',
    manajemenAktifKalaIII: '',
    pelayanan: '',
    integrasiProgram: {
      jenisObat: '',
      namaObat: '',
    },
    komplikasi: '',
    dirujukKe: '',
    keadaanTiba: '',
    keadaanPulang: '',
    alamatBersalin: '',
  },
  pemeriksaanPNC: [
    {
      tanggal: new Date(),
      hariKeKF: '',
      tandaVital: {
        td: '',
        suhu: 0,
      },
      pelayanan: {
        catatDiBukuKIA: false,
        fe: '',
        vitA: false,
      },
      integrasiProgram: {
        cd4: '',
        antiMalaria: '',
        antiTB: '',
        fotoThorax: '',
      },
      komplikasi: '',
      ditujukKe: '',
      keadaan: {
        tiba: '',
        pulang: '',
      },
    },
  ],
  kunjunganNifas: {
    mal: {
      rencana: '',
      pelaksanaan: '',
    },
    kondom: {
      rencana: '',
      pelaksanaan: '',
    },
    pil: {
      rencana: '',
      pelaksanaan: '',
    },
    suntik: {
      rencana: '',
      pelaksanaan: '',
    },
    akdr: {
      rencana: '',
      pelaksanaan: '',
    },
    inplant: {
      rencana: '',
      pelaksanaan: '',
    },
    mow: {
      rencana: '',
      pelaksanaan: '',
    },
    mop: {
      rencana: '',
      pelaksanaan: '',
    },
  },
  mendeteksiFaktorResikoDanResikoTinggi: {
    faktorResiko: {
      umur: '',
      paritas: '',
      spasing: '',
      bb: '',
      tb: '',
      sakitKronis: '',
      abortus: '',
      sc: '',
      hpp: '',
      bayiBesar: '',
      hb: '',
    },
    resikoTinggi: {
      kpd: '',
      perdarahan: '',
      infeksi: '',
      preeklamsi: '',
      hb: '',
      kelainanLetak: '',
      anakBesarHidramnion: '',
      ancamanPrematur: '',
      infeksiDBD: '',
      distocia: '',
      terdapat2FaktroResiko: '',
    },
    resikoTinggiLainnya: {
      ditemukanTanggal: new Date(),
      jenisResiko: '',
    },
  },
};
