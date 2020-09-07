import React, { Component } from "react";
import M from "materialize-css";

import "./../../../App.css";
class AssignDriver extends Component {
  constructor() {
    super();
    this.state = {
      DeliveryDrivers: [],
      temp: "",
      TempDel: {},
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
    console.log(this.state.Daddress);
    // eslint-disable-next-line
    const APICall = await fetch("/api/alldrivers");
    const Result = await APICall.json();
    this.setState({ DeliveryDrivers: Result });

    const DeliverID = sessionStorage.getItem("assignItemDriver");

    const apitemp = await fetch(`api/deliverybyid/${DeliverID}`);
    const tempResult = await apitemp.json();
    this.setState({ TempDel: tempResult });

    const elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);
  }
  async AssignDriver(event) {
    event.preventDefault();
    const DeliverID = sessionStorage.getItem("assignItemDriver");
    const DriverID = document.getElementById("DriverID").value;
    const Daddress = document.getElementById("address").value;
    const DCity = document.getElementById("city").value;

    const Ddistance = document.getElementById("distance").value;
    const DProvince = document.getElementById("province").value;
    const DphoneNumber = document.getElementById("phoneNumber").value;
    const Ddistrict = document.getElementById("district").value;
    await fetch(`/api/updatestatus/${DeliverID}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        delivery_id: DeliverID,
        deliveryAddress: Daddress,
        deliveryCity: DCity,
        requestedTime: null,
        deliveredTime: null,
        status: "Driver Assigned",
        distance: Ddistance,
        deliveryProvince: DProvince,
        phoneNumber: DphoneNumber,
        district: Ddistrict,
        deliverBoy: { emp_id: DriverID },
      }),
    });
  }
  render() {
    document.addEventListener("DOMContentLoaded", function () {
      const elems = document.querySelectorAll(".modal");
      M.Modal.init(elems);
    });
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
                  <select id="DriverID" onChange={this.assignDriver}>
                    {this.state.DeliveryDrivers.map((Dboys, index) => {
                      return (
                        <option value={Dboys.emp_id}>{Dboys.username}</option>
                      );
                    })}
                  </select>

                  <button
                    data-target="modal1"
                    type="submit"
                    class="btn modal-trigger"
                    style={{ width: "100%" }}
                    onClick={this.AssignDriver}
                  >
                    Assign Driver
                  </button>

                  <input
                    id="address"
                    type="text"
                    className="validate"
                    value={this.state.TempDel.deliveryAddress}
                    hidden
                  />
                  <input
                    id="city"
                    type="text"
                    className="validate"
                    value={this.state.TempDel.deliveryCity}
                    hidden
                  />

                  <input
                    id="distance"
                    type="text"
                    className="validate"
                    value={this.state.TempDel.distance}
                    hidden
                  />
                  <input
                    id="province"
                    type="text"
                    className="validate"
                    value={this.state.TempDel.Province}
                    hidden
                  />
                  <input
                    id="phoneNumber"
                    type="text"
                    className="validate"
                    value={this.state.TempDel.phoneNumber}
                    hidden
                  />
                  <input
                    id="district"
                    type="text"
                    className="validate"
                    value={this.state.TempDel.district}
                    hidden
                  />
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
