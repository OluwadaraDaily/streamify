"use client"
import { useState } from "react";
import { useDashboardContext } from '@/context/DashboardContext';

import { IStreamsData } from '@/types/chart';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  getFilteredRowModel,
  FilterFn,
} from '@tanstack/react-table';

const columnHelper = createColumnHelper<IStreamsData>();

const columns = [
  columnHelper.accessor((row) => row.songName, {
    id: 'songName',
    cell: (info) => info.renderValue(),
    header: () => <span>Song Name</span>,
    enableSorting: false,
  }),
  columnHelper.accessor((row) => row.artist, {
    id: 'artist',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Artist</span>,
    footer: (info) => {
      return info.column.id
    },
    enableSorting: false,
  }),
  columnHelper.accessor('dateStreamed', {
    header: () => 'Date Streamed',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
    enableSorting: true,
  }),
  columnHelper.accessor('streamCount', {
    header: () => <span>Stream Count</span>,
    cell: (info) => <span>{info.getValue().toLocaleString()}</span>,
    footer: (info) => info.column.id,
    enableSorting: true,
  }),
  columnHelper.accessor('userId', {
    header: 'User ID',
    cell: (info) => <code>{info.getValue()}</code>,
    footer: (info) => info.column.id,
    enableSorting: false,
  }),
];


export default function StreamsTable() {
  const { streamsTableData } = useDashboardContext();
  const [data] = useState(() => [...streamsTableData]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("")

  const filterStreamsTable: FilterFn<IStreamsData> = (rows, columnId, filterValue) => {
    console.log('DATA =>', { rows, columnId, filterValue });
    
    if (columnId !== 'artist' && columnId !== 'songName') {
      return false;
    }
    
    const cellValue = rows.getValue(columnId);
    return String(cellValue).toLowerCase().includes(String(filterValue).toLowerCase());
  }

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: { sorting, globalFilter },
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: filterStreamsTable,
  });

  const filteredRows = table.getFilteredRowModel().rows;

  const generateTableHeader = () => {
    return (
      <thead className="bg-gray-100 border-b border-gray-300">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="border-b border-gray-300">
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="text-left px-4 py-2 border-r border-gray-300 last:border-r-0 hover:cursor-pointer"
                onClick={header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                  )
                }
                {header.column.getIsSorted() === "asc" ? " 🔼" :
                  header.column.getIsSorted() === "desc" ? " 🔽" :
                  header.column.getCanSort() ? "⬍" : ""
                }
              </th>
            ))}
          </tr>
        ))}
      </thead>
    )
  }

  const generateTableBodyData = () => {
    return (
      <>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="border-b border-gray-300">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="px-4 py-2 border-r border-gray-300 last:border-r-0">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </>
    )
  }

  const generateTableBody = () => {
    return (
      <tbody>
        {filteredRows.length === 0 ? (
          <tr>
            <td colSpan={columns.length} className="text-base text-center py-4">
              No matches found for your filter.
            </td>
          </tr>
        ) : (<>{generateTableBodyData()}</>)}
      </tbody>
    )
  }

  return (
    <>
      <h1 className="mb-2 font-medium text-2xl">Recent Streams</h1>
      <input
        type="text"
        name="filter"
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="w-full mb-3 border rounded-md p-3 md:max-w-[250px]"
        placeholder="Filter by artist or song name"
      />
      <div className="overflow-auto">
        <table className="w-full table-auto border border-gray-300">
          {generateTableHeader()}
          {generateTableBody()}
        </table>
      </div>
    </>
  )
}