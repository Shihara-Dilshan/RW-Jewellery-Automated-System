import React, { Component } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";

import '../rentHome/stylefirst.css';


class EarStuds extends Component {
    state = {};

    style = () => {
      return {
        backgroundColor: "#f5f5f5",
        borderRadius: "5px",
        marginTop: "-5px",
        marginBottom: "-10px",
      };
    };

   
  
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    buttonStyle = () => {
      return {
        width: "100%",
      };
    };
    render() {
      return (
        <div>
          <div id="myrentals">
            <button class="rentals">My Rentals</button>
          </div>
        <div className="col s12 m4 test">
          
      
          <div className="card medium">
            <div className="card-image">
              <img src={this.props.imageSrc} alt="" />
              <span className="card-title">{this.props.title}</span>
            </div>
            <div className="card-content">
              <p>{this.props.description}</p>
            </div>
            <div className="card-action white-text">
              <button
                className="btn white-text grey darken-3"
                style={this.buttonStyle()}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
        </div>
      );
    }
}

export default EarStuds;