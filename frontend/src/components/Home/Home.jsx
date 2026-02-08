
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Project from "../Project/Project";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <section id="hero">
      <Hero />
      </section>
      <section id="about">
      <About />
      </section>
      <section id="skills">
      <Skills />
      </section>
      <section id="project">
      <Project />
      </section>
      <section id="contact">
      <Contact />
      </section>
    </>
    );
};

export default Home;

