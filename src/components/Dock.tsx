"use client";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Dock() {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      // @ts-ignore
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex items-end h-20 gap-2 px-1 pb-2 mx-auto border border-gray-800 sm:px-3 bg-stone-700/20 -z-10 rounded-2xl backdrop-opacity-50 backdrop-filter backdrop-blur-sm animate-fade-in [--animation-delay:1500ms] opacity-0 translaye-y-[-10px]"
    >
      <div className="hidden md:block">
        <AppIcon
          mouseX={mouseX}
          src="/leetcode.png"
          title="leetcode"
          link="https://leetcode.com/Hrushi18/"
        />
      </div>
      <AppIcon
        mouseX={mouseX}
        src="/twitter.png"
        title="twitter"
        link="https://twitter.com/BorhadeHrushi"
      />
      <AppIcon
        mouseX={mouseX}
        src="/github.png"
        title="github"
        link="https://github.com/HrushiBorhade"
      />
      <AppIcon
        mouseX={mouseX}
        src="/gmail.png"
        title="gmail"
        link="mailto:hrushiborhade123@gmail.com"
      />

      <AppIcon
        mouseX={mouseX}
        src="/linkedin.png"
        title="linkedin"
        link="https://www.linkedin.com/in/hrushikesh-borhade-9b742b1bb/"
      />
      <AppIcon
        mouseX={mouseX}
        src="/resume.png"
        title="resume"
        link="https://drive.google.com/file/d/1JawsJBzlaMyLoQYAUfXQ8N1in2I4xRzp/view?usp=sharing"
      />
    </motion.div>
  );
}

function AppIcon({
  mouseX,
  src,
  title,
  link,
}: {
  mouseX: MotionValue;
  src: string;
  title: string;
  link: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [65, 120, 65]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <>
      <motion.div ref={ref} style={{ width }} className="w-20 aspect-square">
        <Link href={link} target="_blank">
          <motion.img
            src={src}
            alt="i"
            width={80}
            height={80}
            style={{ width }}
          />
        </Link>
      </motion.div>
    </>
  );
}
