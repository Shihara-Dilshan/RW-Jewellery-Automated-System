import React, { Component } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
class More extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      TempDel: {},
      Ongoingorderdetails:[],
      Ongoingjewellery:{},
      customerDetails: {},
    };
  }
  OnSubmit = (e) => {
    sessionStorage.removeItem("delid");
    setTimeout(() => {
      this.props.history.push("/del");
    }, 1000);
  };
  async componentDidMount() {
    const DeliverID = sessionStorage.getItem("delid");
    console.log(DeliverID);
    const cusid = sessionStorage.getItem("cusid");
    console.log(cusid);
    const apitemp = await fetch(`api/deliverybyid/${DeliverID}`);
    const tempResult = await apitemp.json();
    this.setState({ TempDel: tempResult });
    const APICall = await fetch(`/api/v2/customer/${cusid}`);
    const result = await APICall.json();
    this.setState({ customerDetails: result });
    const APICall2 = await fetch(`/api/v2/orders/OrderbyDelivery/${DeliverID}`);
    const result2 = await APICall2.json();
    console.log(result2);
    this.setState({ Ongoingorderdetails: result2 });
    const elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);
    this.setState({Ongoingjewellery:this.state.Ongoingorderdetails[0].sellable});
    console.log(this.state.Ongoingjewellery);
  }

  render() {
    return (
      <div>
        <div className="container">
          <h2 className="center-align grey-text">More Details</h2>
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://image.freepik.com/free-vector/scooter-with-delivery-man-flat-cartoon-character-fast-courier-delivery_47649-665.jpg" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h6 className="center-align grey-text">
                  Address - {this.state.TempDel.deliveryAddress}
                </h6>
                <h6 className="center-align grey-text">
                  Delivery ID - {this.state.TempDel.delivery_id}
                </h6>
                <h6 className="center-align grey-text">
                  Delivery City - {this.state.TempDel.deliveryCity}
                </h6>
                <h6 className="center-align grey-text">
                  Delivery Province - {this.state.TempDel.deliveryProvince}
                </h6>
                <h6 className="center-align grey-text">
                  Phone number for contact - {this.state.TempDel.phoneNumber}
                </h6>
                <h6 className="center-align grey-text">
                  District - {this.state.TempDel.district}
                </h6>
                <h6 className="center-align grey-text">
                  Distance - {this.state.TempDel.distance}Km
                </h6>
                <h6 className="center-align grey-text">
                  Customer Name - {this.state.customerDetails.name}
                </h6>
                <h6 className="center-align grey-text">
                  Jewellery ID - {this.state.Ongoingjewellery.jewellery_id}
                </h6>
                <h6 className="center-align grey-text">
                  Jewellery Name - {this.state.Ongoingjewellery.name}
                </h6>
                
                <button
                  data-target="modal1"
                  type="submit"
                  onClick={this.OnSubmit}
                  class="btn modal-trigger"
                  style={{ width: "100%" }}
                >
                  Delivery home
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

export default More;
