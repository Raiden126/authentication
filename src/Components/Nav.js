import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

  return (
    <div>
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
    </div>
  );
};

export default Nav;
