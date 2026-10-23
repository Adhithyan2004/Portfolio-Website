import { motion, useReducedMotion } from "motion/react";
import Me from "../assets/me.jpg";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.8,
      delay: shouldReduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <div className="flex items-center justify-between mx-32 HroCntr my-14">
      <div className="HroLft text-secondary">
        <motion.h1 {...reveal(0)} className="HroTxt text-[20vw] mb-[-60px]">
          Hello
        </motion.h1>

        <motion.p {...reveal(0.2)} className="HroDesc text-[2.5vw] w-[45vw]">
          -It's Adhithyan a <span className="text-black">UI/UX Designer</span>{" "}
          based in Tamil Nadu, India
        </motion.p>
      </div>

      <motion.div {...reveal(0.35)} className="HroRgt">
        <img className="MePic" src={Me} alt="Adhithyan" />
      </motion.div>
    </div>
  );
};

export default Hero;
