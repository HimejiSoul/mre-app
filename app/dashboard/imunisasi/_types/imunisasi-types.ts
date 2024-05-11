import { z } from 'zod';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

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
    usiaIbu: z.string().optional(),
    namaSuami: z.string().min(2, {
      message: 'Nama Ibu harus lebih dari 2 karakter.',
    }),
    usiaSuami: z.string().optional(),
    alamat: z.string().optional(),
    rtrw: z.string().optional(),
    desa: z.string().optional(),
    kecamatan: z.string().optional(),
    kabupaten: z.string().optional(),
    provinsi: z.string().optional(),
  }),
  detailBayi: z.object({
    tglLahir: z.any().optional(),
    jamLahir: z.any().optional(),
    tempatLahir: z.string().optional(),
    jenisPersalinan: z.enum(['', 'Normal', 'SC']),
    jenisKelamin: z.enum(['', 'Laki-Laki', 'Perempuan']),
    golDarah: z.enum(['', 'A', 'B', 'AB', 'O']),
    beratBayi: z.string().optional(),
    panjangBayi: z.string().optional(),
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
    noTelp: z.string().regex(phoneRegex, 'Invalid Number!').optional(),
    riwayatObstetrik: z.object({
      gravida: z.string().optional(),
      partus: z.string().optional(),
      abortus: z.string().optional(),
      hidup: z.string().optional(),
    }),
    pemeriksaanBidan: z.object({
      tanggalPeriksa: z.date({
        required_error: 'Tanggal periksa is required.',
      }),
      tanggalHPHT: z.date({
        required_error: 'Tanggal HPHT is required.',
      }),
      taksiranPersalinan: z.date({
        required_error: 'Taksiran persalinan is required.',
      }),
      persalinanSebelumnya: z.coerce.number({
        required_error: 'Persalinan sebelumnya is required.',
      }),
      bbSebelumHamil: z.coerce.number().optional(),
      tb: z.coerce.number().optional(),
      bukuKIA: z.string().optional(),
      riwayatKomplikasiKebidanan: z.string().optional(),
      penyakitKronisDanAlergi: z.string().optional(),
    }),
  }),
  rencanaPersalinan: z.array(
    z.object({
      tanggal: z.date().optional(),
      penolong: z.string().optional(),
      tempat: z.string().optional(),
      pendamping: z.string().optional(),
      transportasi: z.string().optional(),
      pendonor: z.string().optional(),
    }),
  ),
  riwayatKehamilan: z.object({
    g: z.string().optional(),
    p: z.string().optional(),
    a: z.string().optional(),
    data: z.array(
      z.object({
        tahun: z.string().optional(),
        jenisKelamin: z.string().optional(),
        hasilPersalinan: z.string().optional(),
        jenisPersalinan: z.string().optional(),
        keadaanSaatLahir: z.string().optional(),
        bbl: z.string().optional(),
        lamaMenyusui: z.string().optional(),
        penolongPersalinan: z.string().optional(),
        penyulit: z.string().optional(),
        keterangan: z.string().optional(),
      }),
    ),
  }),
  persalinan: z.object({
    kalaIAktif: z.object({
      tanggal: z.string().optional(),
      jam: z.string().optional(),
    }),
    kalaII: z.object({
      tanggal: z.string().optional(),
      jam: z.string().optional(),
    }),
    bayiLahir: z.object({
      tanggal: z.string().optional(),
      jam: z.string().optional(),
    }),
    plasentaLahir: z.object({
      tanggal: z.string().optional(),
      jam: z.string().optional(),
    }),
    usiaKehamilan: z.string().optional(),
    usiaHPHT: z.string().optional(),
    keadaanIbu: z.string().optional(),
    keadaanBayi: z.string().optional(),
    beratBayi: z.string().optional(),
    perdarahanKalaIV: z.string().optional(),
    presentasi: z.string().optional(),
    tempat: z.string().optional(),
    penolong: z.string().optional(),
    caraPersalinan: z.string().optional(),
    manajemenAktifKalaIII: z.string().optional(),
    pelayanan: z.string().optional(),
    integrasiProgram: z.object({
      jenisObat: z.string().optional(),
      namaObat: z.string().optional(),
    }),
    komplikasi: z.string().optional(),
    dirujukKe: z.string().optional(),
    keadaanTiba: z.string().optional(),
    keadaanPulang: z.string().optional(),
    alamatBersalin: z.string().optional(),
  }),
  pemeriksaanPNC: z.array(
    z.object({
      tanggal: z.string().optional(),
      hariKeKF: z.string().optional(),
      tandaVital: z.object({
        td: z.string().optional(),
        suhu: z.string().optional(),
      }),
      pelayanan: z.object({
        catatDiBukuKIA: z.string().optional(),
        fe: z.string().optional(),
        vitA: z.boolean().default(false).optional(),
      }),
      integrasiProgram: z.object({
        cd4: z.string().optional(),
        antiMalaria: z.string().optional(),
        antiTB: z.string().optional(),
        fotoThorax: z.string().optional(),
      }),
      komplikasi: z.string().optional(),
      ditujukKe: z.string().optional(),
      keadaan: z.object({
        tiba: z.string().optional(),
        pulang: z.string().optional(),
      }),
    }),
  ),
  kunjunganNifas: z.object({
    mal: z.object({
      rencana: z.string().optional(),
      pelaksanaan: z.string().optional(),
    }),
    kondom: z.object({
      rencana: z.string().optional(),
      pelaksanaan: z.string().optional(),
    }),
    pil: z.object({
      rencana: z.string().optional(),
      pelaksanaan: z.string().optional(),
    }),
    suntik: z.object({
      rencana: z.string().optional(),
      pelaksanaan: z.string().optional(),
    }),
    akdr: z.object({
      rencana: z.string().optional(),
      pelaksanaan: z.string().optional(),
    }),
    inplant: z.object({
      rencana: z.string().optional(),
      pelaksanaan: z.string().optional(),
    }),
    mow: z.object({
      rencana: z.string().optional(),
      pelaksanaan: z.string().optional(),
    }),
    mop: z.object({
      rencana: z.string().optional(),
      pelaksanaan: z.string().optional(),
    }),
  }),
  mendeteksiFaktorResikoDanResikoTinggi: z.object({
    faktorResiko: z.object({
      umur: z.enum(['true', 'false']),
      paritas: z.enum(['true', 'false']),
      spasing: z.enum(['true', 'false']),
      bb: z.enum(['true', 'false']),
      tb: z.enum(['true', 'false']),
      sakitKronis: z.enum(['true', 'false']),
      abortus: z.enum(['true', 'false']),
      sc: z.enum(['true', 'false']),
      hpp: z.enum(['true', 'false']),
      bayiBesar: z.enum(['true', 'false']),
      hb: z.enum(['true', 'false']),
    }),
    resikoTinggi: z.object({
      kpd: z.enum(['true', 'false']),
      perdarahan: z.enum(['true', 'false']),
      infeksi: z.enum(['true', 'false']),
      preeklamsi: z.enum(['true', 'false']),
      hb: z.enum(['true', 'false']),
      kelainanLetak: z.enum(['true', 'false']),
      anakBesarHidramnion: z.enum(['true', 'false']),
      ancamanPrematur: z.enum(['true', 'false']),
      infeksiDBD: z.enum(['true', 'false']),
      distocia: z.enum(['true', 'false']),
      terdapat2FaktroResiko: z.enum(['true', 'false']),
    }),
  }),
  resikoTinggi: z.object({
    ditemukanTanggal: z.string().optional(),
    jenisResiko: z.string().optional(),
  }),
});

// This can come from your database or API.
export const defaultValues: Partial<z.infer<typeof imunisasiFormSchema>> = {
  generalInformation: {
    nomor: '1234',
    puskesmas: 'ABCD',
    bidan: 'Jacky',
    nomorBayi: '0987',
    namaBayi: 'James',
    namaIbu: 'Rebecca',
    usiaIbu: '20',
    namaSuami: 'Bade',
    usiaSuami: '25',
    alamat: '',
    rtrw: '',
    desa: '',
    kecamatan: '',
    kabupaten: '',
    provinsi: '',
  },
  detailBayi: {
    tglLahir: '',
    jamLahir: 'true',
    tempatLahir: '',
    jenisPersalinan: '',
    jenisKelamin: '',
    golDarah: '',
    beratBayi: '',
    panjangBayi: '',
    keadaanLahir: '',
    bukuKIA: '',
    komplikasi: [],
    resisutasi: '',
    imd: '',
    pencegahan: [],
    keadaanPulang: '',
    noTelp: '08123456789',
    riwayatObstetrik: {
      gravida: '',
      partus: '',
      abortus: '',
      hidup: '',
    },
    pemeriksaanBidan: {
      tanggalPeriksa: new Date(),
      tanggalHPHT: new Date(),
      taksiranPersalinan: new Date(),
      persalinanSebelumnya: 1999,
      bbSebelumHamil: 0,
      tb: 0,
      // bukuKIA: '', (Tidak perlu default value based on shadcn)
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
    g: '',
    p: '',
    a: '',
    data: [
      {
        tahun: '',
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
      tanggal: '',
      jam: '',
    },
    kalaII: {
      tanggal: '',
      jam: '',
    },
    bayiLahir: {
      tanggal: '',
      jam: '',
    },
    plasentaLahir: {
      tanggal: '',
      jam: '',
    },
    usiaKehamilan: '',
    usiaHPHT: '',
    keadaanIbu: '',
    keadaanBayi: '',
    beratBayi: '',
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
      tanggal: '',
      hariKeKF: '',
      tandaVital: {
        td: '',
        suhu: '',
      },
      pelayanan: {
        catatDiBukuKIA: '',
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
      umur: 'false',
      paritas: 'false',
      spasing: 'false',
      bb: 'false',
      tb: 'false',
      sakitKronis: 'false',
      abortus: 'false',
      sc: 'false',
      hpp: 'false',
      bayiBesar: 'false',
      hb: 'false',
    },
    resikoTinggi: {
      kpd: 'false',
      perdarahan: 'false',
      infeksi: 'false',
      preeklamsi: 'false',
      hb: 'false',
      kelainanLetak: 'false',
      anakBesarHidramnion: 'false',
      ancamanPrematur: 'false',
      infeksiDBD: 'false',
      distocia: 'false',
      terdapat2FaktroResiko: 'false',
    },
  },
  resikoTinggi: {
    ditemukanTanggal: '',
    jenisResiko: '',
  },
};
