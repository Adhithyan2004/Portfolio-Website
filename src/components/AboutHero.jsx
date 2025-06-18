import React from "react";
import AbtPic from "../assets/me-2.jpg";

const AboutHero = () => {
  return (
    <div>
      <h1 className="AbtHroTtl text-center text-[50vh]">ADHITHYAN</h1>
      <img
        className="abtpic mx-auto mt-[-200px] "
        src={AbtPic}
        alt="MyAbtPic"
      />
      <p className="text-center AbtHroJob text-secondary text-9xl">
        FULL STACK <span className="text-black"> DEVELOPER</span>
      </p>
      <p className="AbtHroDesc w-[80vw] text-secondary text-center mx-auto my-5 text-6xl">
        ADHI IS A <span className="text-black">FULL STACK DEVELOPER</span>{" "}
        CRAFTING ENGAGING USER INTERFACES WHERE{" "}
        <span className="text-black">CREATIVITY MEETS CODE.</span>
      </p>
    </div>
  );
};

export default AboutHero;
