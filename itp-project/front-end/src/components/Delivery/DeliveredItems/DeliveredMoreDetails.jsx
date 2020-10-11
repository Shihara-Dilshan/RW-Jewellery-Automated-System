import React, { Component } from 'react';
import M from "materialize-css";

class DeliveredMoreDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
          temp: "",
          Deliverdmore: {},
          DeliveredcustomerDetails:{},
          Deliveredorderdetails:[],
          Delivereor:{},
        };
      }
      backtoDelivered = (e) => {
        sessionStorage.clear();
        setTimeout(() => {
            this.props.history.push("/DeliveredItems");
          }, 1000);
      };
    async componentDidMount() {
        const DelivereddID=sessionStorage.getItem("delivereddelid");
        console.log(DelivereddID)
        const Deliveredcus=sessionStorage.getItem("deliveredcusid");
        const APICall = await fetch(`/api/deliverybyid/${DelivereddID}`);
        const Result = await APICall.json();
        this.setState({ Deliverdmore: Result });
        console.log(Result)
        const CusAPICall = await fetch(`/api/v2/customer/${Deliveredcus}`);
        const result2 = await CusAPICall.json();
        this.setState({ DeliveredcustomerDetails: result2 });
        const orderAPi = await fetch(`/api/v2/orders/OrderbyDelivery/${DelivereddID}`);
        const result3 = await orderAPi.json();
        this.setState({ Deliveredorderdetails: result3 });
        const elems = document.querySelectorAll("select");
        M.FormSelect.init(elems);
        this.setState({Delivereor:this.state.Deliveredorderdetails[0].sellable});
        console.log(this.state.Delivereor)
      }
 render() {

        return (
            <div>
                 <div className="container">
          <h2 className="center-align grey-text">Delivery Details</h2>
          <div className="card horizontal">
            <div className="card-image">
           <img src="https://image.freepik.com/free-vector/delivery-service-with-masks-concept_23-2148520404.jpg"/> 
            </div>
            <div className="card-stacked">
              <div className="card-content">
              
                <h6 className="center-align grey-text">
                  Address - {this.state.Deliverdmore.deliveryAddress}
                </h6>
                <h6 className="center-align grey-text">
                  Delivery ID - {this.state.Deliverdmore.delivery_id}
                </h6>
                <h6 className="center-align grey-text">
                  Delivery City - {this.state.Deliverdmore.deliveryCity}
                </h6>
                <h6 className="center-align grey-text">
                  Delivery Province - {this.state.Deliverdmore.deliveryProvince}
                </h6>
                <h6 className="center-align grey-text">
                  Phone number for contact - {this.state.Deliverdmore.phoneNumber}
                </h6>
                <h6 className="center-align grey-text">
                  District - {this.state.Deliverdmore.district}
                </h6>
                <h6 className="center-align grey-text">
                  Distance - {this.state.Deliverdmore.distance}
                </h6>
                <h6 className="center-align grey-text">
                  Customer Name - {this.state.DeliveredcustomerDetails.name}
                </h6 >
                  <h6 className="center-align grey-text">Jewellery ID -{this.state.Delivereor.jewellery_id}</h6>
                  <h6 className="center-align grey-text">Jewellery Category -{this.state.Delivereor.name}</h6>
                  <h6 className="center-align grey-text">Jewellery Price -Rs:{this.state.Delivereor.supplyPrice}/=</h6>
                <button
                  data-target="modal1"
                  type="submit"
                  class="btn modal-trigger"
                  style={{ width: "100%" }}
                  onClick={this.backtoDelivered}
                >
                  back
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

export default DeliveredMoreDetails;
