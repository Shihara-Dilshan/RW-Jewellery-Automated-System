import React, { Component } from "react";
import { Link } from "react-router-dom";

class DeliveryRequestsFromCustomer extends Component {
  constructor() {
    super();
    this.state = {
      Deliveries: [],
      temp: "",
    };
  }
  style = () => {
    return {
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
      marginBottom: "-98px",
      marginLeft: "15px",
    };
  };

  getData = (e) => {
    let deliverID =
      e.target.parentElement.parentElement.parentElement.firstChild.innerHTML;
    sessionStorage.setItem("assignItemDriver", deliverID);
  };
  async componentDidMount() {
    const APICall = await fetch("/api/alldelivery");
    const Result = await APICall.json();
    this.setState({ Deliveries: Result });
  }

  render() {
    return (
      <div className="#eeeeee grey lighten-3">
        <Link to="/DeliveredItems">
          <button
            className="btn center-align grey darken-3"
            style={this.style()}
          >
            Delivered Items
          </button>
        </Link>
        <Link to="/DeliveryCancellRequest">
          <button
            className="btn center-align grey darken-3"
            style={this.style()}
          >
            Delivery Cancell Requests
          </button>
        </Link>

        <h4 className="center-align grey-text">
          <b>DELIVERY REQUESTS FROM CUSTOMER</b>
        </h4>
        <div className="#eeeeee grey lighten-3">
          <table className="responsive-table">
            <thead>
              <tr>
                <th>Delivery Number</th>
                <th>Customer ID</th>
                <th>Item Code</th>
                <th>Address For Deliver</th>
                <th>Item Category</th>
                <th>Date</th>
                <th>Item Price</th>
                <th>Assign Driver</th>
                <th>Delivery Status</th>
                <th>Confirm</th>
              </tr>
            </thead>

            <tbody>
              {this.state.Deliveries.map((Delivery) => {
                return (
                  <tr className="center-align grey-text">
                    <td>{Delivery.delivery_id}</td>
                    <td>CUS1234</td>
                    <td>B123</td>
                    <td>{Delivery.deliveryAddress}</td>
                    <td>Bangles</td>
                    <td>2020-08-06</td>
                    <td>12000/=</td>
                    <td>
                      <Link to="/AssignDriver">
                        <button
                          onClick={this.getData}
                          className="btn center-align grey darken-3"
                        >
                          Assign
                        </button>
                      </Link>
                    </td>
                    <td>{Delivery.status}</td>
                    <td>
                      <button className="btn center-align grey darken-3">
                        Confirm
                      </button>
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

export default DeliveryRequestsFromCustomer;
