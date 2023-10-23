"use client";
import { AnimatePresence, delay, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "./nav/page";
import { background, bg, opacity, transition } from "./anim";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const [isActive, setIsActive] = useState<Boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    setIsActive(false);
    router.refresh();
  }, [pathname, router]);
  return (
    <motion.div
      variants={bg}
      animate={isActive ? "open" : "closed"}
      className="fixed  z-50 w-full  animate-fade-in-opp  [--animation-delay:3500ms] opacity-0 translaye-y-[20px]"
    >
      <motion.div className="relative flex p-2.5 pt-4items-center justify-center text-md font-medium uppercase md:text-sm lg:text-base">
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
              className="m-0 font-medium font-syne"
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p
              className="absolute m-0 font-medium opacity-0 font-syne"
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
        className="bg-transparent h-screen w-full absolute left-0 top-[100%]"
      ></motion.div>

      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </motion.div>
  );
};

export default Header;
