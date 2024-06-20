'use client';

import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  ColumnDef,
  flexRender,
  Row,
} from '@tanstack/react-table';
import {
  Bell,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Loader2Icon,
  PencilIcon,
} from 'lucide-react';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { urbanist } from '@/components/fonts';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import { ChevronLeft } from 'lucide-react';
import { InputField } from '@/components/form-content';
import { createReminder } from '@/lib/actions';

type SubPatient = {
  tglDatang: string;
  s: string;
  td: string;
  bb: number;
  lain2: string;
  a: string;
  p: string;
};

type Patient = {
  id_pasien: number;
  name: string;
  usia: number;
  tglDatang: string;
  metodeKontrasepsi: string;
  subRows?: SubPatient[];
};

type TableProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData>[];
  renderSubComponent: (props: { row: Row<TData> }) => React.ReactElement;
  getRowCanExpand: (row: Row<TData>) => boolean;
};

// const dataPatients: Patient[] = pasienData.data;
// console.log(dataPatients);

const FormSchema = z.object({
  tglKirim: z.any(),
  waktuKirim: z.string(),
  isiPesan: z.string(),
});

function SubmitButton() {
  return (
    <Button
      type="submit"
      className=" flex w-fit bg-blue-600 hover:bg-blue-400 "
    >
      <p>Kirim Pesan</p>
      <ChevronRight className="ml-2 h-5 w-5 " />
    </Button>
  );
}

const DialogWA = ({ patientname, id_pasien }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const FormSchema = z.object({
    tglKirim: z
      .string()
      .or(z.date())
      .transform((arg) => new Date(arg)),
    isiPesan: z.string(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      tglKirim: new Date(),
      isiPesan: 'asdawd',
    },
  });

  function SubmitButton({ isLoading }: any) {
    return (
      <Button
        className="w-fit bg-blue-600 hover:bg-blue-500"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2Icon size={20} className="mr-2 animate-spin" /> Loading...
          </>
        ) : (
          <>Kirim Pesan</>
        )}
      </Button>
    );
  }

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    try {
      await createReminder(data, id_pasien);
      console.log('data');
      toast({
        title: `Berhasil Membuat Reminder`,
      });
      setOpen(false);
    } catch (error) {
      toast({
        title: `${error}`,
      });
    }
    setIsLoading(false);
    // console.log(data);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="p-2">
          <Bell className="w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle
            className={`${urbanist.className} flex items-center text-lg font-bold`}
          >
            <DialogClose asChild>
              <ChevronLeft className="mr-3 h-5 w-5" />
            </DialogClose>
            <p>Reminder Pasien Layanan Imunisasi</p>
          </DialogTitle>
        </DialogHeader>
        <div className="rounded-md bg-[#D0E4FF] px-4 py-6">
          <h1 className={`${urbanist.className} text-lg font-bold`}>
            Kirim Reminder ke {patientname}
          </h1>
          <span className="text-sm font-medium text-[#6F90BA]">
            Tentukan tanggal kirim dan waktu kirim reminder Whatsapp
          </span>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-full flex-col"
            >
              <div className="my-2 mb-8 flex w-full flex-col gap-3 rounded-md bg-white p-4 ">
                <div className="flex w-full gap-4">
                  <InputField
                    name="tglKirim"
                    form={form}
                    label="Tanggal Kirim"
                    className="col-span-6"
                    type="date"
                  />
                </div>
                <div>
                  <InputField
                    name="isiPesan"
                    form={form}
                    placeholder="Isi Pesan...."
                    label="Isi Pesan"
                    className="col-span-12"
                    type="textarea"
                  />
                </div>
              </div>
              <div className="flex w-full justify-end">
                <SubmitButton isLoading={isLoading} />
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const columns: ColumnDef<Patient>[] = [
  {
    id: 'expander',
    header: () => null,
    cell: ({ row }) => {
      return row.getCanExpand() ? (
        <button
          {...{
            onClick: row.getToggleExpandedHandler(),
            style: { cursor: 'pointer' },
          }}
        >
          {row.getIsExpanded() ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </button>
      ) : (
        '🔵'
      );
    },
  },
  {
    accessorKey: 'id_pasien',
    header: () => 'KOHRT',
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'name',
    header: 'Nama Bayi',
    // cell: ({ row, getValue }) => <div>{getValue<string>()}</div>,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'tglDatang',
    header: () => 'Kedatangan Terakhir',
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'namaAyah',
    header: () => 'Nama Ayah',
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'namaIbu',
    header: () => 'Nama Ibu',
    footer: (props) => props.column.id,
  },
  {
    id: 'action',
    header: () => '',
    cell: ({ row }) => (
      <div className="flex justify-end gap-3">
        <Link
          href={`/dashboard/imunisasi/${row.original.id_pasien}/edit`}
          className="rounded-md border p-2 hover:bg-gray-100"
        >
          <PencilIcon className="w-5" />
        </Link>
        {/* <Link href={`#`} className="rounded-md border p-2 hover:bg-gray-100">
          <Eye className="w-5" />
        </Link> */}
        <DialogWA
          patientname={row.original.name}
          id_pasien={row.original.id_pasien}
        />
      </div>
    ),
    footer: (props) => props.column.id,
  },
];

export default function ImunisasiTable({ dataPatient }: { dataPatient: any }) {
  const dataPatients = dataPatient;

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <TableComponent
            data={dataPatients}
            columns={columns}
            getRowCanExpand={() => true}
            renderSubComponent={renderSubComponent}
          />
        </div>
      </div>
    </div>
  );
}
function TableComponent({
  data,
  columns,
  renderSubComponent,
  getRowCanExpand,
}: TableProps<Patient>): JSX.Element {
  const table = useReactTable<Patient>({
    data,
    columns,
    getRowCanExpand,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <div className="p-2">
      <div className="h-2" />
      <table className="hidden min-w-full text-gray-900 md:table">
        <thead className="rounded-lg text-left text-sm font-normal">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    className="px-3 py-5 font-semibold"
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white">
          {table.getRowModel().rows.length === 0 ? (
            <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
              <td colSpan={7} className="bg-[#F1F4F8] p-6 text-center">
                <p>No patient data</p>
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => {
              return (
                <Fragment key={row.id}>
                  <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                    {/* first row is a normal row */}
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          className="whitespace-nowrap px-3 py-3"
                          key={cell.id}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      );
                    })}
                  </tr>
                  {row.getIsExpanded() && (
                    <tr>
                      {/* 2nd row is a custom 1 cell row */}
                      <td colSpan={row.getVisibleCells().length}>
                        {/* <p>{row.getVisibleCells().length}</p> */}
                        {renderSubComponent({ row })}
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

function renderSubComponent({ row }: { row: Row<Patient> }) {
  let data = row.original.subRows || [];

  return (
    <div className="m-4 space-y-4 rounded-xl bg-[#F1F4F8] p-4">
      <h1 className="text-lg font-bold">History</h1>
      <Table className="rounded-lg bg-white">
        <TableHeader>
          <TableRow>
            <TableHead colSpan={2}></TableHead>
            <TableHead colSpan={4} className="text-center">
              O
            </TableHead>
          </TableRow>
          <TableRow className="">
            <TableHead>Tanggal</TableHead>
            <TableHead>S</TableHead>
            <TableHead>TD</TableHead>
            <TableHead>LK</TableHead>
            <TableHead>PB</TableHead>
            <TableHead>Lain-Lain</TableHead>
            <TableHead>A</TableHead>
            <TableHead>P</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((d: any, i: number) => {
            return (
              <TableRow key={i}>
                <TableCell>{d.tglDatang}</TableCell>
                <TableCell>{d.s}</TableCell>
                <TableCell>{d.o.td}</TableCell>
                <TableCell>{d.o.lk}</TableCell>
                <TableCell>{d.o.pb}</TableCell>
                <TableCell>{d.o.lain2}</TableCell>
                <TableCell>{d.a}</TableCell>
                <TableCell>{d.p}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Button
        asChild
        variant={'outline'}
        className="w-full border-rme-blue-500 bg-transparent text-rme-blue-500 hover:bg-white hover:text-rme-blue-500"
      >
        <Link href={`/dashboard/imunisasi/${row.original.id_pasien}/soap`}>
          Tambah Histori Kedatangan
        </Link>
      </Button>
    </div>
  );
}
