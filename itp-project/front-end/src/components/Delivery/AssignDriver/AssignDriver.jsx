import React, { Component } from "react";
import M from "materialize-css";

import "./../../../App.css";

class AssignDriver extends Component {
  constructor() {
    super();
    this.state = {
      DeliveryDrivers: [],
      temp: "",
      deliverId: sessionStorage.getItem("assignItemDriver"),
    };
  }
  style = () => {
    return {
      backgroundColor: "white",
      borderRadius: "5px",
      marginTop: "60px",
      marginBottom: "40px",
    };
  };

  assignDriver = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  async componentDidMount() {
    console.log(this.state.deliverId);
    const username = document.getElementById("username").value;
    const APICall = await fetch("/api/alldrivers");
    const Result = await APICall.json();
    this.setState({ DeliveryDrivers: Result });
    const elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);
  }
  render() {
    return (
      <div className="container" styleDeliveryDrivers={this.style()}>
        <div class="col s12 m7">
          <div class="card horizontal">
            <div class="card-image">
              <img
                alt=""
                src="https://image.freepik.com/free-vector/delivery-service-with-masks-concept_23-2148498594.jpg"
              />
            </div>

            <div class="card-stacked">
              <div class="card-content">
                <h4 className="center-align grey-text">Select Driver</h4>
                <div style={this.style()}>
                  <select id="username" onChange={this.assignDriver}>
                    {this.state.DeliveryDrivers.map((Dboys, index) => {
                      return (
                        <option value={Dboys.emp_id}>{Dboys.username}</option>
                      );
                    })}
                  </select>
                  <div></div>

                  <a
                    href="#!"
                    className="btn center-align grey darken-3 "
                    style={{ width: "100%", margin: "100px !important" }}
                  >
                    Assign Driver
                  </a>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AssignDriver;
