  import "./Home.css"
  import About from "./About";
  import Skill from "./Skill"
  import Project from "./Project"
  import Hero from "./Hero";
  import Footer from "./Footer";
  import Contact from "./Contact";

function Home() {
  return(<>
          <div className="gridContainer" id="Home">
            <Hero/>
                <About/>
                <Skill/>
                <Project/>
                <Contact/>
                <Footer/>
          </div>
  
  
  </>);
}
export default Home;