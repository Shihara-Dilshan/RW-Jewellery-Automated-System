import React, { Component } from "react";
import { Link } from "react-router-dom";

class DeliveryDriver extends Component {
  constructor() {
    super();
    this.state = {
      DeliveryPendingRequest: [],
      temp: "",
    };
  }
  async componentDidMount() {
    let DriverID = "0bed41a0-e6f7-11ea-adc1-0242ac120002";
    const APICall = await fetch(`/api/delivery/deliveryBoy/${DriverID}`);
    const Result = await APICall.json();
    this.setState({ DeliveryPendingRequest: Result });
    const DeliveryID = document.getElementById("DID").value;
    console.log(DeliveryID);
  }
  async UpdateDelivery(event) {
    event.preventDefault();
    const DeliveryID = document.getElementById("DID").value;
    await fetch(`/api/updatestatus/${DeliveryID}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        status: "Dilivered",
      }),
    });
  }
  render() {
    return (
      <div>
        <div className="container">
          <h4 className="center-align grey-text">
            <b>Items To Deliver</b>
          </h4>
          <table className="striped">
            <thead>
              <tr>
                <th>Item Category</th>
                <th>Address To Deliver</th>
                <th>City</th>
                <th>Cusomer Name</th>
                <th>Phone Number</th>
                <th>Update</th>
              </tr>
            </thead>

            <tbody>
              {this.state.DeliveryPendingRequest.map((DelivereyPending) => {
                return (
                  <tr>
                    <td>Ring</td>
                    <td>{DelivereyPending.deliveryAddress}</td>
                    <td>{DelivereyPending.deliveryCity}</td>
                    <input
                      value="djhjd"
                      id="DID"
                      type="text"
                      class="validate"
                      hidden
                    ></input>
                    <td>Alvin</td>
                    <td>0771922433</td>
                    <td>
                      <Link to="#">
                        <button
                          className="btn center-align grey darken-3"
                          onClick={this.UpdateDelivery}
                        >
                          Update as a delivered
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
