import { motion } from "motion/react";
import { servicesData } from "../data/services.js";
import * as Icons from "lucide-react";
import "./Services.css";

const IconComponent = ({ name, size = 24 }) => {
  const LucideIcon = (Icons)[name];
  if (!LucideIcon) return <Icons.HelpCircle size={size} />;
  return <LucideIcon size={size} />;
};

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-title">Services</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="service-card"
            >
              <div className="service-icon-box">
                <IconComponent name={service.icon} size={24} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
