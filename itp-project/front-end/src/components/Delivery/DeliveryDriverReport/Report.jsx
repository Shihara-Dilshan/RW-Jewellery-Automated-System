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
  getdate = (e) => {
    let Date = document.getElementById("date").value;
    sessionStorage.setItem("ddate", Date);
  };

  async componentDidMount() {
    const DriverID = sessionStorage.getItem("EmpID");
    const status="Delivered";
    const APICall = await fetch(`/api/delivery/${status}/${DriverID}`);
    const Result = await APICall.json();
    console.log(Result);

    this.setState({ DriverRep: Result });
  }
  render() {
    return (
      <div>
        <div className="container">
          <h4 className="center-align grey-text">
            <b>Delivery History of Driver</b>
          </h4>
          <input id="date" type="text" class="validate" />
          <Link to="/search">
          <button
            className="btn center-align grey darken-3"
           onClick={this.getdate}
          >
           search by date
          </button>
        </Link>
          <table className="striped">
            <thead>
              <tr>
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
                    <td>{del.deliveryAddress}</td>
                    <td>{del.deliveryCity}</td>
                    <input
                      value={del.delivery_id}
                      id="Deliveryid"
                      type="text"
                      class="validate"
                      hidden
                    ></input>
                    <td>{del.customerid}</td>
                <td>{del.phoneNumber}</td>
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
