"use client";

import Image from "next/image";
import imagenPortfolio from "../assets/Web_MundevUX.jpeg";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function ProjectsSecction() {
  return (
    <section className="my-20">
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
              MongoDB, Firebase, entre otras, implementando mis conocimientos en
              el Diseño UX.
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <div className="flex flex-col items-center rounded-xl bg-primary-black md:w-96">
            <div className="">
              <Image
                src={imagenPortfolio}
                alt="Proyecto 1"
                className="object-cover"
                layout="cover"
              />
            </div>
            <div className="flex flex-col justify-start items-start w-full ">
              <h3 className="text-primary-white dark:text-primary-black font-bold text-2xl md:text-3xl mt-5 ml-4">
                Proyecto 1
              </h3>
              <p className="text-primary-white dark:text-primary-black text-sm md:text-lg ml-4">
                Portafolio
              </p>
              <div className="flex md:items-end justify-around md:justify-end w-full my-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button className="mx-2 w-full md:w-auto bg-primary-white text-primary-black dark:bg-primary-black dark:text-primary-white font-semibold mb-4">
                    Mira el código
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button className="mx-2 principal-bg-gradient font-semibold mb-4">
                    Ir a el sitio
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
