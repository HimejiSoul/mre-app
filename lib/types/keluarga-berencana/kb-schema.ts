import { z } from 'zod';

export const ENUM_VALUES = {
  boolean: ['', 'true', 'false'],
  jenisPasangan: ['', 'Suami', 'Istri'],
  pendidikan: ['', 'Tamat SLTA', 'Tamat SD', 'Tamat PT', 'Tamat SLTP'],
  pekerjaan: [
    '',
    'Pegawai Pemerintahan',
    'Pegawai Swasta',
    'Petani',
    'Nelayan',
    'Lain-Lain',
  ],
  statusjkn: ['', 'Guru', 'Karyawan Negri', 'Karyawan Swasta', 'Buruh'],
  caraKb: ['', 'IUD', 'MOW', 'MOP', 'Random', 'Implant', 'Suntikan', 'Pil'],
  statusPesertaKB: [
    '',
    'Baru Pertama Kali',
    'Pernah pakai alat KB berhenti sesudah bersalin/keguguran',
  ],
  alatKontrasepsiArray: [
    '',
    'IUD',
    'MOW',
    'MOP',
    'Random',
    'Implant',
    'Suntikan',
    'Pil',
    'Inplanon',
    'Kondom',
    'Obat Vaginal',
  ],
  alatKontrasepsi: [
    {
      id: 'IUD',
      label: 'IUD',
    },
    {
      id: 'MOW',
      label: 'MOW',
    },
    {
      id: 'MOP',
      label: 'MOP',
    },
    {
      id: 'Suntikan',
      label: 'Suntikan',
    },
    {
      id: 'Pil',
      label: 'Pil',
    },
    {
      id: 'Inplanon',
      label: 'Inplanon',
    },
    {
      id: 'Kondom',
      label: 'Kondom',
    },
    {
      id: 'ObatVaginal',
      label: 'Obat Vaginal',
    },
    {
      id: 'Implant',
      label: 'Implant',
    },
  ],
  keadaaanUmum: ['', 'Baik', 'Sedang', 'Kurang'],
  posisiRahim: ['', 'Retrofleksi', 'Anterfleksi'],
  PenapisanKB: [
    { id: 1, name: 'Trombo emboli Vena', Fname: 'penapisanKB.TeV' },
    { id: 2, name: 'Kardiovaskuler', Fname: 'penapisanKB.kardiovaskuler' },
    { id: 3, name: 'Hipertensi', Fname: 'penapisanKB.hipertensi' },
    { id: 4, name: 'Obesitas', Fname: 'penapisanKB.obesitas' },
    { id: 5, name: 'Diabetes', Fname: 'penapisanKB.diabetes' },
    { id: 6, name: 'Merokok', Fname: 'penapisanKB.merokok' },
    {
      id: 7,
      name: 'Interaksi Obat - obatan lain',
      Fname: 'penapisanKB.obatLain',
    },
    { id: 8, name: 'HIV', Fname: 'penapisanKB.hiv' },
    { id: 9, name: 'Infeksi Menular Seksual (IMS)', Fname: 'penapisanKB.ims' },
    { id: 10, name: 'Radang Panggul', Fname: 'penapisanKB.radangPanggul' },
    { id: 11, name: 'Sepsis', Fname: 'penapisanKB.sepsis' },
    {
      id: 12,
      name: 'Postpartum dan Menyusui',
      Fname: 'penapisanKB.postpartum',
    },
    { id: 13, name: 'Usia Remaja', Fname: 'penapisanKB.remaja' },
    {
      id: 14,
      name: 'Perdarahan per vaginam',
      Fname: 'penapisanKB.perdarahanVaginam',
    },
    { id: 15, name: 'Mioma Uteri', Fname: 'penapisanKB.miomaUteri' },
    { id: 16, name: 'Nullipara', Fname: 'penapisanKB.nullipara' },
    { id: 17, name: 'Kista Ovarium', Fname: 'penapisanKB.kistaOvarium' },
    {
      id: 18,
      name: 'Neoplasia Servikal',
      Fname: 'penapisanKB.neoplasiaServikal',
    },
    { id: 19, name: 'Kanker Serviks', Fname: 'penapisanKB.kankerServiks' },
    { id: 20, name: 'Kanker Payudara', Fname: 'penapisanKB.kankerPayudara' },
  ],
} as const;

export const KBSchema = z.object({
  generalInformation: z.object({
    noFaskes: z.string(),
    noSeriKartu: z.string(),
    tglDatang: z
      .string()
      .or(z.date())
      .transform((arg) => new Date(arg)),
    namaPeserta: z.string(),
    tglLahir: z
      .string()
      .or(z.date())
      .transform((arg) => new Date(arg)),
    usia: z.coerce.number({ invalid_type_error: 'Required' }),
    namaPasangan: z.string().min(2, {
      message: 'Harap Diisi',
    }),
    jenisPasangan: z.enum(ENUM_VALUES.jenisPasangan),
    pendidikanAkhir: z.enum(ENUM_VALUES.pendidikan),
    alamat: z.string(),
    pekerjaanPasangan: z.enum(ENUM_VALUES.pekerjaan),
    statusJkn: z.enum(ENUM_VALUES.statusjkn),
    noHP: z.coerce.number({ invalid_type_error: 'Required' }),
  }),
  otherInformation: z.object({
    jmlAnakHidup: z.object({
      jmlAnakLaki: z.coerce.number({ invalid_type_error: 'Required' }),
      jmlAnakPr: z.coerce.number({ invalid_type_error: 'Required' }),
    }),
    umurAnakKecil: z.object({
      umurKecilLaki: z.coerce.number({ invalid_type_error: 'Required' }),
      umurKecilPr: z.coerce.number({ invalid_type_error: 'Required' }),
    }),
    caraKBTerakhir: z.enum(ENUM_VALUES.caraKb),
    statusPesertaKB: z.enum(ENUM_VALUES.statusPesertaKB),
  }),
  skrining: z.object({
    anamsesa: z.object({
      haidTerakhir: z
        .string()
        .or(z.date())
        .transform((arg) => new Date(arg)),
      hamil: z.enum(ENUM_VALUES.boolean),
      jumlahGpa: z.object({
        gravida: z.coerce.number({ invalid_type_error: 'Required' }),
        partus: z.coerce.number({ invalid_type_error: 'Required' }),
        abortus: z.coerce.number({ invalid_type_error: 'Required' }),
      }),
      riwayatPenyakitSebelumnya: z.object({
        sakitKuning: z.enum(ENUM_VALUES.boolean),
        perdarahanVaginam: z.enum(ENUM_VALUES.boolean),
        keputihanLama: z.enum(ENUM_VALUES.boolean),
        tumor: z.enum(ENUM_VALUES.boolean),
      }),
    }),
    pemeriksaan: z.object({
      keadaanUmum: z.enum(ENUM_VALUES.keadaaanUmum),
      beratBadan: z.coerce.number({ invalid_type_error: 'Required' }),
      tekananDarah: z.string(),
      posisiRahim: z.enum(ENUM_VALUES.posisiRahim).optional(),
      tandaRadang: z.enum(ENUM_VALUES.boolean),
      tumor: z.enum(ENUM_VALUES.boolean),
      tambahan: z.object({
        tandaDiabet: z.enum(ENUM_VALUES.boolean),
        kelainanPembekuanDarah: z.enum(ENUM_VALUES.boolean),
        radangOrchild: z.enum(ENUM_VALUES.boolean),
        tumor: z.enum(ENUM_VALUES.boolean),
      }),
      alatKontrasepsi: z.array(z.string()).or(z.null()).optional(),
    }),
  }),
  hasil: z.object({
    metodeKontrasepsi: z.enum(ENUM_VALUES.alatKontrasepsiArray),
    tglDilayani: z
      .string()
      .or(z.date())
      .transform((arg) => new Date(arg)),
    tglDipesanKembali: z
      .string()
      .or(z.date())
      .transform((arg) => new Date(arg)),
    tglDicabut: z
      .string()
      .or(z.date())
      .transform((arg) => new Date(arg))
      .optional(),
  }),
  penapisanKB: z.object({
    TeV: z.enum(ENUM_VALUES.boolean),
    kardiovaskuler: z.enum(ENUM_VALUES.boolean),
    hipertensi: z.enum(ENUM_VALUES.boolean),
    obesitas: z.enum(ENUM_VALUES.boolean),
    diabetes: z.enum(ENUM_VALUES.boolean),
    merokok: z.enum(ENUM_VALUES.boolean),
    obatLain: z.enum(ENUM_VALUES.boolean),
    hiv: z.enum(ENUM_VALUES.boolean),
    ims: z.enum(ENUM_VALUES.boolean),
    radangPanggul: z.enum(ENUM_VALUES.boolean),
    sepsis: z.enum(ENUM_VALUES.boolean),
    postpartum: z.enum(ENUM_VALUES.boolean),
    nullipara: z.enum(ENUM_VALUES.boolean),
    remaja: z.enum(ENUM_VALUES.boolean),
    perdarahanVaginam: z.enum(ENUM_VALUES.boolean),
    miomaUteri: z.enum(ENUM_VALUES.boolean),
    kistaOvarium: z.enum(ENUM_VALUES.boolean),
    neoplasiaServikal: z.enum(ENUM_VALUES.boolean),
    kankerServiks: z.enum(ENUM_VALUES.boolean),
    kankerPayudara: z.enum(ENUM_VALUES.boolean),
  }),
});

export const defaultValues: Partial<z.infer<typeof KBSchema>> = {
  generalInformation: {
    noFaskes: '12/34/56',
    noSeriKartu: '12345678',
    namaPeserta: 'John Doe',
    usia: 23,
    namaPasangan: 'Maxwell',
    jenisPasangan: 'Suami',
    pendidikanAkhir: 'Tamat PT',
    alamat: 'Jl. Bumi Hijau',
    pekerjaanPasangan: 'Nelayan',
    statusJkn: 'Guru',
    tglDatang: new Date(),
    tglLahir: new Date('1999-1-1'),
    noHP: 213412434,
  },
  otherInformation: {
    jmlAnakHidup: {
      jmlAnakLaki: 0,
      jmlAnakPr: 0,
    },
    umurAnakKecil: {
      umurKecilLaki: 0,
      umurKecilPr: 0,
    },
    caraKBTerakhir: 'IUD',
    statusPesertaKB: 'Baru Pertama Kali',
  },
  skrining: {
    anamsesa: {
      jumlahGpa: {
        abortus: 0,
        gravida: 0,
        partus: 0,
      },
      riwayatPenyakitSebelumnya: {
        keputihanLama: 'false',
        perdarahanVaginam: 'false',
        sakitKuning: 'false',
        tumor: 'true',
      },
      haidTerakhir: new Date(),
      hamil: 'true',
    },
    pemeriksaan: {
      beratBadan: 0,
      tekananDarah: '',
      alatKontrasepsi: [],
      keadaanUmum: 'Baik',
      posisiRahim: 'Anterfleksi',
      tambahan: {
        kelainanPembekuanDarah: 'false',
        radangOrchild: 'false',
        tandaDiabet: 'false',
        tumor: 'false',
      },
      tandaRadang: 'false',
      tumor: 'false',
    },
  },
  hasil: {
    metodeKontrasepsi: 'Implant',
    tglDicabut: new Date(),
    tglDilayani: new Date(),
    tglDipesanKembali: new Date(),
  },
  penapisanKB: {
    diabetes: 'true',
    hipertensi: 'false',
    hiv: 'false',
    ims: 'true',
    kankerPayudara: 'false',
    kankerServiks: 'false',
    kardiovaskuler: 'true',
    kistaOvarium: 'true',
    merokok: 'true',
    miomaUteri: 'true',
    neoplasiaServikal: 'true',
    nullipara: 'true',
    obatLain: 'true',
    obesitas: 'true',
    perdarahanVaginam: 'false',
    postpartum: 'false',
    radangPanggul: 'true',
    remaja: 'true',
    sepsis: 'false',
    TeV: 'true',
  },
};
