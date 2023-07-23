"use client";
import { AnimatePresence, delay, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Nav from "./nav/page";
import { background, bg, opacity, transition } from "./anim";
import Image from "next/image";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const [isActive, setIsActive] = useState<Boolean>(false);
  return (
    <motion.div
      variants={bg}
      animate={isActive ? "open" : "closed"}
      className="fixed z-50 w-full backdrop-blur-[12px] animate-fade-in-opp  [--animation-delay:1500ms] opacity-0 translaye-y-[20px]"
    >
      <motion.div className="relative flex p-2.5 pt-4items-center justify-center text-md font-medium uppercase md:text-sm lg:text-base">
        <Link
          href="/"
          className="absolute top-0 font-medium tracking-tight capitalize left-4 text sm:top-1"
        >
          {isActive ? (
            <Image
              src="/me2.png"
              width={48}
              height={48}
              alt="memoji"
              className="mt-1 scale-125 hover:scale-150 w-14 h-14 "
            />
          ) : (
            <Image
              src="/me.png"
              width={48}
              height={48}
              alt="memoji"
              className="w-12 h-12 mt-1 sm:w-12 sm:h-12"
            />
          )}
        </Link>

        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="flex items-center justify-center gap-2 pt-4 cursor-pointer "
        >
          <div
            className={`w-6 relative pointer-events-none  after:content-[''] after:h-[2px] after:w-[100%] after:bg-gray-400 after:relative after:block after:transition-[all_1s_cubic-bezier(0.76,_0,_0.24,_1)] after:-top-1 before:content-[''] before:h-[2px] before:w-[100%] before:bg-gray-400 before:relative before:block before:transition-[all_1s_cubic-bezier(0.76,_0,_0.24,_1)]  before:top-1 ${
              isActive
                ? "after:rotate-45 after:-top-[1px]   before:-rotate-45 before:top-[1px]"
                : ""
            }`}
          ></div>
          <div className="relative flex items-center even:">
            <motion.p
              className="m-0 font-medium font-poppins"
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p
              className="absolute m-0 font-medium opacity-0 font-poppins"
              variants={opacity}
              animate={isActive ? "open" : "closed"}
            >
              Close
            </motion.p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className="bg-black/90 h-screen w-full absolute left-0 top-[100%]"
      ></motion.div>

      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </motion.div>
  );
};

export default Header;
