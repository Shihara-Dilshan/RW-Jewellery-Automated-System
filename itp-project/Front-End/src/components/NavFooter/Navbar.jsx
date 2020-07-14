import React, { Component } from "react";
import axios from "axios";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import "../../App.css";
// eslint-disable-next-line
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    login: "",
    Link: "",
    image: "",
  };

  showSlider = () => {
    let problemEle = document.querySelectorAll(".problems");
    problemEle.forEach((problem) => {
      problem.classList.remove("hide");
      problem.classList.add("show");
    });
  };

  hideSlider = () => {
    let problemEle = document.querySelectorAll(".problems");
    problemEle.forEach((problem) => {
      problem.classList.remove("show");
      problem.classList.add("hide");
    });
  };

  componentDidMount() {
    axios
      .get("https://noobstackbacktest.herokuapp.com/NoobStack/api/users")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    if (sessionStorage.getItem("userName") === null) {
      this.setState({ login: "Login", Link: "login" });
    } else {
      this.setState({ login: sessionStorage.getItem("userName") });
      this.setState({ Link: "/logout" });
      this.setState({ image: sessionStorage.getItem("userPhoto") });
    }
  }

  render() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elems);
    });
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".scrollspy");
      M.ScrollSpy.init(elems, {
        throttle: 50,
      });
    });

    return (
      <React.Fragment>
        <nav className="grey darken-3" id="scroll">
          <div className="nav-wrapper">
            <div className="brand-logo">
              <Link onClick={this.showSlider} to="/">
                NoobStack
              </Link>
            </div>
            <a href="/" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link onClick={this.showSlider} to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link onClick={this.hideSlider} to="/courses">
                  Courses
                </Link>
              </li>
              <li>
                <Link onClick={this.hideSlider} to="/contribute">
                  Improve
                </Link>
              </li>
              <li>
                <a href="#introduction">Contact</a>
              </li>
              <li className="sidenav-close">
                <Link onClick={this.hideSlider} to="/about">
                  About
                </Link>
              </li>
              <li id="loginBTN">
                <Link onClick={this.hideSlider} to={this.state.Link}>
                  {this.state.login}
                </Link>
              </li>
              <img id="loginImge" src={this.state.image} alt="" />
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li className="sidenav-close">
            <Link onClick={this.showSlider} to="/">
              Home
            </Link>
          </li>

          <li className="sidenav-close">
            <Link to="/courses" onClick={this.hideSlider}>
              Courses
            </Link>
          </li>

          <li className="sidenav-close">
            <Link onClick={this.showSlider} to="/contribute">
              Improve
            </Link>
          </li>
          <li className="sidenav-close">
            <a href="#introduction">Contact</a>
          </li>

          <li className="sidenav-close">
            <Link onClick={this.hideSlider} to="/about">
              About
            </Link>
          </li>
          <li className="sidenav-close loginBTNClass" id="loginBTN2">
            <Link onClick={this.hideSlider} to={this.state.Link}>
              {this.state.login}
              <img id="loginImge2" src={this.state.image} alt="" />
            </Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Navbar;
