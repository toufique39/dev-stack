
import "../css/navbar.css";
function Navbar() {


  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#" className="brand">
          <span className="brand-icon">DS</span>
          <span className="brand-text"> <span className="custom">Dev</span> Stack</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

     
        <div className="nav-actions">
          <button className="sign-in-btn">Sign In</button>
          <button className="sign-up-btn">Sign Up</button>
        </div>


        <button className="menu-btn" aria-label="Open menu">
            <img src="/src/ui/hamburger.png" alt="Menu" />
        </button>

      </div>
    </header>
  );
}

export default Navbar;