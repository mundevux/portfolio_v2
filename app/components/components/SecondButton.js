import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SecondButton({
  text,
  link = "#",
  as = "a", // 'a' o 'span'
  target = "_self", // '_blank' o '_self'
  isExternal = false, // para decidir si usamos <Link> de Next.js o no
}) {
  const button = (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Button
        as={as}
        href={as === "a" ? link : undefined}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className="md:mx-5 w-full md:w-auto bg-transparent border border-primary-black dark:border-primary-white text-primary-black dark:text-primary-white font-semibold mb-4"
      >
        {text}
      </Button>
    </motion.div>
  );

  // Si el enlace es interno y usamos <Link>
  if (!isExternal && as === "a") {
    return (
      <Link href={link} passHref legacyBehavior>
        {button}
      </Link>
    );
  }

  // Si el enlace es externo o no es un <a>, devolvemos el botón directamente
  return button;
}
