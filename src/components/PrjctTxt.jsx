// src/components/PrjctTxt.js
import { projects } from "../data/projects.js";

const PrjctTxt = () => {
  return (
    <div className="mx-10 mt-10 PrjCntr">
      <h1 className="mx-10 mb-20 PrjTtl text-8xl text-secondary">Projects</h1>
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
