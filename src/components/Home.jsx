  import "./Home.css"
  import About from "./About";
  import Skill from "./Skill"
  import Project from "./Project"
  
  import Footer from "./Footer";

function Home() {
  return(<>
          <div className="gridContainer" id="Home">
            
                <About></About>
                <Skill></Skill>
                <Project></Project>
              
                <Footer></Footer>
                 
                 
          </div>
  
  
  </>);
}
export default Home;