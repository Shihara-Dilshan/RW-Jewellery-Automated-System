import React, { Component } from "react";
import M from "materialize-css";

import "../../App.css";

class Navbar extends Component {
  render() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elems);
    });

    return (
      <React.Fragment>
        <nav  className="grey darken-3">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">
              RW Jewellery
            </a>
            <a href="index.html" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">Javascript</a>
              </li>
              <li>
                <a href="mobile.html">Mobile</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav test" id="mobile-demo">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">Javascript</a>
          </li>
          <li>
            <a href="mobile.html">Mobile</a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Navbar;
