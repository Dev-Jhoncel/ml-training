export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <nav className="w-full h-16 border-b border-stone-300 bg-white p-2 text-center font-bold shadow-sm">
          <h1 className="text-3xl font-bold">
            <span>📝</span> todo-list
          </h1>
        </nav>
        //Change made here
        <div className="flex-1 flex min-h-0">
          <div className="container h-full">
            <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] h-full">
              <aside className="bg-gray-100 p-4">Sidebar</aside>
              <main className="bg-white p-4 overflow-auto">Content</main>
            </div>
          </div>
        </div>
        <div className="w-full h-16 border-t border-stone-300 bg-white text-center flex items-center justify-center shadow-sm">
          Footer
        </div>
      </div>
    </>
  );
}
