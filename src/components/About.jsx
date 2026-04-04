import { motion } from "motion/react";
import { aboutData } from "../data/about.js";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="about-badge"
        >
          <span className="about-badge-dot"></span>
          <span className="about-badge-text">Available for opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="about-name"
        >
          {aboutData.name}
        </motion.p>

        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="about-title"
        >
          <span className="about-title-white">I Build Things</span>
          <br />
          <span className="about-title-blue">For The Web</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="about-subtitle"
        >
          <span className="about-subtitle-emoji">🚀</span>
          Full-Stack Developer
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="about-location"
        >
          <span className="about-location-icon">📍</span>
          Dhaka, Bangladesh
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="about-description"
        >
          I build <strong>scalable web & mobile applications</strong> using React, Node.js, and modern AI-assisted workflows. Specializing in clean architecture, performance optimization, and rapid MVP delivery.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="about-buttons"
        >
          <a href="#projects" className="about-btn about-btn-primary">
            <span>👁️</span> View My Work
          </a>
          <a href="mailto:nazmulhaque@example.com" className="about-btn about-btn-secondary">
            Hire Me
          </a>
          <a href="#" className="about-btn about-btn-secondary">
            <span>📄</span> Resume
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="about-stats"
        >
          <div className="about-stat">
            <span className="about-stat-number">5+</span>
            <span className="about-stat-label">Projects</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">20+</span>
            <span className="about-stat-label">Technologies</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">3+</span>
            <span className="about-stat-label">Years Coding</span>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="about-tech-stack"
        >
          {["React", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL"].map((tech) => (
            <span key={tech} className="about-tech">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
