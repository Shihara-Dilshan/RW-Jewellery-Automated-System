import React, { Component } from "react";

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

  async componentDidMount() {
    const APICall = await fetch("/api/alldelivery");
    const result = await APICall.json();
    this.setState({ Deliveries: result });
  }
  render() {
    return (
      <div className="#eeeeee grey lighten-3">
        <button className="btn center-align grey darken-3" style={this.style()}>
          More Details
        </button>
        <h4 className="center-align grey-text">
          <b>DELIVERY REQUESTS FROM CUSTOMER</b>
        </h4>
        <div className="#eeeeee grey lighten-3">
          <table className="responsive-table">
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Delivery Number</th>
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
              {this.state.Deliveries.map((Delivery, index) => {
                return (
                  <tr className="center-align grey-text">
                    <td>CUS1234</td>
                    <td>{Delivery.delivery_id}</td>
                    <td>B123</td>
                    <td>{Delivery.deliveryAddress}</td>
                    <td>Bangles</td>
                    <td>2020-08-06</td>
                    <td>12000/=</td>
                    <td>
                      <button className="btn center-align grey darken-3">
                        Assign
                      </button>
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
