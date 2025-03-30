/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTableProps } from "../lib/interfaces/datatables.interface";

export const DataTable = <T extends { [key: string]: any }>({
  columns,
  data,
  keyField,
}: DataTableProps<T>) => {
  return (
    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
      <thead className="bg-gray-200">
        <tr>
          {columns.map((column: any) => (
            <th
              key={String(column)}
              className="py-3 px-4 text-left text-gray-600 font-semibold"
            >
              {String(column).toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item: any) => (
          <tr className="hover:bg-gray-100" key={String(item[keyField])}>
            {columns.map((column: any) => (
              <td
                key={String(column)}
                className="py-3 px-4 border-b border-gray-200"
              >
                {item[column]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
