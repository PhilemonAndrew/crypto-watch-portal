import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">💰 CryptoWatch</h2>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/trackers"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Trackers
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "active-link" : ""
          }
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;