import { footerData } from "../data/footer.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          {/* Left Section */}
          <div className="footer-left">
            {/* Brand */}
            <div className="footer-brand">
              <h3 className="footer-name">{footerData.name}</h3>
              <p className="footer-tagline">{footerData.tagline}</p>
            </div>

            {/* Core Skills */}
            <div>
              <p className="footer-section-title">Core Skills</p>
              <div className="footer-skills">
                {footerData.coreSkills.map((skill) => (
                  <span key={skill} className="footer-skill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="footer-right">
            {/* Get in Touch */}
            <div>
              <p className="footer-section-title">Get in Touch</p>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <span className="footer-contact-label">Email</span>
                  <span className="footer-contact-value">
                    <a href={`mailto:${footerData.email}`}>{footerData.email}</a>
                  </span>
                </div>
                <div className="footer-contact-item">
                  <span className="footer-contact-label">Location</span>
                  <span className="footer-contact-value">{footerData.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <p className="footer-links-title">Quick Links</p>
              <ul className="footer-links-list">
                {footerData.quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <span className="footer-copyright">
            © {new Date().getFullYear()} NAZMUL HAQUE FAHAD. All rights reserved.
          </span>
          <span className="footer-credit">
           Developer <a href="#home">NH.Fahad</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
