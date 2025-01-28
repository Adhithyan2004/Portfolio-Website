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
        <div className="mx-auto w-[50vw]">
          <h1 className="text-6xl">
            Want to collaborate or learn more about what I can do?
            <span className="text-secondary"> Let's connect</span>
          </h1>
        </div>
        <div className="Btns flex justify-center gap-8 text-2xl my-9">
          <button className="text-secondary bg-black px-4 py-2 rounded-md hover:bg-secondary hover:text-black">
            <a href="/My-resume.pdf" download="My-resume.pdf">
              Resume
            </a>
          </button>
          <button
            onClick={handleNavCnt}
            className="text-primary bg-black px-4 py-2 rounded-md hover:bg-primary hover:text-black"
          >
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Cta;
