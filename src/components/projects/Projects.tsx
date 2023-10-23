"use client";

import { useState } from "react";
import Project from "./Project";
import Modal from "./Modal";
export interface project {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
}
interface ProjectsProps {}
export const projects: project[] = [
  {
    title: "AskDoc",
    description: "Ask Questions & chat with your Documents",
    src: "askdoc.png",
    color: "#14021a",
    link: "https://askdoc-ai.vercel.app/",
  },
  {
    title: "Devlink",
    description: "Unifying Developers around the world",
    src: "devlink.png",
    color: "#120a24",
    link: "https://devlink-hrushiborhade.vercel.app/",
  },
  {
    title: "Sage.ai",
    description: "Your Mental Health Companion",
    src: "sage-ai.png",
    color: "#939b5f",
    link: "https://sage-ai-hrushi.vercel.app/",
  },
  {
    title: "NoteNexus",
    description: "Craft Your Thoughts with Ease",
    src: "notenexus.png",
    color: "#EFE8D3",
    link: "https://github.com/HrushiBorhade/NoteNexus",
  },
];
export type modal = {
  active: boolean;
  index: number;
};
const Projects = ({}: ProjectsProps) => {
  const [modal, setModal] = useState<modal>({ active: false, index: 0 });
  return (
    <div className="flex h-[110vh] items-center justify-center" id="work">
      <div className="flex flex-col text-start   items-start justify-center  w-[340px] sm:w-[500px] lg:w-[1000px]">
        <p className="p-4 mb-4 text-sm subtext-gradient font-syne ">
          Recent work
        </p>

        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              description={project.description}
              title={project.title}
              link={project.link}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </div>
  );
};

export default Projects;
