import "./Project.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import PortFolio from "./../Photos/PortFolio.jpg"
import campus_connect from "./../Photos/campus_connect.png"
import spot_sort from "./../Photos/spot_sort.png"
export default function Project() {
  
  const projectList = [
    {
      id: 1,
      title: "Spot & Sort",
      description: "A civic issue tracking application featuring anonymous reporting, OTP email verification, and role-based dashboards for admins and authorities.",
      techStack: ["React", "Node.js", "Express", "MongoDB"], 
      github: "https://github.com/SNB03/Spot-Sort",
      live: "", 
      image: spot_sort
    },
    {
      id: 2,
      title: "Automated Internship Portal",
      description: "A comprehensive platform connecting students with opportunities, featuring an intelligent skill matching and recommendation system.",
      techStack: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/SNB03/TechFiesta",
      live: "",
      image: campus_connect
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description: "A responsive, single-page developer portfolio built with modern UI/UX principles to showcase my projects, skills, and resume.",
      techStack: ["React", "CSS", "Vite"],
      github: "https://github.com/SNB03/PorFolio",
      live: "https://your-portfolio-link.com",
      image:PortFolio
    }
  ];

  return(
    <section className="project-section" id="Projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((proj) => (
          <div className="card" key={proj.id}>
            
          
            <div className="img-container">
              <img src={proj.image} alt={proj.title} className="project-img" />
            </div>

            <div className="card-content">
              <h3>{proj.title}</h3>
              <p className="project-content">{proj.description}</p>
              
            
              <div className="tech-stack-container">
                {proj.techStack.map((tech, index) => (
                  <span className="tech-pill" key={index}>{tech}</span>
                ))}
              </div>
              
              <div className="buttons">
                <a href={proj.github} target="_blank" rel="noreferrer" className="btn github">
                  <FaGithub /> GitHub
                </a>
                
                {proj.live && (
                  <a href={proj.live} target="_blank" rel="noreferrer" className="btn live-demo">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}