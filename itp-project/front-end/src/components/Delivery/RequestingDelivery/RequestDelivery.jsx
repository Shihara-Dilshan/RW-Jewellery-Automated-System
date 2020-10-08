import React, { Component } from "react";
import M from "materialize-css";
import "./../../../App.css";
class RequestDelivery extends Component {
  constructor() {
    super();
    this.state = {
      distance: " ",
      customerDetails: {},
      OrderDetails: {},
      cal: "40",
      DeliveryCharge: " ",
      deliveryiid: " ",
      bbb: "",
    };
  }
  style = () => {
    return {
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
      marginTop: "-5px",
      marginBottom: "-15px",
    };
  };

  async SubmitDelivery(event) {
    event.preventDefault();
    const city = document.getElementById("City").value;
    const location = document.getElementById("Location").value;
    const Distance = document.getElementById("Distance").value;
    const Province = document.getElementById("Province").value;
    const PhoneNumber = document.getElementById("PhoneNumber").value;
    const District = document.getElementById("District").value;
    const postDelivery_Request = await fetch("/api/RequestDelivery", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        deliveryAddress: location,
        deliveryCity: city,
        distance: Distance,
        deliveryProvince: Province,
        phoneNumber: PhoneNumber,
        district: District,
        status: "Pending",
      }),
    });
    const responsDelivery = await postDelivery_Request.json();
    const DeliveryIDD = responsDelivery.delivery_id;
    this.state.OrderDetails.delivery = { delivery_id: DeliveryIDD };
    let OOrderID = sessionStorage.getItem("ORID");
    fetch(`/api/v2/order/updateOrder/${OOrderID}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(this.state.OrderDetails),
    });
  }
  async componentDidMount() {
    const CusIDS = sessionStorage.getItem("userId");
    const APICall = await fetch(`/api/v2/customer/${CusIDS}`);
    const result = await APICall.json();
    this.setState({ customerDetails: result });
    let OrderID = sessionStorage.getItem("ORID");
    const APICall1 = await fetch(`/api/v2/order/${OrderID}`);
    const result1 = await APICall1.json();
    this.setState({ OrderDetails: result1 });
  }
  handldistance = (event) => {
    this.setState({
      distance: event.target.value,
    });
  };
  handletoast = (event) => {
    setTimeout(() => {
      M.toast({ html: "Your request has been recorded" });
      this.props.history.push("/");
    }, 1000);
  };

  exe = (event) => {
    const indicator = document.getElementById("indigator");
    indicator.classList.remove("hide");
    indicator.classList.add("show");
    this.setState({
      DeliveryCharge: parseInt(this.state.distance) * parseInt(this.state.cal),
    });
    this.SubmitDelivery(event);
  };
  render() {
    document.addEventListener("DOMContentLoaded", function () {
      const elems = document.querySelectorAll("select");
      M.FormSelect.init(elems);
    });
    document.addEventListener("DOMContentLoaded", function () {
      const elems = document.querySelectorAll(".modal");
      M.Modal.init(elems);
    });
    return (
      <div className="constainer test" style={this.style()}>
        <div className="row">
          <div className="col s6 hide-on-med-only">
            <div className="card-image">
              <img
                alt=""
                src="https://png.pngtree.com/png-vector/20190723/ourlarge/pngtree-flat-on-time-delivery-icon--vector-png-image_1569069.jpg"
                height="100%"
              />
            </div>
          </div>
          <div className="col s6">
            <div className="card-stacked">
              <div className="card-content">
                <br />
                <h4 className="center-align grey-text">Enter Details</h4>
              </div>
              <div className="constainer">
                <div className="row">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s6">
                        <input
                          id="UserName"
                          type="text"
                          className="validate"
                          value={this.state.customerDetails.name}
                        />
                        <label htmlFor="first_name"></label>
                      </div>
                      <div className="input-field col s6">
                        <input id="Location" type="text" className="validate" />
                        <label htmlFor="Location">
                          Enter Location to deliver
                        </label>
                      </div>

                      <div className="input-field col s6">
                        <input
                          id="Distance"
                          type="text"
                          className="validate"
                          value={this.state.distance}
                          onChange={this.handldistance}
                        />
                        <label htmlFor="Distance">
                          How far is it from Mawanella to the given location
                        </label>
                      </div>

                      <div className="input-field col s6">
                        <input
                          id="PhoneNumber"
                          type="text"
                          className="validate"
                          value={this.state.customerDetails.telephone}
                        />
                        <label htmlFor="Phone Number"></label>
                      </div>

                      <div className="input-field col s12">
                        <select id="Province">
                          <option value="" disabled selected></option>
                          <option value="Central Province">
                            Central Province
                          </option>
                          <option value="Eastern Province">
                            Eastern Province
                          </option>
                          <option value="Northern Province">
                            Northern Province
                          </option>
                          <option value="Southern Province">
                            Southern Province
                          </option>
                          <option value="Western Province">
                            Western Province
                          </option>
                          <option value="North Western Province">
                            North Western Province
                          </option>
                          <option value="North Central Province">
                            North Central Province
                          </option>
                          <option value="Uva Province">Uva Province</option>
                          <option value="Sabaragamuwa Province">
                            Sabaragamuwa Province
                          </option>
                        </select>
                        <label htmlFor="Province">Province</label>
                      </div>
                      <div className="input-field col s6">
                        <input id="District" type="text" className="validate" />
                        <label htmlFor="District">Enter Your District</label>
                      </div>
                      <div className="input-field col s6">
                        <input id="City" type="text" className="validate" />
                        <label htmlFor="City">Enter Your City</label>
                      </div>
                    </div>
                    <button
                      data-target="modal1"
                      type="submit"
                      class="btn modal-trigger"
                      style={{ width: "100%" }}
                      onClick={this.exe}
                    >
                      ADD REQUEST
                    </button>
                    <div className="progress hide test" id="indigator">
                      <div className="indeterminate"></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div id="modal1" class="modal">
            <div class="modal-content">
              <h4>Your Delivery Chargers -{this.state.DeliveryCharge} /=</h4>
            </div>
            <div class="modal-footer">
              <button
                data-target="modal1"
                type="submit"
                class="btn modal-trigger"
                onClick={this.handletoast}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RequestDelivery;
