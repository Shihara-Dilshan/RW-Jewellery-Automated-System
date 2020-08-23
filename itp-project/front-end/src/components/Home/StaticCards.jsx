import React, { Component } from "react";

class StaticCards extends Component {
  state = {};
  render() {
    return (
      <section className="section section-icons grey lighten-4 center scrollspy">
        <div className="container">
          <div className="row">
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large grey-text">all_inclusive</i>
                <h4>Valueble items</h4>
                <p>We always Deliver the best product for you</p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large grey-text">fitness_center</i>
                <h4>Fast delivery</h4>
                <p>Available delivery for inside the any part of the country</p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large grey-text">
                  insert_emoticon
                </i>
                <h4>Secure Payment</h4>
                <p>
                  We never collect your personal credentials{" "}
                  <span className="span grey-text">
                    {" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default StaticCards;