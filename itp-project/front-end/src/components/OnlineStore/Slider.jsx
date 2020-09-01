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
      <React.Fragment>
      <div className="slider test">
        <ul className="slides">
          <SliderImage
            image={"https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/model/Front-image-4jpg.jpg"}
            title={"Necklesses"}
            description={
              "Stylish bracelets that put you in a class of your own."
            }
            classPosition={"caption right-align"}
          />
          <SliderImage
            image={
              "http://www.voguejewellers.lk/wp-content/uploads/2019/05/Front-image-1-1.jpg"
            }
            title={"Rings"}
            description={
              "Find your perfect jewellery piece to mark your special moment."
            }
            classPosition={"caption right-align"}
          />
          <SliderImage
            image={"https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/model/Front-image-4jpg.jpg"}
            title={"Bracelets"}
            description={"Here's our small slogan."}
            classPosition={"caption left-align"}
          />
          <SliderImage
            image={
              "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/model/bridal.jpg"
            }
            title={"Earrings"}
            description={
              "Pendants that are modern art or spiritual symbols, includes a range of Dhammachackras and Crosses."
            }
            classPosition={"caption center-align"}
          />
        </ul>
      </div>
      </React.Fragment>
    );
  }
}

export default Slider;
