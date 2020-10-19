import React, { Component } from "react";
import { Link } from "react-router-dom";

class DeliveryDriver extends Component {
  constructor() {
    super();
    this.state = {
      DeliveryPendingRequest: [],
      temp: "",
      TempDel: {},
    };
  }
  getData = (e) => {
    let deliverID = document.getElementById("DID").value;
    console.log(deliverID);
    sessionStorage.setItem("UpdateDelivery", deliverID);
  };
  async componentDidMount() {
    let DriverID = sessionStorage.getItem("adminId");
    sessionStorage.setItem("DriverID", DriverID);
    let Drivstatus="Driver Assigned";
    const APICall = await fetch(`/api/delivery/${Drivstatus}/${DriverID}`);
    const Result = await APICall.json();
    this.setState({ DeliveryPendingRequest: Result });
  }
  render() {
    return (
      <div>
        <div className="container">
          <h4 className="center-align grey-text">
            <b>Items to Deliver</b>
          </h4>
          <table className="striped">
            <thead>
              <tr>
                <th>Delivery District</th>
                <th>Address To Deliver</th>
                <th>City</th>
                <th>Phone Number</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
              {this.state.DeliveryPendingRequest.map((DelivereyPending) => {
                return (
                  <tr>
                    <td>{DelivereyPending.district}</td>
                    <td>{DelivereyPending.deliveryAddress}</td>
                    <td>{DelivereyPending.deliveryCity}</td>
                <td>{DelivereyPending.phoneNumber}</td>
                    <input
                      value={DelivereyPending.delivery_id}
                      id="DID"
                      type="text"
                      class="validate"
                      hidden
                    ></input>
                    <td>
                      <Link to="/UpdateDelivery">
                        <button
                          className="btn center-align grey darken-3"
                          onClick={this.getData}
                        >
                          More Details about delivery
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DeliveryDriver;
