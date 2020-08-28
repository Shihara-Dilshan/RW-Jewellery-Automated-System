import React, { Component } from "react";
import M from "materialize-css";
class AssignDriver extends Component {
  constructor() {
    super();
    this.state = {
      DeliveryDrivers: [],
      temp: "",
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
  async componentDidMount() {
    const APICall = await fetch("/api/alldrivers");
    const Result = await APICall.json();
    console.log(Result);
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
                  <select>
                    {this.state.DeliveryDrivers.map((Dboys, index) => {
                      return <option value="1">{Dboys.username}</option>;
                    })}
                  </select>
                  <a
                    href="#!"
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
      </div>
    );
  }
}

export default AssignDriver;
