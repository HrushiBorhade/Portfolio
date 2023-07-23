import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { opacity } from "../../anim";
interface imgProps {
  src: string;
  isActive: boolean;
}
export default function ImageNav({ src, isActive }: imgProps) {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive ? "open" : "closed"}
      className=" lg:flex lg:items-center lg:justify-center p-5 pr-10  lg:w-[500px] lg:h-[450px] lg:relative"
    >
      <Image
        src={`/${src}`}
        width={500}
        height={400}
        alt="image"
        className="rounded-2xl lg:w-[550px] lg:h-[400px] object-cover"
      />
    </motion.div>
  );
}
