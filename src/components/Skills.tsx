import { motion } from "motion/react";
import { skillsData } from "../data/skills";
import { techStackData } from "../data/techStack";
import * as Icons from "lucide-react";

const IconComponent = ({ name, size = 24, className = "" }: { name: string; size?: number; className?: string }) => {
  const LucideIcon = (Icons as any)[name];
  if (!LucideIcon) return <Icons.HelpCircle size={size} className={className} />;
  return <LucideIcon size={size} className={className} />;
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-white text-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Tech Stack Section */}
        <div className="mb-32">
          <h2 className="text-4xl font-bold mb-16 text-center tracking-tight uppercase">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {techStackData.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="w-20 h-20 border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <IconComponent name={tech.iconName} size={32} />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills & Technologies Section */}
        <div>
          <h2 className="text-4xl font-bold mb-16 text-center tracking-tight uppercase">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border border-black/10 p-6 flex items-center gap-6 hover:border-black transition-all group"
              >
                <div className="p-3 bg-black text-white group-hover:bg-white group-hover:text-black border border-black transition-all">
                  <IconComponent name={skill.iconName} size={20} />
                </div>
                <div>
                  <h3 className="font-bold tracking-tight">{skill.name}</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{skill.level} • {skill.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
