import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";

class JsCards extends Component {
  state = {};
  render() {
    return (
      <div className="col s12 m4 test">
        <div className="card large">
          <div className="card-image">
            <iframe
              width="100%"
              height="200px"
              src="https://www.youtube.com/embed/BadnYBOVheQ"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
              title="1"
              poster={this.props.cardInfo.poster}
              preload="none"
              controls
            ></iframe>
          </div>

          <div className="card-content">
            <span className="card-title">{this.props.cardInfo.title}</span>
            <p>{this.props.cardInfo.Descripion}</p>
          </div>
          <div className="card-action white-text">
            <li className="btn white-text grey darken-3" id="catExplore">
              <Link to={this.props.cardInfo.link} className="white-text ">
                View Course
              </Link>
            </li>
          </div>
        </div>
      </div>
    );
  }
}

export default JsCards;
