import Image from "next/image";
import PrincipalButton from "./PrincipalButton";
import TertiaryButton from "./TertiaryButton";
import { Link } from "@nextui-org/react";

export default function CardProject({
  nameProject,
  descriptionProject,
  srcImage,
  altIamge,
  urlProject,
  urlCode,
}) {
  return (
    <div className="flex flex-col items-center rounded-xl bg-primary-black dark:bg-primary-white md:w-96">
      <div className="">
        <Image
          src={srcImage}
          alt={altIamge}
          className="object-cover rounded-t-lg"
          layout="cover"
        />
      </div>
      <div className="flex flex-col justify-start items-start w-full ">
        <h3 className="text-primary-white dark:text-primary-black font-bold text-2xl md:text-3xl mt-5 ml-4">
          {nameProject}
        </h3>
        <p className="text-primary-white dark:text-primary-black text-sm md:text-lg ml-4">
          {descriptionProject}
        </p>
        <div className="w-full flex justify-around mt-4">
          <Link href={urlCode} target={"_blank"}>
            <TertiaryButton text="Ver el código" />
          </Link>
          <Link href={urlProject} target={"_blank"}>
            <PrincipalButton text="Ir al sitio" />
          </Link>
        </div>
      </div>
    </div>
  );
}
