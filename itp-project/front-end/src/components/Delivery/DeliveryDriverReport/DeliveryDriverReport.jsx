import React, { Component } from "react";
import "./../../../App.css";
import { Link } from "react-router-dom";

class DeliveryDriverReport extends Component {
  getName = (e) => {
    let DriverName = document.getElementById("DriverName").value;
    console.log(DriverName);
    sessionStorage.setItem("DriverName", DriverName);
  };
  render() {
    return (
      <div>
        <div className="container">
          <h4 className="center-align grey-text">
            <b>Delivery Driver Report</b>
          </h4>
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://image.freepik.com/free-vector/delivery-boy-home-delivery-symbol_183044-53.jpg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <div class="row">
                  <div class="input-field col s6">
                    <input id="DriverName" type="text" class="validate" />
                    <br />
                    <Link to="/ConfirmDriver">
                      <button
                        data-target="modal1"
                        type="submit"
                        class="btn modal-trigger"
                        style={{ width: "100%" }}
                        onClick={this.getName}
                      >
                        Genarate Report
                      </button>
                    </Link>
                    <label class="active" for="first_name2">
                      Enter Driver Name
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeliveryDriverReport;
