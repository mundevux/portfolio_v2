"use client";
import Accordion from "../components/Accordion";
import PrincipalButton from "../components/PrincipalButton";
import SecondButton from "../components/SecondButton";

export default function ServicesSection() {
  const services = [
    {
      title: "Desarrollo Web Responsivo",
      content:
        "Creación de sitios web adaptables a todos los dispositivos, asegurando una experiencia óptima para el usuario.",
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
    <div className="mt-20" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-primary-black dark:text-primary-white font-bold text-3xl md:text-4xl pb-5">
          Lo que puedo{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
            aportar.
          </span>
        </h2>
        <p className="m-auto pb-5">
          Soy una persona proactiva, con una base sólida en desarrollo frontend
          y muchas ganas de seguir aprendiendo. Me gusta crear experiencias
          visuales atractivas, funcionales y bien estructuradas. Disfruto
          trabajar en equipo, compartir ideas y asumir retos que me ayuden a
          crecer técnica y profesionalmente.
        </p>
      </div>
      <section className="container max-w-7xl mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-start items-start">
            <p className="text-xl md:text-2xl text-primary-black dark:text-primary-white font-semibold ">
              💻 Stack actual
            </p>
            <ul className="list-disc pl-5 py-4">
              <li className="flex pb-2">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
                  </svg>
                </span>
                HTML, CSS (TailwindCSS, Bootstrap)
              </li>
              <li className="flex pb-2">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
                  </svg>
                </span>
                JavaScript (ES6+), React, Next.js
              </li>
              <li className="flex pb-2">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
                  </svg>
                </span>
                WordPress + Elementor
              </li>
              <li className="flex pb-2">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
                  </svg>
                </span>
                Git, GitHub
              </li>
              <li className="flex pb-2">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
                  </svg>
                </span>
                Jira, Trello, Notion, Figma, Slack.
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-start items-start">
            <p className="text-xl md:text-2xl text-primary-black dark:text-primary-white font-semibold ">
              📚 Lo que estoy aprendiendo
            </p>
            <ul className="list-disc pl-5 py-4">
              <li className="flex pb-2">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
                  </svg>
                </span>
                PHP aplicado al desarrollo de plugins y temas personalizados en
                WordPress.
              </li>
              <li className="flex pb-2">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
                  </svg>
                </span>
                Flutter para aplicaciones móviles multiplataforma
              </li>
              <li className="flex pb-2">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
                  </svg>
                </span>
                Mejores prácticas en rendimiento, SEO y accesibilidad web.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
