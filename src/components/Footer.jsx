import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si'; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  
  const footerLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <footer className="footer-section"> 
      <div className="footer-container">
        
        
        <div className="footer-brand">
          <h2>Sujit Bhojrao</h2>
          <p>
            A passionate Computer Engineering student building scalable web applications 
            and solving complex data structure problems. Always eager to learn and grow.
          </p>
        </div>

     
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            {footerLinks.map((item) => (
              <li key={item}>
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
            <li>
              <a href="/Sujit_Resume.pdf" download="Sujit_Resume.pdf">Download Resume</a>
            </li>
          </ul>
        </div>

       
        <div className="footer-contact">
          <h3>Contact Info</h3>
          <ul>
            <li><FaMapMarkerAlt color="rgb(238, 140, 12)" /> Pune, Maharashtra</li>
            <li><FaEnvelope color="rgb(238, 140, 12)" /> sujitbhojrao665@gmail.com</li>
            <li><FaPhoneAlt color="rgb(238, 140, 12)" /> +91 8483886636</li>
          </ul>
          
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/sujit-navnath-bhojrao-b3a903315" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/SNB03" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
          
            <a href="https://leetcode.com/u/sbcoder03/" target="_blank" rel="noreferrer" aria-label="LeetCode">
              <SiLeetcode size={20} />
            </a>
            <a href="mailto:sujitbhojrao665@gmail.com?subject=Portfolio Inquiry" aria-label="Email">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Sujit Bhojrao. All rights reserved.</p>
      </div>
    </footer>
  );
}