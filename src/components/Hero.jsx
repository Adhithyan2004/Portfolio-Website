import React from "react";
import Me from "../assets/me.jpg";
import SplitText from "./SplitText";

const Hero = () => {

  return (
    <>
      <div className="flex items-center justify-between mx-32 HroCntr my-14">
        <div className="HroLft text-secondary ">
          <h1 className="HroTxt text-[20vw] mb-[-60px]">Hello</h1>
          <p className="HroDesc text-[2.5vw] w-[45vw]">
            -It's Adhithyan a <span className="text-black">UIUX developer</span> based in Tamil Nadu,
            India
          </p>
        </div>
        <div className="HroRgt">
          <img className="MePic" src={Me} alt="mera face" />
          <p className="MobTxtJob text-[10vw] text-secondary">UIUX <span className="text-blk">developer</span></p>
        </div>
      </div>
    </>
  );
};

export default Hero;
