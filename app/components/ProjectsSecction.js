"use client";

import imagenPortfolio from "../assets/Web_MundevUX.jpeg";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import PrincipalButton from "./PrincipalButton";
import SecondaryButton from "./SecondaryButton";
import CardProject from "./CardProject";

export default function ProjectsSecction() {
  const projects = [
    {
      nameProject: "Portafolio",
      descriptionProject: "Mi portafolio web.",
      srcImage: imagenPortfolio,
      altIamge: "Iamgen de Portafolio Web",
      urlCode: "#",
      urlProject: "#",
    },
    {
      nameProject: "Portafolio",
      descriptionProject: "Mi portafolio web.",
      srcImage: imagenPortfolio,
      altIamge: "Iamgen de Portafolio Web",
      urlCode: "#",
      urlProject: "#",
    },
    {
      nameProject: "Portafolio",
      descriptionProject: "Mi portafolio web.",
      srcImage: imagenPortfolio,
      altIamge: "Iamgen de Portafolio Web",
      urlCode: "#",
      urlProject: "#",
    },
    {
      nameProject: "Portafolio",
      descriptionProject: "Mi portafolio web.",
      srcImage: imagenPortfolio,
      altIamge: "Iamgen de Portafolio Web",
      urlCode: "#",
      urlProject: "#",
    },
  ];

  return (
    <section id="projects" className="my-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-32 mb-10">
          <div>
            <h2 className="text-primary-black dark:text-primary-white font-bold text-3xl md:text-4xl pb-5">
              Mira mis{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four font-medium">
                Proyectos
              </span>
              .
            </h2>
          </div>
          <div className="flex items-end md:col-span-2 h-full ">
            <p className="text-sm md:text-lg  ">
              Estos son algunos de los proyectos que he realizado, usando
              tecnologías como React, NextJS, TailwindCSS, NodeJS, ExpressJS,
              MongoDB, Firebase, entre otras, implementando mis conocimientos en
              el Diseño UX.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
          {projects.map((project, index) => (
            <CardProject
              key={index}
              nameProject={project.nameProject}
              descriptionProject={project.descriptionProject}
              srcImage={project.srcImage}
              altIamge={project.altIamge}
              urlCode={project.urlCode}
              urlProject={project.urlProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
