import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

import "../../App.css";

class Contributes extends Component {
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

  render() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".parallax");
      M.Parallax.init(elems);
    });
    return (
      <div
        className="row test container"
        id="about"
        onLoad={this.removeLoading}
      >
        <div className="col s12 m12">
          <div className="card ">
            <div className="card-image">
              <img
                src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/wwwoie_transparent.png"
                alt=""
              />
            </div>
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
            <div className="card-content">
              <p>
                This page hosted in GitHub pages.
                <span className="teal-text">
                  {" "}
                  <a href="https://pages.github.com/">
                    Learn more about GitHub pages.
                  </a>
                </span>{" "}
                If you interested in contributing to this project,
                <ul>
                  <li>
                    1 - Go to{" "}
                    <a href="https://github.com/Shihara-Dilshan/noobstack.netlify.app-">
                      This
                    </a>{" "}
                    Page reposotory
                  </li>
                  <li>2 - Folk the reposotory</li>
                  <li>3 - Contribute to the project</li>
                  <li>4 - Send a Pull request</li>
                  <li>
                    5 - Page admins will marge your request to the reposotory
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contributes;
