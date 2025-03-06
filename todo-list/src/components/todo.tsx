export const Todo = () => {
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
            Progress
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-gray-100">
          <td className="py-3 px-4 border-b border-gray-200">03-01-2025</td>
          <td className="py-3 px-4 border-b border-gray-200">Jogging</td>
          <td className="py-3 px-4 border-b border-gray-200">
            Atleast 1km of jogging
          </td>
          <td className="py-3 px-4 border-b border-gray-200">In Progress</td>
        </tr>
        <tr className="hover:bg-gray-100">
          <td className="py-3 px-4 border-b border-gray-200">03-01-2025</td>
          <td className="py-3 px-4 border-b border-gray-200">Reading</td>
          <td className="py-3 px-4 border-b border-gray-200">
            Read book atleast 8 pages
          </td>
          <td className="py-3 px-4 border-b border-gray-200">In Progress</td>
        </tr>
        <tr className="hover:bg-gray-100">
          <td className="py-3 px-4 border-b border-gray-200">02-28-2025</td>
          <td className="py-3 px-4 border-b border-gray-200">Work</td>
          <td className="py-3 px-4 border-b border-gray-200">
            Be productive in this day
          </td>
          <td className="py-3 px-4 border-b border-gray-200">Done</td>
        </tr>
        <tr className="hover:bg-gray-100">
          <td className="py-3 px-4 border-b border-gray-200">02-28-2025</td>
          <td className="py-3 px-4 border-b border-gray-200">Sleep</td>
          <td className="py-3 px-4 border-b border-gray-200">
            Atleast 8 hours
          </td>
          <td className="py-3 px-4 border-b border-gray-200">Done</td>
        </tr>
      </tbody>
    </table>
  );
};
