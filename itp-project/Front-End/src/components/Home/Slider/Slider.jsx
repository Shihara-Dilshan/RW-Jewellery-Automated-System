import React, { Component } from "react";
import M from "materialize-css";
import "../../../App.css";

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
      <div class="slider test">
        <ul class="slides">
          <li>
            <img alt="" src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/wp4923981-react-js-wallpapers.jpg" />
            <div class="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 class="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </div>
          </li>
          <li>
            <img alt="" src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/wp4924004-react-js-wallpapers.jpg" />
            <div class="caption left-align">
              <h3>Left Aligned Caption</h3>
              <h5 class="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </div>
          </li>
          <li>
            <img alt="" src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/wp4923978-react-js-wallpapers.jpg" />
            <div class="caption right-align">
              <h3>Right Aligned Caption</h3>
              <h5 class="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </div>
          </li>
          <li>
            <img alt="" src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/wp4923978-react-js-wallpapers.jpg" />
            <div class="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 class="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Slider;
