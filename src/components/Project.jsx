import "./Project.css";

export default function Project() {
  
  const projectList = [
    {
      id: 1,
      title: "Spot & Sort",
      description: "A civic issue tracking application featuring anonymous reporting, OTP email verification, and role-based dashboards for admins and authorities.",
      techStack: "Full-Stack",
      github: "https://github.com/SNB03/Spot-Sort",
     
    },
    {
      id: 2,
      title: "Automated Internship Portal",
      description: "A comprehensive platform connecting students with opportunities, featuring an intelligent skill matching and recommendation system.",
      techStack: "MERN Stack",
      github: "https://github.com/SNB03/TechFiesta",
   
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description: "A responsive, single-page developer portfolio built with modern UI/UX principles to showcase my projects, skills, and resume.",
      techStack: "React, CSS",
      github: "https://github.com/SNB03/PorFolio",
      
    }
  ];

  return(
    <section className="project-section" id="Projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((proj) => (
          <div className="card" key={proj.id}>
            <h3>{proj.title}</h3>
            <p className="project-content">{proj.description}</p>
            <div className="tech-stack">{proj.techStack}</div>
            
            <div className="buttons">
            
              <a href={proj.github} target="_blank" rel="noreferrer" className="btn github">GitHub</a>
           
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}