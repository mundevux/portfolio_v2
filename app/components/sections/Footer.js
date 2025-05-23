import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto border-t-2 border-primary-black/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="flex flex-col justify-center items-start">
          <p className="font-bold text-xl md:text-2xl text-primary-black dark:text-primary-white">
            MundevUX
          </p>
          <p className="text-sm md:text-base text-primary-black dark:text-primary-white">
            © 2023 MundevUX. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col justify-center items-start md:items-end">
          <ul className="block md:flex md:items-end">
            <li className="md:pl-4">
              <Link
                href="#hero"
                className=" text-sm lg:text-lg text-primary-black dark:text-primary-white"
              >
                Inicio
              </Link>
            </li>
            <li className="md:pl-4">
              <Link
                href="#services"
                className=" text-sm lg:text-lg text-primary-black dark:text-primary-white"
              >
                Servicios
              </Link>
            </li>
            <li className="md:pl-4">
              <Link
                href="#projects"
                className=" text-sm lg:text-lg text-primary-black dark:text-primary-white"
              >
                Proyectos
              </Link>
            </li>
            <li className="md:pl-4">
              <Link
                href="#about-me"
                className=" text-sm lg:text-lg text-primary-black dark:text-primary-white"
              >
                Sobre mi
              </Link>
            </li>
          </ul>
          <div className="flex mt-4">
            <Link
              href="https://x.com/MundevUx"
              target="_blank"
              className="rounded-full p-2 principal-bg-gradient mr-4 ml-0 md:mr-0 md:ml-4"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z"></path>
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/cacuitiva/"
              target="_blank"
              className="rounded-full p-2 principal-bg-gradient mr-4 ml-0 md:mr-0 md:ml-4"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#000000"
                  d="M8.268 28H2.463V9.306h5.805zM5.362 6.756C3.506 6.756 2 5.218 2 3.362a3.362 3.362 0 0 1 6.724 0c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-.044-4.95-3.018-4.95c-3.018 0-3.481 2.356-3.481 4.794V28h-5.799V9.306h5.567v2.55h.081c.775-1.469 2.668-3.019 5.492-3.019c5.875 0 6.955 3.869 6.955 8.894V28z"
                ></path>
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/mundevux/"
              target="_blank"
              className="rounded-full p-2 principal-bg-gradient mr-4 ml-0 md:mr-0 md:ml-4"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#000000"
                  d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
