'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  FormWrapper,
  TitleSection,
} from '@/app/dashboard/periksa-kehamilan/create/_component/form-content';
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useFieldArray } from 'react-hook-form';
import { defaultValues } from '@/app/dashboard/periksa-kehamilan/_types/periksa-kehamilan-types';
import { TableButtonGroup } from '@/components/Buttons';

export default function RencanaPersalinan({ form }: any) {
  const { fields, append, remove } = useFieldArray({
    name: 'rencanaPersalinan',
    control: form.control,
  });

  return (
    <section className="_RENCANA_PERSALINAN space-y-4">
      <TitleSection
        title="Rencana Persalinan"
        subtitle="Masukkan data pasien"
      />
      <FormWrapper>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tanggal</TableHead>
              <TableHead>Penolong</TableHead>
              <TableHead>Tempat</TableHead>
              <TableHead>Pendamping</TableHead>
              <TableHead>Transportasi</TableHead>
              <TableHead>Pendonor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fields.map((field: any, index: number) => (
              <TableRow key={field.id}>
                <TableCell>
                  <FormField
                    control={form.control}
                    name={`rencanaPersalinan.${index}.tanggal`}
                    render={({ field }) => (
                      <FormItem>
                        <div>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={'outline'}
                                  className={cn(
                                    'w-full pl-3 text-left font-normal',
                                    !field.value && 'text-muted-foreground',
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, 'dd-MM-yyyy')
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <FormField
                    control={form.control}
                    name={`rencanaPersalinan.${index}.penolong`}
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih Penolong" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="keluarga">Keluarga</SelectItem>
                            <SelectItem value="dukun">Dukun</SelectItem>
                            <SelectItem value="bidan">Bidan</SelectItem>
                            <SelectItem value="drUmum">Dr.Umum</SelectItem>
                            <SelectItem value="drSpesialis">
                              Dr. Spesial
                            </SelectItem>
                            <SelectItem value="lain">Lain-lain</SelectItem>
                            <SelectItem value="tidakAda">Tidak ada</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <FormField
                    control={form.control}
                    name={`rencanaPersalinan.${index}.tempat`}
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih tempat" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="rumah">Rumah</SelectItem>
                            <SelectItem value="poskesdes">Poskesdes</SelectItem>
                            <SelectItem value="pustu">Pustu</SelectItem>
                            <SelectItem value="puskesmas">Puskesmas</SelectItem>
                            <SelectItem value="rb">RB</SelectItem>
                            <SelectItem value="rs">RS</SelectItem>
                            <SelectItem value="rsia">RSIA</SelectItem>
                            <SelectItem value="rsOdha">RS. Odha</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <FormField
                    control={form.control}
                    name={`rencanaPersalinan.${index}.pendamping`}
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih pendamping" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="suami">Suami</SelectItem>
                            <SelectItem value="keluarga">Keluarga</SelectItem>
                            <SelectItem value="teman">Teman</SelectItem>
                            <SelectItem value="tetangga">Tetangga</SelectItem>
                            <SelectItem value="lain">Lain-lain</SelectItem>
                            <SelectItem value="tidakAda">Tidak ada</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <FormField
                    control={form.control}
                    name={`rencanaPersalinan.${index}.transportasi`}
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih transportasi" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="mobil">Mobil</SelectItem>
                            <SelectItem value="motor">Motor</SelectItem>
                            <SelectItem value="angkutanUmum">
                              Angkutan Umum
                            </SelectItem>
                            <SelectItem value="lain">Lain-lain</SelectItem>
                            <SelectItem value="tidakAda">Tidak ada</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
                <TableCell>
                  <FormField
                    control={form.control}
                    name={`rencanaPersalinan.${index}.pendonor`}
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih pendonor" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="suami">Suami</SelectItem>
                            <SelectItem value="keluarga">Keluarga</SelectItem>
                            <SelectItem value="teman">Teman</SelectItem>
                            <SelectItem value="lain">Lain-lain</SelectItem>
                            <SelectItem value="tidakAda">Tidak ada</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableButtonGroup
          remove={remove}
          append={append}
          fields={fields}
          data={defaultValues.rencanaPersalinan}
        />
      </FormWrapper>
    </section>
  );
}
