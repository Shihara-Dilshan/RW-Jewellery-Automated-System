import React, { Component } from "react";

import Slider from "./Slider";
import CardContainer from "./CardContainer";
import StaticCards from "./StaticCards";
import SocialMedia from "./SocialMedia";
import Carousel from "./Carousel";

class Home extends Component {
 
  constructor(props){
      super(props);
      this.state = {};
  }
  
  componentDidMount(){
      if(sessionStorage.getItem('adminAccount') !== null){
  	    this.props.history.push("/dashboard");
      }
  }

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
