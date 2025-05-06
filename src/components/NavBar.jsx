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
    <nav className="flex items-center justify-between mx-16 NCntr">
      <div className="flex items-center gap-8 Nlft">
        <div className="MobNav">
          <h1 className="cursor-pointer text-7xl" onClick={handleNavHome}>
            A
          </h1>
          <div className="NrgtHmb">
            <HamburgerMenu />
          </div>
        </div>
        <div className="flex text-2xl Nopts gap-7 text-secondary">
          <span
            onClick={handleNavAbt}
            className="transition duration-200 ease-in-out delay-75 cursor-pointer hover:-translate-y-1 hover:scale-x-105"
          >
            About Me
          </span>
          <span
            className="transition duration-200 ease-in-out delay-75 cursor-pointer hover:-translate-y-1 hover:scale-x-105"
            onClick={handleNavWrk}
          >
            Projects
          </span>
          <span className="transition duration-200 ease-in-out delay-75 cursor-pointer hover:-translate-y-1 hover:scale-x-105">
            <a
              href="https://www.linkedin.com/in/adhithyan-banugoban-5b1515288/"
              target="_blank"
              rel="nooopener noreferrer"
            >
              LinkedIn
            </a>
          </span>
          <span className="transition duration-200 ease-in-out delay-75 cursor-pointer hover:-translate-y-1 hover:scale-x-105">
            <a
              href="https://www.behance.net/adhithybanugob"
              target="_blank"
              rel="nooopener noreferrer"
            >
              Behance
            </a>
          </span>
          <span className="transition duration-200 ease-in-out delay-75 cursor-pointer hover:-translate-y-1 hover:scale-x-105">
            <a
              href="https://github.com/Adhithyan2004"
              target="_blank"
              rel="nooopener noreferrer"
            >
              Github
            </a>
          </span>
        </div>
      </div>
      <u
        onClick={handleNavCnt}
        className="text-2xl transition duration-200 ease-in-out delay-75 cursor-pointer Nrgt CntBtn text-secondary hover:-translate-y-1 hover:scale-x-105"
      >
        Contact Me
      </u>
    </nav>
  );
};

export default NavBar;
