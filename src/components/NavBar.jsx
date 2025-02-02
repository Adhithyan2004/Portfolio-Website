import React from "react";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
const NavBar = () => {
  const navigate = useNavigate();

  const handleNavCnt = () => {
    navigate("/contact");
  };

  const handleNavWrk = () => {
    navigate("/projects");
  };

  const handleNavHome = () => {
    navigate("/");
  };

  const handleNavAbt = () => {
    navigate("/about");
  };

  return (
    <nav className="NCntr mx-16 flex items-center justify-between">
      <div className="Nlft flex items-center gap-8">
        <div className="MobNav">
          <h1 className="text-7xl cursor-pointer" onClick={handleNavHome}>
            A
          </h1>
          <div className="NrgtHmb">
            <HamburgerMenu />
          </div>
        </div>
        <div className="Nopts text-2xl flex gap-7 text-secondary">
          <span
            onClick={handleNavAbt}
            className="cursor-pointer transition delay-75 duration-200 ease-in-out hover:-translate-y-1 hover:scale-x-105"
          >
            About Me
          </span>
          <span
            className="cursor-pointer transition delay-75 duration-200 ease-in-out hover:-translate-y-1 hover:scale-x-105"
            onClick={handleNavWrk}
          >
            Projects
          </span>
          <span className="cursor-pointer transition delay-75 duration-200 ease-in-out hover:-translate-y-1 hover:scale-x-105">
            <a
              href="https://www.linkedin.com/in/adhithyan-banugoban-5b1515288/"
              target="_blank"
              rel="nooopener noreferrer"
            >
              LinkedIn
            </a>
          </span>
          <span className="cursor-pointer transition delay-75 duration-200 ease-in-out hover:-translate-y-1 hover:scale-x-105">
            <a
              href="https://www.behance.net/adhithybanugob"
              target="_blank"
              rel="nooopener noreferrer"
            >
              Behance
            </a>
          </span>
        </div>
      </div>
      <u
        onClick={handleNavCnt}
        className="Nrgt CntBtn text-2xl text-secondary transition delay-75 duration-200 ease-in-out hover:-translate-y-1 hover:scale-x-105 cursor-pointer"
      >
        Contact Me
      </u>
    </nav>
  );
};

export default NavBar;
