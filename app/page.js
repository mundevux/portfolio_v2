import HeroSecction from "./components/sections/HeroSecction";
import Navigationbar from "./components/sections/Navigationbar";

import Footer from "./components/sections/Footer";
import ProjectsSection from "./components/sections/ProjectsSection";
import AboutSection from "./components/sections/AboutSecction";
import ServicesSection from "./components/sections/ServicesSection";

export default function Home() {
  return (
    <>
      <Navigationbar />
      <main className="max-w-5xl mx-auto">
        <HeroSecction />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <Footer />
      </main>
    </>
  );
}
