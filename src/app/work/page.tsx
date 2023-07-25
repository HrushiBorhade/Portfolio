import Projects from "@/components/projects/Projects";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="animate-fade-in [--animation-delay:1000ms] opacity-0 translaye-y-[-10px]">
      <Projects />
    </div>
  );
};

export default page;
