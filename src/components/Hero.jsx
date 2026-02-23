import "./Hero.css";
import { TypeAnimation } from 'react-type-animation';
import heroImg from "./../Photos/heroimg.svg"

export default function Hero() {
  return (
    <section className="hero-section" id="Home">
      <div className="hero-content">
        
    
        <div className="hero-text">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-name">Sujit Bhojrao.</h1>
          
          <h2 className="hero-subtitle">
            <TypeAnimation
              sequence={[
                "I'm exploring Web Development.",
                1500,
                "I'm a Full-Stack Enthusiast.",
                1500,
                "I love solving DSA problems.",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          
          <p className="hero-description">
            I'm a Computer Engineering student based in Pune. I am currently diving into 
            full-stack development, building hands-on projects, and continuously learning 
            new technologies. I love tackling new challenges and expanding my skill set 
            every single day!
          </p>
          
          <div className="hero-buttons">
            <a href="#Projects" className="btn-primary">Check out my work</a>
            <a href="#Contact" className="btn-secondary">Get in touch</a>
          </div>
        </div>

      
        <div className="hero-image-container">
        
          <img 
            src={heroImg}
            alt="Web Development Illustration" 
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
}