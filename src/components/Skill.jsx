import "./Skill.css"

export default function Skill () {
    const skills=["Html","CSS","JS","React","Java","C","CPP"];
    return(
  <section className="skill-section" id="Skills">
  <h2>My Skills</h2>
      <div className="skill-container">
        {skills.map((item) => (
          <div className="skill-badge" key={item}>
            {item}
          </div>
        ))}
      </div>
  </section>
    );
}