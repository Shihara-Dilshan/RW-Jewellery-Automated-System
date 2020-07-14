import React, { Component } from "react";
import "../../App.css";

class IndexAbout extends Component {
  state = {};
  render() {
    return (
      <section id="contact" className="section section-contact scrollspy test">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="card-panel teal white-text center">
                <i className="material-icons">email</i>
                <h5>Any matters with our products</h5>
              </div>
              <ul className="collection with-header">
                <li className="collection-header">
                  <h4>Head Office</h4>
                </li>
                <li className="collection-item">eShop.lk</li>
                <li className="collection-item">55/F Alapalavala</li>
                <li className="collection-item">Handessa </li>
              </ul>
            </div>
            <div className="col s12 m6">
              <h5>Please Fill out this from</h5>
              <div className="input-field">
                <input type="text" placeholder="name" id="name" />
              </div>
              <div className="input-field">
                <input type="text" placeholder="email" id="email" />
              </div>
              <div className="input-field">
                <input type="text" placeholder="mobile" id="mobile" />
              </div>
              <div className="input-field">
                <textarea
                  placeholder="massage"
                  id="massage"
                  className="materialize-textarea"
                ></textarea>
                <input type="submit" value="submit" className="btn" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default IndexAbout;
