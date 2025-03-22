import { TodoData } from "@/lib/interfaces/todo.interface";

export const Todo = ({ todos }: { todos: TodoData[] }) => {
  return (
    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
      <thead className="bg-gray-200">
        <tr>
          <th className="py-3 px-4 text-left text-gray-600 font-semibold">
            Date
          </th>
          <th className="py-3 px-4 text-left text-gray-600 font-semibold">
            Tile
          </th>
          <th className="py-3 px-4 text-left text-gray-600 font-semibold">
            Description
          </th>
          <th className="py-3 px-4 text-left text-gray-600 font-semibold">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr className="hover:bg-gray-100" key={todo.id}>
            <td className="py-3 px-4 border-b border-gray-200">{todo.date}</td>
            <td className="py-3 px-4 border-b border-gray-200">{todo.title}</td>
            <td className="py-3 px-4 border-b border-gray-200">
              {todo.description}
            </td>
            <td className="py-3 px-4 border-b border-gray-200">
              {todo.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
