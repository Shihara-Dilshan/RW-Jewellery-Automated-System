import React, { Component } from "react";
import { Link } from "react-router-dom";

class DeliveryCancellRequest extends Component {
  constructor() {
    super();
    this.state = {
      DeliveryCancellRequest: [],
      temp: "",
    };
  }
  async componentDidMount() {
    let Status = "Driver Assigned";
    const APICall = await fetch(`/api/delivery/deliveryStatus/${Status}`);
    const Result = await APICall.json();
    this.setState({ DeliveryCancellRequest: Result });
  }
  getDeliveryID = (e) => {
    let Deliveryid = document.getElementById("Deliveryid").value;
    sessionStorage.setItem("DDid", Deliveryid);
    console.log(Deliveryid);
  };
  render() {
    return (
      <div>
        <h4 className="center-align grey-text">
          <b>DELIVERY CANCEL REQUESTS</b>
        </h4>
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Item Code</th>
                <th>Customer ID</th>
                <th>Delivery Number</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Delete Delivery</th>
              </tr>
            </thead>
            <tbody>
              {this.state.DeliveryCancellRequest.map((DelivereyCancel) => {
                return (
                  <tr>
                    <td>R1234</td>
                    <td>CUS1234</td>
                    <input
                      value={DelivereyCancel.delivery_id}
                      id="Deliveryid"
                      type="text"
                      class="validate"
                      hidden
                    ></input>
                    <td>Ruvin WIjesinghe</td>
                    <td>2020-08-06</td>
                    <td>
                      <Link to="/cancel">
                        <button
                          className="btn center-align grey darken-3"
                          onClick={this.getDeliveryID}
                        >
                          Delete
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

export default DeliveryCancellRequest;
