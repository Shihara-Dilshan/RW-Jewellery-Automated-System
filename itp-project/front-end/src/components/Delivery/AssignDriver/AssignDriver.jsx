import React, { Component } from "react";
import M from "materialize-css";
class AssignDriver extends Component {
  state = {};

  style = () => {
    return {
      backgroundColor: "white",
      borderRadius: "5px",
      marginTop: "60px",
      marginBottom: "40px",
    };
  };

  render() {
    document.addEventListener("DOMContentLoaded", function () {
      const elems = document.querySelectorAll("select");
      M.FormSelect.init(elems);
    });
    return (
      <div className="container" style={this.style()}>
        <div class="col s12 m7">
          <div class="card horizontal">
            <div class="card-image">
              <img alt="" src="https://image.freepik.com/free-vector/delivery-service-with-masks-concept_23-2148498594.jpg" />
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <h4 className="center-align grey-text">Select Driver</h4>
                <div style={this.style()}>
                  <select>
                    <option value="" disabled selected></option>
                    <option value="1">Driver1</option>
                    <option value="2">Driver2</option>
                    <option value="3">Driver4</option>
                    <option value="4">Driver5</option>
                  </select>
                </div>
                <a href="#!"
                  className="btn center-align grey darken-3 "
                  style={{ width: "100%", margin: "100px !important" }}
                >
                  Assign Driver
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AssignDriver;
