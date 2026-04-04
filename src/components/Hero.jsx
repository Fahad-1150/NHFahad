import { motion } from "motion/react";
import { aboutData } from "../data/about.js";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Content */}
      <div className="hero-content">
        
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-left"
        >
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-title">
            {aboutData.name}
          </h1>
          
          {/* Social Icons */}
          <div className="hero-social-icons">
            <a href="#" className="hero-social-icon">
              <span>📱</span>
            </a>
            <a href="#" className="hero-social-icon">
              <span>💼</span>
            </a>
            <a href="#" className="hero-social-icon">
              <span>🔗</span>
            </a>
            <a href="#" className="hero-social-icon">
              <span>❤️</span>
            </a>
          </div>
        </motion.div>

        {/* Center - Image with Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hero-center"
        >
          <div className="hero-image-wrapper">
            {/* Glow effect */}
            <div className="hero-image-glow"></div>
            
            {/* Image */}
            <img 
              src="/images/my image for profile.jpg" 
              alt="Nazmul Haque Fahad" 
              className="hero-image"
            />
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="hero-right"
        >
          <p className="hero-greeting">Creative</p>
          <h2 className="hero-title hero-title-right">
            Developer<br />& Designer
          </h2>
          
          <a 
            href="#" 
            className="hero-resume-btn"
          >
            RESUME ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
