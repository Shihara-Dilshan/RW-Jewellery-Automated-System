import React, { Component } from "react";

class StaticCards extends Component {
  state = {};
  render() {
    return (
      <section className="section section-icons lighten-4 center scrollspy">
        <div>
          <div className="row">
            <div className="col s12 m4">
              <div className="card-panel medium">
                <i className="material-icons large grey-text">brush</i>
                <h4>Design Jewellery</h4>
                <p>Make your own Design from our years of experience</p>
                <button className="btn grey darken-3" style={{width: "100%"}}>Request <a href="#!" class="btn-floating pulse grey darken-3"><i class="material-icons">menu</i></a></button>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel medium">
                <i className="material-icons large grey-text">replay</i>
                <h4>Repair Jewellery</h4>
                <p>Available delivery for inside the any part of the</p>
                <button className="btn grey darken-3" style={{width: "100%"}}>Request <a href="#!" class="btn-floating pulse grey darken-3"><i class="material-icons">menu</i></a></button>
                

              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel medium">
                <i className="material-icons large grey-text">
                shopping_basket
                </i>
                <h4>Old Jewellry</h4>
                <p>
                  We never collect your personal credentials{" "}
                  <span className="span grey-text">
                    {" "}
                  </span>
                </p>
                <button className="btn grey darken-3" style={{width: "100%"}}>Request <a href="#!" class="btn-floating pulse grey darken-3"><i class="material-icons">menu</i></a></button>
                

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default StaticCards;