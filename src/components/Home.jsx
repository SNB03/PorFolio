  import "./Home.css"
  import About from "./About";
  import Skill from "./Skill"
function Home() {
  return(<>
          <div className="gridContainer" id="Home">
            
                <About></About>
                <Skill></Skill>
                <div className="projectsSection" id="Projects">This is project section</div>
                <div className="contactSection" id="Contact">This is contact section</div>
                 <div className="feedbackSection" id="Feedback">This is feedback section</div>
                 
          </div>
  
  
  </>);
}
export default Home;