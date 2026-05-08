"use client";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clicked = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={clicked} className="flex flex-col gap-4 min-w-0 border-t-2 h-fit p-4 hover:cursor-pointer transition-all duration-300 ease-in-out ">
      <div className="grid grid-cols-[0.5fr_2fr] gap-2 max-w-[100px]">
        <span className={`w-8 h-8 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}>
          <MdOutlineKeyboardArrowDown className="w-full h-full" />
        </span>
        <p>Ingridients</p>
      </div>

      <div className={isOpen ? "flex" : "hidden w-full p-4"}>
        <p className="w-full">Glucose syrup*, sugar*, gelling agent (pectin), acidity regulators (potassium tartrates, sodium tartrates), acid (citric acid), natural orange flavouring, natural peach flavouring, natural currant flavouring, natural strawberry flavouring, natural turmeric flavouring*, fruit juice concentrate* (elderberry, strawberry), glazing agent (carnauba wax*). *) from supervised organic agriculture</p>
      </div>
    </div>
  );
};

export default DropDown;
