import CardProject from "./CardProject";
import React from "react";
import imagenPortfolio from "@/app/assets/Web_MundevUX.jpeg";
import imagenProyectoImpulsa from "@/app/assets/Web_Impulsa_Colombia.png";
import imagenProyectoCodigo from "@/app/assets/Web_Codigo_Creativo.png";
import imagenProyectoJRG from "@/app/assets/Web_JRG_Logistic.png";
import imagenProyectoMiHaus from "@/app/assets/Web_Mi_Huas.png";

const projects = [
  {
    nameProject: "Impulsa Colombia",
    descriptionProject:
      "Poryecto realizado para una constructora colombiana, desarrollado en Next.js",
    srcImage: imagenProyectoImpulsa,
    altImage: "Web Impulsa Colombia",
    urlProject: "https://github.com/mundevux/impulsa-colombia-sas",
    className: "col-span-1 row-span-1 lg:col-span-3 lg:row-span-2",
  },
  {
    nameProject: "Código Creativo",
    descriptionProject:
      "Web para una agencia de marketing digital, desarrollado en Framer",
    srcImage: imagenProyectoCodigo,
    altImage: "Web Código Creativo - Agencia de Marketing Digital",
    urlProject: "https://www.codcreativo.com/",
    className: "col-span-1 row-span-1 lg:col-span-2 lg:row-span-2",
  },
  {
    nameProject: "JRG Logistics",
    descriptionProject:
      "Página web para una empresa dedicada a transporte de mercancia, desarrollada con Wordpress y Elementor.",
    srcImage: imagenProyectoJRG,
    altImage: "Web JRG Logistics",
    urlProject: "https://jrglogistics.com.co/",
    className: "col-span-1 row-span-1 lg:col-span-2 lg:row-span-2",
  },
  {
    nameProject: "Mi Haus Colombia",
    descriptionProject:
      "Sitio web para una empresa dedicada a la remodelación de vivienda, desarrollada con Wordpress y Elementor",
    srcImage: imagenProyectoMiHaus,
    altImage: "Web Mi Haus Colombia",
    urlProject: "https://mihauscol.com/",
    className: "col-span-1 row-span-1 lg:col-span-3 lg:row-span-2",
  },
];

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 auto-rows-[200px] gap-8 mt-10">
      {projects.map((post, index) => (
        <CardProject key={index} {...post} />
      ))}
    </div>
  );
}
