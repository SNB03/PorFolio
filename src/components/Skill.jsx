import "./Skill.css";
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, 
  SiCplusplus, SiC, SiGit, SiGithub
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa"; 

export default function Skill() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: <FaJava color="#007396" className="skill-icon"/> },
        { name: "C++", icon: <SiCplusplus color="#00599C" className="skill-icon"/> },
        { name: "C", icon: <SiC color="#A8B9CC" className="skill-icon"/> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" className="skill-icon"/> },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <SiReact color="#61DAFB" className="skill-icon"/> },
        { name: "HTML5", icon: <SiHtml5 color="#E34F26" className="skill-icon"/> },
        { name: "CSS3", icon: <SiCss3 color="#1572B6" className="skill-icon"/> },
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "SQL", icon: <FaDatabase color="#00758F" className="skill-icon"/> },
        { name: "Git", icon: <SiGit color="#F05032" className="skill-icon"/> },
        { name: "GitHub", icon: <SiGithub color="#181717" className="skill-icon"/> },
      ]
    }
  ];

  return (
    <section className="skill-section" id="Skills">
      <h2>My Skills</h2>
      
      {skillCategories.map((category, index) => (
        <div className="skill-category" key={index}>
          <h3>{category.title}</h3>
          
          <div className="skill-container">
            {category.skills.map((item) => (
              <div className="skill-badge" key={item.name}>
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      
    </section>
  );
}