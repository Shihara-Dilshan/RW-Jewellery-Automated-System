import React, { Component } from 'react';

class DeliveryRequestMore extends Component {
    render() {
        return (
            
            <div className="#eeeeee grey lighten-3">
                <h4 className="center-align grey-text"><b>DELIVERY REQUESTS FROM CUSTOMER</b></h4>
        <div className="#eeeeee grey lighten-3">
        <table className="responsive-table">
        <thead>
          <tr>
              <th>Delivery Number</th>
              <th>City</th>
              <th>Province</th>
              <th>District</th>
              <th>Item Category</th>
              <th>Phone Number</th>
              <th>Customer Name</th>
          </tr>
        </thead>

        <tbody>
          <tr className="center-align grey-text">
            <td>CUS1234</td>
            <td>Kegalle</td>
            <td>Sabaragamuwa</td>
            <td>Kegalle</td>
            <td>Bangles</td>
            <td>0771234567</td>
            <td>Ruvin Wijesinghe</td>
          </tr>
         
          <tr className="center-align grey-text">
            <td>CUS1234</td>
            <td>Kegalle</td>
            <td>Sabaragamuwa</td>
            <td>Kegalle</td>
            <td>Bangles</td>
            <td>0771234567</td>
            <td>Ruvin Wijesinghe</td>
          </tr>
          <tr className="center-align grey-text">
            <td>CUS1234</td>
            <td>Kegalle</td>
            <td>Sabaragamuwa</td>
            <td>Kegalle</td>
            <td>Bangles</td>
            <td>0771234567</td>
            <td>Ruvin Wijesinghe</td>
          </tr>
         
         
        </tbody>
      </table>
      </div>
            </div>
        );
    }
}

export default DeliveryRequestMore;
