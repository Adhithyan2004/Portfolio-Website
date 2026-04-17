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
        Full-Stack <span className="text-black"> DEVELOPER</span>
      </p>
      <p className="AbtHroDesc w-[80vw] text-secondary text-center mx-auto my-5 text-6xl">
        Adhi is a <span className="text-black">full-stack developer </span>{" "}
        crafting clean, functional user interfaces where design meets scalable
        systems.
      </p>
    </div>
  );
};

export default AboutHero;
