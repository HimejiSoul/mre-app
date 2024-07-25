'use client';

import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  ColumnDef,
  flexRender,
  Row,
  PaginationState,
  getSortedRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { deleteBidan } from '@/lib/actions';
import { useRouter } from 'next/navigation';
import { ArrowUpDown, Trash2 } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Pagination from '../pagination';
import { Button } from '../ui/button';

type Bidan = {
  _id: string;
  email: string;
  full_name: number;
  phone_number: string;
  role: string;
  username: string;
};

type TableProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData>[];
  // renderSubComponent: (props: { row: Row<TData> }) => React.ReactElement;
  getRowCanExpand: (row: Row<TData>) => boolean;
};

// const dataPatients: Patient[] = pasienData.data;
// console.log(dataPatients);

const AlertDialogDelete = ({ id, name }: any) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleContinueClick = async () => {
    setLoading(true);
    const response = await deleteBidan(id);
    console.log(response);
    setLoading(false);
    router.refresh();
    // location.reload();
    setOpen(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <AlertDialogTrigger className="rounded-md border p-2 hover:bg-gray-100">
              <Trash2 className="w-5" />
            </AlertDialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Hapus Bidan</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Apakah kamu ingin menghapus {name}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Tindakan ini tidak bisa dibatalkan. Tindakan ini akan menghapus akun{' '}
            {name} secara permanen dari database.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setLoading(false)}>
            Cancel
          </AlertDialogCancel>
          <button
            onClick={handleContinueClick}
            disabled={loading}
            className="flex h-10 items-center justify-center rounded-lg bg-red-600 px-4 text-sm font-medium text-white transition-colors hover:brightness-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 active:bg-red-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Continue'}
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const columns: ColumnDef<Bidan>[] = [
  {
    accessorKey: 'username',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Username
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'full_name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Nama Leengkap
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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
      <div className="flex justify-end gap-3">
        {/* TODO: Update button still not functional, fix it! */}
        {/* <Link href={`/dashboard/periksa-kehamilan/${row.original._id}/edit`}>
          <Badge className="bg-[#D7E8FF] text-[#001C41] hover:bg-[#D7E8FF]/50">
            Update
          </Badge>
        </Link> */}
        <AlertDialogDelete
          id={row.original._id}
          name={row.original.full_name}
        />
      </div>
    ),
    footer: (props) => props.column.id,
  },
];

export default function ManajemenAkunTable({ bidan }: { bidan: any }) {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <TableComponent
          data={bidan}
          columns={columns}
          getRowCanExpand={() => true}
        />
      </div>
    </div>
  );
}
function TableComponent({
  data,
  columns,
  // renderSubComponent,
  getRowCanExpand,
}: TableProps<Bidan>): JSX.Element {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  const table = useReactTable<Bidan>({
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

  const currentPage = table.getState().pagination.pageIndex;
  const totalPages = table.getPageCount();
  const getPaginationGroup = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 2) {
      return [1, 2, 3, '...', totalPages];
    }

    if (currentPage >= totalPages - 1) {
      return [1, '...', totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, '...', currentPage, '...', totalPages];
  };

  const paginationGroup = getPaginationGroup();

  return (
    <div className="flex flex-col gap-5">
      <div className="hidden min-w-full rounded-lg bg-gray-50 p-4 text-gray-900 md:table">
        <table className="w-full">
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
                  <p>No Bidan data</p>
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
