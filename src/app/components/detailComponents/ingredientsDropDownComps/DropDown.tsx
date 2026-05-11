"use client";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type Props = {
  children: React.ReactNode;
  header: string;
};
const DropDown = ({ children, header }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const clicked = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={clicked} className="flex flex-col gap-4 group min-w-0 border-t-2 h-fit p-4 hover:bg-(--whiteHover) hover:cursor-pointer transition-all duration-300 ease-in-out ">
      <div className="grid grid-cols-[0.5fr_2fr] gap-2 max-w-[100px] group-hover:text-(--orange) ">
        <span className={`w-8 h-8 transition-transform duration-300 ease-in-out ${isOpen ? "rotate-180" : "rotate-0"}`}>
          <MdOutlineKeyboardArrowDown className="w-full h-full" />
        </span>
        <p className="group">{header}</p>
      </div>

      <div className={isOpen ? "flex" : "hidden w-full p-4"}>{children}</div>
    </div>
  );
};

export default DropDown;
