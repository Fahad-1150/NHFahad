import { motion } from "motion/react";
import { educationData } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center tracking-tight">Education</h2>
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-l-2 border-white pl-8 relative"
            >
              <div className="absolute w-4 h-4 bg-white rounded-full -left-[9px] top-0" />
              <span className="text-sm font-mono text-gray-400 mb-2 block uppercase tracking-widest">{edu.duration}</span>
              <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
              <p className="text-xl text-gray-300 mb-4">{edu.institution}</p>
              {edu.description && (
                <p className="text-gray-500 leading-relaxed max-w-2xl">{edu.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
