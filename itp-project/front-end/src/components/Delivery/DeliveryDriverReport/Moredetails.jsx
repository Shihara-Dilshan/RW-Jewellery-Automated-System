import React, { Component } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";

class Moredetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DriverRep: {},
    };
  }
  async componentDidMount() {
    const DeliverID = sessionStorage.getItem("ReDid");
    console.log(DeliverID);
    const apitemp = await fetch(`api/deliverybyid/${DeliverID}`);
    const tempResult = await apitemp.json();
    this.setState({ DriverRep: tempResult });

    const elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);
  }
  render() {
    return (
      <div>
        <div className="container">
          <h2 className="center-align grey-text">More Details</h2>
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://image.freepik.com/free-vector/deliveryman-with-helmet-retro-scooter_23-2147672895.jpg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h6 className="center-align grey-text">
                  Delivery ID - {this.state.DriverRep.delivery_id}
                </h6>
                <br />
                <h6 className="center-align grey-text">
                  Delivered City - {this.state.DriverRep.deliveryCity}
                </h6>
                <br />
                <h6 className="center-align grey-text">
                  Delivered Province - {this.state.DriverRep.deliveryProvince}
                </h6>
                <br />
                <h6 className="center-align grey-text">
                  Phone number of the customer -{" "}
                  {this.state.DriverRep.phoneNumber}
                </h6>
                <br />
                <h6 className="center-align grey-text">
                  Delivered District - {this.state.DriverRep.district}
                </h6>
                <br />
                <h6 className="center-align grey-text">
                  Delivered Distance - {this.state.DriverRep.distance}km
                </h6>
                <br />
                <h6 className="center-align grey-text">
                  Delivered Time- {this.state.deliveredTime}
                </h6>
                <br />
                <Link to="/del">
                  <button
                    data-target="modal1"
                    type="submit"
                    class="btn modal-trigger"
                    style={{ width: "100%" }}
                  >
                    Delivery Home
                  </button>
                </Link>
              </div>
              <div className="card-action"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Moredetails;
