import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Image from "./Image";

import "../../App.css";

class Carousel extends Component {
  state = {};
  componentDidMount() {
    var elems = document.querySelectorAll(".carousel");
    // eslint-disable-next-line
    M.Carousel.init(elems, {});
  }
  render() {
    // eslint-disable-next-line
    M.Carousel.init({
      fullWidth: true,
      indicators: true,
    });
    return (
      <div className="carousel problems" id="slider2">
        <a className="carousel-item large" href="#one!">
          <Image image="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/categories/fallon-michael-orVNEDAylaU-unsplash.jpg" />
        </a>
        <a className="carousel-item" href="#two!">
          <Image image="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/categories/atul-vinayak-jKvwtbrxzdY-unsplash.jpg" />
        </a>
        <a className="carousel-item" href="#three!">
          {" "}
          <Image image="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/categories/cornelia-ng-hxtKsjWSd3M-unsplash.jpg" />
        </a>
        <a className="carousel-item" href="#four!">
          {" "}
          <Image image="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/categories/kyle-cut-media-Dcw_Z5o7ovY-unsplash.jpg" />
        </a>
        <a className="carousel-item" href="#five!">
          {" "}
          <Image image="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/categories/nick-karvounis-RjeVqc8eC3s-unsplash.jpg" />
        </a>
      </div>
    );
  }
}

export default Carousel;
