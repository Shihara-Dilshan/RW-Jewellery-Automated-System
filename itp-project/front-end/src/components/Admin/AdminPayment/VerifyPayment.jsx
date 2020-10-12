import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../../../App.css";

class VerifyPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payment: [],
      update: {},
    };
  }

  async componentDidMount() {
    const payment_id = sessionStorage.getItem("paymentid");
    console.log(payment_id);
    const payapi = await fetch(`/api/v2/payment/${payment_id}`);
    const Result = await payapi.json();
    this.setState({ update: Result });
  }

  ChangeStatus = async (event) => {
    event.preventDefault();
    const payment_idd = sessionStorage.getItem("paymentid");
    const amount = document.getElementById("price").value;
    const payment_date = document.getElementById("date").value;
    await fetch(`/api/v2/payment/updatePayment/${payment_idd}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        payment_id: payment_idd,
        amount: amount,
        payment_date: payment_date,
        paymentstatus: "Pending",
      }),
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <h2 className="center-align grey-text">Verify Details</h2>
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://image.freepik.com/free-vector/check-list-with-businessman-flat-design_79603-145.jpg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h6 className="left-align grey-text">
                  Payment ID - {this.state.update.payment_id}
                </h6>
                <h6 className="left-align grey-text">
                  Amount - {this.state.update.amount}
                </h6>
                <h6 className="left-align grey-text">
                  Payment Date - {this.state.update.payment_date}
                </h6>
                <h6 className="left-align grey-text">
                  Payment Status - {this.state.update.paymentstatus}
                </h6>
                <Link to="/pendingpayment">
                  <button
                    data-target="modal1"
                    type="submit"
                    class="btn modal-trigger"
                    style={{ width: "100%" }}
                    onClick={this.ChangeStatus}
                  >
                    Change Status
                  </button>
                </Link>
              </div>
              <div className="card-action"></div>
            </div>
          </div>
        </div>

        <input
          id="paymenid"
          type="text"
          className="validate"
          value={this.state.update.payment_id}
          hidden
        />
        <input
          id="price"
          type="text"
          className="validate"
          value={this.state.update.amount}
          hidden
        />

        <input
          id="date"
          type="text"
          className="validate"
          value={this.state.update.payment_date}
          hidden
        />
      </div>
    );
  }
}

export default VerifyPayment;
