import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="nav-container">
        <ul>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About Me</CustomLink>
          <CustomLink to="/uses">Uses</CustomLink>
          <CustomLink to="/projects">Projects</CustomLink>
          <CustomLink to="/blog">Blog</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
        </ul>
      </div>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
