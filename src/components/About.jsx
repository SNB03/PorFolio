import "./About.css";
import photo from "./../Photos/Mine.jpg";
import { SiLeetcode } from "react-icons/si";
import { FaDownload, FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";

function About() {
  return (
    <section className="about-section" id="About">
      <div className="aboutContainer">
        
       
        <div className="about-img-wrapper">
          <img src={photo} alt="Sujit Bhojrao" className="about-img" />
          
          <div className="floating-badge">
            <FaGraduationCap className="badge-icon" />
            <div className="badge-text">
              <span>PICT College</span>
              <strong>9.73GPA</strong>
            </div>
          </div>
        </div>
        
       
        <div className="info">
          <h2>About Me</h2>
          <p>
            Hello! I am a Computer Engineering student passionate about deep-diving into the world of technology. I specialize in <strong>Data Structures and Algorithms</strong> and <strong>Full-Stack Web Development</strong>.
          </p>
          <p>
            I love translating complex logic into clean, efficient code. Whether I'm building responsive web applications or optimizing backend architectures, I am always eager to learn, build, and grow.
          </p>

         
          <div className="info-cards">
            
            <a 
    href="https://leetcode.com/u/sbcoder03/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="info-card leetcode-card-link"
    style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
  >
    <SiLeetcode className="card-icon" />
    <h3>400+ Problems</h3>
    <p>Solved on LeetCode with a 350+ day streak.</p>
  </a>

            <div className="info-card">
              <FaLaptopCode className="card-icon" />
              <h3>Full-Stack</h3>
              <p>Building apps with React, Java, and MERN.</p>
            </div>

            <div className="info-card">
              <FaCode className="card-icon" />
              <h3>Problem Solver</h3>
              <p>Strong foundation in logic and algorithms.</p>
            </div>

          </div>

          <a href="/Sujit_Resume.pdf" download="Sujit_Resume.pdf" className="about-resume-btn">
            <FaDownload /> Download Resume
          </a>

        </div>
      </div>
    </section>
  );
}

export default About;