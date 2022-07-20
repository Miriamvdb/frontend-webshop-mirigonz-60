import { NavLink } from "react-router-dom";
import { FiUser, FiShoppingCart, FiHeart } from "react-icons/fi";
import "./styles.css";

const NavBar = () => {
  return (
    <div className="NavContainer">
      <div className="NavLinksAndInput">
        <div className="NavLinks">
          <NavLink to="/">
            <h1 style={{ color: "white" }}>GM</h1>
          </NavLink>

          <NavLink
            className="link"
            style={({ isActive }) =>
              isActive ? { color: "white", fontWeight: "bold" } : undefined
            }
            to="/"
          >
            Shop
          </NavLink>
          <NavLink
            className="link"
            style={({ isActive }) =>
              isActive ? { color: "white", fontWeight: "bold" } : undefined
            }
            to="/about"
          >
            About
          </NavLink>
        </div>
        <div className="NavInput">
          <input className="searchbox" placeholder="Find product" />
        </div>
      </div>
      <div className="NavIcons">
        <NavLink
          style={({ isActive }) => (isActive ? { color: "white" } : undefined)}
          to="/login"
        >
          <FiUser className="icon" />
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? { color: "white" } : undefined)}
          to="/shoppingcard"
        >
          <FiShoppingCart className="icon" />
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? { color: "white" } : undefined)}
          to="/favorites"
        >
          <FiHeart className="icon" />
        </NavLink>
      </div>
    </div>
  );
};

export { NavBar };
