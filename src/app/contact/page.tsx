"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";

import { Card } from "@/components/card";

const socials = [
  {
    icon: <Twitter size={20} />,
    href: "https://twitter.com/BorhadeHrushi",
    label: "Twitter",
    handle: "@BorhadeHrushi",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:hrushiborhade123@gmail.com",
    label: "Email",
    handle: "hrushiborhade123@gmail.com",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/HrushiBorhade",
    label: "Github",
    handle: "HrushiBorhade",
  },
];

export default function Example() {
  return (
    <div className="bg-black ">
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-16 md:mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {socials.map((s, i) => (
            <Card key={i}>
              <Link
                href={s.href}
                target="_blank"
                className="relative flex flex-col items-center gap-4 p-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="font-bold duration-150 lg:text-xl xl:text-2xl text-zinc-200 text-gradient group-hover:text-white font-syne">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm font-medium text-center duration-1000 font-syne text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
