import React from "react";
import react from "../assets/react.png";
import framer from "../assets/framer.png";
import figma from "../assets/figma.png";
import affinity from "../assets/affinity.jpg";
import psd from "../assets/psd.png";
import tailwind from "../assets/taiwldc.jpg";

const Bento = () => {
  return (
    <div className="MainGrid grid grid-cols-12 grid-rows-12 h-[95vh] gap-3 m-7">
      <div className="Skills bg-blk row-span-12 col-span-3 rounded-xl p-5 flex flex-col flex-wrap justify-center gap-5">
        <h1 className="sklsTtl font-sec text-primary text-[4.2vw] gap-3">
          My Skills
        </h1>
        <div className="skls text-secondary font-sec flex flex-col gap-7 text-[2.2vw]">
          <span>User Experience and User Interface</span>
          <span>Frontend</span>
          <span>Wireframing</span>
          <span>Poster design</span>
          <span>Responsive Design</span>
          <span>Logo designing</span>
        </div>
      </div>
      <div className="SofWrs bg-blk row-span-4 col-span-5 justify-center rounded-xl flex flex-col flex-wrap gap-9 p-5 font-sec">
        <div className="sftflx flex items-center text-[2vw] gap-3">
          <img className="sftimg" src={react} alt="react logo" />
          <p className="sftwrs text-primary">React</p>
        </div>
        <div className="sftflx flex items-center text-[2vw] gap-3">
          <img className="sftimg" src={framer} alt="react logo" />
          <p className="sftwrs text-primary">Framer</p>
        </div>
        <div className="sftflx flex items-center text-[2vw] gap-3">
          <img className="sftimg" src={affinity} alt="react logo" />
          <p className="sftwrs text-primary">Affinity</p>
        </div>
        <div className="sftflx flex items-center text-[2vw] gap-3">
          <img className="sftimg" src={psd} alt="react logo" />
          <p className="sftwrs text-primary">Photoshop</p>
        </div>
        <div className="sftflx flex items-center text-[2vw] gap-3">
          <img className="sftimg" src={figma} alt="react logo" />
          <p className="sftwrs text-primary">Figma</p>
        </div>
        <div className="sftflx flex items-center text-[2vw] gap-3">
          <img className="sftimg" src={tailwind} alt="react logo" />
          <p className="sftwrs text-primary">Tailwind</p>
        </div>
      </div>
      <div className="Bio bg-blk row-span-8 col-span-4 rounded-xl font-sec p-6 flex items-center">
        <p className="BioTxt text-primary text-[2vw]">
          Design, for me, goes beyond
          <span className="text-secondary"> solving problems.</span> It's about
          improving user experiences, striking the perfect balance between
          <span className="text-secondary"> aesthetics </span>and functionality,
          and even creating products that form,
          <span className="text-secondary">
            emotional connections with users.
          </span>
          <br />
          <br />
          <span className="font-cur">-adhi</span>
        </p>
      </div>
      <div className="Title bg-blk row-span-4 col-span-5 rounded-xl flex justify-center items-center">
        <p className=" text-secondary font-sec text-center text-[7.5vw] leading-[7vw]">
          <span className="sftwrs text-primary">UI/UX</span> Developer
        </p>
      </div>
      <div className="Exp bg-blk row-span-4 col-span-9 rounded-xl font-sec p-4 flex flex-col  justify-center gap-[2vw]">
        <h1 className="ExpTtl text-secondary text-[2.5vw]">Experience</h1>
        <div className="ExpBdy flex flex-col text-[2vw]">
          <div className="test-1 flex justify-between pr-32">
            <p className="text-secondary">
              Critter Graphix
              {/* <span className="Exptym text-primary ml-[18vw]"> */}
            </p>
            <span className="Exptym text-primary">
              5 months, UI/UX designer.
            </span>
          </div>
          <div className="test-2 flex justify-between pr-32">
            <p className="text-secondary">
              TamrielAGI
              {/* <span className="Exptym text-primary ml-[21vw]"> */}
            </p>
            <span className="Exptym text-primary">
              Current, UI/UX designer,Frontend Developer.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;
