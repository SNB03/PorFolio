import "./About.css";
import photo from "./../Photos/Mine.jpg";
import { SiLeetcode } from "react-icons/si";

function About() {
  return (
    <section className="about-section" id="About">
      <div className="aboutContainer">
        
        <img src={photo} alt="Sujit - Computer Engineering Student" className="about-img" />
        
        <div className="info">
          <h2>About Me</h2>
          <p>
            Hello! I am a highly motivated Computer Engineering student at PICT College, 
            passionate about deep-diving into the world of technology. I aspire to become a 
            Software Engineer, with a strong focus on Data Structures and Algorithms as well 
            as Web Development.
          </p>
          <p>
            Currently, I am actively building web applications, exploring backend frameworks, 
            and consistently solving DSA problems in Java to strengthen my logical thinking. 
            I am always looking forward to new opportunities to connect, collaborate on 
            impactful projects, and grow in this dynamic field.
          </p>

          <div className="about-highlights">
            <div className="highlight-item">
              <strong>Education:</strong> PICT College, Pune (GPA: 9.82)
            </div>
            <div className="highlight-item">
              <strong>Exploring:</strong> React, Java, HTML/CSS, and backend frameworks
            </div>
         
            <div className="highlight-item leetcode-item">
              
             <span>
    <strong>Problem Solving:</strong> Solved 400+ DSA Problems on LeetCode (365-Days Badge & 353-Day Streak)
  </span>
  <a href="https://leetcode.com/u/sbcoder03/" target="_blank" rel="noopener noreferrer" className="leetcode-icon">
    <SiLeetcode size={22}/>
  </a>
              
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default About;