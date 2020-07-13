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
        height: 450,
        transition: 500,
        interval: 6000,
      });
    });

    return (
      <div className="slider test">
        <ul className="slides">
          <li>
            <img alt="" src="https://raw.githubusercontent.com/Shihara-Dilshan/ITP-project/master/itp-project/Front-End/my-app/public/assets/images/TT-Featured-Images-13.png" />
            <div className="caption right-align">
              <h3>Jewellery</h3>
              <h5 className="light grey-text text-lighten-3">
                Find your perfect jewellery piece to mark your special moment.
              </h5>
            </div>
          </li>
          <li>
            <img alt="" src="https://raw.githubusercontent.com/Shihara-Dilshan/ITP-project/master/itp-project/Front-End/my-app/public/assets/images/Reena.jpg" />
            <div className="caption left-align black-text">
              <h3>Earrings that turn heads</h3>
              <h5 className="light black-text text-lighten-3">
              Earrings designed to draw attention no matter what the occasion
              </h5>
            </div>
          </li>
          <li>
            <img alt="" src="https://raw.githubusercontent.com/Shihara-Dilshan/ITP-project/master/itp-project/Front-End/my-app/public/assets/images/591240.jpg" />
            <div className="caption right-align">
              <h3>Right Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </div>
          </li>
          <li>
            <img alt="" src="https://raw.githubusercontent.com/Shihara-Dilshan/ITP-project/master/itp-project/Front-End/my-app/public/assets/images/Reena.jpg" />
            <div className="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 className="light grey-text text-lighten-3">
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
