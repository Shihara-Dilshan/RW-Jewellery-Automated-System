import React, { Component } from "react";

class DeliveryCancellRequest extends Component {
  constructor() {
    super();
    this.state = {
      DeliveryCancellRequest: [],
      temp: "",
    };
  }
  async componentDidMount() {
    let Status = "Pending";
    const APICall = await fetch(`/api/delivery/deliveryStatus/${Status}`);
    const Result = await APICall.json();
    this.setState({ DeliveryCancellRequest: Result });
  }
  render() {
    return (
      <div>
        <h4 className="center-align grey-text">
          <b>DELIVERY CANCEL REQUESTS</b>
        </h4>
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
                  <td>{DelivereyCancel.delivery_id}</td>
                  <td>Ruvin WIjesinghe</td>
                  <td>2020-08-06</td>
                  <td>
                    <button className="btn center-align grey darken-3">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DeliveryCancellRequest;
