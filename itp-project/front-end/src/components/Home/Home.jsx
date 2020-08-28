import React, { Component } from "react";

import Slider from "./Slider";
import CardContainer from "./CardContainer";
import StaticCards from "./StaticCards";
import SocialMedia from "./SocialMedia";
import Carousel from "./Carousel";

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <Slider />
        <CardContainer />
        <StaticCards />
        <SocialMedia />
        <Carousel />
  
      </div>
    );
  }
}

export default Home;
