"use client";
import styles from "./page.module.css";
import { useRef, useEffect, useState, Suspense } from "react";
import Image from "next/image";
import Dock from "@/components/Dock";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Projects from "@/components/projects/Projects";
import MaskText from "@/components/MaskText";
import { AnimatePresence, useInView } from "framer-motion";
import Preloader from "@/components/Preloader";
import Header from "@/components/header/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  const firstText2 = useRef(null);
  const secondText2 = useRef(null);

  const slider2 = useRef(null);
  let xPercent2 = 0;
  let direction2 = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider2.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction2 = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent2 < -100) {
      xPercent2 = 0;
    } else if (xPercent2 > 0) {
      xPercent2 = -100;
    }
    gsap.set(firstText2.current, { xPercent: xPercent2 });
    gsap.set(secondText2.current, { xPercent: xPercent2 });
    requestAnimationFrame(animate);
    xPercent2 += 0.1 * direction2;
  };
  const phrases = [
    "Hey, I'm Hrushi.",
    "Developer & Student.",
    "I create elevating Digital Experiences✨",
  ];

  return (
    <main className="relative overflow-hidden ">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <div className="relative w-full grainy h-[100vh] ">
        <div className="absolute p-2  top-[20%] md:top-[20%] left-[10%] md:left-[15%] flex items-center flex-col  ">
          <MaskText phrases={phrases} />
        </div>

        <div className="absolute custom-top-2  mt-10 md:mt-20 animate-fade-in [--animation-delay:3000ms] opacity-0 translaye-y-[-10px]">
          <div ref={slider2} className="relative whitespace-nowrap ">
            <p
              ref={firstText2}
              className="relative m-0  text-white tracking-tight font-syne font-bold text-[5rem] md:text-[11rem] pr-6    md:pr-12 "
            >
              Creative Developer -
            </p>
            <p
              ref={secondText2}
              className="absolute left-[100%] tracking-tight top-0 m-0 text-white font-syne font-bold text-[5rem] md:text-[11rem] pr-12  "
            >
              Creative Developer -
            </p>
          </div>
        </div>

        <div className="fixed max-w-6xl transform -translate-x-1/2 left-1/2 bottom-5">
          <Dock />
        </div>
      </div>
      <Projects />
      <h2 className="mb-36 text-base w-[70%] mx-auto text-center font-poppins md:text-xl text-zinc-500">
        {" "}
        Website is under Development, Will deploy the complete portfolio with
        even more cooler animations soon🚀
      </h2>
    </main>
  );
}
