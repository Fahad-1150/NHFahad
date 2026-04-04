import { motion } from "motion/react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="navbar-logo"
      >
       NH.Fahad
      </motion.h2>
      <ul className="navbar-menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#philosophy">Philosophy</a>
        </li>
      </ul>
    </nav>
  );
}
