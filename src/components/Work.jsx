import React from "react";
import { projects } from "../data/projects";

const Work = () => {
  return (
    <div>
      <h1 className="text-[10vw] text-secondary text-center my-9">My Work</h1>
      {projects.map((project) => (
        <a key={project.id} href={`/project/${project.id}`}>
          <div className="flex flex-wrap justify-center WrkCntr my-9">
            <img className="WrkImg" src={project.wrkimg} alt={project.title} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Work;
