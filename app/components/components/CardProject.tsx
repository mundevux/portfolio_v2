import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface CardProjectProps {
  nameProject: string;
  descriptionProject: string;
  srcImage: string | StaticImageData;
  altImage: string;
  urlProject: string;
  className?: string;
}

export default function CardProject({
  nameProject,
  descriptionProject,
  srcImage,
  altImage,
  urlProject = "#",
  className = "",
}: CardProjectProps) {
  return (
    <Link href={urlProject} className={className} target="_blank">
      <div
        className={`group relative overflow-hidden rounded-3xl h-full w-full cursor-pointer `}
      >
        <Image
          src={srcImage}
          alt={altImage}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-black/50 via-primary-black/20 to-transparent p-4 flex flex-col justify-end">
          <h3 className="text-primary-white dark:text-primary-black font-bold text-2xl md:text-3xl mt-5 ml-4">
            {nameProject}
          </h3>
          <p className="text-primary-white dark:text-primary-black text-sm md:text-lg ml-4">
            {descriptionProject}
          </p>
        </div>
      </div>
    </Link>
  );
}
