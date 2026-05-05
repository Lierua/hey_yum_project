import Image from "next/image";
import Nav from "./components/utilityComponents/Header/Nav";
import FunctionSection from "./components/functionComponents/FunctionSection";

export default function Home() {
  return (
    <div className="grid">
      <Nav page="home" />
      <main>
        <FunctionSection />
      </main>
    </div>
  );
}
