export default function Home() {
  return (
    <>
      <nav className="w-full bg-blue-100 p-2 text-4xl text-center font-bold">
        Todo List
      </nav>
      <section className="flex flex-col md:flex-row h-full justify-center items-center p-4 gap-4">
        <input
          className="border border-gray-300"
          type="text"
          name="txtBox"
          id="txBoxId"
        />
      </section>
    </>
  );
}
