import React, { Component } from "react";
import M from "materialize-css";
import "./../../../App.css";

class UpdateDelivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      TempDel: {},
      DriverOrderdetails:[],
      DriverOrder:{},
    };
  }
  async componentDidMount() {
    const DeliverID = sessionStorage.getItem("UpdateDelivery");
    console.log(DeliverID);
    const apitemp = await fetch(`api/deliverybyid/${DeliverID}`);
    const tempResult = await apitemp.json();
    this.setState({ TempDel: tempResult });
    const APICall = await fetch(`/api/v2/orders/OrderbyDelivery/${DeliverID}`);
    const result = await APICall.json();
    console.log(result);
    this.setState({ DriverOrderdetails: result });
    const elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);
    this.setState({DriverOrder:this.state.DriverOrderdetails[0].sellable});
    console.log(this.state.DriverOrder);

  }
  UpdateDelivery = async (event) => {
    event.preventDefault();
    let today = new Date();
     var dd = String(today.getDate()).padStart(2, '0');
     var mm = String(today.getMonth() + 1).padStart(2, '0'); 
     var yyyy = today.getFullYear();
     today = mm + '-' + dd + '-' + yyyy;
    const DeliverID = sessionStorage.getItem("UpdateDelivery");
    const DriverID = sessionStorage.getItem("DriverID");
    const Daddress = document.getElementById("address").value;
    const DCity = document.getElementById("city").value;
    const Ddistance = document.getElementById("distance").value;
    const DProvince = document.getElementById("province").value;
    const DphoneNumber = document.getElementById("phoneNumber").value;
    const Ddistrict = document.getElementById("district").value;
    const Cusid = document.getElementById("cusid").value;
    const reqtime=document.getElementById("retime").value;
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
        requestedTime: reqtime,
        deliveredTime: today,
        status: "Delivered",
        distance: Ddistance,
        deliveryProvince: DProvince,
        phoneNumber: DphoneNumber,
        district: Ddistrict,
        deliverBoy: { emp_id: DriverID },
        customerid: Cusid,
      }),
    });
    sessionStorage.removeItem("UpdateDelivery");
    setTimeout(() => {
      this.props.history.push("/DeliveryDriver");
    }, 1000);
  };
  render() {
    return (
      <div>
        <div className="container">
          <h2 className="center-align grey-text">More Details</h2>
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://image.freepik.com/free-vector/way-concept-illustration_114360-1191.jpg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h6 className="center-align grey-text">
                  Delivery ID - {this.state.TempDel.delivery_id}
                </h6>
                <h6 className="center-align grey-text">
                  Delivery City - {this.state.TempDel.deliveryCity}
                </h6>
                <h6 className="center-align grey-text">
                  Delivery Province - {this.state.TempDel.deliveryProvince}
                </h6>
                <h6 className="center-align grey-text">
                  Phone number for contact your customer -{" "}
                  {this.state.TempDel.phoneNumber}
                </h6>
                <h6 className="center-align grey-text">
                  District - {this.state.TempDel.district}
                </h6>
                <h6 className="center-align grey-text">
                  Distance you have to go - {this.state.TempDel.distance}KM
                </h6>
                <h6 className="center-align grey-text">
                  Jewellery ID - {this.state.DriverOrder.jewellery_id}
                </h6>
                <h6 className="center-align grey-text">
                  Jewellery Name - {this.state.DriverOrder.name}
                </h6>
                <button
                  data-target="modal1"
                  type="submit"
                  class="btn modal-trigger"
                  style={{ width: "100%" }}
                  onClick={this.UpdateDelivery}
                >
                  Update As a Delivered item
                </button>
              </div>
              <div className="card-action"></div>
            </div>
          </div>
        </div>
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
        <input
          id="cusid"
          type="text"
          className="validate"
          value={this.state.TempDel.customerid}
          hidden
        />
        <input
          id="retime"
          type="text"
          className="validate"
          value={this.state.TempDel.requestedTime}
          hidden
        />
      </div>
    );
  }
}

export default UpdateDelivery;
