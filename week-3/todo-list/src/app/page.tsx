export default function Home() {
  return (
    <>
      <div className="flex gap-[2%] flex-wrap content-start">
        <nav className="w-full h-[5%] border-b-stone-300 bg-white p-2 text-center font-bold">
          <h1 className="text-3xl font-bold">
            <span>📝</span>
            todo-list
          </h1>
        </nav>
        <aside className="w-1/4 h-3/4"></aside>
        <main className="grow h-3/4 ">
          <input
            className="border h-10 border-stone-300 rounded-md p-2 w-full md:w-1/2"
            type="text"
            name="txtBox"
            id="txBoxId"
          />
        </main>
        <div className="w-full h-[5%] bg-white">Footer</div>
      </div>
    </>
  );
}
