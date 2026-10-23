import NavBar from "../components/NavBar";
import AboutHero from "../components/AboutHero";
import AbtSection from "../components/AbtSection";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const About = () => {
  return (
    <div className="bg-primary">
      <NavBar />

      <AboutHero />

      <Reveal>
        <AbtSection />
      </Reveal>

      <Footer />
    </div>
  );
};

export default About;
