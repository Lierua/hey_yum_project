"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef, ReactNode } from "react";

type Props = {
  front: ReactNode;
  back: ReactNode;
};

const FlipCard = ({ front, back }: Props) => {
  const [flipped, setFlipped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const handleEnter = () => {
    setIsPaused(true);

    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 1500); // pause after mouse leaves
  };

  return (
    <div className="max-w-80 max-h-96 w-full h-full [perspective:1000px]" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <motion.div animate={{ rotateY: flipped ? 180 : 0 }} transition={{ duration: 0.2, ease: "easeInOut" }} className="relative h-full w-full [transform-style:preserve-3d]">
        <div className="absolute inset-0 rounded-2xl bg-red-400 [backface-visibility:hidden]">{front}</div>
        <div className="absolute inset-0 rounded-2xl bg-blue-400 [transform:rotateY(180deg)] [backface-visibility:hidden]">{back}</div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
