import Image from "next/image";
import Nav from "./components/utilityComponents/Header/Nav";
import Hero from "./components/homeComponents/Hero";

export default function Home() {
  return (
    <div className="grid">
      <Nav page="home" />
      <main className="">
        <Hero />
      </main>
    </div>
  );
}
