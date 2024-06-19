'use client';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { Fragment, useEffect, useReducer, useState } from 'react';

type Patient = {
  generalInformation: {
    id_pasien: string;
    namaLengkap: string;
    umur: number;
    tanggalRegister: string;
  };
};

const columnHelper = createColumnHelper<Patient>();

const columns = [
  columnHelper.accessor('generalInformation.id_pasien', {
    header: () => 'KOHRT',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('generalInformation.namaLengkap', {
    header: () => 'Nama',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('generalInformation.umur', {
    header: () => 'Usia',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('generalInformation.tanggalRegister', {
    header: () => 'Kedatangan Terakhir',
    cell: (info) => info.getValue(),
  }),
];

function formatDateToDDMMYY(dateString: string) {
  const date = new Date(dateString);

  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const year = String(date.getUTCFullYear()).slice(-2); // Get the last two digits of the year

  return `${day}-${month}-${year}`;
}

export default function ExportPatientsTable({
  dataPatient,
}: {
  dataPatient: any;
}) {
  const [data, _setData] = useState(() => [...dataPatient]);
  useEffect(() => {
    _setData([...dataPatient]);
  }, [dataPatient]);
  const rerender = useReducer(() => ({}), {})[1];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="p-2">
            <div className="h-2" />
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                {table.getHeaderGroups().map((header) => (
                  <tr key={header.id}>
                    {header.headers.map((header) => {
                      return (
                        <th className="px-3 py-5 font-semibold" key={header.id}>
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
        </div>
      </div>
    </div>
  );
}
