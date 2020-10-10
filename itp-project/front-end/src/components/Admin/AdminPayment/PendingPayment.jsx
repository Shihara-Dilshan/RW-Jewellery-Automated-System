import React, { Component } from "react";
import "./../../../App.css";
import { Link } from "react-router-dom";

class PendingPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPurchuses: "",
      payment: [],
      first: "",
    };
  }

  async componentDidMount() {
    let paymentstatus = "Paid";
    const APICall = await fetch(
      `/api/v2/payment/paymentStatus/${paymentstatus}`
    );
    // .then((res) => res.json())
    // .then((data) => {
    //   this.setState({
    //     orders: data,
    //     first: data.orders.payment.payment_id,
    //   });
    //   console.log(data.orders.payment.payment_id);
    // })
    // .catch((err) => console.log(err));
    const Result = await APICall.json();
    this.setState({ payment: Result });
  }
  getpaymentid = (e) => {
    let paymentid = document.getElementById("payID").value;
    sessionStorage.setItem("paymentid", paymentid);
  };

  style = () => {
    return {
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
      marginTop: "-5px",
      marginBottom: "-10px",
    };
  };

  getStyle = () => {
    return {
      width: "20%",
    };
  };

  render = () => {
    return (
      <div>
        <div className="contsainer test" style={this.style()}>
          <div className="col s12 m7">
            <div className="card horizontal">
              <div className="card-image hide-on-small-only">
                <img
                  id="signUpImage"
                  alt=""
                  src="https://image.freepik.com/free-vector/payment-information-concept-illustration_114360-2886.jpg"
                  height="100%"
                />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <h4 className="center-align grey-text">Pending Payments</h4>
                  <div className="row">
                    <div className="center-align center"></div>
                    <br />
                    <div className="container">
                      <div class="row">
                        <div class="col s12">
                          <div class="row">
                            <table className="striped">
                              <thead>
                                <tr>
                                  <th>Payment ID</th>
                                  <th>Payment Date</th>
                                  <th>Amount</th>
                                  <th>Payment Status</th>
                                  <th>Change Status</th>
                                </tr>
                              </thead>

                              <tbody>
                                {this.state.payment.map((Paid) => {
                                  return (
                                    <tr>
                                      <td>
                                        <input
                                          id="payID"
                                          disabled={true}
                                          value={Paid.payment_id}
                                        ></input>
                                      </td>
                                      <td>{Paid.payment_date}</td>
                                      <td>{Paid.amount}</td>
                                      <td>{Paid.paymentstatus}</td>
                                      <td>
                                        <Link to="/verifypayment">
                                          <button className="btn white black-text">
                                            <i
                                              className="material-icons"
                                              style={{ lineHeight: "30px" }}
                                              onClick={this.getpaymentid}
                                            >
                                              offline_pin
                                            </i>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default PendingPayment;
