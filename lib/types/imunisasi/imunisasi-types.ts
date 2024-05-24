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
    nomor: z.string().max(50).optional(),
    puskesmas: z.string().min(2, {
      message: 'Nama Puskesmas harus lebih dari 2 karakter.',
    }),
    bidan: z.string().min(2, {
      message: 'Nama Bidan harus lebih dari 2 karakter.',
    }),
    nomorBayi: z.string().max(50).optional(),
    namaBayi: z.string().min(2, {
      message: 'Nama Bayi harus lebih dari 2 karakter.',
    }),
    namaIbu: z.string().min(2, {
      message: 'Nama Ibu harus lebih dari 2 karakter.',
    }),
    usiaIbu: z.coerce.number().optional(),
    namaAyah: z.string().min(2, {
      message: 'Nama Ibu harus lebih dari 2 karakter.',
    }),
    usiaAyah: z.coerce.number().optional(),
    alamat: z.string().optional(),
    desa: z.string().optional(),
    kecamatan: z.string().optional(),
    kabupaten: z.string().optional(),
    provinsi: z.string().optional(),
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
    beratBayi: z.coerce.number().optional(),
    panjangBayi: z.coerce.number().optional(),
    lingkarKepala: z.coerce.number().optional(),
    anakKe: z.coerce.number().optional(),
    keadaanLahir: z.enum(['', 'Hidup', 'Mati']),
    bukuKIA: z.enum(['', 'Memiliki', 'Tidak Memiliki']),
    komplikasi: z
      .array(z.string())
      .refine((value) => value.some((alatKontrasepsi) => alatKontrasepsi), {
        message: 'Silahkan pilih salah satu.',
      }),
    resisutasi: z.enum(['', 'Ya', 'Tidak']),
    imd: z.enum(['', '< 1 Jam', '> 1 Jam']),
    pencegahan: z
      .array(z.string())
      .refine((value) => value.some((alatKontrasepsi) => alatKontrasepsi), {
        message: 'Silahkan pilih salah satu.',
      }),
    keadaanPulang: z.enum(['', 'Hidup', 'Mati', 'Dirujuk']),
  }),
  pemeriksaanNeonatus: z.array(
    z.object({
      tglDatang: z
        .string()
        .or(z.date())
        .transform((arg) => new Date(arg)),
      pemeriksaan: z.object({
        umur: z.coerce.number().optional(),
        kn: z.enum(ENUM_VALUES.pemeriksaanNeonatus.kn),
        nakes: z.enum(ENUM_VALUES.pemeriksaanNeonatus.nakes),
        asiEkslusif: z.coerce
          .boolean()
          .or(z.enum(ENUM_VALUES.boolean))
          .optional(),
        bb: z.coerce.number().optional(),
        tb: z.coerce.number().optional(),
      }),
      pencegahan: z.array(z.string()),
      integrasiProgram: z.array(z.string()),
      diagnosis: z.array(z.string()),
      mbtm: z.enum(ENUM_VALUES.pemeriksaanNeonatus.mbtm),
      keadaanPulang: z.enum(ENUM_VALUES.pemeriksaanNeonatus.keadaanPulang),
      dirujukKe: z.enum(ENUM_VALUES.pemeriksaanNeonatus.dirujukKe),
      keadaan: z.enum(ENUM_VALUES.pemeriksaanNeonatus.keadaan),
    }),
  ),
  pemeriksaanNeonatusLanjutan: z.array(
    z.object({
      tglDatang: z
        .string()
        .or(z.date())
        .transform((arg) => new Date(arg)),
      pemeriksaan: z.object({
        umurth: z.coerce.number().optional(),
        umurbi: z.coerce.number().optional(),
        umurhr: z.coerce.number().optional(),
        asiEkslusif: z.coerce.boolean().optional(),
        mpasi: z.coerce.boolean().optional(),
        sdidtk: z.coerce.boolean().optional(),
      }),
      gizi: z.object({
        bb: z.coerce.number().optional(),
        tb: z.coerce.number().optional(),
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
  ),
  pemeriksaanBalita: z.array(
    z.object({
      tglDatang: z
        .string()
        .or(z.date())
        .transform((arg) => new Date(arg)),
      umur: z.object({
        tahun: z.coerce.number().optional(),
        bulan: z.coerce.number().optional(),
        hari: z.coerce.number().optional(),
      }),
      pemeriksaan: z.object({
        asiEkslusif: z.coerce.boolean().optional(),
        mpasi: z.coerce.boolean().optional(),
        sdidtk: z.coerce.boolean().optional(),
      }),
      gizi: z.object({
        bb: z.coerce.number().optional(),
        tb: z.coerce.number().optional(),
        status: z.string().optional(),
        vitA: z.coerce.boolean().optional(),
      }),
      integrasiProgram: z.array(z.string()),
      imunisasi: z.array(z.string()),
      ket: z.string().optional(),
    }),
  ),
});

// This can come from your database or API.
export const defaultValues: Partial<z.infer<typeof imunisasiFormSchema>> = {
  generalInformation: {
    nomor: '',
    puskesmas: '',
    bidan: '',
    nomorBayi: '',
    namaBayi: '',
    namaIbu: '',
    usiaIbu: 0,
    namaAyah: '',
    usiaAyah: 0,
    alamat: '',
    desa: '',
    kecamatan: '',
    kabupaten: '',
    provinsi: '',
  },
  detailBayi: {
    tglLahir: new Date(),
    tempatLahir: '',
    jenisPersalinan: '',
    jenisKelamin: '',
    golDarah: '',
    beratBayi: 0,
    lingkarKepala: 0,
    anakKe: 0,
    panjangBayi: 0,
    keadaanLahir: '',
    bukuKIA: '',
    komplikasi: [''],
    resisutasi: '',
    imd: '',
    pencegahan: [''],
    keadaanPulang: '',
  },
  pemeriksaanNeonatus: [
    {
      tglDatang: new Date(),
      pemeriksaan: {
        kn: '',
        nakes: '',
        asiEkslusif: false,
        bb: 180,
        tb: 12,
        umur: 32,
      },
      pencegahan: [''],
      integrasiProgram: [''],
      diagnosis: [''],
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
      integrasiProgram: [''],
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
