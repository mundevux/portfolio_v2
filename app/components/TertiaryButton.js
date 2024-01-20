import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";

export default function TertiaryButton({ text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Button className="md:mx-5 w-full md:w-auto bg-transparent border dark:border-primary-black border-primary-white dark:text-primary-black text-primary-white font-semibold mb-4">
        {text}
      </Button>
    </motion.div>
  );
}
