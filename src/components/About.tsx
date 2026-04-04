import { motion } from "motion/react";
import { aboutData } from "../data/about";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-4xl mx-auto text-center bg-white text-black">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold mb-12 tracking-tight"
      >
        About Me
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-lg leading-relaxed text-gray-700"
      >
        {aboutData.description}
      </motion.p>
    </section>
  );
}
