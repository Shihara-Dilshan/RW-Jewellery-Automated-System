import React, { Component } from "react";
import Signup from "./Signup";

import "materialize-css/dist/css/materialize.min.css";

import {
  Link,
  // eslint-disable-next-line
  BrowserRouter as Router,
  // eslint-disable-next-line
  Switch,
  // eslint-disable-next-line
  Route,
  // eslint-disable-next-line
  HashRouter,
} from "react-router-dom";

import "../../App.css";

class Login extends Component {
  state = {};

  componentDidMount() {
    let problemEle = document.querySelectorAll(".problems");
    problemEle.forEach((problem) => {
      problem.classList.remove("show");
      problem.classList.add("hide");
    });
  }

  removeLoading = () => {
    let loader = document.querySelector(".indeterminate");
    setTimeout(() => {
      loader.classList.remove("indeterminate");
    }, 1000);
  };

  showError = () => {
    alert("Instagram Login API is currently shutted down by Facebook inc.");
  };

  render() {
    return (
      <div
        className="row test container"
        id="about"
        onLoad={this.removeLoading}
      >
        <div className="col s12 m12">
          <div className="card ">
            {/* <div className="card-image">
              <img
                src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/20180810_buehnenbild_socialmedia.jpg"
                alt=""
              />
            </div> */}
            {/* <div className="progress">
              <div className="indeterminate"></div>
            </div> */}
            <Signup />
            <div className="card-content center-align">
              <Link onClick={this.hideSlider} to="/facebook">
                <div>
                  <button className="btn loginBtns blue">
                    {" "}
                    <i className="fab fa-facebook fa-3x large"></i>
                    {"   "}
                    Login wih Facebook
                  </button>
                </div>
              </Link>
              <br />
              <div>
                <button className="btn loginBtns red">
                  {" "}
                  <i className="fab fa-google fa-3x large"></i>
                  {"   "}
                  Login wih Google
                </button>
              </div>
              <br />
              <Link onClick={this.hideSlider} to="/github">
                <div>
                  <button className="btn loginBtns grey darken-3">
                    {" "}
                    <i className="fab fa-github fa-3x large"></i>
                    {"   "}
                    Login wih GitHub
                  </button>
                </div>
              </Link>
              <br />
              <div>
                <button
                  onClick={this.showError}
                  className="btn loginBtns pink darken-2"
                >
                  {" "}
                  <i className="fab fa-instagram fa-3x large"></i>
                  {"   "}
                  Login wih instagram
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
