"use client";
import styles from "./page.module.css";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Dock from "@/components/Dock";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Projects from "@/components/projects/Projects";
import MaskText from "@/components/MaskText";
import { useInView } from "framer-motion";

export default function Home() {
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

  // const loader = useRef(null);
  // const path = useRef(null);
  // const initialCurve = 400;
  // const duration = 1000;
  // // @ts-ignore
  // let start;

  // // useEffect(() => {
  // //   setPath(initialCurve);
  // //   setTimeout(() => {
  // //     requestAnimationFrame(animate);
  // //   });
  // // }, []);
  // // @ts-ignore
  // const animate = (timestamp) => {
  //   // @ts-ignore
  //   if (start === undefined) {
  //     start = timestamp;
  //   }
  //   // @ts-ignore
  //   const elapsed = timestamp - start;

  //   const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration);
  //   setPath(newCurve);
  //   // @ts-ignore
  //   loader.current.style.top =
  //     easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";

  //   if (elapsed < duration) {
  //     requestAnimationFrame(animate);
  //   }
  // };
  // // @ts-ignore
  // const easeOutQuad = (time, start, end, duration) => {
  //   return -end * (time /= duration) * (time - 2) + start;
  // };

  // const loaderHeight = () => {
  //   // @ts-ignore
  //   const loaderBounds = loader.current.getBoundingClientRect();
  //   return loaderBounds.height;
  // };

  // const setPath = (curve: any) => {
  //   const width = window.innerWidth;
  //   const height = loaderHeight();
  //   // @ts-ignore
  //   path.current.setAttributeNS(
  //     null,
  //     "d",
  //     `M0 0
  //   L${width} 0
  //   L${width} ${height}
  //   Q${width / 2} ${height - curve} 0 ${height}
  //   L0 0`
  //   );
  // };
  const phrases = [
    "Hey, I'm Hrushi",
    "Developer & Student from India",
    "I create elevating Digital Experiences✨",
  ];

  return (
    <main className="relative overflow-hidden ">
      <div className="relative w-full  h-[100vh] ">
        <div className="absolute p-2  top-[20%] md:top-[20%] left-[10%] md:left-[15%] flex items-center flex-col  ">
          <MaskText phrases={phrases} />
        </div>

        <div className="absolute custom-top-2 animate-fade-in [--animation-delay:1000ms] opacity-0 translaye-y-[-10px]">
          <div ref={slider2} className="relative whitespace-nowrap ">
            <p
              ref={firstText2}
              className="relative m-0  text-gray-300  tracking-tight font-heading text-[8rem] md:text-[14rem] lg:text-[18rem] pr-12 "
            >
              Creative Developer -
            </p>
            <p
              ref={secondText2}
              className="absolute left-[100%] tracking-tight top-0 m-0 text-gray-300  font-heading text-[8rem] md:text-[14rem] lg:text-[18rem] pr-12  "
            >
              Creative Developer -
            </p>
          </div>
        </div>
        {/* <Image
          src="/hero.jpg"
          alt="hero image"
          priority={true}
          className="absolute  top-[100px]  -right-[50px] -z-10 "
          height={500}
          width={700}
        /> */}
        {/* <div ref={loader} className={styles.loader}>
        <svg fill="white">
          <path ref={path}></path>
        </svg>
      </div> */}
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
