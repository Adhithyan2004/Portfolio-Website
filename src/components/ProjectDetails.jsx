import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <h2>Project not found!</h2>;
  }

  return (
    <div>
      <NavBar />
      <div className="PrjDtlsCntr mt-10 mx-16">
        <div className="flex items-center gap-6">
          <h1 className="PrjDtlsTtl text-9xl text-secondary">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </h1>
          <FaExternalLinkAlt color="#FF0490" size={45} />
        </div>
        <p className="PrjDtlsDesc my-12 text-justify leading-8 text-2xl">
          {project.description}
        </p>
        <p className="PrjDtlsCat text-3xl font-sec text-secondary mb-10">
          {project.category}
        </p>
        <img className="prjimgmain" src={project.image} alt={project.title} />
        <div className="xtrapicCntr flex gap-4 justify-center">
          <img className="xtrapics" src={project.img1} alt={project.title} />
          <img className="xtrapics" src={project.img2} alt={project.title} />
        </div>
        <Link
          to="/projects"
          className="text-secondary text-3xl text-center block hover:underline mt-10 mb-24"
        >
          Back to Projects
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
