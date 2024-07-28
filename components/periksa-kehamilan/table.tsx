'use client';

import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  ColumnDef,
  flexRender,
  Row,
  getSortedRowModel,
  getPaginationRowModel,
  PaginationState,
} from '@tanstack/react-table';
import {
  ChevronDown,
  PencilIcon,
  ArrowUpDown,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Pagination from '../pagination';

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
  noHP: string;
};

type TableProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData>[];
  renderSubComponent: (props: { row: Row<TData> }) => React.ReactElement;
  getRowCanExpand: (row: Row<TData>) => boolean;
};

const columns: ColumnDef<Patient>[] = [
  {
    id: 'expander',
    header: () => null,
    cell: ({ row }) => {
      return row.getCanExpand() ? (
        <Button
          variant="outline"
          size="icon"
          {...{
            onClick: row.getToggleExpandedHandler(),
            style: { cursor: 'pointer' },
          }}
        >
          {row.getIsExpanded() ? (
            <ChevronDown size={18} />
          ) : (
            <ChevronRight size={18} />
          )}
        </Button>
      ) : (
        '🔵'
      );
    },
  },
  {
    accessorKey: 'id_pasien',
    header: ({ column }) => {
      return (
        <Button
          className="-ml-3"
          variant="ghost"
          size={'sm'}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          KOHRT
          <ArrowUpDown size={14} className="ml-2" />
        </Button>
      );
    },
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          className="-ml-3"
          variant="ghost"
          size={'sm'}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Nama Pasien
          <ArrowUpDown size={14} className="ml-2" />
        </Button>
      );
    },
    // cell: ({ row, getValue }) => <div>{getValue<string>()}</div>,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'usia',
    header: ({ column }) => {
      return (
        <Button
          className="-ml-3"
          variant="ghost"
          size={'sm'}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Usia
          <ArrowUpDown size={14} className="ml-2" />
        </Button>
      );
    },
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'datetime',
    header: ({ column }) => {
      return (
        <Button
          className="-ml-3"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Kedatangan Terakhir
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="">{row.original.tglDatang}</div>,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'namaSuami',
    header: ({ column }) => {
      return (
        <Button
          className="-ml-3"
          variant="ghost"
          size={'sm'}
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Nama Suami
          <ArrowUpDown size={14} className="ml-2" />
        </Button>
      );
    },
    footer: (props) => props.column.id,
  },
  {
    id: 'action',
    header: () => '',
    cell: ({ row }) => (
      <div className="flex justify-end gap-3">
        <Link
          href={`/dashboard/periksa-kehamilan/${row.original.id_pasien}/edit`}
          className="rounded-md border p-2 hover:bg-gray-100"
        >
          <PencilIcon className="w-5" />
        </Link>
        {/* <Link href={`#`} className="rounded-md border p-2 hover:bg-gray-100">
          <Eye className="w-5" />
        </Link> */}
        <Link
          href={`https://wa.me/${row.original.noHP}`}
          className="rounded-md border p-2 hover:bg-gray-100"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            fill="currentColor"
            className="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        </Link>
      </div>
    ),
    footer: (props) => props.column.id,
  },
];

export default function KehamilanTable({ dataPatient }: { dataPatient: any }) {
  const dataPatients = dataPatient;
  return (
    <TableComponent
      data={dataPatients}
      columns={columns}
      getRowCanExpand={() => true}
      renderSubComponent={renderSubComponent}
    />
  );
}
function TableComponent({
  data,
  columns,
  renderSubComponent,
  getRowCanExpand,
}: TableProps<Patient>): JSX.Element {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  const table = useReactTable<Patient>({
    data,
    columns,
    getRowCanExpand,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  // const currentPage = table.getState().pagination.pageIndex;
  // const totalPages = table.getPageCount();
  // const getPaginationGroup = () => {
  //   if (totalPages <= 5) {
  //     return Array.from({ length: totalPages }, (_, i) => i + 1);
  //   }

  //   if (currentPage <= 2) {
  //     return [1, 2, 3, '...', totalPages];
  //   }

  //   if (currentPage >= totalPages - 1) {
  //     return [1, '...', totalPages - 2, totalPages - 1, totalPages];
  //   }

  //   return [1, '...', currentPage, '...', totalPages];
  // };

  // const paginationGroup = getPaginationGroup();

  return (
    <div className="mt-6 space-y-4">
      <div className="overflow-auto rounded-lg bg-white p-4">
        <table className="w-full min-w-full max-w-full p-4 text-gray-900">
          <thead className="text-left text-sm font-normal">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    className="p-3 font-semibold"
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {!header.isPlaceholder &&
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length === 0 ? (
              <tr className="w-full bg-[#F1F4F8] text-center text-sm">
                <td colSpan={7} className="p-6">
                  No patient data
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
                          <td className="px-3 py-3" key={cell.id}>
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

      <Pagination table={table} />
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
                <TableCell>{d.soapAnc.s}</TableCell>
                <TableCell>{d.soapAnc.o}</TableCell>
                <TableCell>{d.soapAnc.a}</TableCell>
                <TableCell>{d.soapAnc.p}</TableCell>
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
          href={`/dashboard/periksa-kehamilan/${row.original.id_pasien}/soap/create`}
        >
          Tambah Histori Kedatangan
        </Link>
      </Button>
    </div>
  );
}
