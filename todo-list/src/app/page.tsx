import { Header } from "./Header";
import { Main } from "./Main";

export default function Home() {
  return (
    <div className="grid grid-rows-[10px_1fr_20px] min-h-screen">
      <Header />
      <Main />
    </div>
  );
}
