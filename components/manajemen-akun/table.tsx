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
import { deleteBidan } from '@/app/lib/actions';
import { useRouter } from 'next/navigation';
import { fetchTableBidan } from '@/app/lib/data';

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

const AlertDialogExample = ({ id }: any) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleContinueClick = async () => {
    setLoading(true);
    const response = await deleteBidan(id);
    console.log(response);
    location.reload();
    setLoading(false);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Badge className="bg-[#F8DEDD] text-[#DF645F] hover:bg-[#F8DEDD]/50">
          Delete
        </Badge>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Do you want to delete this account?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setLoading(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleContinueClick}
            disabled={loading}
            className="bg-red-500 hover:bg-red-300"
          >
            {loading ? 'Processing...' : 'Continue'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const columns: ColumnDef<Bidan>[] = [
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
        <Link href={`/dashboard/periksa-kehamilan/${row.original._id}/edit`}>
          <Badge className="bg-[#D7E8FF] text-[#001C41] hover:bg-[#D7E8FF]/50">
            Update
          </Badge>
        </Link>
        <AlertDialogExample id={row.original._id} />
        {/* <AlertDialog>
          <AlertDialogTrigger>
            <Badge className="bg-[#F8DEDD] text-[#DF645F] hover:bg-[#F8DEDD]/50">
              Delete
            </Badge>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Do you want to delete this account?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog> */}
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
            // renderSubComponent={renderSubComponent}
          />
        </div>
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
  const table = useReactTable<Bidan>({
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
                </Fragment>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
