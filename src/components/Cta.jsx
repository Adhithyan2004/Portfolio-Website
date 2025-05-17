import React from "react";
import { useNavigate } from "react-router-dom";

const Cta = () => {
  const navigate = useNavigate();

  const handleNavCnt = () => {
    navigate("/contact");
  };

  return (
    <>
      <div className="my-32">
        <div className="CtaTtl mx-auto w-[50vw]">
          <h1 className="text-6xl CtaPara">
            Want to collaborate or learn more about what I can do?
            <span className="text-secondary"> Let's connect</span>
          </h1>
        </div>
        <div className="flex justify-center gap-8 text-2xl Btns my-9">
          <button className="px-4 py-2 bg-black rounded-md text-secondary hover:bg-secondary hover:text-black">
            <a href="/Adhithyan_Resume.pdf" download="Adhithyan_Resume.pdf">
              Resume
            </a>
          </button>
          <button
            onClick={handleNavCnt}
            className="px-4 py-2 bg-black rounded-md text-primary hover:bg-primary hover:text-black"
          >
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Cta;
