import { motion } from "motion/react";
import { skillsData } from "../data/skills.js";
import { techStackData } from "../data/techStack.js";
import * as Icons from "lucide-react";
import "./Skills.css";

const IconComponent = ({ name, size = 24 }) => {
  const LucideIcon = (Icons)[name];
  if (!LucideIcon) return <Icons.HelpCircle size={size} />;
  return <LucideIcon size={size} />;
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        {/* Tech Stack Section */}
        <div className="tech-stack-section">
          <h2 className="tech-stack-title">Tech Stack</h2>
          <div className="tech-stack-grid">
            {techStackData.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="tech-item"
              >
                <div className="tech-icon-box">
                  <IconComponent name={tech.iconName} size={32} />
                </div>
                <span className="tech-name">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills & Technologies Section */}
        <div>
          <h2 className="skills-content-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="skill-card"
              >
                <div className="skill-icon">
                  <IconComponent name={skill.iconName} size={20} />
                </div>
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <p>{skill.level} • {skill.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
