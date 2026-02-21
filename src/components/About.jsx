import "./About.css";
import photo from "./../Photos/Mine.jpg";

function About() {
  return (
    <section className="about-section" id="About">
      <div className="aboutContainer">
        <img src={photo} alt="Sujit - Computer Engineering Student" className="about-img" />
        
        <div className="info">
          <h2>About Me</h2>
          <p>
            I am a Computer Engineering student at PICT College, passionate about exploring 
            and deep-diving into the world of technology. I aspire to become a Software Engineer, 
            with a strong focus on Data Structures and Algorithms, as well as full-stack Web Development.
          </p>
          <p>
            Currently, I am actively building web applications, mastering backend frameworks, 
            and consistently solving DSA problems in Java to strengthen my problem-solving skills. 
            I am always looking forward to new opportunities to connect with like-minded individuals, 
            collaborate on impactful projects, and grow in this dynamic field.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;