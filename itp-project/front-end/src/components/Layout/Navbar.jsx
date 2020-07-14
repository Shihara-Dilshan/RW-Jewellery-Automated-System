import React from "react";
import M from "materialize-css";

const Navbar = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  });

  return (
    <React.Fragment>
      <nav>
        <div class="nav-wrapper grey darken-3">
          <a href="#!" class="brand-logo">
            RW Jewellery
          </a>
          <a href="#!" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right hide-on-med-and-down">
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
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
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
