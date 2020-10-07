import React, { Component } from "react";
import { Link } from "react-router-dom";

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DeliveryDriver: [],
    };
  }
  getID = (e) => {
    let empid = document.getElementById("empID").value;
    console.log(empid);
    sessionStorage.setItem("EmpID", empid);
  };

  async componentDidMount() {
    const DriverName = sessionStorage.getItem("DriverName");

    const APICall = await fetch(
      `/api/deliveryBoy/deliveryBoyUsername/${DriverName}`
    );
    const Result = await APICall.json();
    console.log(Result);
    this.setState({ DeliveryDriver: Result });
  }
  render() {
    return (
      <div>
        <div className="container">
          <h2 className="center-align grey-text">Please Confirm Driver</h2>
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://image.freepik.com/free-vector/delivery-boy-with-mask-motor-scooter_23-2148506533.jpg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <tbody>
                  {this.state.DeliveryDriver.map((Driver) => {
                    return (
                      <tr>
                        <h4
                          className="center-align grey-text"
                          center-align
                          grey-text
                        >
                          Position - {Driver.position}
                        </h4>
                        <br />

                        <h6>Fisrt Name - {Driver.fname}</h6>
                        <h6>Last Name - {Driver.lName}</h6>
                        <h6>User Name - {Driver.username}</h6>
                        <h6>Telephone Number - {Driver.telephone}</h6>
                        <h6>Driver NIC - {Driver.nic}</h6>
                        <input
                          id="empID"
                          type="text"
                          className="validate"
                          value={Driver.emp_id}
                          hidden
                        />
                      </tr>
                    );
                  })}
                </tbody>
                <br />
                <Link to="/Report">
                  <button
                    data-target="modal1"
                    type="submit"
                    class="btn modal-trigger"
                    style={{ width: "100%" }}
                    onClick={this.getID}
                  >
                    Confirm Driver
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Report;
