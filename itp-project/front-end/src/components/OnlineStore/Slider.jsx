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
            image={"https://wallpapercave.com/wp/wp2375373.jpg"}
            title={"Necklesses"}
            description={
              "Stylish bracelets that put you in a class of your own."
            }
            classPosition={"caption right-align"}
          />
          <SliderImage
            image={
              "https://i.pinimg.com/originals/60/cf/65/60cf65a4e6e95f7c04c30e764495e11f.jpg"
            }
            title={"Rings"}
            description={
              "Find your perfect jewellery piece to mark your special moment."
            }
            classPosition={"caption right-align"}
          />
          <SliderImage
            image={"https://wallpaperaccess.com/full/2149633.jpg"}
            title={"Bracelets"}
            description={"Here's our small slogan."}
            classPosition={"caption left-align"}
          />
          <SliderImage
            image={
              "https://images.wallpaperscraft.com/image/earrings_pearls_gold_80692_3840x2400.jpg"
            }
            title={"Earrings"}
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
