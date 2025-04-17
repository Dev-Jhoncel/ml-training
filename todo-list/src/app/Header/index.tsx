export const Header = () => {
  return (
    <header className="flex flex-col items-start border-b border-gray-800 justify-start p-4 gap-2 sm:flex-row sm:items-center sm:justify-between sm:p-8 sm:gap-4">
    <h1 className="text-2xl font-bold sm:text-4xl">Todo List</h1>
    <p className="text-gray-500 text-xs sm:text-sm">
      A simple todo list app built with Next.js
    </p>
  </header>
  );
};
