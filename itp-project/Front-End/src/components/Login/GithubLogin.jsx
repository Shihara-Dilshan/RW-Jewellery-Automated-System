import React, { Component } from "react";
import Github from "./Github";
// eslint-disable-next-line
import { Link } from "react-router-dom";

class GithubLogin extends Component {
  state = {};

  removeLoading = () => {
    let loader = document.querySelector(".indeterminate");
    setTimeout(() => {
      loader.classList.remove("indeterminate");
    }, 1000);
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
            <div className="card-image">
              <img
                src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/Facebook-Group-Cover-size-2.png"
                alt=""
              />
            </div>
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
            <div className="card-content center-align">
              <Github />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GithubLogin;
