"use client";

import ProjectsGrid from "../components/ProjectsGrid";

export default function ProjectsSection() {
  return (
    <section className="my-20" id="projects">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-32">
          <div>
            <h2 className="text-primary-black dark:text-primary-white font-bold text-3xl md:text-4xl pb-5">
              Mira mis{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four font-medium">
                Proyectos
              </span>
              .
            </h2>
          </div>
          <div className="flex items-end md:col-span-2 h-full">
            <p className="text-sm md:text-lg  ">
              Estos son algunos de los proyectos que he realizado, usando
              tecnologías como React, NextJS, TailwindCSS, NodeJS, ExpressJS,
              Wordpress con Elementor entre otras, implementando mis
              conocimientos en el Diseño UX.
            </p>
          </div>
        </div>

        <ProjectsGrid />
      </div>
    </section>
  );
}
