import React, { Component } from "react";
import { Link } from "react-router-dom";
class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DriverRep: [],
    };
  }
  getData = (e) => {
    let deliverID = document.getElementById("Deliveryid").value;
    console.log(deliverID);
    sessionStorage.setItem("ReDid", deliverID);
  };
  async componentDidMount() {
    const DriverID = sessionStorage.getItem("EmpID");
    const APICall = await fetch(`/api/delivery/deliveryBoy/${DriverID}`);
    const Result = await APICall.json();
    console.log(Result);

    this.setState({ DriverRep: Result });
  }
  render() {
    return (
      <div>
        <div className="container">
          <h4 className="center-align grey-text">
            <b>Driver Delivery Details</b>
          </h4>
          <table className="striped">
            <thead>
              <tr>
                <th>Item Category</th>
                <th>Delivered Address</th>
                <th>City</th>
                <th>Cusomer Name</th>
                <th>Phone Number</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
              {this.state.DriverRep.map((del) => {
                return (
                  <tr>
                    <td>Ring</td>
                    <td>{del.deliveryAddress}</td>
                    <td>{del.deliveryCity}</td>
                    <input
                      value={del.delivery_id}
                      id="Deliveryid"
                      type="text"
                      class="validate"
                      hidden
                    ></input>
                    <td>Alvin</td>
                    <td>0771922433</td>
                    <td>
                      <Link to="/More">
                        <button
                          className="btn center-align grey darken-3"
                          onClick={this.getData}
                        >
                          Details
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

export default Report;
