"use client";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import ProfilePhotho from "../assets/Foto_Camilo_Cuitiva.jpg";
import Estrella from "../assets/estrella.svg";
import PrincipalButton from "./PrincipalButton";
import SecondaryButton from "./SecondaryButton";

export default function HeroSecction() {
  const cargos = [
    "Full Stack Developer",
    "Frontend Developer",
    "Diseñador UX",
    "Diseñador UX",
  ];
  return (
    <div className="mt-20">
      <section className="flex flex-col justify-center items-center mb-20 px-4">
        <div className="rounded-full border-2 border-primary-black dark:border-primary-white mb-5">
          <Image
            src={ProfilePhotho}
            alt="Foto de Perfil Camilo Cuitiva"
            className="object-cover rounded-full w-52 h-52"
            width={200}
          />
        </div>
        <div className=" ">
          <p className=" text-primary-black dark:text-primary-white text-center font-bold text-4xl pb-5">
            ¡ Hola ✌!<br></br>Soy Camilo Cuitiva
            <span className="hidden md:block mt-2">
              {" "}
              Desarrollador{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
                Fullstack
              </span>{" "}
              especializado en el Desarrollo{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four ">
                Frontend
              </span>
              .
            </span>
          </p>
          <p className="text-center w-full md:w-4/6 m-auto">
            Un desarrollador{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four font-medium">
              Fullstack
            </span>{" "}
            radicado en la ciudad de Bogotá, Colombia. Mi especialidad es el
            desarrollador{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four font-medium">
              Frontend
            </span>
            , ya que cuento con habilidades de Diseño{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four font-medium">
              UX/UI
            </span>
            , Diseño y Desarrollo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four font-medium">
              Responsive
            </span>
            .
          </p>
        </div>
        <div className="flex flex-col justify-center md:flex-row w-full py-5">
          <PrincipalButton
            text="CONTACTAME"
            url="mailto:camiloandres174@gmail.com"
          />
          <SecondaryButton text="TODOS MIS TRABAJOS" url="#projects" />
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
