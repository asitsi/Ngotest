import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);

  return (
    <div>
      <nav className="navbar border shadow">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo">
            <img
              src="http://endeavour.org.in/resource/logo.gif"
              alt="logo"
              className="img-fluid"
            />
          </NavLink>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                exact
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/aboutus"
                exact
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About us
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/service"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Activities
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Associate Partner
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Gallery
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Media
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact us
              </NavLink>
            </li>
            <li className="nav-item">
              <span className="icon">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-google-plus-g"></i>
              </span>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline d-none"></Button>}
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navbar);
