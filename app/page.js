import HeroSecction from "./components/HeroSecction";
import Navigationbar from "./components/Navigationbar";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navigationbar />
      <main>
        <HeroSecction />
      </main>
    </>
  );
}
