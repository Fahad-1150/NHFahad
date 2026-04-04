import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { projectsData } from "../data/projects.js";
import { Github, Linkedin, ExternalLink, X, Download, Globe } from "lucide-react";
import "./Projects.css";

function ProjectCard({ project, index }) {
  const [showLinks, setShowLinks] = useState(false);

  const handleCardClick = () => {
    if (project.type === "website" && project.websiteUrl) {
      window.open(project.websiteUrl, "_blank");
    } else {
      setShowLinks(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      onClick={handleCardClick}
      className="project-card"
    >
      <div>
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          {project.type === "website" && (
            <Globe size={20} className="project-icon" />
          )}
        </div>
        <p className="project-description">{project.description}</p>
      </div>
      <div className="project-tags">
        {project.tech.split(',').map(tech => (
          <span key={tech} className="project-tag">
            {tech.trim()}
          </span>
        ))}
      </div>

      <AnimatePresence>
        {showLinks && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            className="project-overlay"
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowLinks(false);
              }}
              className="overlay-close"
            >
              <X size={24} />
            </button>
            
            <h4 className="overlay-title">
              {project.type === "app" ? "Download App" : "Open Project"}
            </h4>
            
            <div className="overlay-buttons">
              {project.type === "app" && project.downloadUrl && (
                <a
                  href={project.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="overlay-button" style={{backgroundColor: 'black', color: 'white'}}
                >
                  <span className="overlay-button-text">
                    <Download size={20} /> Download Now
                  </span>
                  <ExternalLink size={16} className="overlay-button-icon" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="overlay-button"
                >
                  <span className="overlay-button-text">
                    <Github size={20} /> GitHub
                  </span>
                  <ExternalLink size={16} className="overlay-button-icon" />
                </a>
              )}
              
              {project.linkedinUrl && (
                <a
                  href={project.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="overlay-button"
                >
                  <span className="overlay-button-text">
                    <Linkedin size={20} /> LinkedIn
                  </span>
                  <ExternalLink size={16} className="overlay-button-icon" />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
