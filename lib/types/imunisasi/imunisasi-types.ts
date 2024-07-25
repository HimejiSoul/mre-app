import { z } from 'zod';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

export const ENUM_VALUES = {
  boolean: ['true', 'false'],
  detailBayi: {
    jenisPersalinan: ['', 'Normal', 'SC'],
    jenisKelamin: ['', 'Laki-Laki', 'Perempuan'],
    golDarah: ['', 'A', 'B', 'AB', 'O'],
    keadaanLahir: ['', 'Hidup', 'Mati'],
    bukuKIA: ['', 'Memiliki', 'Tidak Memiliki'],
    resisutasi: ['', 'Ya', 'Tidak'],
    imd: ['', '< 1 Jam', '> 1 Jam'],
    keadaanPulang: ['', 'Hidup', 'Mati', 'Dirujuk'],
    komplikasi: [
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
    ],
    pencegahan: [
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
    ],
  },
  pemeriksaanNeonatus: {
    kn: ['KN 1', 'KN 2', 'KN 3', ''],
    nakes: ['', 'Dokter', 'Bidan', 'Perawat'],
    mbtm: [
      '',
      'KPSB/ IB',
      'KBBR & MP ASI',
      'Tidak ditemukan',
      'Diare',
      'Ikterus',
      'Tidak diperiksa',
    ],
    keadaanPulang: ['', 'Hidup', 'Mati', 'Dirujuk'],
    dirujukKe: [
      '',
      'Puskesmas',
      'R. Bersalin',
      'RSIA / RSB',
      'RS',
      'Lain-Lain',
    ],
    pencegahan: [
      {
        id: 'Vit. K',
        label: 'Vit. K',
      },
      {
        id: 'Heb. B',
        label: 'Heb. B',
      },
      {
        id: 'BCG',
        label: 'BCG',
      },
      {
        id: 'Lain-Lain',
        label: 'Lain-Lain',
      },
    ],
    integrasiProgram: [
      {
        id: 'Kontrimoksasol/ Profiaksis',
        label: 'Kontrimoksasol/ Profiaksis',
      },
      {
        id: 'Pemberian Susu Formula',
        label: 'Pemberian Susu Formula',
      },
    ],
    diagnosis: [
      {
        id: 'Pneumoni',
        label: 'Pneumoni',
      },
      {
        id: 'Hipotermi',
        label: 'Hipotermi',
      },
      {
        id: 'Ikterus',
        label: 'Ikterus',
      },
      {
        id: 'Tetanus',
        label: 'Tetanus',
      },
      {
        id: 'Infeksi',
        label: 'Infeksi',
      },
      {
        id: 'Diare',
        label: 'Diare',
      },
      {
        id: 'Hematologi',
        label: 'Hematologi',
      },
    ],
    keadaan: ['Hidup', 'Mati', ''],
  },
  pemeriksaanNeonatusLanjutan: {
    dpthbib: ['', 'DPT HB HIB 1', 'DPT HB HIB 2', 'DPT HB HIB 3'],
    polio: ['', 'POLIO 1', 'POLIO 2', 'POLIO 3', 'POLIO 4'],
    integrasiProgram: [
      {
        id: 'Sorologi HIV',
        label: 'Sorologi HIV',
      },
      {
        id: 'CD4',
        label: 'CD4',
      },
      {
        id: 'Mendapat Kelambu	',
        label: 'Mendapat Kelambu	',
      },
    ],
  },
  pemeriksaanBalita: {
    imunisasi: [
      {
        id: 'DPT HB HIB Booster',
        label: 'DPT HB HIB Booster',
      },
      {
        id: 'Campak Booster',
        label: 'CD4',
      },
    ],
  },
} as const;

export const imunisasiFormSchema = z.object({
  generalInformation: z.object({
    nomor: z.string(),
    puskesmas: z.string(),
    bidan: z.string(),
    tglDatang: z
      .string()
      .or(z.date())
      .transform((arg) => new Date(arg)),
    nomorBayi: z.string(),
    namaBayi: z.string(),
    namaIbu: z.string(),
    usiaIbu: z.coerce.number({ invalid_type_error: 'Required' }),
    namaAyah: z.string(),
    usiaAyah: z.coerce.number({ invalid_type_error: 'Required' }),
    alamat: z.string(),
    desa: z.string(),
    kecamatan: z.string(),
    kabupaten: z.string(),
    provinsi: z.string(),
    noHP: z.coerce.number({ invalid_type_error: 'Required' }),
  }),
  detailBayi: z.object({
    tglLahir: z
      .string()
      .or(z.date())
      .transform((arg) => new Date(arg)),
    tempatLahir: z.string().optional(),
    jenisPersalinan: z.enum(['', 'Normal', 'SC']),
    jenisKelamin: z.enum(['', 'Laki-Laki', 'Perempuan']),
    golDarah: z.enum(['', 'A', 'B', 'AB', 'O']),
    beratBayi: z.coerce.number({ invalid_type_error: 'Required' }),
    panjangBayi: z.coerce.number({ invalid_type_error: 'Required' }),
    lingkarKepala: z.coerce.number({ invalid_type_error: 'Required' }),
    anakKe: z.coerce.number({ invalid_type_error: 'Required' }),
    keadaanLahir: z.enum(['', 'Hidup', 'Mati']),
    bukuKIA: z.enum(['', 'Memiliki', 'Tidak Memiliki']),
    komplikasi: z.array(z.string()).optional(),
    resisutasi: z.enum(['', 'Ya', 'Tidak']),
    imd: z.enum(['', '< 1 Jam', '> 1 Jam']),
    pencegahan: z.array(z.string()).optional(),
    keadaanPulang: z.enum(['', 'Hidup', 'Mati', 'Dirujuk']),
  }),
  pemeriksaanNeonatus: z
    .array(
      z.object({
        tglDatang: z
          .string()
          .or(z.date())
          .transform((arg) => new Date(arg)),
        pemeriksaan: z.object({
          umur: z.coerce.number({ invalid_type_error: 'Required' }),
          kn: z.enum(ENUM_VALUES.pemeriksaanNeonatus.kn),
          nakes: z.enum(ENUM_VALUES.pemeriksaanNeonatus.nakes),
          asiEkslusif: z.coerce
            .boolean()
            .or(z.enum(ENUM_VALUES.boolean))
            .optional(),
          bb: z.coerce.number({ invalid_type_error: 'Required' }),
          tb: z.coerce.number({ invalid_type_error: 'Required' }),
        }),
        pencegahan: z.array(z.string()),
        integrasiProgram: z.array(z.string()),
        diagnosis: z.array(z.string()),
        mbtm: z.enum(ENUM_VALUES.pemeriksaanNeonatus.mbtm),
        keadaanPulang: z.enum(ENUM_VALUES.pemeriksaanNeonatus.keadaanPulang),
        dirujukKe: z.enum(ENUM_VALUES.pemeriksaanNeonatus.dirujukKe),
        keadaan: z.enum(ENUM_VALUES.pemeriksaanNeonatus.keadaan),
      }),
    )
    .optional(),
  pemeriksaanNeonatusLanjutan: z
    .array(
      z.object({
        tglDatang: z
          .string()
          .or(z.date())
          .transform((arg) => new Date(arg)),
        pemeriksaan: z.object({
          umurth: z.coerce.number({ invalid_type_error: 'Required' }),
          umurbi: z.coerce.number({ invalid_type_error: 'Required' }),
          umurhr: z.coerce.number({ invalid_type_error: 'Required' }),
          asiEkslusif: z.coerce.boolean().optional(),
          mpasi: z.coerce.boolean().optional(),
          sdidtk: z.coerce.boolean().optional(),
        }),
        gizi: z.object({
          bb: z.coerce.number({ invalid_type_error: 'Required' }),
          tb: z.coerce.number({ invalid_type_error: 'Required' }),
          status: z.string().optional(),
        }),
        pencegahan: z.object({
          bcg: z.coerce.boolean().optional(),
          dpthbib: z.enum(ENUM_VALUES.pemeriksaanNeonatusLanjutan.dpthbib),
          polio: z.enum(ENUM_VALUES.pemeriksaanNeonatusLanjutan.polio),
          campak: z.coerce.boolean(),
          ipv: z.coerce.boolean().optional(),
          vitA: z.coerce.boolean().optional(),
        }),
        integrasiProgram: z.array(z.string()),
        ket: z.string().optional(),
      }),
    )
    .optional(),
  pemeriksaanBalita: z
    .array(
      z.object({
        tglDatang: z
          .string()
          .or(z.date())
          .transform((arg) => new Date(arg)),
        umur: z.object({
          tahun: z.coerce.number({ invalid_type_error: 'Required' }),
          bulan: z.coerce.number({ invalid_type_error: 'Required' }),
          hari: z.coerce.number({ invalid_type_error: 'Required' }),
        }),
        pemeriksaan: z.object({
          asiEkslusif: z.coerce.boolean().optional(),
          mpasi: z.coerce.boolean().optional(),
          sdidtk: z.coerce.boolean().optional(),
        }),
        gizi: z.object({
          bb: z.coerce.number({ invalid_type_error: 'Required' }),
          tb: z.coerce.number({ invalid_type_error: 'Required' }),
          status: z.string().optional(),
          vitA: z.coerce.boolean().optional(),
        }),
        integrasiProgram: z.array(z.string()),
        imunisasi: z.array(z.string()),
        ket: z.string().optional(),
      }),
    )
    .optional(),
});

// This can come from your database or API.
export const defaultValues: Partial<z.infer<typeof imunisasiFormSchema>> = {
  generalInformation: {
    nomor: '12/34/56',
    puskesmas: 'Sehat Selalu',
    bidan: 'Ibu Nina',
    tglDatang: new Date(),
    nomorBayi: '123456',
    namaBayi: 'Tarek',
    namaIbu: 'Istri Zaidan',
    usiaIbu: 20,
    namaAyah: 'Zaidan',
    usiaAyah: 10,
    alamat: 'Jl. Soekarno',
    desa: 'Cimahi',
    kecamatan: 'Cijago',
    kabupaten: 'Bandung',
    provinsi: 'Jawa Barat',
    noHP: +6281234567,
  },
  detailBayi: {
    tglLahir: new Date(),
    tempatLahir: 'Bandung',
    jenisPersalinan: 'Normal',
    jenisKelamin: 'Laki-Laki',
    golDarah: 'A',
    beratBayi: 21,
    lingkarKepala: 10,
    anakKe: 2,
    panjangBayi: 120,
    keadaanLahir: 'Hidup',
    bukuKIA: 'Memiliki',
    komplikasi: ['Asfiksi', 'BBLR'],
    resisutasi: 'Ya',
    imd: '< 1 Jam',
    pencegahan: ['Vit. K'],
    keadaanPulang: 'Hidup',
  },
  pemeriksaanNeonatus: [
    {
      tglDatang: new Date(),
      pemeriksaan: {
        kn: 'KN 1',
        nakes: 'Bidan',
        asiEkslusif: false,
        bb: 180,
        tb: 12,
        umur: 32,
      },
      pencegahan: [],
      integrasiProgram: [],
      diagnosis: [],
      mbtm: '',
      dirujukKe: '',
      keadaanPulang: '',
      keadaan: '',
    },
  ],
  pemeriksaanNeonatusLanjutan: [
    {
      tglDatang: new Date(),
      pemeriksaan: {
        asiEkslusif: false,
        mpasi: false,
        sdidtk: false,
        umurbi: 0,
        umurhr: 0,
        umurth: 0,
      },
      gizi: {
        bb: 0,
        status: '',
        tb: 0,
      },
      pencegahan: {
        bcg: false,
        dpthbib: '',
        polio: '',
        campak: false,
        ipv: false,
        vitA: false,
      },
      integrasiProgram: [],
      ket: '',
    },
  ],
  pemeriksaanBalita: [
    {
      tglDatang: new Date(),
      umur: {
        tahun: 0,
        bulan: 0,
        hari: 0,
      },
      pemeriksaan: {
        asiEkslusif: false,
        mpasi: false,
        sdidtk: false,
      },
      gizi: {
        bb: 0,
        tb: 0,
        status: '',
        vitA: false,
      },
      integrasiProgram: [],
      imunisasi: [],
      ket: '',
    },
  ],
};
