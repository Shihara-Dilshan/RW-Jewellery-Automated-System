import React, { Component } from "react";

class UserDelivercancel extends Component {
  constructor() {
    super();
    this.state = {
      canceldetails: {},
      temp: "",
    };
  }
  async componentDidMount() {
    const DeliverID = sessionStorage.getItem("canceldelivery");
    console.log(DeliverID);
    const apitemp = await fetch(`api/deliverybyid/${DeliverID}`);
    const tempResult = await apitemp.json();
    this.setState({ canceldetails: tempResult });
  }

  CancelDelivery = async (event) => {
    event.preventDefault();
    const DeliverID = sessionStorage.getItem("canceldelivery");
    const Daddress = document.getElementById("address").value;
    const DCity = document.getElementById("city").value;
    const Ddistance = document.getElementById("distance").value;
    const DProvince = document.getElementById("province").value;
    const DphoneNumber = document.getElementById("phoneNumber").value;
    const Ddistrict = document.getElementById("district").value;
    const Cusid = document.getElementById("cusid").value;
    await fetch(`/api/updatestatus/${DeliverID}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        delivery_id: DeliverID,
        deliveryAddress: Daddress,
        deliveryCity: DCity,
        requestedTime: null,
        deliveredTime: null,
        status: "need to cancel",
        distance: Ddistance,
        deliveryProvince: DProvince,
        phoneNumber: DphoneNumber,
        district: Ddistrict,
        customerid: Cusid,
      }),
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <h2 className="center-align grey-text">
            <b>please verify your informations</b>
          </h2>
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://image.freepik.com/free-vector/man-faced-with-choice-yes-no_108855-1483.jpg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>
                  <h6 className="center-align grey-text">
                    Delivery Address :{this.state.canceldetails.deliveryAddress}
                  </h6>
                  <h6 className="center-align grey-text">
                    Delivery City :{this.state.canceldetails.deliveryCity}
                  </h6>
                  <h6 className="center-align grey-text">
                    Delivery District :{this.state.canceldetails.district}
                  </h6>
                  <h6 className="center-align grey-text">
                    Delivery Province :
                    {this.state.canceldetails.deliveryProvince}
                  </h6>
                  <h6 className="center-align grey-text">
                    Delivery Distance :{this.state.canceldetails.distance}Km
                  </h6>
                  <h6 className="center-align grey-text">
                    Entered PhoneNumber :{this.state.canceldetails.phoneNumber}
                  </h6>
                  <h6 className="center-align grey-text">
                    Deliver Code :{this.state.canceldetails.delivery_id}
                  </h6>
                </p>
                <button
                  data-target="modal1"
                  type="submit"
                  class="btn modal-trigger"
                  style={{ width: "100%" }}
                  onClick={this.CancelDelivery}
                >
                  Cancel Delivery
                </button>
                <input
                  id="address"
                  type="text"
                  className="validate"
                  value={this.state.canceldetails.deliveryAddress}
                  hidden
                />
                <input
                  id="city"
                  type="text"
                  className="validate"
                  value={this.state.canceldetails.deliveryCity}
                  hidden
                />

                <input
                  id="distance"
                  type="text"
                  className="validate"
                  value={this.state.canceldetails.distance}
                  hidden
                />
                <input
                  id="province"
                  type="text"
                  className="validate"
                  value={this.state.canceldetails.Province}
                  hidden
                />
                <input
                  id="phoneNumber"
                  type="text"
                  className="validate"
                  value={this.state.canceldetails.phoneNumber}
                  hidden
                />
                <input
                  id="district"
                  type="text"
                  className="validate"
                  value={this.state.canceldetails.district}
                  hidden
                />
                <input
                  id="cusid"
                  type="text"
                  className="validate"
                  value={this.state.canceldetails.customerid}
                  hidden
                />
              </div>
              <div className="card-action"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDelivercancel;
