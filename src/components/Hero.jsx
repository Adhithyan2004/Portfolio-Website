import React from "react";
import Me from "../assets/me.jpg";
import SplitText from "./SplitText";

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
      <div className="HroCntr flex justify-between  items-center my-14 mx-32">
        <div className="HroLft text-secondary ">
          {/* <SplitText
            text="Hello"
            className="text-[20vw]"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          /> */}
          <h1 className="HroTxt text-[20vw] mb-[-60px]">Hello</h1>
          <p className="HroDesc text-[2.5vw] w-[45vw]">
            -It's Adhithyan a <span className="text-black">ui/ux developer</span> based in Tamil Nadu,
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
