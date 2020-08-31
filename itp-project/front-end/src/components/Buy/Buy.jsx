import React, { Component } from "react";

class Buy extends Component {
  componentDidMount() {
    setInterval(() => {
      if (sessionStorage.getItem("email") !== null) {
        this.setState({
          tab1: "Account",
          tab1Route: "/profile",
          tab2: "Logout",
          tab2Route: "/logout",
        });
      }
    }, 200);
  }

  detail = () => {
    sessionStorage.getItem("cart");
    this.setState({
      cart: JSON.parse(sessionStorage.getItem("cart"))[0],
    });
  };

  change(e) {
    e.preventDefault();
    console.log("changed");
  }

  stylecard = () => {
    return {
      width: "80%",
      marginLeft: "10%",
    };
  };

  stylehead = () => {
    return {
      color: "#7B6536",
      marginLeft: "10%",
    };
  };

  stylebutton = () => {
    return {
      marginTop: "20px",
      width: "40%",
    };
  };

  stylebutton2 = () => {
    return {
      marginTop: "20px",
      width: "50%",
      marginLeft: "5%",
      color: "#000000",
    };
  };

  async sumbitPayment(e) {
    await e.preventDefault();
    let amount = document.getElementById("amount").value;
    let sell = sessionStorage.getItem;

    const pay = await fetch("/api/v2/payment/sendPayment", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      method: "POST",
      body: JSON.stringify({
        amount: amount,
      }),
    });

    console.log(pay);

    /*const sell = await fetch("/api/v2/sellable/sendSellable")*/
  }

  render() {
    return (
      <div className="col s12 m4">
        <h2 className="header" style={this.stylehead()}>
          ORDER DETAIL
        </h2>
        <div className="card horizontal" style={this.stylecard()}>
          <div className="card-image hide-on-small-only">
            <img
              alt=""
              src="https://unblast.com/wp-content/uploads/2020/04/Online-Shopping-Illustration.jpg"
            />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <div>
                <form>
                  <h6>Personal Details</h6>
                  <label htmlFor="fname">First name:</label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    value={sessionStorage.getItem("FirstName")}
                    disabled={true}
                  ></input>
                  <br></br>
                  <label htmlFor="lname">Last name:</label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    value={sessionStorage.getItem("LastName")}
                    disabled={true}
                  ></input>
                  <br></br>
                  <label htmlFor="address">Address:</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    disabled={true}
                  ></input>
                  <br></br>
                  <label htmlFor="address">Date</label>
                  <input
                    type="text"
                    id="current_date"
                    name="address"
                    disabled={true}
                    value="2020-08-30"
                  ></input>
                  <br></br>
                  <h6>Payement Method</h6>
                  <label>
                    <input
                      onChange={this.change}
                      className="with-gap"
                      name="group1"
                      type="radio"
                      value="Pending"
                      checked
                    />
                    <span>Cash</span>
                  </label>
                  <br></br>
                  <label>
                    <input
                      onChange={this.change}
                      className="with-gap"
                      id="check1"
                      name="group1"
                      type="radio"
                      checked
                      value="Paid"
                    />
                    <span>Credit Card</span>
                  </label>
                  <br></br> <br></br>
                  <h6>Do You Want a Delivery?</h6>
                  <label>
                    <input
                      onChange={this.change}
                      className="with-gap"
                      name="group2"
                      type="radio"
                      checked
                    />
                    <span>Yes</span>
                  </label>
                  <br></br>
                  <label>
                    <input
                      onChange={this.change}
                      className="with-gap"
                      name="group2"
                      type="radio"
                      checked
                    />
                    <span>No</span>
                  </label>
                  <br></br>
                  <label htmlFor="price">Total</label>
                  <input
                    type="number"
                    id="amount"
                    value={JSON.parse(sessionStorage.getItem("cart"))[0].price}
                    disabled={true}
                  ></input>
                </form>
              </div>

              <div className="row">
                <a
                  onClick={this.sumbitPayment}
                  className="col 12 m4 waves-effect orange accent-3 btn"
                  style={this.stylebutton()}
                  href="mobile.html"
                >
                  <i className="material-icons  left ">card_membership</i>
                  Comfirm
                </a>

                <a
                  className="col 12 m4 waves-effect  grey lighten-2 btn"
                  style={this.stylebutton2()}
                  href="mobile.html"
                >
                  <i className="material-icons  left ">arrow_back</i>
                  Back to Previous
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Buy;
