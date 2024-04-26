import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  FormWrapper,
  Row,
  TitleSection,
} from '@/app/dashboard/periksa-kehamilan/create/_component/form-card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const dataTable = [
  {
    id: 1,
    FRname: 'Umur < 20 tahun / > 35 tahun',
    FRformName: 'mendeteksiFaktorResikoDanResikoTinggi.faktorResiko.umur',
    RTname: 'KPD',
    RTformName: 'mendeteksiFaktorResikoDanResikoTinggi.resikoTinggi.kpd',
  },
  {
    id: 2,
    FRname: 'Paritas > 4 x',
    FRformName: 'mendeteksiFaktorResikoDanResikoTinggi.faktorResiko.paritas',
    RTname: 'Perdarahan',
    RTformName: 'mendeteksiFaktorResikoDanResikoTinggi.resikoTinggi.perdarahan',
  },
  {
    id: 3,
    FRname: 'Spasing < 2 tahun',
    FRformName: 'mendeteksiFaktorResikoDanResikoTinggi.faktorResiko.spasing',
    RTname: 'Infeksi',
    RTformName: 'mendeteksiFaktorResikoDanResikoTinggi.resikoTinggi.infeksi',
  },
  {
    id: 4,
    FRname: 'BB < 38 kg / LILA < 23,5 cm / penambahan BB < 9 kg selama hamil',
    FRformName: 'mendeteksiFaktorResikoDanResikoTinggi.faktorResiko.bb',
    RTname: 'Preeklamsi',
    RTformName: 'mendeteksiFaktorResikoDanResikoTinggi.resikoTinggi.preeklamsi',
  },
  {
    id: 5,
    FRname: 'TB < 145 cm, Scoliosis, Khiposis',
    FRformName: 'mendeteksiFaktorResikoDanResikoTinggi.faktorResiko.tb',
    RTname: 'HB < 8 gr %',
    RTformName: 'mendeteksiFaktorResikoDanResikoTinggi.resikoTinggi.hb',
  },
  {
    id: 6,
    FRname:
      'Sedang/pernah sakit kronis: TB, kel. Jantung, hati, ginjal, psikosis, SLE, DM, Hipertensi',
    FRformName:
      'mendeteksiFaktorResikoDanResikoTinggi.faktorResiko.sakitKronis',
    RTname: 'Kelainan Letak (Sungsang / Lintang)',
    RTformName:
      'mendeteksiFaktorResikoDanResikoTinggi.resikoTinggi.kelainanLetak',
  },
  {
    id: 7,
    FRname:
      'Pernah abortus berulang, KET, Mola Hidatidosa, APP, KPD, Bayi Cacat Kongenital',
    FRformName: 'mendeteksiFaktorResikoDanResikoTinggi.faktorResiko.abortus',
    RTname: 'Anak Besar Hidramnion, Gemeli',
    RTformName:
      'mendeteksiFaktorResikoDanResikoTinggi.resikoTinggi.anakBesarHidramnion',
  },
  {
    id: 8,
    FRname: 'Riwayat SC, Forcep V Ekstrasi',
    FRformName: 'mendeteksiFaktorResikoDanResikoTinggi.faktorResiko.sc',
    RTname: 'Ancaman Prematur',
    RTformName:
      'mendeteksiFaktorResikoDanResikoTinggi.resikoTinggi.ancamanPrematur',
  },
  {
    id: 9,
    FRname: 'Riwayat HPP, Infeksi Nifas',
    FRformName: 'mendeteksiFaktorResikoDanResikoTinggi.faktorResiko.hpp',
    RTname: 'Infeksi (DBD, Thipoid, Sepsis)',
    RTformName: 'mendeteksiFaktorResikoDanResikoTinggi.resikoTinggi.infeksiDBD',
  },
  {
    id: 10,
    FRname: 'Riwayat bayi besar > 4000 gr',
    FRformName: 'mendeteksiFaktorResikoDanResikoTinggi.faktorResiko.bayiBesar',
    RTname: 'Distocia',
    RTformName: 'mendeteksiFaktorResikoDanResikoTinggi.resikoTinggi.distocia',
  },
  {
    id: 11,
    FRname: 'HB < 11 gr %',
    FRformName: 'mendeteksiFaktorResikoDanResikoTinggi.faktorResiko.hb',
    RTname: 'Terdapat > 2 Faktor Resiko',
    RTformName:
      'mendeteksiFaktorResikoDanResikoTinggi.resikoTinggi.terdapat2FaktroResiko',
  },
];

export default function FaktorResiko({ form }: any) {
  return (
    <section className="_FAKTOR_RESIKO space-y-4">
      <TitleSection
        title="Mendeteksi Faktor Resiko dan Resiko Tinggi"
        subtitle="Masukkan data pasien"
      />
      <FormWrapper>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Faktro Resiko</TableHead>
              <TableHead className="border-r-2 text-center">Action</TableHead>
              <TableHead>Resiko Tinggi</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataTable.map((d, i) => (
              <TableRow key={d.id}>
                <TableCell className="font-medium">{d.FRname}</TableCell>
                <TableCell className="border-r-2">
                  <FormField
                    control={form.control}
                    name={d.FRformName}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex h-10 items-center justify-center space-x-2"
                          >
                            <FormItem className="flex items-center space-x-1 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="true" />
                              </FormControl>
                              <FormLabel className="font-normal">Ya</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-1 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="false" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Tidak
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>{d.RTname}</TableCell>
                <TableCell>
                  <FormField
                    control={form.control}
                    name={d.RTformName}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex h-10 items-center justify-center space-x-2"
                          >
                            <FormItem className="flex items-center space-x-1 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="true" />
                              </FormControl>
                              <FormLabel className="font-normal">Ya</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-1 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="false" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Tidak
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Row>
          <FormField
            control={form.control}
            name="resikoTinggi.ditemukanTanggal"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Ditemukan Tanggal</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    placeholder="Ditemukan tanggal"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="resikoTinggi.jenisResiko"
            render={({ field }) => (
              <FormItem className="col-span-6">
                <FormLabel>Jenis Resiko</FormLabel>
                <FormControl>
                  <Input placeholder="Jenis resiko" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
      </FormWrapper>
    </section>
  );
}
