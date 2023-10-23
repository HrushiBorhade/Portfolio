import Link from "next/link";
import { modal } from "./Projects";

interface ProjectProps {
  index: number;
  title: string;
  description: string;
  link: string;
  setModal: ({}: modal) => void;
}

const Project = ({
  index,
  title,
  description,
  setModal,
  link,
}: ProjectProps) => {
  return (
    <div
      className=" w-[100%]  px-5 md:px-0  p-[50px_100px_50px_100px]  border-t border-t-zinc-800 border-b-zinc-800 last:border-b  project-hover"
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
    >
      <Link href={link} target="_blank">
        <div className="flex items-center justify-between gap-4 md:justify-around">
          <h2 className=" font-syne text-gradient font-bold text-2xl sm:text-4xl lg:text-6xl m-0 transition-[all_0.4s]">
            {title}
          </h2>
          <p className="transition-[all_0.4s] m-0 subtext-gradient text-lg font-syne font-medium">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Project;
