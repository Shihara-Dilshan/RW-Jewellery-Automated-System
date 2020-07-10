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
                <i className="material-icons large teal-text">all_inclusive</i>
                <h4>Go from zero to hero</h4>
                <p>We will try to teach everything from the stratch</p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large teal-text">fitness_center</i>
                <h4>Coding challenges</h4>
                <p>Learn by solving problems</p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large teal-text">
                  insert_emoticon
                </i>
                <h4>Full stack developer</h4>
                <p>
                  Be a Full stack developer with only java script.{" "}
                  <span className="span teal-text">
                    {" "}
                    <a href="/">Check here</a>
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
