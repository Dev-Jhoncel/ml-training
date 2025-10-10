export default function Home() {
  return (
    <>
      <div className="flex gap-[2%] flex-wrap content-start min-h-screen">
        {/* Navbar */}
        <nav className="w-full h-16 border-b-stone-300 bg-white p-2 text-center font-bold shadow-sm">
          <h1 className="text-3xl font-bold">
            <span>📝</span> todo-list
          </h1>
        </nav>

        {/* Sidebar */}
        <aside className="fixed lg:flex flex-col w-16 h-full bg-white border-r-stone-300 p-2 text-center gap-4 hidden">
          <i>1</i>
          <i>2</i>
          <i>3</i>
          <i>4</i>
          <i>5</i>
        </aside>

        {/* Main Content */}
        <main className="grow h-full flex flex-col  align-middle p-4 md:p-8">
          <div className="bg-white w-16 border border-gray-300 p-6 shadow-md">
            <input
              className="border h-10 border-stone-300 rounded-md p-2 w-full md:w-1/2 lg:w-1/3"
              type="text"
              name="txtBox"
              id="txBoxId"
              placeholder="Add a new task..."
            />
          </div>
        </main>

        {/* Footer */}
        <div className="w-full h-16 border-t-stone-300 bg-white text-center flex items-center justify-center">
          Footer
        </div>
      </div>
    </>
  );
}
