import React, { Component } from "react";

class DeliveryRequestsFromCustomer extends Component {
  state = {};

  style = () => {
    return {
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
      marginTop: "-5px",
      marginBottom: "-15px",
    };
  };

  render() {
    return (
      <div class="card-panel #eeeeee grey lighten-3" style={this.style()}>
        <h4 className="center-align grey-text">
          <b>DELIVERY REQUESTS FROM CUSTOMER</b>
        </h4>

        <table className="centered">
          <thead>
            <tr>
              <th>Customer Id</th>
              <th>Delivery Number</th>
              <th>Item Code</th>
              <th>Address For Deliver</th>
              <th>City</th>
              <th>Province</th>
              <th>District</th>
              <th>Phone Number</th>
              <th>Customer Name</th>
              <th>Item Category</th>
              <th>Date</th>
              <th>Distance</th>
              <th>Assign Driver</th>
              <th>Delivery Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>CUS1234</td>
              <td>DE1234</td>
              <td>B35</td>
              <td>No 89 Main Street Kegalle</td>
              <td>Mawanella</td>
              <td>Sabaragamuwa</td>
              <td>Kegalle</td>
              <td>0771234567</td>
              <td>Yamitha Uluvita</td>
              <td>Bangles</td>

              <td>01/08/2020</td>

              <td>45KM</td>
              <td>
                <a
                  className="btn center-align grey darken-3 "
                  href="/AssignDriver"
                >
                  Assign Driver
                </a>
              </td>
              <td>Not Delivered</td>
            </tr>
            <tr>
              <td>CUS1256</td>
              <td>DE1234</td>
              <td>R37</td>
              <td>No 89 Main Street Gampola</td>
              <td>Gampola</td>
              <td>Central Province</td>
              <td>Kandy</td>
              <td>0771234567</td>
              <td>Lasindu Kushan</td>
              <td>Ring</td>
              <td>02/08/2020</td>
              <td>45KM</td>
              <td>
                <a
                  className="btn center-align grey darken-3 "
                  href="/AssignDriver"
                >
                  Assign Driver
                </a>
              </td>
              <td>Not Delivered</td>
            </tr>
            <tr>
              <td>CUS1277</td>
              <td>DE1238</td>
              <td>ER39</td>
              <td>No 89 Main Street Mathale</td>
              <td>Mathale</td>
              <td>Central Province</td>
              <td>Kandy</td>
              <td>0771234567</td>
              <td>Shihara Dilshan</td>
              <td>Ear Ring</td>
              <td>04/08/2020</td>
              <td>45KM</td>
              <td>
                <a
                  className="btn center-align grey darken-3 "
                  href="/AssignDriver"
                >
                  Assign Driver
                </a>
              </td>
              <td>Not Delivered</td>
            </tr>
            <tr>
              <td>CUS1200</td>
              <td>DE1265</td>
              <td>C34</td>
              <td>No 89 Main Street Kandy</td>
              <td>Kandy</td>
              <td>Central Province</td>
              <td>Kandy</td>
              <td>0771234567</td>
              <td>Ruvin Wijesinghe </td>
              <td>Chain</td>
              <td>09/06/2020</td>
              <td>45KM</td>
              <td>
                <a
                  className="btn center-align grey darken-3 "
                  href="/AssignDriver"
                >
                  Assign Driver
                </a>
              </td>
              <td>Not Delivered</td>
            </tr>
            <tr>
              <td>CUS1244</td>
              <td>DE1244</td>
              <td>C32</td>
              <td>No 89 Main Street Kandy</td>
              <td>Kandy</td>
              <td>Central Province</td>
              <td>Kandy</td>
              <td>0771234567</td>
              <td>Ruvin Wijesinghe </td>
              <td>Chain</td>
              <td>07/05/2020</td>
              <td>45KM</td>
              <td style={{ fontSize: "10px !important" }}>
                <a
                  className="btn center-align grey darken-3 "
                  href="/AssignDriver"
                >
                  Assign Driver
                </a>
              </td>
              <td>Not Delivered</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DeliveryRequestsFromCustomer;
