import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto border-t-2 border-primary-black/20">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col justify-center items-start">
          <p className="font-bold text-xl md:text-2xl text-primary-black dark:text-primary-white">
            MundevUX
          </p>
          <p className="text-sm md:text-base text-primary-black dark:text-primary-white">
            © 2021 MundevUX. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col justify-center items-end">
          <ul className="flex items-end">
            <li className="pl-4">
              <Link
                href="#"
                className="text-lg text-primary-black dark:text-primary-white"
              >
                Inicio
              </Link>
            </li>
            <li className="pl-4">
              <Link
                href="#"
                className="text-lg text-primary-black dark:text-primary-white"
              >
                Servicios
              </Link>
            </li>
            <li className="pl-4">
              <Link
                href="#"
                className="text-lg text-primary-black dark:text-primary-white"
              >
                Proyectos
              </Link>
            </li>
            <li className="pl-4">
              <Link
                href="#"
                className="text-lg text-primary-black dark:text-primary-white"
              >
                Sobre mi
              </Link>
            </li>
            <li className="pl-4">
              <Link
                href="#"
                className="text-lg text-primary-black dark:text-primary-white"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
