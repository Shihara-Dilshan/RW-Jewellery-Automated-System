import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { Link } from "react-router-dom";
import "../../App.css";

class Category extends Component {
  state = {};

  fuck = (e) => {
    e.preventDefault();
    M.toast({
      html:
        "SORRY, The Developers are working on the content. Please try again later. <br><br>Shihara Dilshan - Admin at NoobStack",
    });
  };

  render() {
    return (
      <div className="col s12 m4 test">
        <div className="card medium">
          <div className="card-image">
            <img src={this.props.cardInfo.image} alt="" />
            <span className="card-title">{this.props.cardInfo.title}</span>
          </div>
          <div className="card-content">
            <p>{this.props.cardInfo.Descripion}</p>
          </div>
          <div className="card-action white-text">
            <Link to={this.props.cardInfo.link} className="white-text">
              <li className="btn white-text grey darken-3" id="catExplore">
                View Course
              </li>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
