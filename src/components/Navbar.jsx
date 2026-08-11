import logo from "../assets/logo.png";
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Recipe Book Logo" className="navbar-logo"/>
      <h1>Recipe Book</h1>
    </nav>
  );
}

export default Navbar;
