"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import { motion } from "framer-motion";
export default function Navigationbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      title: "Inicio",
      href: "#",
    },
    {
      title: "Servicios",
      href: "#services",
    },
    {
      title: "Proyectos",
      href: "#projects",
    },
    {
      title: "Sobre mi",
      href: "#about-me",
    },
  ];

  return (
    <Navbar className="bg-transparent" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-primary-black dark:text-primary-white"
        />
        <NavbarBrand>
          <Link href="#" className="text-primary-black dark:text-primary-white">
            <p className="font-bold text-xl md:text-2xl text-inherit ">
              Mundev
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-one via-gradient-two to-gradient-four">
                .
              </span>
              UX
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            href="#"
            className="text-lg text-primary-black dark:text-primary-white"
          >
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#services"
            className="text-lg text-primary-black dark:text-primary-white"
          >
            Servicios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#projects"
            className="text-lg text-primary-black dark:text-primary-white"
          >
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#about-me"
            className="text-lg text-primary-black dark:text-primary-white"
          >
            Sobre mi
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button
              as={Link}
              className="bg-primary-black text-primary-white dark:bg-primary-white dark:text-primary-black text-base md:text-lg font-medium"
              href="https://wa.link/79edlf"
              target="_blank"
              variant="flat"
            >
              ¡Hablemos!
            </Button>
          </motion.div>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-primary-black "
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
