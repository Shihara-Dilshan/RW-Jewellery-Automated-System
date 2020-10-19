import React, { Component } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";

class Moredetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DriverRep: {},
      Riporderdetails:[],
      RipJewel:{},

    };
  }
  back = (e) => {
    setTimeout(() => {
      sessionStorage.removeItem("RepDid");
      this.props.history.push("/Report");
    }, 1000);
  };
  async componentDidMount() {
    const DeliverID = sessionStorage.getItem("RepDid");
    console.log(DeliverID);
    const apitemp = await fetch(`api/deliverybyid/${DeliverID}`);
    const tempResult = await apitemp.json();
    this.setState({ DriverRep: tempResult });
    const APICall = await fetch(`/api/v2/orders/OrderbyDelivery/${DeliverID}`);
    const result = await APICall.json();
    console.log(result);
    this.setState({Riporderdetails: result });
    
    this.setState({RipJewel:this.state.Riporderdetails[0].sellable});
    console.log(this.state.RipJewel);
    const elems = document.querySelectorAll("select");
  }
  back
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
                  Delivered Time- {this.state.DriverRep.deliveredTime}
                </h6>
                <br />
                <h6 className="center-align grey-text">
                 Delivered Jewellery ID- {this.state.RipJewel.jewellery_id}
                </h6>
                <h6 className="center-align grey-text">
                 Delivered Jewellery Name- {this.state.RipJewel.name}
                </h6>
                
                  <button
                    data-target="modal1"
                    type="submit"
                    class="btn modal-trigger"
                    style={{ width: "100%" }}
                    onClick={this.back}
                  >
                    Back
                  </button>
                
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
