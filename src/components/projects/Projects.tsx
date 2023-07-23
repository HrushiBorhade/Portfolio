"use client";

import { useState } from "react";
import Project from "./Project";
import Modal from "./Modal";

interface ProjectsProps {}
const projects = [
  {
    title: "Devlink",
    description: "Unifying Developers around the world",
    src: "devlink.png",
    color: "#4b4657",
  },
  {
    title: "Sage.ai",
    description: "Your Mental Health Companion",
    src: "sage-ai.png",
    color: "#939b5f",
  },
  {
    title: "NoteNexus",
    description: "Craft Your Thoughts with Ease",
    src: "notenexus.png",
    color: "#EFE8D3",
  },
  {
    title: "Pixel.ai",
    description: "AI-Powered Image Creation",
    src: "pixel-ai.jpg",
    color: "#706D63",
  },
];
export type modal = {
  active: boolean;
  index: number;
};
const Projects = ({}: ProjectsProps) => {
  const [modal, setModal] = useState<modal>({ active: false, index: 0 });
  return (
    <div className="flex h-[110vh] items-center justify-center">
      <div className="flex flex-col text-start  items-start justify-center  w-[340px] sm:w-[500px] lg:w-[1000px]">
        <p className="p-4 mb-4 text-sm text-gray-400 font-poppins">
          Recent work
        </p>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              description={project.description}
              title={project.title}
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
