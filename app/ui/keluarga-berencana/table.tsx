'use client';

import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  ColumnDef,
  flexRender,
  Row,
} from '@tanstack/react-table';
import { Bell, ChevronDown, ChevronUp, Eye, PencilIcon } from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';
import pasienData from '@/public/data/patient.json';
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

type SubPatient = {
  date: string;
  s: string;
  td: string;
  bb: number;
  other: string;
  a: string;
  p: string;
};

type Patient = {
  code: number;
  name: string;
  age: number;
  lastVisits: string;
  KBType: string;
  subRows?: SubPatient[];
};

type TableProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData>[];
  renderSubComponent: (props: { row: Row<TData> }) => React.ReactElement;
  getRowCanExpand: (row: Row<TData>) => boolean;
};

const dataPatients: Patient[] = pasienData.data;

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
    accessorKey: 'code',
    header: () => 'Kode',
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'name',
    header: 'Nama',
    cell: ({ row, getValue }) => <div>{getValue<string>()}</div>,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'age',
    header: () => 'Usia',
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'lastVisits',
    header: () => 'Kedatangan Terakhir',
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'KBType',
    header: () => 'Tipe KB',
    footer: (props) => props.column.id,
  },
  {
    id: 'action',
    header: () => 'Action',
    cell: () => (
      <div className="flex justify-end gap-3">
        <Link href={`#`} className="rounded-md border p-2 hover:bg-gray-100">
          <PencilIcon className="w-5" />
        </Link>
        <Link href={`#`} className="rounded-md border p-2 hover:bg-gray-100">
          <Eye className="w-5" />
        </Link>
        <Link href={`#`} className="rounded-md border p-2 hover:bg-gray-100">
          <Bell className="w-5" />
        </Link>
      </div>
    ),
    footer: (props) => props.column.id,
  },
];

export default function InvoicesTable({} // query,
// currentPage,
: {
  // query: string;
  // currentPage: number;
}) {
  // const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          {/* <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          {/* <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th
                  scope="col"
                  className="relative px-4 py-5 font-medium sm:pl-6"
                >
                  <span className="sr-only">Dropdown</span>
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Kode
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Nama
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Usia
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Kedatangan Terakhir
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Tipe KB
                </th>
                <th scope="col" className="px-3 pl-6 text-center font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {dataPatients?.map((patient) => (
                <tr
                  key={patient.code}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">`{'>'}`</div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {patient.code}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{patient.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{patient.age}</td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {patient.lastVisits}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {patient.KBType}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <Link
                        href={`#`}
                        className="rounded-md border p-2 hover:bg-gray-100"
                      >
                        <PencilIcon className="w-5" />
                      </Link>
                      <Link
                        href={`#`}
                        className="rounded-md border p-2 hover:bg-gray-100"
                      >
                        <Eye className="w-5" />
                      </Link>
                      <Link
                        href={`#`}
                        className="rounded-md border p-2 hover:bg-gray-100"
                      >
                        <Bell className="w-5" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
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
                    className="px-3 py-5 font-semibold last-of-type:text-center"
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
          {table.getRowModel().rows.map((row) => {
            return (
              <Fragment key={row.id}>
                <tr className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                  {/* first row is a normal row */}
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td className="whitespace-nowrap px-3 py-3" key={cell.id}>
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
          })}
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
            <TableHead>TD</TableHead>
            <TableHead>BB</TableHead>
            <TableHead>HPHT</TableHead>
            <TableHead>Lain2</TableHead>
            <TableHead>A</TableHead>
            <TableHead>P</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((d: any, i: number) => {
            return (
              <TableRow key={i}>
                <TableCell>{d.date}</TableCell>
                <TableCell>{d.s}</TableCell>
                <TableCell>{d.td}</TableCell>
                <TableCell>{d.bb}</TableCell>
                <TableCell>{d.hpht}</TableCell>
                <TableCell>{d.other}</TableCell>
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
        <Link href={'/dashboard'}>Tambah Histori Kedatangan</Link>
      </Button>
    </div>
  );
}
