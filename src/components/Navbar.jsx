
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen,setIsOpen]=useState(false);
 const navItems=["Home","About","Resume","Skills","Projects","Contact","Feedback"]
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (<>
      <nav className="navbar flex">
        <div className="mobile-left">
    <div className="hamburger" 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
            role="button">
      {isOpen ? "╳" : "☰"}
    </div>
  </div>

      <div className="logo">SB</div>

      <ul className="nav-links flex">
         {navItems.map((item) => (
            <li key={item}><a href={`#${item}`}>{item}</a></li>
          ))}
        
      </ul>
    </nav>
    <div 
        className={`sidebar-overlay ${isOpen ? "active" : ""}`} 
        onClick={closeMenu}
      ></div>

    <div className={`sidebar-container ${isOpen ? "active" : ""}`}>
        <ul className="sidebar-links">
          {navItems.map((item) => (
            <li key={item} onClick={closeMenu}>
            
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
          
          
        </ul>
      </div>
    </>
  );
}

export default Navbar;