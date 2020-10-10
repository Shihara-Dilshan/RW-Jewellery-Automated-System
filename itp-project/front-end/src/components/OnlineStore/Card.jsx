import React, { Component } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";

import "./../../App.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addItem = (e) => {
    if (sessionStorage.getItem("cart") === null) {
      sessionStorage.setItem("cart", JSON.stringify([]));
    }
    let currentItem = {
      id: e.target.parentElement.parentElement.childNodes[4].innerText,
      name: e.target.parentElement.parentElement.childNodes[0].innerText,
      price: e.target.parentElement.parentElement.childNodes[2].innerText,
    };
    let currentCart = JSON.parse(sessionStorage.getItem("cart"));
    currentCart.push(currentItem);
    sessionStorage.setItem("cart", JSON.stringify(currentCart));
    M.toast({ html: "Item has been added to the cart" });
  };

  addBuy = (e) => {
    if (sessionStorage.getItem("cart") !== null) {
      sessionStorage.setItem("cart", JSON.stringify([]));
    }

    console.log(e.target.parentElement.parentElement.parentElement.childNodes);
    if (sessionStorage.getItem("cart") === null) {
      sessionStorage.setItem("cart", JSON.stringify([]));
    }
    let currentItem = {
      id:
        e.target.parentElement.parentElement.parentElement.childNodes[4]
          .innerText,
      name:
        e.target.parentElement.parentElement.parentElement.childNodes[0]
          .innerText,
      price:
        e.target.parentElement.parentElement.parentElement.childNodes[2]
          .innerText,
    };
    let currentbuy = JSON.parse(sessionStorage.getItem("cart"));
    currentbuy.push(currentItem);
    sessionStorage.setItem("cart", JSON.stringify(currentbuy));
  };

  buttonStyle = () => {
    return {
      width: "49%",
    };
  };

  render() {
    return (
      <div className="col s12 m4 test">
        <div className="card medium">
          <div className="card-image">
            <img src={this.props.imageSrc} alt="" />
            <span className="card-title">{this.props.title}</span>
          </div>
          <div className="card-content">
            <p>{this.props.description}</p>
            <p>{this.props.supply_Price}</p>
            <p>{this.props.Meterial}</p>
          </div>
          <div className="card-content hide">
            <p>{this.props.supply_Price}</p>
          </div>
          <div className="card-content hide">
            <p>{this.props.Meterial}</p>
          </div>
          <h3 className="hide">{this.props.jew_id}</h3>
          <div className="card-content card-action white-text ">
            <Link to="/buy">
              <li
                className="white-text grey darken-3 waves-effect waves-teal btn-flat"
                style={this.buttonStyle()}
                onClick={this.addBuy}
              >
                Buy
              </li>
            </Link>{" "}
            <li
              className="white-text grey darken-3 waves-effect waves-teal btn-flat"
              style={this.buttonStyle()}
              onClick={this.addItem}
            >
              Add to cart
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
