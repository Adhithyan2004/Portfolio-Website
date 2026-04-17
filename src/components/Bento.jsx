import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import figma from "../assets/figma.png";
import prisma from "../assets/prisma.png";
import postgres from "../assets/postgres.png";
import tailwind from "../assets/taiwldc.jpg";

const Bento = () => {
  return (
    <div className="MainGrid grid grid-cols-12 grid-rows-12 h-[95vh] gap-3 m-7">
      <div className="flex flex-col flex-wrap justify-center col-span-3 gap-5 p-5 Skills bg-blk row-span-12 rounded-xl">
        <h1 className="sklsTtl font-sec text-primary text-[4.2vw] gap-3">
          My Skills
        </h1>
        <div className="skls text-secondary font-sec flex flex-col gap-7 text-[2.2vw]">
          <span>React (Next.js)</span>
          <span>TypeScript</span>
          <span>Node.js (Express)</span>
          <span>REST API Design</span>
          <span>Database (PostgreSQL/ORM)</span>
          <span>Git & GitHub</span>
        </div>
      </div>
      <div className="flex flex-col flex-wrap justify-center col-span-5 row-span-4 p-5 SofWrs bg-blk rounded-xl gap-9 font-sec">
        <div className="sftflx flex items-center  text-[2vw] gap-3">
          <img className="sftimg" src={react} alt="react logo" />
          <p className="sftwrs text-primary">React</p>
        </div>
        <div className="sftflx flex items-center text-[2vw] gap-3">
          <img className=" sftimg" src={nodejs} alt="nodejs logo" />
          <p className="sftwrs text-primary">NodeJs</p>
        </div>
        <div className="sftflx flex items-center text-[2vw] gap-3">
          <img className="sftimg" src={prisma} alt="prisma logo" />
          <p className="sftwrs text-primary">Prisma ORM</p>
        </div>
        <div className="sftflx flex items-center text-[2vw] gap-3">
          <img className="sftimg" src={postgres} alt="postgreSQL logo" />
          <p className="sftwrs text-primary">PostgreSQL</p>
        </div>
        <div className="sftflx flex items-center text-[2vw] gap-3">
          <img className="sftimg" src={figma} alt="figma logo" />
          <p className="sftwrs text-primary">Figma</p>
        </div>
        <div className="sftflx flex items-center text-[2vw] gap-3">
          <img className="sftimg" src={tailwind} alt="tailwind logo" />
          <p className="sftwrs text-primary">Tailwind</p>
        </div>
      </div>
      <div className="flex items-center col-span-4 p-6 Bio bg-blk row-span-8 rounded-xl font-sec">
        <p className="BioTxt text-primary text-[2vw]">
          For me, building products is about balancing strong{" "}
          <span className="text-secondary">backend systems </span>
          with clean and functional UI. I focus on creating scalable,{" "}
          <span className="text-secondary">reliable applications </span> while
          paying attention to the small details that make the{" "}
          <span className="text-secondary">user experience </span>
          smooth and intuitive.
          <br />
          <br />
          <span className="font-cur">-adhi</span>
        </p>
      </div>
      <div className="flex items-center justify-center col-span-5 row-span-4 Title bg-blk rounded-xl">
        <p className=" text-secondary font-sec text-center text-[7.5vw] leading-[7vw]">
          <span className="sftwrs text-primary">Full-Stack</span> Developer
        </p>
      </div>
      <div className="Exp bg-blk row-span-4 col-span-9 rounded-xl font-sec p-4 flex flex-col  justify-center gap-[2vw]">
        <h1 className="ExpTtl text-primary text-[2.5vw]">Experience</h1>
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
              6 months, UI/UX designer,Frontend Developer.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;
