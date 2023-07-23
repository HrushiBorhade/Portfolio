"use client ";

import { motion } from "framer-motion";
import { useState } from "react";
import { height } from "../anim";
import Body from "./Body/page";
import ImageNav from "./Image/page";
interface navProps {}
const links = [
  {
    title: "Home",
    href: "/",
    src: "home3.webp",
  },
  {
    title: "About",
    href: "/about",
    src: "about2.png",
  },
  {
    title: "Work",
    href: "/work",
    src: "work.png",
  },
  {
    title: "Contact",
    href: "/contact",
    src: "contact.png",
  },
];
type select = {
  isActive: boolean;
  index: number;
};
const Nav = ({}) => {
  const [selectedLink, setSelectedLink] = useState<select>({
    isActive: false,
    index: 0,
  });
  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="overflow-hidden"
    >
      <div className="flex gap-12 mb-20 lg:justify-around lg:mb-0">
        <div className="flex flex-col justify-between">
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          {/* <Footer /> */}
        </div>
        {/* <ImageNav
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        /> */}
      </div>
    </motion.div>
  );
};

export default Nav;
