import HeroSecction from "./components/sections/HeroSecction";
import Navigationbar from "./components/sections/Navigationbar";

import Image from "next/image";
import ServicesSecction from "./components/sections/ServicesSecction";
import Footer from "./components/sections/Footer";
import ProjectsSecction from "./components/sections/ProjectsSecction";
import AboutSection from "./components/sections/AboutSecction";

export default function Home() {
  return (
    <>
      <Navigationbar />
      <main className="max-w-5xl mx-auto">
        <HeroSecction />
        <ServicesSecction />
        <ProjectsSecction />
        <AboutSection />
        <Footer />
      </main>
    </>
  );
}
