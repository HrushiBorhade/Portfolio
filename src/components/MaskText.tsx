"use client";
import { useInView, motion, delay } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
interface MaskTextProps {
  phrases: string[];
}
const MaskText = ({ phrases }: MaskTextProps) => {
  const animate = {
    initial: { y: "140%" },
    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 0.75,
        delay: 0.1 * i,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
  };
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-20%" });

  return (
    <div ref={body} className="relative ">
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className="overflow-hidden">
            <motion.p
              custom={index}
              variants={animate}
              initial="initial"
              animate={isInView ? "enter" : ""}
              className="-mb-1 text-[28px] font-bold text-gradient  md:text-4xl font-syne md:mb-3"
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
      <Image
        src="/arrow.svg"
        width={80}
        height={8}
        alt="arrow scribble"
        className="absolute left-32 top-5 md:left-[170px] md:top-6 rotate-[15deg] animate-fade-in-rotate [--animation-delay:4000ms] opacity-0 translaye-y-[-10px] "
      />
    </div>
  );
};

export default MaskText;
