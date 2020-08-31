import React, { Component } from "react";

class pending extends Component {
  constructor() {
    super();
    this.state = {};
  }

  styletable = () => {
    return {
      marginLeft: "5%",
      marginBottom: "2%",
    };
  };

  render() {
    return (
      <div>
        <h5 class="header" style={this.styletable()}>
          PENDING PAYMENTS
        </h5>

        <table class="centered striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>TP</th>
              <th>Amount</th>
              <th>Payment Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>OR-123</td>
              <td>John</td>
              <td>0773839148</td>
              <td>12000</td>
              <td>
                <a class="waves-effect waves-light btn" href="mobile.html">
                  Paid
                </a>
              </td>
            </tr>
            <tr>
              <td>OR-123</td>
              <td>John</td>
              <td>0773839148</td>
              <td>12000</td>
              <td>
                <a class="waves-effect waves-light btn" href="mobile.html">
                  Paid
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default pending;
