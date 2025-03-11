import { Footer } from "../Footer";
import { Todo } from "../../components/todo";

export const Main = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start sm:flex-row">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your text here"
          />
          <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Submit
          </button>
        </div>
        <Todo />
      </main>
      <Footer />
    </div>
  );
};
