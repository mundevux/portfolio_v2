import HeroSecction from "./components/HeroSecction";
import Navigationbar from "./components/Navigationbar";

import Image from "next/image";
import ServicesSecction from "./components/ServicesSecction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigationbar />
      <main>
        <HeroSecction />
        <ServicesSecction />

        <Footer />
      </main>
    </>
  );
}
