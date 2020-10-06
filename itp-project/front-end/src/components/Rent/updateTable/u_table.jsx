import React, { Component } from 'react';
import M from "materialize-css";

class u_table extends Component {

    style = () => {
        return {
          backgroundColor: "#f5f5f5",
          borderRadius: "5px",
          marginTop: "-5px",
          marginBottom: "-10px",
        };
      };
    render() {
        return (
            <div>
                <table style ={{ marginLeft: "200px",marginTop:"100px", marginBottom:"100px",marginRight:"200px",width:"900px",margin:"0px 0px 0px 430 px",color:"Black",fontSize:"18px",padding:"20px",borderRadius:"10px"}}>
        <thead>
          <tr>
              <th>Rent ID</th>
              <th>Customer Name</th>
              <th>Rent Date</th>
              <th>Return Date</th>
              <th>Rental Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><input type = "date"/></td>
            <td><a class="btn-large disabled">RETURNED</a></td>
          </tr>
          
        </tbody>
      </table>
            </div>
        );
    }
}

export default u_table;