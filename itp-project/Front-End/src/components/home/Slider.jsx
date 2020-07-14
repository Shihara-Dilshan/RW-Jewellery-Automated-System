import React, { Component } from "react";
import Image from "../Image/Image";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "../../App.css";

class Slider extends Component {
  state = {};
  render() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".slider");
      M.Slider.init(elems, {
        indicators: false,
        height: 400,
        transition: 500,
        interval: 6000,
      });
    });
    return (
      <div className="test problems" id="slider">
        <div className="slider">
          <ul className="slides">
            <li>
              <Image image="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/wp4923981-react-js-wallpapers.jpg" />

              <div className="caption left-align">
                <h3>React JS</h3>
                <h5 className="light grey-text text-lighten-3">
                  Java Script for front end.
                </h5>
              </div>
            </li>
            <li>
              <Image image="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/wp4924004-react-js-wallpapers.jpg" />

              <div className="caption right-align grey-text">
                <h3>Learn NodeJS!</h3>
                <h5 className="light grey-text text-lighten-3">
                  Run Java Script on server.
                </h5>
              </div>
            </li>

            <li>
              <Image image="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/wp4923978-react-js-wallpapers.jpg" />

              <div className="caption center-align">
                <h3>Full Stack Java Script</h3>
                <h5 className="light grey-text text-lighten-3">
                  Learn to use JS Everywhere
                </h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Slider;
