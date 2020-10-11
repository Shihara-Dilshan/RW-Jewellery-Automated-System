import React, { Component } from "react";
import { Link } from "react-router-dom";
class Ongoingdeliveries extends Component {
  constructor() {
    super();
    this.state = {
      DeliveriesOngoing: [],
      temp: "",
    };
  }
  OngoingGetData = (e) => {
    const delid = document.getElementById("DID").value;
    sessionStorage.setItem("delid", delid);
    const cusid = document.getElementById("cusid").value;
    sessionStorage.setItem("cusid", cusid);
  };
  async componentDidMount() {
    const status = "Driver Assigned";
    const APICall = await fetch(`/api/delivery/deliveryStatus/${status}`);
    const Result = await APICall.json();
    this.setState({ DeliveriesOngoing: Result });
  }
  render() {
    return (
      <div>
        <h4 className="center-align grey-text">
          <b style={{ marginLeft: "100px" }}>ONGOING DELIVERIS</b>
        </h4>

        <div className="#eeeeee grey lighten-3">
          <table className="responsive-table">
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Address For Deliver</th>
                <th>Date</th>
                <th>Delivery Status</th>
                <th>More Details</th>
              </tr>
            </thead>

            <tbody>
              {this.state.DeliveriesOngoing.map((Delivery) => {
                return (
                  <tr className="center-align grey-text">
                    <input
                      value={Delivery.delivery_id}
                      id="DID"
                      type="text"
                      class="validate"
                      hidden
                    ></input>
                    <input
                      id="cusid"
                      hidden
                      value={Delivery.customerid}
                    ></input>
                    <input disabled={true} value={Delivery.customerid} ></input>
                    <td>{Delivery.deliveryAddress}</td>
                    <td>{Delivery.requestedTime}</td>
                    <td>
                      {Delivery.status}
                    </td>
                    <td>
                    <Link to="/OngoingMore">
                        <button
                          className="btn center-align grey darken-3"
                          onClick={this.OngoingGetData}
                        >
                          More Details
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

export default Ongoingdeliveries;
