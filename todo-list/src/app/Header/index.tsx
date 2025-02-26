export const Header = () => {
  return (
    <header className="flex flex-col items-start justify-start p-8 gap-4 sm:flex-row">
      <h1 className="text-4xl font-bold">Todo List</h1>
      <p className="text-gray-500 text-sm">
        A simple todo list app built with Next.js
      </p>
    </header>
  );
};
