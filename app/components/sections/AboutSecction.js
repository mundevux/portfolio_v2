import { Span } from "next/dist/trace";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about-me" className="mt-20 mb-10">
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
            Soy Camilo, estudiante de ultimo semestre de Ingeniería de Software
            con una fuerte motivación por crear experiencias digitales que sean
            útiles y visualmente atractivas. Aunque inicié como Analista
            Contable, el gusto por la tecnología siempre estuvo presente, y
            decidí apostarle a lo que realmente me apasiona: el desarrollo web.
          </p>
          <p className="mb-2">
            Actualmente estoy aprendiendo{" "}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              PHP
            </span>{" "}
            y{" "}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              Flutter
            </span>
            , mientras refuerzo mis conocimientos en tecnologías como{" "}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              JavaScript
            </span>
            ,{" "}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              HTML
            </span>
            ,{" "}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              CSS
            </span>{" "}
            y herramientas como{" "}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              Wordpress
            </span>{" "}
            (especialmente con
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              Elementor
            </span>
            ). He trabajado como freelancer creando sitios web y sigo
            aprendiendo sobre creación de temas y plugins personalizados.
          </p>
          <p className="mb-2">
            Uno de los proyectos que más me marcó fue durante un bootcamp con{" "}
            {""}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              Peaku
            </span>
            , colaborando con la startup{" "}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              Xiclo
            </span>
            . Allí desarrollé con{" "}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              Next.js
            </span>
            una landing page conectada a una API, que mostraba información
            dinámica sobre empaques reutilizables escaneados mediante un QR. Una
            experiencia que me enseñó muchísimo sobre desarrollo ágil y trabajo
            con propósito.
          </p>{" "}
          <p className="mb-2">
            Me apasiona aprender, resolver problemas y trabajar en equipo. Busco
            un entorno en el que pueda seguir creciendo, compartir con personas
            talentosas y aportar desde lo que sé y lo que estoy construyendo día
            a día. Estoy listo para seguir evolucionando en el mundo tech 🚀.
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
