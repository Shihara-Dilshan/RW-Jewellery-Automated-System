import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Image from "./Image";

import "../../App.css";

class Carousel extends Component {
  state = {};
  render() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".carousel");
      // eslint-disable-next-line 
      var instances = M.Carousel.init(elems, {});
    });
    // eslint-disable-next-line
    var instance = M.Carousel.init({
      fullWidth: true,
      indicators: true,
    });
    return (
      <div className="carousel problems" id="slider2">
        <a className="carousel-item large" href="#one!">
          <Image image="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/model/Front-image-2.jpg" />
        </a>
        <a className="carousel-item" href="#two!">
          <Image image="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/model/Front-image-6.jpg" />
        </a>
        <a className="carousel-item" href="#three!">
          {" "}
          <Image image="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/model/Front-image-3.jpg" />
        </a>
        <a className="carousel-item" href="#four!">
          {" "}
          <Image image="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/model/Front-image-4jpg.jpg" />
        </a>
        <a className="carousel-item" href="#five!">
          {" "}
          <Image image="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/model/Front-image-2.jpg" />
        </a>
      </div>
    );
  }
}

export default Carousel;