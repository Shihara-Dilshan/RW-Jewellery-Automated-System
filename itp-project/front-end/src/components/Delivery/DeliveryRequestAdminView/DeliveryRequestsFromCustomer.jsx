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
  style2 = () => {
    return {
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
      marginBottom: "-98px",
      marginLeft: "820px",
    };
  };

  getData = (e) => {
    let deliverID =
      e.target.parentElement.parentElement.parentElement.firstChild.innerHTML;
    sessionStorage.setItem("assignItemDriver", deliverID);
    const cusid = document.getElementById("cusid").value;
    sessionStorage.setItem("cusid", cusid);
  };
  async componentDidMount() {
    const status = "Pending"
    const status2="Confrimed"
    const APICall = await fetch(`/api/delivery/deliveryByStatus/${status2}/${status}`);
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
        <Link to="/OngoingDelivery">
          <button
            className="btn center-align grey darken-3"
            style={this.style2()}
          >
            Ongoing Delivereis
          </button>
        </Link>

        <h4 className="center-align grey-text">
          <b style={{ marginLeft: "100px" }}>DELIVERY REQUESTS FROM CUSTOMER</b>
        </h4>
        <div className="#eeeeee grey lighten-3">
          <table className="responsive-table">
            <thead>
              <tr>
                <th>Address For Deliver</th>
                <th>Requested Date</th>
                <th>Assign Driver</th>
                <th>Delivery Status</th>
                <th>Confirm</th>
                <th>Delivery city</th>
                <th>Delivery District</th>
              </tr>
            </thead>

            <tbody>
              {this.state.Deliveries.map((Delivery) => {
                return (
                  <tr className="center-align grey-text">
                    <td id="delID" hidden>
                      {Delivery.delivery_id}
                    </td>

                    <input id="cusid" hidden value={Delivery.customerid}></input>
                    <td>{Delivery.deliveryAddress}</td>
                <td>{Delivery.requestedTime}</td>
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
                      <Link to="/ConfirmDelivery">
                        <button
                          className="btn center-align grey darken-3"
                          onClick={this.getData}
                        >
                          Confirm
                        </button>
                      </Link>
                    </td>
                    <td>
                      {Delivery.deliveryCity}
                    </td>
                    <td>
                      {Delivery.district}
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
