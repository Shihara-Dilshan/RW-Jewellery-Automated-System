import React, { Component } from "react";

class CategoryCard extends Component {
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
            <li
              className="btn white-text grey darken-3"
              style={this.buttonStyle()}
            >
              View Category
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryCard;
