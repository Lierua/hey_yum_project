"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef, ReactNode } from "react";

type Props = {
  front: ReactNode;
  back: ReactNode;
};

const FlipCard = ({ front, back }: Props) => {
  const [flipped, setFlipped] = useState(false);
  
  const handleEnter = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div className="max-h-96 w-full h-full [perspective:1000px] text-(--white)!" onMouseEnter={handleEnter}>
      <motion.div animate={{ rotateY: flipped ? 180 : 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} className="relative h-full w-full [transform-style:preserve-3d]">
        <div className="absolute inset-0 overflow-hidden bg-(--black) backface-hidden">{front}</div>
        <div className="absolute inset-0 overflow-hidden bg-(--black) [transform:rotateY(180deg)] backface-hidden">{back}</div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
