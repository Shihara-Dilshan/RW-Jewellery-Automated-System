import React, { Component } from "react";

import "./../../App.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addItem = (e) => {
    e.preventDefault();
    if (sessionStorage.getItem("cart") === null) {
      sessionStorage.setItem("cart", JSON.stringify([]));
    }
    let currentItem = {
      id: e.target.parentElement.parentElement.childNodes[4].outerText,
      name: e.target.parentElement.parentElement.childNodes[0].outerText,
      price: e.target.parentElement.parentElement.childNodes[2].outerText,
    };
    let currentCart = JSON.parse(sessionStorage.getItem("cart"));
    currentCart.push(currentItem);
    sessionStorage.setItem("cart", JSON.stringify(currentCart));
  };

  buttonStyle = () => {
    return {
      width: "50%",
    };
  };

  render() {
    return (
      <div className="col s12 m4 test">
        <div className="card">
          <div className="card-image">
            <img src={this.props.imageSrc} alt="" />
            <span className="card-title">{this.props.title}</span>
          </div>
          <div className="card-content">
            <p>{this.props.description}</p>
          </div>
          <div className="card-content">
            <p>RS. {this.props.supply_Price}</p>
          </div>
          <div className="card-content">
            <p>{this.props.Meterial}</p>
          </div>
          <h3 className="hide">{this.props.jew_id}</h3>
          <div className="card-content card-action white-text ">
            <li
              className="btn white-text grey darken-3"
              style={this.buttonStyle()}
            >
              Buy
            </li>
            <li
              className="btn white-text grey darken-3"
              style={this.buttonStyle()}
              onClick={this.addItem}
            >
              Cart
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
