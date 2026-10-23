import { motion, useReducedMotion } from "motion/react";
import AbtPic from "../assets/me-2.jpg";

const AboutHero = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0, y = 30) => ({
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : y,
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
    <div>
      <motion.h1
        {...reveal(0, 50)}
        className="AbtHroTtl text-center text-[50vh]"
      >
        ADHITHYAN
      </motion.h1>

      <motion.img
        {...reveal(0.2, 40)}
        className="abtpic mx-auto mt-[-200px]"
        src={AbtPic}
        alt="Adhithyan"
      />

      <motion.p
        {...reveal(0.35, 25)}
        className="text-center AbtHroJob text-secondary text-9xl"
      >
        UI/UX <span className="text-black">DEVELOPER</span>
      </motion.p>

      <motion.p
        {...reveal(0.5, 20)}
        className="AbtHroDesc w-[80vw] text-secondary text-center mx-auto my-5 text-6xl"
      >
        Adhi is a <span className="text-black">UI/UX developer</span> crafting
        intuitive digital experiences where thoughtful design meets user needs.
      </motion.p>
    </div>
  );
};

export default AboutHero;
