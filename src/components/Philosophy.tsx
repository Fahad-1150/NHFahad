import { motion } from "motion/react";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 bg-white text-black overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs font-bold tracking-[0.4em] uppercase mb-6 block text-gray-400"
        >
          Philosophy
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-12 tracking-tight uppercase"
        >
          How I Think About Code
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="border-t-4 border-black pt-12"
        >
          <p className="text-2xl md:text-3xl font-medium leading-tight tracking-tight">
            "Engineering is not just about writing code. It's about making decisions that compound over time."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
