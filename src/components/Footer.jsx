import React from "react";
import Name from "../assets/name.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleCnt = () => {
    navigate("/contact");
  };

  return (
    <>
      <div className="Ftr text-2xl flex gap-6 pl-9 py-6">
        <span className="FtrYr font-sec">©2025</span>
        <span onClick={handleCnt} className="cursor-pointer">
          Contact
        </span>
        <span>
          <a
            href="https://www.instagram.com/_ad.psd_/ "
            target="_blank"
            rel="nooopener noreferrer"
          >
            Instagram
          </a>
        </span>
        <span>
          <a
            href="https://www.behance.net/adhithybanugob"
            target="_blank"
            rel="nooopener noreferrer"
          >
            Behance
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/adhithyan-banugoban-5b1515288/"
            target="_blank"
            rel="nooopener noreferrer"
          >
            Linkedin
          </a>
        </span>
      </div>
      <div>
        <img className="nmeImg mx-auto pt-8" src={Name} alt="Name image" />
      </div>
    </>
  );
};

export default Footer;
