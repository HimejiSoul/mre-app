import {
  FormWrapper,
  InputField,
  TitleSection,
} from '@/components/form-content';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function KunjunganNifas({ form }: any) {
  return (
    <section className="_KUNJUNGAN_NIFAS space-y-4">
      <TitleSection title="Kunjungan Nifas (KF)" />
      <FormWrapper>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Metode Kontrasepsi</TableHead>
              <TableHead>Rencana</TableHead>
              <TableHead>Pelaksanaan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">MAL</TableCell>
              <TableCell>
                <InputField
                  name="kunjunganNifas.mal.rencana"
                  form={form}
                  placeholder="Rencana"
                />
              </TableCell>
              <TableCell>
                <InputField
                  name="kunjunganNifas.mal.pelaksanaan"
                  form={form}
                  placeholder="Pelaksanaan"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">KONDOM</TableCell>
              <TableCell>
                <InputField
                  name="kunjunganNifas.kondom.rencana"
                  form={form}
                  placeholder="Rencana"
                />
              </TableCell>
              <TableCell>
                <InputField
                  name="kunjunganNifas.kondom.pelaksanaan"
                  form={form}
                  placeholder="Pelaksanaan"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">PIL</TableCell>
              <TableCell>
                <InputField
                  name="kunjunganNifas.pil.rencana"
                  form={form}
                  placeholder="Rencana"
                />
              </TableCell>
              <TableCell>
                <InputField
                  name="kunjunganNifas.pil.pelaksanaan"
                  form={form}
                  placeholder="Pelaksanaan"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">SUNTIK</TableCell>
              <TableCell>
                <InputField
                  name="kunjunganNifas.suntik.rencana"
                  form={form}
                  placeholder="Rencana"
                />
              </TableCell>
              <TableCell>
                <InputField
                  name="kunjunganNifas.suntik.pelaksanaan"
                  form={form}
                  placeholder="Pelaksanaan"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">AKDR</TableCell>
              <TableCell>
                <InputField
                  name="kunjunganNifas.akdr.rencana"
                  form={form}
                  placeholder="Rencana"
                />
              </TableCell>
              <TableCell>
                <InputField
                  name="kunjunganNifas.akdr.pelaksanaan"
                  form={form}
                  placeholder="Pelaksanaan"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INPLANT</TableCell>
              <TableCell>
                <InputField
                  name="kunjunganNifas.inplant.rencana"
                  form={form}
                  placeholder="Rencana"
                />
              </TableCell>
              <TableCell>
                <InputField
                  name="kunjunganNifas.inplant.pelaksanaan"
                  form={form}
                  placeholder="Pelaksanaan"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">MOW</TableCell>
              <TableCell>
                <InputField
                  name="kunjunganNifas.mow.rencana"
                  form={form}
                  placeholder="Rencana"
                />
              </TableCell>
              <TableCell>
                <InputField
                  name="kunjunganNifas.mow.pelaksanaan"
                  form={form}
                  placeholder="Pelaksanaan"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">MOP</TableCell>
              <TableCell>
                <InputField
                  name="kunjunganNifas.mop.rencana"
                  form={form}
                  placeholder="Rencana"
                />
              </TableCell>
              <TableCell>
                <InputField
                  name="kunjunganNifas.mop.pelaksanaan"
                  form={form}
                  placeholder="Pelaksanaan"
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </FormWrapper>
    </section>
  );
}
