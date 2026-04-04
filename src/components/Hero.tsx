import { motion } from "motion/react";
import { aboutData } from "../data/about";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center overflow-hidden bg-white">
      {/* Black curved background - deeper curve to look more "circular" */}
      <div 
        className="absolute top-0 left-0 w-full h-[75vh] bg-black"
        style={{ 
          borderBottomLeftRadius: '50% 40%', 
          borderBottomRightRadius: '50% 40%' 
        }}
      />

      {/* Content */}
      <div className="relative z-10 pt-24 flex flex-col items-center text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-3 uppercase"
        >
          {aboutData.name}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xs md:text-sm text-white/70 tracking-[0.3em] mb-8 uppercase"
        >
          {aboutData.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-full max-w-lg px-4"
        >
          <img 
            src="https://picsum.photos/seed/fahad-portrait/800/1000" 
            alt="Nazmul Haque Fahad" 
            className="w-full h-auto object-cover grayscale brightness-90 mask-image-gradient"
            style={{
              maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
            }}
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
