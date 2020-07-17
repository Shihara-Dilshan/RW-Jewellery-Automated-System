import React from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

const Navbar = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  });

  return (
    <React.Fragment>
      <nav>
        <div className="nav-wrapper grey darken-3">
          <Link to="/">
            <li className="brand-logo">RW Jewellery</li>
          </Link>
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">About us</a>
            </li>
            <li>
              <a href="badges.html">Jewellery</a>
            </li>
            <li>
              <a href="collapsible.html">Collections</a>
            </li>
            <li>
              <a href="mobile.html">Online Store</a>
            </li>
            <li>
              <a href="mobile.html">Services</a>
            </li>
            <li>
              <a href="mobile.html">Contact</a>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">About us</a>
        </li>
        <li>
          <a href="badges.html">Jewellery</a>
        </li>
        <li>
          <a href="collapsible.html">Collections</a>
        </li>
        <li>
          <a href="mobile.html">Online Store</a>
        </li>
        <li>
          <a href="mobile.html">Services</a>
        </li>
        <li>
          <a href="mobile.html">Contact</a>
        </li>
        <li>
          <a href="mobile.html">Login</a>
        </li>
        <li>
          <a href="mobile.html">Sign up</a>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Navbar;
