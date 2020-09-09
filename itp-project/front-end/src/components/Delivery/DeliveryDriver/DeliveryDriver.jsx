import React, { Component } from "react";
import { Link } from "react-router-dom";

class DeliveryDriver extends Component {
  constructor() {
    super();
    this.state = {
      DeliveryPendingRequest: [],
      temp: "",
      TempDel: {},
    };
  }
  async componentDidMount() {
    let DriverID = "0bed41a0-e6f7-11ea-adc1-0242ac120002";
    const APICall = await fetch(`/api/delivery/deliveryBoy/${DriverID}`);
    const Result = await APICall.json();
    this.setState({ DeliveryPendingRequest: Result });
    const DeliveryID = document.getElementById("DID").value;
    console.log(DeliveryID);
    const apitemp = await fetch(`api/deliverybyid/${DeliveryID}`);
    const tempResult = await apitemp.json();
    this.setState({ TempDel: tempResult });
  }
  async UpdateDeliverd(event) {
    event.preventDefault();
    const DeliveryID = document.getElementById("DID").value;
    const DriverID = "0bed41a0-e6f7-11ea-adc1-0242ac120002";
    // eslint-disable-next-line
    const Daddress = document.getElementById("address").value;
    // eslint-disable-next-line
    const DCity = document.getElementById("city").value;

    const Ddistance = document.getElementById("distance").value;
    const DProvince = document.getElementById("province").value;
    const DphoneNumber = document.getElementById("phoneNumber").value;
    const Ddistrict = document.getElementById("district").value;
    await fetch(`/api/updatestatus/${DeliveryID}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        delivery_id: DeliveryID,
        deliveryAddress: "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
        deliveryCity: "gfgfgfgfgfgfgfgfgfhhhhhhhhhhhh",
        requestedTime: null,
        deliveredTime: null,
        status: "Delivered Success",
        distance: Ddistance,
        deliveryProvince: DProvince,
        phoneNumber: DphoneNumber,
        district: Ddistrict,
        deliverBoy: { emp_id: DriverID },
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
                      value={DelivereyPending.delivery_id}
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
                          onClick={this.UpdateDeliverd}
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
          <input
            id="address"
            type="text"
            className="validate"
            value={this.state.TempDel.deliveryAddress}
            hidden
          />
          <input
            id="city"
            type="text"
            className="validate"
            value={this.state.TempDel.deliveryCity}
            hidden
          />

          <input
            id="distance"
            type="text"
            className="validate"
            value={this.state.TempDel.distance}
            hidden
          />
          <input
            id="province"
            type="text"
            className="validate"
            value={this.state.TempDel.Province}
            hidden
          />
          <input
            id="phoneNumber"
            type="text"
            className="validate"
            value={this.state.TempDel.phoneNumber}
            hidden
          />
          <input
            id="district"
            type="text"
            className="validate"
            value={this.state.TempDel.district}
            hidden
          />
        </div>
      </div>
    );
  }
}

export default DeliveryDriver;
