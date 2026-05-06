import Image from "next/image";
import Nav from "./components/utilityComponents/Header/Nav";
import FunctionSection from "./components/functionComponents/FunctionSection";
import Hero from "./components/homeComponents/Hero";
import ParallaxSecOne from "./components/parallaxComponents/ParallaxSecOne";

export default function Home() {
  return (
    <div className="grid">
      <Nav page="home" />

      <main className="">
        <Hero />
        <FunctionSection />
        <ParallaxSecOne />
      </main>
    </div>
  );
}
