import React from "react";

const AbtSection = () => {
  return (
    <div className="bg-secondary mt-28 h-auto mb-60">
      <p className="text-primary p-7 ml-12 text-9xl w-[87vw]">
        I LEVERAGE STRATEGIC THINKING,{" "}
        <span className="text-black">CREATIVE</span> VISION, AND TECHNICAL
        EXPERTISE TO CREATE
        <span className="text-black"> COMPELLING DIGITAL SOLUTIONS.</span>
      </p>
      <div className="sklscntr ml-12 p-7 mt-32 text-4xl flex flex-col gap-5">
        <h1 className="text-6xl">SKILLS AND EXPERTISE</h1>
        <div className="text-primary flex flex-col gap-5">
          <p>FRONTEND</p>
          <p>UI/UX DESIGN</p>
          <p>BRANDING & IDENTITY</p>
          <p>RESPONSIVE DESIGNING</p>
        </div>
      </div>
      <div className="expcntr pb-24 ml-12 p-7 mt-3  text-4xl flex flex-col gap-5">
        <h1 className="text-6xl">EXPERIENCE</h1>
        <div className="text-primary flex flex-col gap-8">
          <div className="flex gap-60">
            <p className="text-black w-64">CRITTER GRAPHIX</p>
            <p>5 MONTHS, UI/UX DESIGNER INTERN</p>
          </div>
          <div className="flex gap-60">
            <p className="text-black w-64">TAMRIELAGI</p>
            <p>CURRENT, UI/UX DESIGNER, FRONTEND DEVELOPER INTERN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbtSection;
