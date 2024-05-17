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
  PencilIcon,
} from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';
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
import { urbanist } from '@/app/ui/fonts';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ChevronLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

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

const columns: ColumnDef<Patient>[] = [
  // {
  //   accessorKey: 'id_pasien',
  //   header: () => 'ID',
  //   footer: (props) => props.column.id,
  // },
  {
    accessorKey: 'username',
    header: 'Username',
    // cell: ({ row, getValue }) => <div>{getValue<string>()}</div>,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'full_name',
    header: () => 'Nama Lengkap',
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'phone_number',
    header: () => 'No. HP',
    footer: (props) => props.column.id,
  },
  {
    id: 'action',
    header: () => '',
    cell: ({ row }) => (
      <div className="flex justify-center gap-3">
        <Link
          href={`/dashboard/periksa-kehamilan/${row.original.id_pasien}/edit`}
        >
          <Badge className="bg-[#D7E8FF] text-[#001C41] hover:bg-[#D7E8FF]/50">
            Update
          </Badge>
        </Link>
        <Link
          href={`/dashboard/periksa-kehamilan/${row.original.id_pasien}/edit`}
        >
          <Badge className="bg-[#F8DEDD] text-[#DF645F] hover:bg-[#F8DEDD]/50">
            Delete
          </Badge>
        </Link>
      </div>
    ),
    footer: (props) => props.column.id,
  },
];

export default function ManajemenAkunTable({ bidan }: { bidan: any }) {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <TableComponent
            data={bidan}
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
          <TableRow className="">
            <TableHead>Tanggal</TableHead>
            <TableHead>S</TableHead>
            <TableHead>O</TableHead>
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
                <TableCell>{d.o}</TableCell>
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
        <Link
          href={`/dashboard/periksa-kehamilan/${row.original.id_pasien}/create/soap`}
        >
          Tambah Histori Kedatangan
        </Link>
      </Button>
    </div>
  );
}
