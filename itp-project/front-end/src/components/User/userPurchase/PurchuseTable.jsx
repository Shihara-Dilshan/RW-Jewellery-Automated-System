import React, { Component } from "react";
import "./../../../App.css";

class PurchuseTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPurchuses: "",
      orders: [],
      first: "",
    };
  }

  async componentDidMount() {
    let recipe = "requested";
    const APICall = await fetch(`/api/v2/orders/recipe/${recipe}`);
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
    this.setState({ orders: Result });
  }

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
                  src="https://image.freepik.com/free-vector/successful-purchase-concept-illustration_114360-2652.jpg"
                  height="100%"
                />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <h4 className="center-align grey-text">My Jewellery</h4>
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
                                  <th>Order ID</th>
                                  <th>Jewelry Name</th>
                                  <th>Amount</th>
                                  <th>Date</th>
                                  <th>Cancel Order</th>
                                </tr>
                              </thead>

                              <tbody>
                                {this.state.orders.map((Requested) => {
                                  return (
                                    <tr>
                                      <td>{Requested.o_id}</td>
                                      <td>{Requested.sellable.name}</td>
                                      <td>{Requested.sellable.sellprice}</td>
                                      <td>{Requested.sellable.paymentDate}</td>
                                      <td>
                                        <button className="btn white black-text">
                                          <i
                                            className="material-icons"
                                            style={{ lineHeight: "30px" }}
                                            onClick={this.removeItem}
                                          >
                                            cancel
                                          </i>
                                        </button>
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

export default PurchuseTable;
