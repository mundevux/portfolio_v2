"use client";

import ProjectsGrid from "../components/ProjectsGrid";

export default function ProjectsSection() {
  return (
    <section className="my-10" id="projects">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-32">
          <div>
            <h2 className="text-primary-black dark:text-primary-white font-bold text-3xl md:text-4xl pb-4">
              Mira mis{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four font-medium">
                Proyectos
              </span>
              .
            </h2>
          </div>
        </div>
        <ProjectsGrid />
      </div>
    </section>
  );
}
