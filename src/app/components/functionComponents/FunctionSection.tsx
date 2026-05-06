"use client";

import Benefits from "./BenefitsComponent";
import Image from "next/image";
import useScrollReveal from "@/app/hooks/useScrollReveal";
import HeaderOneComp from "../utilityComponents/HeaderOneComp";

const FunctionSection = () => {
  const ref = useScrollReveal();

  return (
    <div className="flex flex-col gap-[4.5rem]">
      <div className="grid grid-cols-[2fr_1fr] gap-10 items-center">
        <div className="flex flex-col items-center">
          <span className="w-fit flex flex-col gap-7.5">
            {/* <h1>TASTY BY NATURE</h1> */}
            <HeaderOneComp text="TASTY BY NATURE" />
            <p className="max-w-[600px] leading-[130%] text-[2rem]!">Tasty, organic and cruelty free certified Candy to respect the environment and nature, obtained with energy produced from sources renewable</p>
          </span>
        </div>
        <Benefits />
      </div>
      <div ref={ref} className="grid grid-cols-[1fr_1fr_1fr] gap-0 h-[550px] scroll-reveal">
        <div className="reveal-item stagger-1">
          <Image src="/assets/images/home/loveSpring_sowerFlower_homeenv_shot.png" fill alt="image of candy" className="object-center object-cover" />
        </div>

        <div className="reveal-item stagger-3">
          <Image src="/assets/images/home/all_flavors_homeenv_shot.png" fill alt="image of candy" className="object-bottom object-contain " />
        </div>
        <div className="reveal-item stagger-1">
          <Image src="/assets/images/home/triassicGarden_homeenv_shot.png" fill alt="image of candy" className="object-center object-cover" />
        </div>
      </div>
    </div>
  );
};

export default FunctionSection;
