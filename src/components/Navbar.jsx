import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa"; 
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navItems = ["Home", "About", "Resume", "Skills", "Projects", "Contact"];

 
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);


  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; 

      navItems.forEach((item) => {
        if (item === "Resume") return;
        
        const section = document.getElementById(item);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(item);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <>
      <nav className="navbar flex">
        <div className="mobile-left">
          <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu" role="button">
            {isOpen ? "X" : "☰"}
          </div>
        </div>

        <div className="logo">SB</div>

        <ul className="nav-links flex">
          {navItems.map((item) => (
            <li key={item} onClick={closeMenu}>
              {item === "Resume" ? (
                <a href="/Sujit_Resume.pdf" download="Sujit_Resume.pdf">
                  {item}
                </a>
              ) : (
                <a 
                  href={`#${item}`} 
                  className={activeSection === item ? "active" : ""}
                >
                  {item}
                </a>
              )}
            </li>
          ))}

          <li>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Dark Mode">
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </nav>

   
      <div className={`sidebar-overlay ${isOpen ? "active" : ""}`} onClick={closeMenu}></div>

      <div className={`sidebar-container ${isOpen ? "active" : ""}`}>
        <ul className="sidebar-links">
          <li style={{ marginBottom: "1rem" }}>
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDarkMode ? <><FaSun /> &nbsp; Light Mode</> : <><FaMoon /> &nbsp; Dark Mode</>}
            </button>
          </li>
          
          {navItems.map((item) => (
            <li key={item} onClick={closeMenu}>
              {item === "Resume" ? (
                <a href="/Sujit_Resume.pdf" download="Sujit_Resume.pdf">
                  {item}
                </a>
              ) : (
                <a 
                  href={`#${item}`}
                  className={activeSection === item ? "active" : ""}
                >
                  {item}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;