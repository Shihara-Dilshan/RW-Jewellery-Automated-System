import React, { Component } from "react";
import M from "materialize-css";
class CancelPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Delcancel: {},
    };
  }
  async componentDidMount() {
    const DeliveryID = sessionStorage.getItem("DDid");
    const APICall = await fetch(`/api/deliverybyid/${DeliveryID}`);
    const Result = await APICall.json();
    console.log(Result);
    this.setState({ Delcancel: Result });
  }
  remove(id) {
    fetch(`/api/deletedelivery/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        console.log("removed");
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        <div class="col s12 m7">
          <h2 class="center-align grey-text">Please verify delivery details</h2>
          <div class="card horizontal">
            <div class="card-image">
              <img src="https://image.freepik.com/free-photo/delivery-man-isolated-yellow-having-doubts-with-confuse-face-expression_1368-70624.jpg" />
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>
                  <h6>Delivery ID -{this.state.Delcancel.delivery_id}</h6>
                  <h6>
                    Delivery Address -{this.state.Delcancel.deliveryAddress}
                  </h6>
                  <h6>
                    Customer phone number -{this.state.Delcancel.phoneNumber}
                  </h6>
                  <h6>District -{this.state.Delcancel.district}</h6>
                  <h6>
                    Delivery Province -{this.state.Delcancel.deliveryProvince}
                  </h6>
                  <h6>Delivery City -{this.state.Delcancel.deliveryCity}</h6>
                  <h6>Delivery distance -{this.state.Delcancel.distance}</h6>
                </p>
              </div>
              <div class="card-action">
                <button
                  data-target="modal1"
                  type="submit"
                  class="btn modal-trigger"
                  style={{ width: "100%" }}
                  onClick={this.remove(this.state.Delcancel.delivery_id)}
                >
                  Cancel Delivery
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CancelPage;
