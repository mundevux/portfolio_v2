import HeroSecction from "./components/HeroSecction";
import Navigationbar from "./components/Navigationbar";

import Image from "next/image";
import ServicesSecction from "./components/ServicesSecction";
import Footer from "./components/Footer";
import ProjectsSecction from "./components/ProjectsSecction";

export default function Home() {
  return (
    <>
      <Navigationbar />
      <main>
        <HeroSecction />
        <ServicesSecction />
        <ProjectsSecction />
        <Footer />
      </main>
    </>
  );
}
