import { Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function PrincipalButton({ text, url }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Button
        as={Link}
        href={url}
        className="md:mx-5 w-full md:w-auto principal-bg-gradient font-semibold mb-4 dark:text-primary-white text-primary-black"
      >
        {text}
      </Button>
    </motion.div>
  );
}
