import React, { Component } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
class DeliveredItems extends Component {
  constructor() {
    super();
    this.state = {
      DeliveredItems: [],
      temp: "",
      DeliverDriverr:{},
    };
  }
  style = () => {
    return {
      borderRadius: "5px",
      marginTop: "32px",
      marginBottom: "-15px",
      marginLeft: "200px",
    };
  };
  style2 = () => {
    return {
      borderRadius: "5px",
      marginTop: "-10px",
      marginBottom: "-15px",
      marginLeft: "53px",
    };
  };
  getDeliveredid = (e) => {
    
    const deliveredid=document.getElementById("Delivereddelid").value;
    sessionStorage.setItem("delivereddelid",deliveredid);
    const Deliveredcusid = document.getElementById("Deliveredcusid").value;
    sessionStorage.setItem("deliveredcusid", Deliveredcusid);
  };
  async componentDidMount() {
    let Status = "Delivered";
    const APICall = await fetch(`/api/delivery/deliveryStatus/${Status}`);
    const Result = await APICall.json();
    this.setState({ DeliveredItems: Result });
    this.setState({DeliverDriverr:this.state.DeliveredItems[0].deliverBoy});
    console.log(this.state.DeliverDriverr)
  }
  render() {
    document.addEventListener("DOMContentLoaded", function () {
      const elems = document.querySelectorAll(".modal");
      M.Modal.init(elems);
    });
    return (
      <div>
        <h4 className="center-align grey-text">
          <b>DELIVERED ITEMS</b>
        </h4>
        <table class="container">
          <thead>
            <tr>
              <th>Delivery Address</th>
              <th>Delivery City</th>
              <th>Delivered Date</th>
              <th>Status</th>
              <th>Item Code</th>
              <th>Driver Name</th>
            </tr>
          </thead>

          <tbody>
            {this.state.DeliveredItems.map((Delivered) => {
              return (
                <tr>
                  <input type="txt" id="Delivereddelid" value={Delivered.delivery_id} hidden></input>
                  <td>{Delivered.deliveryAddress}</td>
              <td>{Delivered.deliveryCity}</td>
                <td>{Delivered.deliveredTime}</td>
                <td>{Delivered.status}</td>
                <input type="txt" id="Deliveredcusid" value={Delivered.customerid} hidden></input>
                  <td><Link to="/DeliveredMore">
                        <button
                          onClick={this.getDeliveredid}
                          className="btn center-align grey darken-3"
                        >
                          More Details
                        </button>
              
                      </Link></td>
                      <td>{this.state.DeliverDriverr.username}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DeliveredItems;
