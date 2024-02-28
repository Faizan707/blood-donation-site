import { Link } from "react-router-dom"
import "./Navbar.css"
function Navbar() {
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/donar">Donate Blood</Link>
      <Link to="/see-donar">See Donar</Link>
      <Link to="/contact-us">Contact Us</Link>

    </nav>
  )
}

export default Navbar
