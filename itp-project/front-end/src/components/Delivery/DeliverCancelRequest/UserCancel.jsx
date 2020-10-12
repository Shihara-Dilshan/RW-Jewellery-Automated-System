import React, { Component } from "react";
import { Link } from "react-router-dom";
class UserCancel extends Component {
  constructor() {
    super();
    this.state = {
      Userdelivery: [],
      temp: "",
    };
  }
  async componentDidMount() {
    const CusIDS = sessionStorage.getItem("userId");
    let Status = "Pending";
    const APICall = await fetch(`/api/delivery/deliverycustomer/${CusIDS}/${Status}`);
    const Result = await APICall.json();
    this.setState({ Userdelivery: Result });
    
  }
  canceldata = (e) => {
    let deliverID = document.getElementById("deliveryid").value;
    console.log(deliverID);
    sessionStorage.setItem("canceldelivery", deliverID);
  };
  render() {
    return (
      <div>
        <div className="col s12 m7">
          <h2 className="center-align grey-text">Your Delivery Requests</h2>
          <div className="card horizontal">
            <div className="card-image">
              <img
                alt="camcelimage"
                src="https://image.freepik.com/free-vector/delivery-service-with-masks-concept_23-2148499097.jpg"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <table>
                  <thead>
                    <tr>
                      <th>Delivery Status</th>
                      <th>Delivery Code</th>
                      <th>Cancel</th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.Userdelivery.map((cancel) => {
                      return (
                        <tr>
                          <td>{cancel.status}</td>
                         

                          <td>
                            <input
                              id="deliveryid"
                              disabled={true}
                              value={cancel.delivery_id}
                            ></input>
                          </td>

                          <td>
                            {" "}
                            <Link to="/UserDelivercancel">
                              <button
                                className="btn grey darken-3"
                                onClick={this.canceldata}
                              >
                                cancel
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
          </div>
        </div>
      </div>
    );
  }
}

export default UserCancel;
