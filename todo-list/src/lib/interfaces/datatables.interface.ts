export interface DataTableProps<T> {
  columns: Array<keyof T>;
  data: T[];
  keyField: keyof T;
}
