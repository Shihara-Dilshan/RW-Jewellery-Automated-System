import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../../../App.css";

class VerifyOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      delete: {},
    };
  }

  async componentDidMount() {
    const id = sessionStorage.getItem("orderID");
    console.log(id);
    const orderapi = await fetch(`/api/v2/orders/${id}`);
    const Result = await orderapi.json();
    this.setState({ delete: Result });
  }

  DeleteOrder(id) {
    fetch(`/api/v2/orders/deleteOrder/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        console.log(id);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h2 className="center-align grey-text">Cancel Order Confirmation</h2>
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://image.freepik.com/free-vector/cancel-concept-illustration_114360-3620.jpg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h6 className="left-align grey-text">
                  Order ID - {this.state.delete.o_id}
                </h6>
                <h6 className="left-align grey-text">
                  Jewellery Name - {this.state.delete.amount}
                </h6>
                <h6 className="left-align grey-text">
                  Amount - {this.state.delete.sellprice}
                </h6>
                <h6 className="left-align grey-text">
                  Order Date - {this.state.delete.paymentDate}
                </h6>
                {/* <Link to="/purchusetable"> */}
                <button
                  data-target="modal1"
                  type="submit"
                  class="btn modal-trigger"
                  style={{ width: "100%" }}
                  onClick={this.DeleteOrder(this.state.delete.o_id)}
                >
                  Cancel Order
                </button>
                {/* </Link> */}

                {/* <table className="striped">
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
                    {this.state.delete.map((cancel) => {
                      return (
                        <tr>
                          <td>
                            <input
                              id="payID"
                              disabled={true}
                              value={cancel.o_id}
                            ></input>
                          </td>
                          <td>{cancel.sellable.name}</td>
                          <td>{cancel.sellable.sellprice}</td>
                          <td>{cancel.payment.paymentDate}</td>
                          <td>
                            <Link to="/VerifyPayment">
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
                </table> */}
              </div>
              <div className="card-action"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VerifyOrder;
