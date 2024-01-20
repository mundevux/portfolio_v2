import HeroSecction from "./components/HeroSecction";
import Navigationbar from "./components/Navigationbar";

import ServicesSecction from "./components/ServicesSecction";
import Footer from "./components/Footer";
import ProjectsSecction from "./components/ProjectsSecction";
import AboutSection from "./components/AboutSection";

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
