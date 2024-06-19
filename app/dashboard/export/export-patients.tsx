'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormField, FormItem, FormLabel } from '@/components/ui/form';
import {
  exportPatientsFormSchema,
  defaultValues,
  ENUM_VALUES,
} from '@/lib/types/export-patients/export-patients-types';
import { useEffect, useState } from 'react';
import { ButtonSubmitForm } from '@/components/Buttons';
import { InputField, Row } from '@/components/form-content';
import { Button } from '@/components/ui/button';
import * as XLSX from 'xlsx';
import * as React from 'react';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import ExportPatientsTable from '@/components/export/table';

export function ExportPatients() {
  const [response, setResponse] = useState({ data: [] });
  console.log('Ini Response', response.data);
  return (
    <>
      <FormExportPatinets setResponse={setResponse} />
      <ExportPatientsTable dataPatient={response.data} />
      <div className="mt-4 flex w-full justify-end">
        <ButtonExportPatients data={response.data} />
      </div>
    </>
  );
}

export function FormExportPatinets({ setResponse }: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof exportPatientsFormSchema>>({
    resolver: zodResolver(exportPatientsFormSchema),
    defaultValues: defaultValues,
  });

  async function onSubmit(data: z.infer<typeof exportPatientsFormSchema>) {
    setIsLoading(true);
    // console.log(data);
    const res = await fetch('/api/export', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data }),
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const result = await res.json();
    setIsLoading(false);
    setResponse(result);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Row className="mt-4 items-end">
          <InputField
            name="layanan"
            form={form}
            label="Pilih Layanan"
            placeholder="Layanan"
            type="select"
            className="col-span-4"
            data={ENUM_VALUES.layanan.map((data) => ({
              value: data,
              label: data,
            }))}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="col-span-3 flex flex-col">
                <FormLabel>Pilih tanggal</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={'outline'}
                      className={cn(
                        'w-full justify-start text-left font-normal',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value?.from ? (
                        field.value.to ? (
                          <>
                            {format(field.value.from, 'LLL dd, y')} -{' '}
                            {format(field.value.to, 'LLL dd, y')}
                          </>
                        ) : (
                          format(field.value.from, 'LLL dd, y')
                        )
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={field.value?.from}
                      selected={field.value}
                      onSelect={field.onChange}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
          <ButtonSubmitForm
            isLoading={isLoading}
            label="Cari data"
            className="col-span-2 w-full"
          />
        </Row>
      </form>
    </Form>
  );
}

// TODO: Fix this any types
export function ButtonExportPatients({ data }: { data: any }) {
  const patients = data;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (data.length === 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [data]);

  const onGetExporProduct = async (title?: string, worksheetname?: string) => {
    try {
      // Check if the action result contains data and if it's an array
      if (patients && Array.isArray(patients)) {
        // Create Excel workbook and worksheet
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet([]);

        // Write parent
        XLSX.utils.sheet_add_aoa(worksheet, [['General Information']], {
          origin: 'A1',
        });

        const headerGeneralInfromation = [
          'KOHRT',
          'No. Ibu',
          'Nama Lengkap',
          'Nama Suami',
          'Tanggal Lahir',
          'Umur',
          'Alamat Domisili',
          'RT/RW',
          'Desa',
          'Kecamatan',
          'Kabupaten',
          'Provinsi',
          'Pendidikan',
          'Agama',
          'Pekerjaan',
          'Tanggal Register',
        ];

        XLSX.utils.sheet_add_aoa(worksheet, [headerGeneralInfromation], {
          origin: 'A2',
        });

        // Merge general information
        worksheet['!merges'] = [
          {
            s: { r: 0, c: 0 },
            e: { r: 0, c: headerGeneralInfromation.length - 1 },
          },
          ...Array.from(
            { length: headerGeneralInfromation.length },
            (_, i) => ({
              s: { r: 1, c: i },
              e: { r: 2, c: i },
            }),
          ),
        ];

        // Map data to array of arrays
        const dataArray = patients.map((patient) => [
          patient.generalInformation.id_pasien,
          patient.generalInformation.noIbu,
          patient.generalInformation.namaLengkap,
          patient.generalInformation.namaSuami,
          patient.generalInformation.tanggalLahir,
          patient.generalInformation.umur,
          patient.generalInformation.alamatDomisili,
          patient.generalInformation.rtrw,
          patient.generalInformation.desa,
          patient.generalInformation.kecamatan,
          patient.generalInformation.kabupaten,
          patient.generalInformation.provinsi,
          patient.generalInformation.pendidikan,
          patient.generalInformation.agama,
          patient.generalInformation.pekerjaan,
          patient.generalInformation.tanggalRegister,
        ]);

        // Add the data to the worksheet starting at row 4 (index 3)
        XLSX.utils.sheet_add_aoa(worksheet, dataArray, { origin: 'A4' });

        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, worksheetname);

        console.log(worksheet);

        // Save the workbook as an Excel file
        XLSX.writeFile(workbook, `${title}.xlsx`);
        console.log(`Exported data to ${title}.xlsx`);
      } else {
        console.log('#==================Export Error');
      }
    } catch (error: any) {
      console.log('#==================Export Error', error.message);
    }
  };
  return (
    <Button
      onClick={() =>
        onGetExporProduct(
          `Patients ${getCurrentDateTime()}`,
          'Periksa Kehamilan',
        )
      }
      className={'w-fit bg-blue-600 hover:bg-blue-500'}
      disabled={isLoading}
    >
      Export Pasien
    </Button>
  );
}

// OTHER FUNCTION
function getCurrentDateTime() {
  // Get the current date and time
  let now = new Date();

  // Extract the date parts
  let year = now.getFullYear();
  let month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  let day = String(now.getDate()).padStart(2, '0');

  // Extract the time parts
  let hours = String(now.getHours()).padStart(2, '0');
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');

  // Format the date and time as a string
  let dateTimeString = `${year}-${month}-${day}-${hours}${minutes}${seconds}`;

  return dateTimeString;
}
