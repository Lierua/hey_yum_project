"use client";

import { useState } from "react";
import LinkButton from "../utilityComponents/LinkButton";
import Image from "next/image";

const Hero = () => {
  const [active, setActive] = useState<keyof typeof variants>("orange");

  const variants = {
    orange: {
      bgColor: "--orange",
      color: "--light_green",
      pack: "--orange",
      name: "TRIASSIC GARDEN!",
      link: "detail/40853efb-2d70-4653-9a3d-b476ada5bb0e?id=40853efb-2d70-4653-9a3d-b476ada5bb0e",
    },
    green: {
      bgColor: "--green",
      color: "--magenta",
      pack: "--green",
      name: "MAGIC GARDEN!",
      link: "detail/e74da739-c0b6-49da-9abf-a7f074603dc5?id=e74da739-c0b6-49da-9abf-a7f074603dc5",
    },
    yellow: {
      bgColor: "--blue",
      color: "--yellow",
      pack: "--yellow",
      name: "SOUR FLOWER!",
      link: "detail/11a63138-f2e0-438a-9590-c49a8451b5d4?id=11a63138-f2e0-438a-9590-c49a8451b5d4",
    },
    blue: {
      bgColor: "--yellow",
      color: "--orange",
      pack: "--blue",
      name: "LOVE SPRING!",
      link: "detail/868a226f-53e4-4fb3-93d1-20bb39fbd31e?id=868a226f-53e4-4fb3-93d1-20bb39fbd31e",
    },
  } as const;

  const current = variants[active];

  return (
    <div className="fullbleed grid grid-cols-[2fr_3fr] h-screen ">
      <div className="">
        <Herocard {...current} text="See now" />
      </div>

      <div className="bg-(--white) grid grid-rows-3 overflow-hidden">
        <Image
          loading="eager"
          src={`/assets/images/home/title.svg`}
          width={900}
          height={224}
          alt={"title card"}
          className="mx-auto  h-auto w-auto"
        />
        <div className="mt-[40]">
          <div
            onClick={() => setActive("green")}
            className={`transition-all duration-100 ease-in cursor-pointer py-3
              w-full bg-(--green) flex gap-[30] items-center px-8 
              ${active === "green" ? "py-6" : "hover:py-6"}`}
          >
            <h2
              className={`text-[40px]! text-(--white) font-lilita
                transition-all duration-300 ease-out
                ${active === "green" ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}
            >
              &#60;
            </h2>

            <h2 className="text-[36px]! text-(--white) font-lilita">
              MAGIC FOREST!
            </h2>
          </div>
          <div
            onClick={() => setActive("orange")}
            className={`transition-all duration-100 ease-in cursor-pointer py-3
              w-full bg-(--orange) flex gap-[30] items-center px-8 
              ${active === "orange" ? "py-6" : "hover:py-6"}`}
          >
            <h2
              className={`text-[40px]! text-(--white) font-lilita
                transition-all duration-300 ease-out
                ${active === "orange" ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}
            >
              &#60;
            </h2>

            <h2 className="text-[36px]! text-(--white) font-lilita">
              TRIASSIC GARDEN!
            </h2>
          </div>
          <div
            onClick={() => setActive("yellow")}
            className={`transition-all duration-100 ease-in cursor-pointer py-3
              w-full bg-(--yellow) flex gap-[30] items-center px-8 
              ${active === "yellow" ? "py-6" : "hover:py-6"}`}
          >
            <h2
              className={`text-[40px]! text-(--white) font-lilita
                transition-all duration-300 ease-out
                ${active === "yellow" ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}
            >
              &#60;
            </h2>
            <h2 className="text-[36px]! text-(--white) font-lilita">
              SOUR FLOWER!
            </h2>
          </div>
          <div
            onClick={() => setActive("blue")}
            className={`transition-all duration-100 ease-in cursor-pointer py-3
              w-full bg-(--blue) flex gap-[30] items-center px-8 
              ${active === "blue" ? "py-6" : "hover:py-6"}`}
          >
            <h2
              className={`text-[40px]! text-(--white) font-lilita
                transition-all duration-300 ease-out
                ${active === "blue" ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}
            >
              &#60;
            </h2>
            <h2 className="text-[36px]! text-(--white) font-lilita">
              LOVER SPRING!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

type Colors =
  | "--orange"
  | "--yellow"
  | "--green"
  | "--blue"
  | "--light_green"
  | "--magenta";

type CardProps = {
  name: string;
  text: string;
  link?: string;
  color: Colors;
  bgColor: Colors;
  pack: Colors;
};

const Herocard = ({ name, text, link, color, bgColor, pack }: CardProps) => {
  return (
    <div
      style={{
        backgroundColor: `var(${bgColor})`,
        paddingBlock: "2rem",
      }}
      className="grid w-full h-full overflow-hidden shadow-[inset_-20px_0_70px_-30px_var(--black)]"
    >
      <div className="grid col-1 row-1">
        <h1
          key={name}
          style={{ color: `var(${color})` }}
          className="title_text text-center mx-auto max-w-[600] leading-tight font-lilita animate-fade-in"
        >
          {name}
        </h1>

        <div className="mx-auto mb-8 mt-auto scale-120 z-20">
          <LinkButton color={color} text={text} link={link ?? ""} />
        </div>
      </div>

      <Image
        key={pack}
        src={`/assets/images/home/${pack}-pack.png`}
        width={600}
        height={224}
        alt="candy package"
        className="col-1 row-1 ml-auto animate-pack-in max-w-[500]"
      />
    </div>
  );
};

export { Herocard };
