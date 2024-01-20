import { motion } from "framer-motion";
import { Button, Link } from "@nextui-org/react";

export default function SecondaryButton({ text, url }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Button
        as={Link}
        href={url}
        className="md:mx-5 w-full md:w-auto bg-transparent border border-primary-black dark:border-primary-white text-primary-black dark:text-primary-white font-semibold mb-4"
      >
        {text}
      </Button>
    </motion.div>
  );
}
