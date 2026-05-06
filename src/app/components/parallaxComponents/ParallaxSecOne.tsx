"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function ParallaxSecOne() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    //useScroll hooken retunere "progress" for scroll på target(ref), et tal mellem 0 og 1
    target: ref,
    offset: ["start end", "end start"],
  });

  // layers
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const productY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -200]);
  //   const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 0]);

  return (
    <div ref={ref} className="h-[150vh]">
      <div className="sticky top-0 h-[500] w-full overflow-hidden flex items-center justify-center">
        <motion.div style={{ y: bgY }} className="absolute inset-0  bg-blue-700">
         
        </motion.div>
        <motion.div style={{ y: productY }} className="absolute z-20 w-[34rem] h-[38rem] rotate-18 shadow-2xs">
          <Image src="/assets/images/home/trassic-garden.png" alt="product" fill className="object-contain " />
        </motion.div>
        <motion.div style={{ y: textY }} className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-[14rem]! leading-[1.1] text-center text-(--white)">SWEET GOUEY NATTY</h1>
        </motion.div>
      </div>
    </div>
  );
}

export default ParallaxSecOne;
