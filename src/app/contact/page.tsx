import Dock from "@/components/Dock";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="relative flex items-center justify-center w-full h-screen p-4 text-base text-center font-poppins animate-fade-in [--animation-delay:1000ms] opacity-0 translaye-y-[-10px]">
      Links to my Github, Resume , Mail & <br /> social media handles👇🏼
      <div className="fixed max-w-6xl transform -translate-x-1/2 left-1/2 bottom-5">
        <Dock />
      </div>
    </div>
  );
};

export default page;
