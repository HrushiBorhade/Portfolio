"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { blur, translate } from "../../anim";
import { useEffect } from "react";
interface bodyProps {
  links: {
    title: string;
    href: string;
  }[];
  selectedLink: {
    isActive: boolean;
    index: number;
  };
  setSelectedLink: ({}: any) => void;
}
export default function Body({
  links,
  selectedLink,
  setSelectedLink,
}: bodyProps) {
  const getChars = (word: string) => {
    let chars: any = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, [pathname, router]);

  return (
    <div className="flex flex-col  gap-2 md:gap-4 flex-wrap mt-10 h-[50vh] pl-4 md:pl-20">
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <Link
            key={`l_${index}`}
            href={href}
            className="text-black uppercase "
          >
            <motion.p
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index });
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index });
              }}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index != index
                  ? "open"
                  : "closed"
              }
              className="m-0 flex overflow-hidden text-7xl pr-8 pt-2.5 font-syne font-bold"
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}
