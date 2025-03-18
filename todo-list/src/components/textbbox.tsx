export const Textbox = ({ type = "text" }: { type?: string }) => {
  return (
    <div className="flex flex-col gap-4">
      <input
        type={type}
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your text here"
      />
    </div>
  );
};
