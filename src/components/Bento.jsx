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
      <div className="flex flex-col flex-wrap justify-center col-span-3 gap-5 p-5 Skills bg-blk row-span-12 rounded-xl">
        <h1 className="sklsTtl font-sec text-primary text-[4.2vw] gap-3">
          My Skills
        </h1>
        <div className="skls text-secondary font-sec flex flex-col gap-7 text-[2.2vw]">
          <span>User Experience and User Interface</span>
          <span>Frontend</span>
          <span>Backend</span>
          <span>Wireframing</span>
          <span>Responsive Design</span>
          <span>Logo designing</span>
        </div>
      </div>
      <div className="flex flex-col flex-wrap justify-center col-span-5 row-span-4 p-5 SofWrs bg-blk rounded-xl gap-9 font-sec">
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
      <div className="flex items-center col-span-4 p-6 Bio bg-blk row-span-8 rounded-xl font-sec">
        <p className="BioTxt text-primary text-[2vw]">
          For me, building products goes beyond just{" "}
          <span className="text-secondary">solving problems</span>. It's about
          crafting meaningful{" "}
          <span className="text-secondary">user experiences</span> combining
          clean design, smooth{" "}
          <span className="text-secondary">
            functionality, and scalable systems
          </span>{" "}
          to create something people genuinely connect with.
          <br />
          <br />
          <span className="font-cur">-adhi</span>
        </p>
      </div>
      <div className="flex items-center justify-center col-span-5 row-span-4 Title bg-blk rounded-xl">
        <p className=" text-secondary font-sec text-center text-[7.5vw] leading-[7vw]">
          <span className="sftwrs text-primary">UI/UX</span> Developer
        </p>
      </div>
      <div className="Exp bg-blk row-span-4 col-span-9 rounded-xl font-sec p-4 flex flex-col  justify-center gap-[2vw]">
        <h1 className="ExpTtl text-secondary text-[2.5vw]">Experience</h1>
        <div className="ExpBdy flex flex-col text-[2vw]">
          <div className="flex justify-between pr-32 test-1">
            <p className="text-secondary">
              Critter Graphix
              {/* <span className="Exptym text-primary ml-[18vw]"> */}
            </p>
            <span className="Exptym text-primary">
              5 months, UI/UX designer.
            </span>
          </div>
          <div className="flex justify-between pr-32 test-2">
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
