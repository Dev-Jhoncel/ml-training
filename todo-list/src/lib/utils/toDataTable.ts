/* eslint-disable @typescript-eslint/no-explicit-any */
export function toDataTable(todos: any) {
  if (!Array.isArray(todos) || todos.length === 0) {
    return { data: [], columns: [] };
  }

  const data = todos;
  const headers = todos[0];
  const columns = Object.keys(headers);
  console.log(data);

  return { data, columns };
}
