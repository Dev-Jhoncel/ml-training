/* eslint-disable @typescript-eslint/no-explicit-any */
export const DateInputs = ({ value }: any) => {
  return (
    <input
      type={`date`}
      className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={value}
    />
  );
};
