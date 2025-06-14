/* eslint-disable @typescript-eslint/no-explicit-any */
import { toDataTable } from "@/lib/utils/toDataTable";
import { DataTable } from "./dataTable";
import { DataTableProps } from "@/lib/interfaces/datatables.interface";

export const Todo = ({ todos }: any) => {
  const data: DataTableProps<{ [key: string]: any }> = {
    ...(toDataTable(todos) as DataTableProps<{ [key: string]: any }>),
    keyField: "id",
  };

  return (
    <DataTable
      columns={data.columns.filter((column: any) => column !== "id")}
      data={data?.data}
      keyField="id"
    />
  );
};
