// src/components/PrjctTxt.jsx
import React from "react";
import { projects } from "../data/projects.js";

const PrjctTxt = () => {
  return (
    <div className="PrjCntr mt-10 mx-10">
      <h1 className="PrjTtl text-8xl mb-20 mx-10 text-secondary">Projects</h1>
      <div className="flex flex-col flex-wrap items-center gap-8 ]">
        {projects.map((project) => (
          <a key={project.id} href={`/project/${project.id}`}>
            <img className="prjimg" src={project.image} alt={project.title} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default PrjctTxt;
