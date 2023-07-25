import { FC } from "react";
import Image from "next/image";
interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="flex items-center justify-center w-full h-screen p-4 text-base text-center font-poppins text-zinc-300 animate-fade-in [--animation-delay:1000ms] opacity-0 translaye-y-[-10px]">
      Website is under development, will deploy complete portfolio with more
      cool transitions and animation soon
      <Image src="/me3.png" width={64} height={64} alt="memoji" />
    </div>
  );
};

export default page;
