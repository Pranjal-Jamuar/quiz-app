import { Link } from "react-router-dom"
import "./Header.css"
function Header() {
  return (
    <div className="header">
      <Link to="/" className="title">
        BrainBuster Quiz Challenge
      </Link>
      <hr className="divider" />
    </div>
  )
}

export default Header
