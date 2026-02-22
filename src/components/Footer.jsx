import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();


  const footerLinks = ["Home", "About", "Skills", "Projects", "Feedback"];

  return (
    <footer className="footer-section" id="Contact">
      <div className="footer-container">
        
      
        <div className="footer-brand">
          <h2>Sujit</h2>
          <p>
            A passionate Computer Engineering student building scalable web applications 
            and solving complex problems.
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
              <a href="/Sujit_Resume.pdf" download="Sujit_Resume.pdf">Resume</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Info</h3>
          <ul>
            <li> Pune, Maharashtra</li>
            <li>sujitbhojrao665@gmail.com</li>
            <li> +91 8483886636</li>
          </ul>
          
          <div className="social-icons">
        
            <a href="https://www.linkedin.com/in/sujit-navnath-bhojrao-b3a903315" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              in
            </a>
            <a href="https://github.com/SNB03" target="_blank" rel="noreferrer" aria-label="GitHub">
              GH
            </a>
          </div>
        </div>

      </div>

    
      <div className="footer-bottom">
        <p>&copy; {currentYear} Sujit. All rights reserved.</p>
      </div>
    </footer>
  );
}