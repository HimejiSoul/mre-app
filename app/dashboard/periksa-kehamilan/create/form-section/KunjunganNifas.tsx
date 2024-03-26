import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { FormWrapper, Row, TitleSection } from '../create-form';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function KunjunganNifas({ form }: any) {
  return (
    <section className="_KUNJUNGAN_NIFAS space-y-4">
      <TitleSection
        title="Kunjungan Nifas (KF)"
        subtitle="Masukkan data pasien"
      />
      <FormWrapper>
        <Row>
          <div className="_TANGGAL my-auto">
            <h1 className="font-semibold">MAL</h1>
          </div>
          <FormField
            control={form.control}
            name="kunjunganNifas.mal.rencana"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rencana</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kunjunganNifas.mal.pelaksanaan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pelaksanaan</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <div className="_TANGGAL my-auto">
            <h1 className="font-semibold">KONDOM</h1>
          </div>
          <FormField
            control={form.control}
            name="kunjunganNifas.kondom.rencana"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rencana</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kunjunganNifas.kondom.pelaksanaan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pelaksanaan</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <div className="_TANGGAL my-auto">
            <h1 className="font-semibold">PIL</h1>
          </div>
          <FormField
            control={form.control}
            name="kunjunganNifas.pil.rencana"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rencana</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kunjunganNifas.pil.pelaksanaan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pelaksanaan</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <div className="_TANGGAL my-auto">
            <h1 className="font-semibold">SUNTIK</h1>
          </div>
          <FormField
            control={form.control}
            name="kunjunganNifas.suntik.rencana"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rencana</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kunjunganNifas.suntik.pelaksanaan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pelaksanaan</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <div className="_TANGGAL my-auto">
            <h1 className="font-semibold">AKDR</h1>
          </div>
          <FormField
            control={form.control}
            name="kunjunganNifas.akdr.rencana"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rencana</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kunjunganNifas.akdr.pelaksanaan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pelaksanaan</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <div className="_TANGGAL my-auto">
            <h1 className="font-semibold">INPLANT</h1>
          </div>
          <FormField
            control={form.control}
            name="kunjunganNifas.inplant.rencana"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rencana</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kunjunganNifas.inplant.pelaksanaan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pelaksanaan</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <div className="_TANGGAL my-auto">
            <h1 className="font-semibold">MOW</h1>
          </div>
          <FormField
            control={form.control}
            name="kunjunganNifas.mow.rencana"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rencana</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kunjunganNifas.mow.pelaksanaan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pelaksanaan</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </Row>
        <Row>
          <div className="_TANGGAL my-auto">
            <h1 className="font-semibold">MOP</h1>
          </div>
          <FormField
            control={form.control}
            name="kunjunganNifas.mop.rencana"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rencana</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kunjunganNifas.mop.pelaksanaan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pelaksanaan</FormLabel>
                <FormControl>
                  <Input {...field} />
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
