import Image from "next/image";
import Nav from "./components/utilityComponents/Header/Nav";

export default function Home() {
  return (
    <div className="grid">
      <Nav page="home" />
      <main className=""></main>
    </div>
  );
}
