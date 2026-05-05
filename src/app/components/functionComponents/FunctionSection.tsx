"use client";

import Benefits from "./BenefitsComponent";
import useScrollReveal from "@/app/hooks/useScrollReveal";

const FunctionSection = () => {
  const ref = useScrollReveal();

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="grid grid-cols-[2fr_1fr] gap-10 items-center">
        <div className="gap-[30px] flex flex-col items-center">
          <h1>TASTE BY NATURE</h1>
          <p className="max-w-[500px]">Tasty, organic and cruelty free certified Candy to respect the environment and nature, obtained with energy produced from sources renewable</p>
        </div>
        <Benefits />
      </div>
      <div ref={ref} className="grid grid-cols-[1fr_1fr_1fr] gap-0 h-[550px] scroll-reveal">
        <div className="reveal-item stagger-1">
          <Benefits />
        </div>
        <div className="reveal-item stagger-3">
          <Benefits />
        </div>
        <div className="reveal-item stagger-2">
          <Benefits />
        </div>
      </div>
    </div>
  );
};

export default FunctionSection;
