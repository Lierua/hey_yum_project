"use client";
import { useState } from "react";

const BasketCounter = () => {
  const [counter, setCounter] = useState(1);
  return (
    <div className="w-[155] h-[42] rounded-full border-3 border-(--black) flex justify-between text-center items-center px-4">
      <p
        onClick={() => {
          counter > 1 && setCounter(counter - 1);
        }}
        className="text-[25px]! mt-[-0.3rem] cursor-pointer hover:scale-110 active:scale-90
       transition-all duration-150 ease-in"
      >
        -
      </p>
      <p>{counter}</p>
      <p
        onClick={() => setCounter(counter + 1)}
        className="text-[25px]! mt-[-0.5rem] cursor-pointer hover:scale-110 active:scale-90
       transition-all duration-150 ease-in"
      >
        +
      </p>
    </div>
  );
};

export default BasketCounter;
