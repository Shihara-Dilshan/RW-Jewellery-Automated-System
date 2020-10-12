import React, { Component } from "react";
import SliderImage from "./SliderImage";
import M from "materialize-css";

class Slider extends Component {
  componentDidMount() {
    const elems = document.querySelectorAll(".slider");
    M.Slider.init(elems, {
      indicators: false,
      height: 500,
      transition: 500,
      interval: 6000,
    });
  }

  render() {
    return (
      <div className="slider test">
        <ul className="slides">
          <SliderImage
            image={
              "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/model/Front-image-3.jpg"
            }
            title={"Clasped with class"}
            description={
              "Stylish bracelets that put you in a class of your own."
            }
            classPosition={"caption right-align"}
          />
          <SliderImage
            image={
              "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/model/Front-image-2.jpg"
            }
            title={"Jewellery"}
            description={
              "Find your perfect jewellery piece to mark your special moment."
            }
            classPosition={"caption right-align"}
          />
          <SliderImage
            image={
              "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/model/Front-image-5.jpg"
            }
            title={"Rings that bind time"}
            description={"Here's our small slogan."}
            classPosition={"caption left-align"}
          />
          <SliderImage
            image={
              "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/model/Front-image-6.jpg"
            }
            title={"Hanging art"}
            description={
              "Pendants that are modern art or spiritual symbols, includes a range of Dhammachackras and Crosses."
            }
            classPosition={"caption center-align"}
          />
        </ul>
      </div>
    );
  }
}

export default Slider;
