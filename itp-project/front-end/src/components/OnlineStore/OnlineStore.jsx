import React, { Component } from "react";
import Card from "./Card";
import Slider from "./Slider";
import Searchd from "./searchd";

class OnlineStore extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Slider />
        <div className="container">
          <h2>Filters</h2>
          <div class="row">
            <div class="col s0"></div>
            <Searchd />
          </div>

          <h1 style={{ fontFamily: "Montserrat", color: "#7B6536" }}>
            Jewellery
          </h1>
          <br></br>

          {/*------------row----------------*/}
          <div class="row">
            <Card />
            <Card />
            <Card />
          </div>
          {/*------------row----------------*/}
          <div class="row">
            <Card />
            <Card />
            <Card />
          </div>
          {/*------------row----------------*/}
          <div class="row">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export default OnlineStore;
