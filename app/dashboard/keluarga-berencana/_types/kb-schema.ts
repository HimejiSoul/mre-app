import { z } from 'zod';

export const KBSchema = z.object({
  generalInformation: z.object({
    noFaskes: z.string().min(2, {
      message: 'Harap Diisi',
    }),
    noSeriKartu: z.string().min(2, {
      message: 'Harap Diisi',
    }),
    tglDatang: z.any({
      required_error: 'Harap Diisi',
    }),
    namaPeserta: z.string().min(2, {
      message: 'Harap Diisi',
    }),
    tglLahir: z.any({
      required_error: 'Harap Diisi',
    }),
    usia: z.string().min(2, {
      message: 'Harap Diisi',
    }),
    namaPasangan: z.string().min(2, {
      message: 'Harap Diisi',
    }),
    jenisPasangan: z.string().min(2, {
      message: 'Harap Diisi',
    }),
    pendidikanAkhir: z.string().min(2, {
      message: 'Harap Diisi',
    }),
    alamat: z.string().min(2, {
      message: 'Harap Diisi',
    }),
    pekerjaanPasangan: z.string().min(2, {
      message: 'Harap Diisi',
    }),
    statusJkn: z.string().min(2, {
      message: 'Harap Diisi',
    }),
  }),
  otherInformation: z.object({
    jmlAnakHidup: z.object({
      jmlAnakLaki: z.string({
        required_error: 'Harap Diisi',
      }),
      jmlAnakPr: z.string({
        required_error: 'Harap Diisi',
      }),
    }),
    umurAnakKecil: z.object({
      umurKecilLaki: z.string({
        required_error: 'Harap Diisi',
      }),
      umurKecilPr: z.string({
        required_error: 'Harap Diisi',
      }),
    }),
    caraKBTerakhir: z.string().min(2, {
      message: 'Harap Diisi',
    }),
    statusPesertaKB: z.string().min(2, {
      message: 'Harap Diisi',
    }),
  }),
  skrining: z.object({
    anamsesa: z.object({
      haidTerakhir: z.any({
        required_error: 'Harap Diisi',
      }),
      hamil: z.enum(['true', 'false'], {
        required_error: 'Harap Diisi',
      }),
      jumlahGpa: z.object({
        gravida: z.string({
          required_error: 'Harap Diisi',
        }),
        partus: z.string({
          required_error: 'Harap Diisi',
        }),
        abortus: z.string({
          required_error: 'Harap Diisi',
        }),
      }),
      riwayatPenyakitSebelumnya: z.object({
        sakitKuning: z.string().min(2, {
          message: 'Harap Diisi',
        }),
        perdarahanVaginam: z.string().min(2, {
          message: 'Harap Diisi',
        }),
        keputihanLama: z.string().min(2, {
          message: 'Harap Diisi',
        }),
        tumor: z.string().min(2, {
          message: 'Harap Diisi',
        }),
      }),
    }),
    pemeriksaan: z.object({
      keadaanUmum: z.enum(['Baik', 'Sedang', 'Kurang'], {
        required_error: 'Harap Diisi',
      }),
      beratBadan: z.string({
        required_error: 'Harap Diisi',
      }),
      tekananDarah: z.string({
        required_error: 'Harap Diisi',
      }),
      posisiRahim: z.enum(['Retrofleksi', 'Anterfleksi'], {
        required_error: 'Harap Diisi',
      }),
      tandaRadang: z.enum(['true', 'false'], {
        required_error: 'Harap Diisi',
      }),
      tumor: z.enum(['true', 'false'], {
        required_error: 'Harap Diisi',
      }),
      tambahan: z.object({
        tandaDiabet: z.enum(['true', 'false'], {
          required_error: 'Harap Diisi',
        }),
        kelainanPembekuanDarah: z.enum(['true', 'false'], {
          required_error: 'Harap Diisi',
        }),
        radangOrchild: z.enum(['true', 'false'], {
          required_error: 'Harap Diisi',
        }),
        tumor: z.enum(['true', 'false'], {
          required_error: 'Harap Diisi',
        }),
      }),
      alatKontrasepsi: z
        .array(z.string())
        .refine((value) => value.some((alatKontrasepsi) => alatKontrasepsi), {
          message: 'Silahkan pilih salah satu.',
        }),
    }),
  }),
  hasil: z.object({
    metodeKontrasepsi: z.string().min(2, {
      message: 'Harap Diisi',
    }),
    tglDilayani: z.any({
      required_error: 'Harap Diisi',
    }),
    tglDipesanKembali: z.any({
      required_error: 'Harap Diisi',
    }),
    tglDicabut: z.any({
      required_error: 'Harap Diisi',
    }),
  }),
  penapisanKB: z.object({
    TeV: z.string({
      required_error: 'Required',
    }),
    kardiovaskuler: z.string({
      required_error: 'Required',
    }),
    hipertensi: z.string({
      required_error: 'Required',
    }),
    obesitas: z.string({
      required_error: 'Required',
    }),
    diabetes: z.string({
      required_error: 'Required',
    }),
    merokok: z.string({
      required_error: 'Required',
    }),
    obatLain: z.string({
      required_error: 'Required',
    }),
    hiv: z.string({
      required_error: 'Required',
    }),
    ims: z.string({
      required_error: 'Required',
    }),
    radangPanggul: z.string({
      required_error: 'Required',
    }),
    sepsis: z.string({
      required_error: 'Required',
    }),
    postpartum: z.string({
      required_error: 'Required',
    }),
    nullipara: z.string({
      required_error: 'Required',
    }),
    remaja: z.string({
      required_error: 'Required',
    }),
    perdarahanVaginam: z.string({
      required_error: 'Required',
    }),
    miomaUteri: z.string({
      required_error: 'Required',
    }),
    kistaOvarium: z.string({
      required_error: 'Required',
    }),
    neoplasiaServikal: z.string({
      required_error: 'Required',
    }),
    kankerServiks: z.string({
      required_error: 'Required',
    }),
    kankerPayudara: z.string({
      required_error: 'Required',
    }),
  }),
});

export const defaultValues: Partial<z.infer<typeof KBSchema>> = {
  generalInformation: {
    noFaskes: '12345',
    noSeriKartu: '12345',
    namaPeserta: 'Siapa',
    usia: '20',
    namaPasangan: 'Beiau itu',
    jenisPasangan: 'suami',
    pendidikanAkhir: 'Tidak Tamat SD',
    alamat: 'Jl Raya',
    pekerjaanPasangan: 'Pegawai Pemerintahan',
    statusJkn: 'guru',
    tglDatang: new Date(),
    tglLahir: new Date('1999-1-1'),
  },
  otherInformation: {
    jmlAnakHidup: {
      jmlAnakLaki: '20',
      jmlAnakPr: '30',
    },
    umurAnakKecil: {
      umurKecilLaki: '50',
      umurKecilPr: '80',
    },
    caraKBTerakhir: 'IUD',
    statusPesertaKB: 'Baru Pertama Kali',
  },
  skrining: {
    anamsesa: {
      jumlahGpa: {
        abortus: '10',
        gravida: '20',
        partus: '30',
      },
      riwayatPenyakitSebelumnya: {
        keputihanLama: 'true',
        perdarahanVaginam: 'false',
        sakitKuning: 'false',
        tumor: 'true',
      },
      haidTerakhir: new Date(),
      hamil: 'false',
    },
    pemeriksaan: {
      beratBadan: '100',
      tekananDarah: '80',
      alatKontrasepsi: ['IUD', 'MOW'],
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
    metodeKontrasepsi: 'IUD',
    tglDicabut: new Date(),
    tglDilayani: new Date(),
    tglDipesanKembali: new Date(),
  },
  penapisanKB: {
    diabetes: 'true',
    hipertensi: 'false',
    hiv: 'true',
    ims: 'false',
    kankerPayudara: 'true',
    kankerServiks: 'false',
    kardiovaskuler: 'false',
    kistaOvarium: 'false',
    merokok: 'false',
    miomaUteri: 'false',
    neoplasiaServikal: 'false',
    nullipara: 'false',
    obatLain: 'true',
    obesitas: 'true',
    perdarahanVaginam: 'true',
    postpartum: 'true',
    radangPanggul: 'true',
    remaja: 'true',
    sepsis: 'true',
    TeV: 'true',
  },
};
