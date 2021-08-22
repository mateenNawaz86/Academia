import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => setShowMenu(!showMenu);
  return (
    <React.Fragment>
      <Card>
        <ul className="nav-menu">
          <li className="logo">Academia</li>
          <li className={showMenu ? "menuItems show" : "menuItems"}>
            <Link to="/" className="navLinks">
              Home
            </Link>
          </li>
          <li className={showMenu ? "menuItems show" : "menuItems"}>
            <Link to="/about" className="navLinks">
              About
            </Link>
          </li>
          <li className={showMenu ? "menuItems show" : "menuItems"}>
            <Link to="/course" className="navLinks">
              Courses
            </Link>
          </li>
          <li className={showMenu ? "menuItems show" : "menuItems"}>
            <Link to="/blog" className="navLinks">
              Blog
            </Link>
          </li>
          <li className={showMenu ? "menuItems show" : "menuItems"}>
            <Link to="/contact" className="navLinks">
              Contact
            </Link>
          </li>

          <li className="humburgerBtn">
            <Link onClick={showMenuHandler}>
              <i className={showMenu ? "fas fa-times" : "fas fa-bars"}></i>
            </Link>
          </li>
        </ul>
      </Card>
    </React.Fragment>
  );
};

export default Navbar;
