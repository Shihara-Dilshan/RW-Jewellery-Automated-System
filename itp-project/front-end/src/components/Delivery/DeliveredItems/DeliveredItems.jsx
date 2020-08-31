import React, { Component } from "react";
import M from "materialize-css";
class DeliveredItems extends Component {
  constructor() {
    super();
    this.state = {
      DeliveredItems: [],
      temp: "",
    };
  }
  style = () => {
    return {
      borderRadius: "5px",
      marginTop: "32px",
      marginBottom: "-15px",
      marginLeft: "200px",
    };
  };
  style2 = () => {
    return {
      borderRadius: "5px",
      marginTop: "-10px",
      marginBottom: "-15px",
      marginLeft: "53px",
    };
  };
  async componentDidMount() {
    let Status = "Pending";
    const APICall = await fetch(`/api/delivery/deliveryStatus/${Status}`);
    const Result = await APICall.json();
    this.setState({ DeliveredItems: Result });
  }

  render() {
    document.addEventListener("DOMContentLoaded", function () {
      const elems = document.querySelectorAll(".modal");
      M.Modal.init(elems);
    });
    return (
      <div>
        <h4 className="center-align grey-text">
          <b>DELIVERED ITEMS</b>
        </h4>
        <table>
          <thead>
            <tr>
              <th>Delivery Number</th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Delivered Time</th>
              <th>Item Code</th>
              <th>Driver Name</th>
            </tr>
          </thead>

          <tbody>
            {this.state.DeliveredItems.map((Delivered) => {
              return (
                <tr>
                  <td>{Delivered.delivery_id}</td>
                  <td>Ruvin Wijesinghe</td>
                  <td>{Delivered.deliveryAddress}</td>
                  <td>9:55 PM</td>
                  <td>{Delivered.status}</td>
                  <td>Ramesh Bandara</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DeliveredItems;
