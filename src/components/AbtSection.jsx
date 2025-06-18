const AbtSection = () => {
  return (
    <div className="h-auto AbtSecCntr bg-secondary mt-28 mb-60">
      <p className="AbtSecTtl text-primary p-7 ml-12 text-9xl w-[87vw]">
        I COMBINE{" "}
        <span className="text-blk">USER-CENTRIC DESIGN, ROBUST CODE,</span> AND{" "}
        <span className="text-blk">SCALABLE SYSTEMS</span> TO BUILD ENGAGING
        DIGITAL EXPERIENCES.
      </p>
      <div className="flex flex-col gap-5 mt-32 ml-12 text-4xl sklscntr p-7">
        <h1 className="text-6xl sklttl">SKILLS AND EXPERTISE</h1>
        <div className="flex flex-col gap-5 Skls text-primary">
          <p>
            UI/UX DESIGN <span className="text-blk">(intermediate)</span>
          </p>
          <p>
            FRONTEND <span className="text-blk"> (intermediate)</span>
          </p>
          <p>
            BACKEND <span className="text-blk"> (begginer)</span>
          </p>
          <p>
            RESPONSIVE DESIGNING <span className="text-blk"> (beginner)</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 pb-24 mt-3 ml-12 text-4xl expcntr p-7">
        <h1 className="text-6xl expttl">EXPERIENCE</h1>
        <div className="flex flex-col gap-8 exptymcntr text-primary">
          <div className="flex exptym gap-60">
            <p className="w-64 text-black">CRITTER GRAPHIX</p>
            <p>5 MONTHS, UI/UX DESIGNER INTERN</p>
          </div>
          <div className="flex exptym gap-60">
            <p className="w-64 text-black">TAMRIELAGI</p>
            <p>CURRENT, UI/UX DESIGNER, FRONTEND DEVELOPER INTERN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbtSection;
