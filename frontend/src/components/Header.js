import { FaSignInAlt, FaSignOutalt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/"> Goal Setter </Link>
      </div>

      <ul>
        <li>
          <Link to="/login">
            <FaSignInAlt />
          </Link>
        </li>

        <li>
          <Link to="/register">
            <FaUser /> Register
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
