import React, { Component } from "react";

import Slider from "./Slider";
import CardContainer from './CardContainer'

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Slider />
        <CardContainer />
      </div>
    );
  }
}

export default Home;
