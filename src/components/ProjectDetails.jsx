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
      <div className="mx-16 mt-10 PrjDtlsCntr">
        <div className="flex items-center gap-6">
          <h1 className="PrjDtlsTtl text-9xl text-secondary">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.title}
            </a>
          </h1>
          <FaExternalLinkAlt color="#FF0490" size={45} />
        </div>
        <p className="my-12 text-2xl leading-8 text-justify PrjDtlsDesc">
          {project.description}
        </p>
        <p className="mb-10 text-3xl PrjDtlsCat font-sec text-secondary">
          {project.category}
        </p>
        <img className="prjimgmain" src={project.image} alt={project.title} />
        <div className="flex justify-center gap-4 xtrapicCntr">
          <img className="xtrapics" src={project.img1} alt={project.title} />
          <img className="xtrapics" src={project.img2} alt={project.title} />
        </div>
        <Link
          to="/projects"
          className="block mt-10 mb-24 text-3xl text-center text-secondary hover:underline"
        >
          Back to Projects
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
