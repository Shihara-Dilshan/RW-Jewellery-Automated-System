import React, { Component } from "react";

class Shopping extends Component {
  constructor() {
    super();
  }
  buttonStyle = () => {
    return {
      width: "50%",
    };
  };

  render() {
    return (
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span className="card-title">{this.props.title}</span>
          <p>RS. {this.props.supply_Price}</p>
        </div>
        <div class="card-action">
          <a href="#" style={this.buttonStyle()}>
            <i class="material-icons">monetization_on</i>Buy
          </a>
          <a href="#" style={this.buttonStyle()}>
            <i class="material-icons">remove_shopping_cart</i>
          </a>
        </div>
      </div>
    );
  }
}

export default Shopping;
