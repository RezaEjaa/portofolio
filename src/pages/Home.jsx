import { Helmet } from "react-helmet-async";
import Hero from "../components/sections/Hero";
import TechStack from "../components/sections/TechStack";
import About from "../components/sections/About";
import WhyChooseMe from "../components/sections/WhyChooseMe";
import Services from "../components/sections/Services";
import Projects from "../components/sections/Projects";
import Process from "../components/sections/Process";
import Skills from "../components/sections/Skills";
import Pricing from "../components/sections/Pricing";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";
import WaveDivider from "../components/ui/WaveDivider";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Rezz Dev — Frontend & Full Stack Web Developer</title>
        <meta
          name="description"
          content="Freelance Frontend & Full Stack Web Developer building fast, modern, conversion-ready websites and web applications."
        />
      </Helmet>

      <Hero />
      <TechStack />
      <WaveDivider className="-mt-4 mb-8" />
      <About />
      <WhyChooseMe />
      <Services />
      <Projects />
      <WaveDivider />
      <Process />
      <Skills />
      <WaveDivider />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}