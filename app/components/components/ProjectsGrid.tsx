import CardProject from "./CardProject";
import React from "react";
import imagenProyectoImpulsa from "../../assets/Web_Impulsa_Colombia.png";
import imagenProyectoCodigo from "../../assets/Web_Codigo_Creativo.png";
import imagenProyectoJRG from "../../assets/Web_JRG_Logistic.png";
import imagenProyectoMiHaus from "../../assets/Web_Mi_Huas.png";

const projects = [
  {
    nameProject: "Impulsa Colombia",
    descriptionProject:
      "Desarrollo de sitio web para una constructora colombiana utilizando Next.js.",
    srcImage: imagenProyectoImpulsa,
    altImage: "Web Impulsa Colombia",
    urlProject: "https://github.com/mundevux/impulsa-colombia-sas",
    className: "col-span-1 row-span-1 lg:col-span-3 lg:row-span-2",
  },
  {
    nameProject: "Código Creativo",
    descriptionProject:
      "Creación de sitio web para una agencia de marketing digital con Framer.",
    srcImage: imagenProyectoCodigo,
    altImage: "Web Código Creativo - Agencia de Marketing Digital",
    urlProject: "https://www.codcreativo.com/",
    className: "col-span-1 row-span-1 lg:col-span-2 lg:row-span-2",
  },
  {
    nameProject: "JRG Logistics",
    descriptionProject:
      "Desarrollo de sitio web para empresa de transporte de mercancía usando WordPress y Elementor.",
    srcImage: imagenProyectoJRG,
    altImage: "Web JRG Logistics",
    urlProject: "https://jrglogistics.com.co/",
    className: "col-span-1 row-span-1 lg:col-span-2 lg:row-span-2",
  },
  {
    nameProject: "Mi Haus Colombia",
    descriptionProject:
      "Sitio web para empresa de remodelación de viviendas, desarrollado con WordPress y Elementor.",
    srcImage: imagenProyectoMiHaus,
    altImage: "Web Mi Haus Colombia",
    urlProject: "https://mihauscol.com/",
    className: "col-span-1 row-span-1 lg:col-span-3 lg:row-span-2",
  },
];

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 auto-rows-[200px] gap-8">
      {projects.map((post, index) => (
        <CardProject key={index} {...post} />
      ))}
    </div>
  );
}
