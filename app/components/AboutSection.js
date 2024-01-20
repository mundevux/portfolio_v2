import { Span } from "next/dist/trace";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about-me" className="mt-20 mb-10">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <h1 className="text-primary-black dark:text-primary-white font-bold text-3xl md:text-4xl ">
            Sombre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              Camilo Cuitiva
            </span>
          </h1>
          <h2 className=" font-bold text-lg md:text-xl pb-5">
            {" "}
            Desarrollador Fullstack{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              •
            </span>{" "}
            UX Engineer
          </h2>
        </div>
        <div className="mb-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacus
            sem, laoreet vel aliquam non, tincidunt ut leo. Proin condimentum,
            metus vitae venenatis auctor, dui diam elementum nibh, id accumsan
            lorem odio eu lorem. Fusce orci metus, dapibus sit amet suscipit
            sed, laoreet at est. Nulla nec arcu porta, eleifend velit ut,
            molestie neque. Mauris egestas facilisis nisi vel finibus. Fusce eu
            porta enim. Phasellus a felis elementum, luctus felis quis,
            ultricies urna. Pellentesque vel lorem rhoncus, hendrerit nulla sit
            amet, convallis nisl. Nulla ut quam porttitor, eleifend dolor vel,
            rhoncus ipsum. Aenean velit tellus, iaculis a massa vitae, efficitur
            tincidunt nibh. Nunc pellentesque urna eget lacus iaculis, eget
            faucibus sapien condimentum.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four text-xl font-bold">
              Proyectos hechos
            </h1>
            <p className="text-6xl font-semibold">5+</p>
          </div>
          <div className="">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four text-xl font-bold">
              Años de experiencia
            </h1>
            <p className="text-6xl font-semibold">1+</p>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2">
          <div className="md:mx-4 mb-8">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four text-3xl md:text-4xl font-bold mb-4">
              Educación
            </h1>
            <div className="flex items-end justify-between border-b-2 border-primary-black/20 dark:border-primary-white/20 pb-4 mb-8">
              <div className="">
                <h2 className=" font-bold text-lg md:text-xl">
                  Politécnico Grancolombiano
                </h2>
                <p>Ingeniería de Software</p>
              </div>
              <p className="text-primary-black/50 dark:text-primary-white/50">
                2020 - Actual
              </p>
            </div>
            <div className="flex items-end justify-between border-b-2 border-primary-black/20 dark:border-primary-white/20 pb-4 mb-8">
              <div className="">
                <h2 className=" font-bold text-lg md:text-xl">Peaku</h2>
                <p>Bootcamp Fullstack</p>
              </div>
              <p className="text-primary-black/50 dark:text-primary-white/50">
                2024
              </p>
            </div>
            <div className="flex items-end justify-between border-b-2 border-primary-black/20 dark:border-primary-white/20 pb-4 mb-8">
              <div className="">
                <h2 className=" font-bold text-lg md:text-xl">
                  Oracle Next Education
                </h2>
                <p>Formacion Frontend</p>
              </div>
              <p className="text-primary-black/50 dark:text-primary-white/50">
                2023
              </p>
            </div>
          </div>
          <div className="md:mx-4 mb-8">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four text-3xl md:text-4xl font-bold mb-4">
              Experiencia
            </h1>
            <div className="flex items-end justify-between border-b-2 border-primary-black/20 dark:border-primary-white/20 pb-4 mb-8">
              <div className="">
                <h2 className=" font-bold text-lg md:text-xl">Xiclo App</h2>
                <p>Practicante Frontend</p>
              </div>
              <p className="text-primary-black/50 dark:text-primary-white/50">
                2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
