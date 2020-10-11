import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
          DriverRep: [],
        };
      }
    async componentDidMount() {
        const DriverID = sessionStorage.getItem("EmpID");
        console.log(DriverID);
        const Date=sessionStorage.getItem("ddate");
        console.log(Date);
        const status="Delivered";
        const APICall = await fetch(`api/delivery/Report/${DriverID}/${status}/${Date}`);
        const Result = await APICall.json();
        console.log(Result);
    
        this.setState({ DriverRep: Result });
      }
      getDataSearch = (e) => {
        let deliverID = document.getElementById("Deliveryid").value;
        console.log(deliverID);
        sessionStorage.setItem("Srid", deliverID);
      };
    render() {
        return (
            <div>
                <h4 className="center-align grey-text">
            <b>Delivery History of Driver</b>
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
                          onClick={this.getDataSearch}
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
        );
    }
}

export default Search;
