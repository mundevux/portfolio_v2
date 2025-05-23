"use client";

import Image from "next/image";
import ProfilePhotho from "../../assets/Foto_Camilo_Cuitiva.jpg";
import Estrella from "../../assets/estrella.svg";
import PrincipalButton from "../components/PrincipalButton";
import SecondButton from "../components/SecondButton";

export default function HeroSecction() {
  const cargos = [
    "Full Stack Developer",
    "Frontend Developer",
    "Diseñador UX",
    "Diseñador UX",
  ];
  return (
    <div className="mt-20" id="hero">
      <section className="flex flex-col justify-center items-center mb-20 px-4">
        <div className="rounded-full border-2 mb-5">
          <Image
            src={ProfilePhotho}
            alt="Foto de Perfil Camilo Cuitiva"
            className="object-cover rounded-full w-52 h-52"
            width={200}
          />
        </div>
        <div className=" pb-8">
          <p className=" text-primary-black dark:text-primary-white text-center font-bold text-4xl pb-5">
            ¡ Hola ✌!<br></br>Soy Camilo Cuitiva
            <span className="hidden md:block mt-2">
              {" "}
              Desarrollador{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
                Web
              </span>{" "}
              en formación, radicado en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four ">
                Bogotá
              </span>
              .
            </span>
          </p>
          <p className="text-center w-full md:w-4/6 m-auto">
            Estoy enfocado en{" "}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              frontend
            </span>{" "}
            y explorando el mundo{" "}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              Fullstack
            </span>
            . Me gusta construir{" "}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              experiencia digitales
            </span>{" "}
            que sean útiles, atractivas y {""}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              fáciles de usar
            </span>
            . Actualmente estoy aprendiendo{" "}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              PHP
            </span>{" "}
            y{" "}
            <span className="text-transparent font-medium bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
              Flutter
            </span>
            , mientras fortalezco mis habilidades en tecnologías como{" "}
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
              WordPress
            </span>
            . Siempre estoy buscando crecer, compartir lo que aprendo y sumar
            valor desde donde estoy.
          </p>
        </div>
        <div className="flex flex-col justify-center md:flex-row w-full pB-4">
          <PrincipalButton
            text="Contactame"
            link="https://wa.link/ui6ih8"
            as="a"
            target="_blank"
          />
          <SecondButton
            text="Ver mis trabajos"
            link="#projects"
            as="a"
            target="_self"
            isExternal={false}
          />
        </div>
      </section>
      <div className="principal-bg-gradient h-4 md:h-12 w-full">
        <div className="flex items-center justify-center ">
          <div className="transform -rotate-1 md:-rotate-2 bg-primary-black text-primary-white w-full">
            <ul className="flex space-x-4 justify-center md:justify-around animate-scroll">
              {cargos.map((cargo, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-center items-center text-center text-xxs md:text-lg font-bold"
                  >
                    <Image
                      src={Estrella}
                      alt="Estrella"
                      width={10}
                      className="mr-2"
                    />
                    {cargo}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
