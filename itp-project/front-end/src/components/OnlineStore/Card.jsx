import React, { Component } from "react";
class Card extends Component {
  constructor(props) {
    super(props);
  }

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
            <p>{this.props.Meterial}</p>
          </div>
          <div className="card-content card-action white-text ">
            <li
              className="btn white-text grey darken-3"
              style={this.buttonStyle()}
              onClick
            >
              Buy
            </li>
            <li
              className="btn white-text grey darken-3"
              style={this.buttonStyle()}
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
