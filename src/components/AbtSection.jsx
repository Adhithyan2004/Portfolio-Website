const AbtSection = () => {
  return (
    <div className="h-auto AbtSecCntr bg-secondary mt-28 mb-60">
      <p className="AbtSecTtl text-primary p-7 ml-12 text-9xl w-[87vw]">
        I COMBINE USER-FOCUSED DESIGN, SOLID{" "}
        <span className="text-black"> BACKEND SYSTEMS, </span> AND SCALABLE
        ARCHITECTURE TO BUILD RELIABLE AND{" "}
        <span className="text-black">ENGAGING APPLICATIONS.</span>
      </p>
      <div className="flex flex-col gap-5 mt-32 ml-12 text-4xl sklscntr p-7">
        <h1 className="text-6xl sklttl">SKILLS AND EXPERTISE</h1>
        <div className="flex flex-col gap-5 Skls text-primary">
          <p>UI/UX DESIGN</p>
          <p>FRONTEND DEVELOPMENT</p>
          <p>BACKEND DEVELOPMENT</p>
          <p>RESPONSIVE DESIGN</p>
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
            <p>6 MONTHS, UI/UX DESIGNER, FRONTEND DEVELOPER INTERN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbtSection;
