"use client";

import { useState } from "react";
import LinkButton from "../utilityComponents/LinkButton";
import Image from "next/image";

const Hero = () => {
  const [active, setActive] = useState("orange");

  return (
    <div className="fullbleed grid grid-cols-[2fr_3fr] h-screen">
      {active === "orange" && (
        <Herocard
          bgColor="--orange"
          color="--light_green"
          pack="--orange"
          name="TRIASSIC GARDEN!"
          text="See now"
          link=""
        />
      )}
      {active === "green" && (
        <Herocard
          bgColor="--green"
          color="--magenta"
          pack="--green"
          name="MAGIC GARDEN!"
          text="See now"
          link=""
        />
      )}
      {active === "yellow" && (
        <Herocard
          bgColor="--blue"
          color="--yellow"
          pack="--yellow"
          name="SOUR FLOWER!"
          text="See now"
          link=""
        />
      )}
      {active === "blue" && (
        <Herocard
          bgColor="--yellow"
          color="--orange"
          pack="--blue"
          name="LOVE SPRING!"
          text="See now"
          link=""
        />
      )}
      <div className="bg-(--white) grid overflow-hidden">
        <Image
          loading="eager"
          src={`/assets/images/home/title.svg`}
          width={900}
          height={224}
          alt={"title card"}
          className="mx-auto  h-auto w-auto"
        />
        <div className="flex flex-col">
          <div
            onClick={() => setActive("green")}
            className={`transition-all duration-100 ease-in cursor-pointer
          w-full h-[90] bg-(--green) grid items-center px-8 ${active === "green" ? "scale-103" : "hover:scale-103"}`}
          >
            <h2 className="text-[36px]! text-(--white)">MAGIC FOREST!</h2>
          </div>
          <div
            onClick={() => setActive("orange")}
            className={`transition-all duration-100 ease-in cursor-pointer
          w-full h-[90] bg-(--orange) grid items-center px-8 ${active === "orange" ? "scale-103" : "hover:scale-103"}`}
          >
            <h2 className="text-[36px]! text-(--white)">TRIASSIC GARDEN!</h2>
          </div>
          <div
            onClick={() => setActive("yellow")}
            className={`transition-all duration-100 ease-in cursor-pointer
          w-full h-[90] bg-(--yellow) grid items-center px-8 ${active === "yellow" ? "scale-103" : "hover:scale-103"}`}
          >
            <h2 className="text-[36px]! text-(--white)">SOUR FLOWER!</h2>
          </div>
          <div
            onClick={() => setActive("blue")}
            className={`transition-all duration-100 ease-in cursor-pointer
          w-full h-[90] bg-(--blue) grid items-center px-8 ${active === "blue" ? "scale-103" : "hover:scale-103"}`}
          >
            <h2 className="text-[36px]! text-(--white)">LOVER SPRING!</h2>
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
        paddingBlock: "max(3rem, 5%)",
      }}
      className="grid w-full h-full overflow-hidden"
    >
      <div className="grid col-1 row-1">
        <h1
          style={{ color: `var(${color})` }}
          className="title_text text-center mx-auto max-w-[600] leading-tight"
        >
          {name}
        </h1>
        <div className="mx-auto mb-8 mt-auto scale-120 z-20">
          <LinkButton color={color} text={text} link={link ?? ""} />
        </div>
      </div>
      <Image
        loading="eager"
        src={`/assets/images/home/${pack}-pack.png`}
        width={550}
        height={224}
        alt={"candy package"}
        className=" col-1 row-1 ml-auto translate-x-[100px] translate-y-[200px] rotate-[-25deg]  h-auto w-auto"
      />
    </div>
  );
};

export { Herocard };
