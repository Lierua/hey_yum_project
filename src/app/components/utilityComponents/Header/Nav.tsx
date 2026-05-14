"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

type Page = "home" | "products" | "aboutUs" | "contact";

type Props = {
  page: Page;
};

const Nav = ({ page }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll); //efter visible for førstegange, fjernede event listener
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.4s ease" }}
      className="grid fixed top-0 left bg-(--white) z-100 border-b-3 border-(--black) w-full ContentWitdh"
    >
      <nav className="flex justify-between h-[60] *:my-auto">
        <Link href={"/"}>
          <Image
            src="/assets/images/home/Logo.svg"
            alt="image"
            width={100}
            height={100}
            className="object-center w-[120] h-auto object-cover hover:scale-110 transition-all duration-100 ease-in"
          />
        </Link>
        <div className="w-fit h-full flex gap-6 justify-between items-center">
          <Link href={"/productList"}>
            <p
              className={` hover:scale-110 transition-all duration-100 ease-in
            ${page === "products" && "font-semibold"} `}
            >
              Products
            </p>
          </Link>
          <Link href={"/aboutUs"}>
            <p
              className={` hover:scale-110 transition-all duration-100 ease-in
            ${page === "aboutUs" && "font-semibold"} `}
            >
              About us
            </p>
          </Link>
          <Link href={"/contact"}>
            <p
              className={` hover:scale-110 transition-all duration-100 ease-in
            ${page === "contact" && "font-semibold"} `}
            >
              Contact
            </p>
          </Link>
        </div>
        <div className="max-h-[50%] aspect-square">
          <Image
            src="/assets/svg/basket.svg"
            alt="image"
            width={100}
            height={100}
            className="object-center object-cover hover:scale-110 hover:cursor-pointer transition-all duration-100 ease-in"
          />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
