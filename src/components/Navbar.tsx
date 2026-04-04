import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 bg-black/40 backdrop-blur-md border-b border-white/10 text-white">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold tracking-tighter"
      >
        MyPortfolio
      </motion.h2>
      <ul className="flex gap-8 text-sm uppercase tracking-widest font-medium">
        <li>
          <a href="#home" className="hover:text-gray-300 transition-colors">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
        </li>
        <li>
          <a href="#education" className="hover:text-gray-300 transition-colors">Education</a>
        </li>
        <li>
          <a href="#skills" className="hover:text-gray-300 transition-colors">Skills</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
        </li>
        <li>
          <a href="#philosophy" className="hover:text-gray-300 transition-colors">Philosophy</a>
        </li>
      </ul>
    </nav>
  );
}
