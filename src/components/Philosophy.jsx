import { motion } from "motion/react";
import "./Philosophy.css";

export default function Philosophy() {
  return (
    <section id="philosophy" className="philosophy-section">
      <div className="philosophy-container">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="philosophy-label"
        >
          Philosophy
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="philosophy-title"
        >
          How I Think About Code
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="philosophy-divider"
        >
          <p className="philosophy-quote">
            "Engineering is not just about writing code. It's about making decisions that compound over time."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
