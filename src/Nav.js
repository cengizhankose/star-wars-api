import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    color: "whitesmoke",
  };
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/people">
          <li>People</li>
        </Link>
        <Link style={navStyle} to="/starships">
          <li>Starships</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
