import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Bento from "../components/Bento";
import Work from "../components/Work";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const Home = () => {
  return (
    <div className="bg-primary">
      <NavBar />

      <Hero />

      <Reveal>
        <Bento />
      </Reveal>

      <Reveal>
        <Work />
      </Reveal>

      <Reveal y={16}>
        <Cta />
      </Reveal>

      <Footer />
    </div>
  );
};

export default Home;
