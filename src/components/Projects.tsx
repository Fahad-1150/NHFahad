import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { projectsData, Project } from "../data/projects";
import { Github, Linkedin, ExternalLink, X, Download, Globe } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: string | number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
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
      className="relative border border-white/20 p-10 flex flex-col justify-between hover:border-white transition-colors group cursor-pointer overflow-hidden min-h-[350px]"
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-3xl font-bold">{project.title}</h3>
          {project.type === "website" && (
            <Globe size={20} className="text-gray-500 group-hover:text-white transition-colors" />
          )}
        </div>
        <p className="text-gray-400 mb-8 leading-relaxed">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        {project.tech.split(',').map(tech => (
          <span key={tech} className="text-xs font-mono border border-white/20 px-3 py-1 rounded-full group-hover:border-white/50">
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
            className="absolute inset-0 bg-white text-black p-10 flex flex-col justify-center items-center gap-6 z-10"
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowLinks(false);
              }}
              className="absolute top-6 right-6 hover:scale-110 transition-transform"
            >
              <X size={24} />
            </button>
            
            <h4 className="text-xl font-bold mb-2 uppercase tracking-widest">
              {project.type === "app" ? "Download App" : "Open Project"}
            </h4>
            
            <div className="flex flex-col w-full gap-4">
              {project.type === "app" && project.downloadUrl && (
                <a
                  href={project.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-between border-2 border-black px-6 py-4 bg-black text-white hover:bg-white hover:text-black transition-all font-bold group/link"
                >
                  <span className="flex items-center gap-3">
                    <Download size={20} /> Download Now
                  </span>
                  <ExternalLink size={16} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-between border-2 border-black px-6 py-4 hover:bg-black hover:text-white transition-all font-bold group/link"
                >
                  <span className="flex items-center gap-3">
                    <Github size={20} /> GitHub
                  </span>
                  <ExternalLink size={16} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </a>
              )}
              
              {project.linkedinUrl && (
                <a
                  href={project.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-between border-2 border-black px-6 py-4 hover:bg-black hover:text-white transition-all font-bold group/link"
                >
                  <span className="flex items-center gap-3">
                    <Linkedin size={20} /> LinkedIn
                  </span>
                  <ExternalLink size={16} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
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
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
