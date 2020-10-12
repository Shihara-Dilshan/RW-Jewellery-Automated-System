import React, { Component } from "react";
import M from "materialize-css";
import "./../../../App.css";
import { Link } from "react-router-dom";
class ConfirmDelivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      TempDel: {},
      customerDetails: {},
      orderdetails:[],
      or:{},
    };
  }
  async componentDidMount() {
    const DeliverID = sessionStorage.getItem("assignItemDriver");
    console.log(DeliverID)
    const cusid = sessionStorage.getItem("cusid");
    console.log(cusid);
    const apitemp = await fetch(`api/deliverybyid/${DeliverID}`);
    const tempResult = await apitemp.json();
    this.setState({ TempDel: tempResult });
    const APICall = await fetch(`/api/v2/customer/${cusid}`);
    const result = await APICall.json();
    this.setState({ customerDetails: result });
    const APICall2 = await fetch(`/api/v2/orders/OrderbyDelivery/${DeliverID}`);
    const result2 = await APICall2.json();
    console.log(result2);
    this.setState({ orderdetails: result2 });
    const elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);
    this.setState({or:this.state.orderdetails[0].sellable});
    console.log(this.state.or);

  }
  ConfirmDelivery = async (event) => {
    event.preventDefault();
    const DeliverID = sessionStorage.getItem("assignItemDriver");
    const Daddress = document.getElementById("address").value;
    const DCity = document.getElementById("city").value;
    // const DboyID = document.getElementById("deliverBoy").value;
    const Cusid = document.getElementById("cusid").value;
    console.log(Cusid);
    const Ddistance = document.getElementById("distance").value;
    const requestTime= document.getElementById("reqtime").value;
    const DProvince = document.getElementById("province").value;
    const DphoneNumber = document.getElementById("phoneNumber").value;
    const Ddistrict = document.getElementById("district").value;
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
        requestedTime: requestTime,
        deliveredTime: null,
        status: "Confrimed",
        distance: Ddistance,
        deliveryProvince: DProvince,
        phoneNumber: DphoneNumber,
        district: Ddistrict,
        customerid: Cusid,
        //deliverBoy: { emp_id: DboyID },
      }),
    });
    setTimeout(() => {
      this.props.history.push("/del");
    }, 1000);
  };
  render() {
    return (
      <div>
        <div className="container">
          <h2 className="center-align grey-text">Delivery Details</h2>
          <div className="card horizontal">
            <div className="card-image">
           <img src="https://image.freepik.com/free-vector/express-courier-scooter-shipping-order_74855-6447.jpg"/> 
            </div>
            <div className="card-stacked">
              <div className="card-content">
              
                <h6 className="center-align grey-text">
                  Address - {this.state.TempDel.deliveryAddress}
                </h6>
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
                  Phone number for contact - {this.state.TempDel.phoneNumber}
                </h6>
                <h6 className="center-align grey-text">
                  District - {this.state.TempDel.district}
                </h6>
                <h6 className="center-align grey-text">
                  Distance - {this.state.TempDel.distance}
                </h6>
                <h6 className="center-align grey-text">
                  Customer Name - {this.state.customerDetails.name}
                </h6 >
                  <h6 className="center-align grey-text">Jewellery ID -{this.state.or.jewellery_id}</h6>
                  <h6 className="center-align grey-text">Jewellery Category -{this.state.or.name}</h6>
                  <h6 className="center-align grey-text">Jewellery Price -Rs:{this.state.or.supplyPrice}/=</h6>
                <button
                  data-target="modal1"
                  type="submit"
                  class="btn modal-trigger"
                  style={{ width: "100%" }}
                  onClick={this.ConfirmDelivery}
                >
                  Confirm Delivery
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
          hidden
          type="text"
          className="validate"
          value={this.state.TempDel.customerid}
        />
        <input
          id="reqtime"
          hidden
          type="text"
          className="validate"
          value={this.state.TempDel.requestedTime}
        />
      </div>
    );
  }
}

export default ConfirmDelivery;
