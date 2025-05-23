import { Span } from "next/dist/trace";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about-me" className="mt-20 mb-10 dark:text-primary-white">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-primary-black dark:text-primary-white font-bold text-3xl md:text-4xl ">
            Sombre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              Camilo Cuitiva
            </span>
          </h1>
          <h2 className=" font-bold text-lg md:text-xl">
            {" "}
            Desarrollador Fullstack{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              •
            </span>{" "}
            UX Engineer
          </h2>
        </div>
        <div className="mb-6">
          <p className="mb-2">
            Soy estudiante de último semestre de Ingeniería de Software, con una
            transición desde la contaduría hacia mi verdadera pasión: el
            desarrollo.
          </p>
          <p className="mb-2">
            He trabajado como freelancer creando sitios web con{" "}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              WordPress
            </span>{" "}
            y{" "}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              Elementor
            </span>
            , y actualmente estoy aprendiendo{" "}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              PHP
            </span>{" "}
            y{" "}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              Flutter
            </span>
            , para ampliar mis habilidades fullstack.
          </p>
          <p className="mb-2">
            Destaco mi participación en un proyecto con la startup{" "}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              Xiclo
            </span>
            , donde desarrollé una landing page con{" "}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              Next.js
            </span>
            conectada a una API, mostrando información dinámica mediante un QR.
          </p>{" "}
          <p className="mb-2">
            Me motiva aprender continuamente, resolver problemas y colaborar en
            equipo para crear soluciones digitales efectivas.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 pt-4 pb-8">
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
                <h2 className=" font-bold text-lg md:text-xl">
                  Google - Coursera
                </h2>
                <p>Profesional de Diseño UX</p>
              </div>
              <p className="text-primary-black/50 dark:text-primary-white/50">
                Cursando
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
                <h2 className=" font-bold text-lg md:text-xl">
                  Código Creativo
                </h2>
                <p>Web Developer - Freelancer</p>
              </div>
              <p className="text-primary-black/50 dark:text-primary-white/50">
                2024 - Actual
              </p>
            </div>
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
