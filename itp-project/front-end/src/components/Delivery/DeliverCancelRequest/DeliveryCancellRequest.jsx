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
    let Status = "need to cancel";
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
                <th>Delivery Address</th>
                <th>status</th>
                <th>customer id</th>
                <th>Requested Date</th>
                <th>Delete Delivery</th>
              </tr>
            </thead>
            <tbody>
              {this.state.DeliveryCancellRequest.map((DelivereyCancel) => {
                return (
                  <tr>
                    <td>{DelivereyCancel.deliveryAddress}4</td>
                    <td>{DelivereyCancel.status}</td>
                    <input
                      value={DelivereyCancel.delivery_id}
                      id="Deliveryid"
                      type="text"
                      class="validate"
                      hidden
                    ></input>
                    <td>{DelivereyCancel.customerid}</td>
                <td>{DelivereyCancel.requestedTime}</td>
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
