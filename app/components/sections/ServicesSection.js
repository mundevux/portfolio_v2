"use client";
import Accordion from "../components/Accordion";
import PrincipalButton from "../components/PrincipalButton";
import SecondButton from "../components/SecondButton";

export default function ServicesSection() {
  const services = [
    {
      title: "Desarrollo Web Responsivo",
      content:
        "¿Quieres que tu sitio web se adapte perfectamente a todos los dispositivos? Te ofrezco soluciones de diseño y desarrollo web responsivo para que tu sitio se vea increíble en cualquier pantalla.",
    },
    {
      title: "Optimización de Rendimiento",
      content:
        "¿Tu sitio web carga lentamente o no está optimizado para obtener velocidades rápidas de carga? Puedo ayudarte a optimizar el rendimiento de tu sitio y mejorar su velocidad.",
    },
    {
      title: "Mantenimiento y Actualización",
      content:
        "¿Necesitas ayuda para mantener y actualizar tu sitio web? Ofrezco servicios de mantenimiento y actualización para asegurarnos de que tu sitio esté siempre actualizado y en funcionamiento.",
    },
    {
      title: "Desarrollo Frontend",
      content:
        "¿Quieres impresionar a tus clientes con un diseño web sorprendente? Ofrezco servicios de diseño y desarrollo frontend para que tu sitio web sea atractivo y funcional.",
    },
  ];
  return (
    <div className="mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-primary-black dark:text-primary-white font-bold text-3xl md:text-4xl pb-5">
          Servicios{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
            Destacados
          </span>
        </h2>
      </div>
      <section className="container max-w-7xl mx-auto px-2">
        {services.map((service, index) => (
          <Accordion
            key={index}
            title={service.title}
            content={service.content}
          />
        ))}
      </section>
      <div className=" flex flex-col justify-center md:flex-row py-5">
        <PrincipalButton text="Contactame" link="https://wa.link/ui6ih8" />
        <SecondButton
          text="Ver mis trabajos"
          link="#projects"
          as="a"
          target="_self"
          isExternal={false}
        />
      </div>
    </div>
  );
}
