import { Helmet } from "react-helmet-async";
import Hero from "../components/sections/Hero";
import TechStack from "../components/sections/TechStack";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
import Journey from "../components/sections/Journey";
import WaveDivider from "../components/ui/WaveDivider";
import FloatingPet from "../components/ui/FloatingPet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>RezaDev — Software Development Student & Web Developer</title>
        <meta name="description" content="Personal portfolio of Muhammad Reza Alif Firdaus, an RPL student building websites, web applications, and digital experiences." />
      </Helmet>
      <Hero />
      <TechStack />
      <WaveDivider className="-mt-4 mb-8" />
      <About />
      <Projects />
      <WaveDivider />
      <Journey />
      <Skills />
      <WaveDivider />
      <Contact />
      <FloatingPet />
    </>
  );
}
