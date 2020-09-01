import React, { Component } from "react";
import M from "materialize-css";
import './../../../App.css';
class RequestDelivery extends Component {
  constructor() {
    super();
    this.state = {
      distance: " ",
      cal: "40",
      DeliveryCharge: " ",
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

    await fetch("/api/RequestDelivery", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        deliveryAddress: location,
        deliveryCity: city,
        status: "Pending",
      }),
    });
  }
  handldistance = (event) => {
    this.setState({
      distance: event.target.value,
    });
  };

  exe = (event) => {
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
                        <input id="UserName" type="text" className="validate" />
                        <label htmlFor="first_name">UserName</label>
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
                        />
                        <label htmlFor="Phone Number">Enter Phone number</label>
                      </div>
                      <div className="input-field col s12">
                        <select id="Province">
                          <option value="" disabled selected></option>
                          <option value="1">Central Province</option>
                          <option value="2">Eastern Province</option>
                          <option value="3">Northern Province</option>
                          <option value="4">Southern Province</option>
                          <option value="5">Western Province</option>
                          <option value="6">North Western Province</option>
                          <option value="7">North Central Province</option>
                          <option value="8">Uva Province</option>
                          <option value="9">Sabaragamuwa Province</option>
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
                  </form>
                </div>
              </div>
            </div>

            <div id="modal1" class="modal">
              <div class="modal-content">
                <h4>Your Delivery Chargers - {this.state.DeliveryCharge} /=</h4>
              </div>
              <div class="modal-footer">
                <a
                  href="#!"
                  class="modal-close waves-effect waves-green btn-flat"
                >
                  OK
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RequestDelivery;
