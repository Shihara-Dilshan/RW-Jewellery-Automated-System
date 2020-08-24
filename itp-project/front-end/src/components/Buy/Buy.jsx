import React, { Component } from "react";

class Buy extends Component {
  constructor() {
    super();
    this.state = {};
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

  render() {
    return (
      <div class="col s12 m4">
        <h2 class="header" style={this.stylehead()}>
          ORDER DETAIL
        </h2>
        <div class="card horizontal" style={this.stylecard()}>
          <div class="card-image">
            <img src="https://unblast.com/wp-content/uploads/2020/04/Online-Shopping-Illustration.jpg" />
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <div>
                <form>
                  <h6>Personal Details</h6>
                  <label for="fname">First name:</label>
                  <input type="text" id="fname" name="fname" required></input>
                  <br></br>
                  <label for="lname">Last name:</label>
                  <input type="text" id="lname" name="lname" required></input>
                  <br></br>
                  <label for="address">Address:</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                  ></input>
                  <br></br>
                  <label for="tp">Telephone Number:</label>
                  <input
                    type="number"
                    id="tp"
                    name="tp"
                    maxLength="10"
                    placeholder="07********"
                    required
                  ></input>
                  <br></br>
                  <h6>Payement Method</h6>
                  <label>
                    <input
                      class="with-gap"
                      name="group1"
                      type="radio"
                      checked
                    />
                    <span>Cash</span>
                  </label>
                  <br></br>
                  <label>
                    <input
                      class="with-gap"
                      name="group1"
                      type="radio"
                      checked
                    />
                    <span>Credit Card</span>
                  </label>
                  <br></br> <br></br>
                  <h6>Do You Want a Delivery?</h6>
                  <label>
                    <input
                      class="with-gap"
                      name="group2"
                      type="radio"
                      checked
                    />
                    <span>Yes</span>
                  </label>
                  <br></br>
                  <label>
                    <input
                      class="with-gap"
                      name="group2"
                      type="radio"
                      checked
                    />
                    <span>No</span>
                  </label>
                  <br></br>
                  <h6>Total</h6>
                </form>
              </div>

              <div class="row">
                <a
                  class="col 12 m4 waves-effect orange accent-3 btn"
                  style={this.stylebutton()}
                  href="mobile.html"
                >
                  <i class="material-icons  left ">card_membership</i>Comfirm
                </a>

                <a
                  class="col 12 m4 waves-effect  grey lighten-2 btn"
                  style={this.stylebutton2()}
                  href="mobile.html"
                >
                  <i class="material-icons  left ">arrow_back</i>Back to
                  Previous
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
