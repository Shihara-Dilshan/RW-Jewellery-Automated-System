import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { Link } from "react-router-dom";
import "./../../../App.css";
import M from "materialize-css";

class PaymentInfo extends Component {
  constructor(props){
      super(props);
      this.state = {
      	Discount : "", 
      	design: "",
      };
  }

  componentDidMount(){
  	const discount = JSON.parse(sessionStorage.getItem('designRequestDet')).discount;
	const designId = JSON.parse(sessionStorage.getItem('designRequestDet')).selectedDesign;
	
	fetch(`/api/v2/designs/${designId}`)
		.then(res => res.json())
		.then(data => this.setState({design:data, Discount: discount}))
		.catch(err => console.log(err));
  }


  style = () => {
    return {
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
      marginTop: "-5px",
      marginBottom: "-10px",
    };
  };

  getStyle = () => {
    return {
      width: "20%",
    };
  };

  render() {
    return (
      <div className="contsainer test" style={this.style()}>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image hide-on-small-only">
              <img
                id="signUpImage"
                alt=""
                src="https://image.freepik.com/free-vector/payment-receipt-template-with-flat-design_23-2147903459.jpg"
                height="100%"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4 className="center-align grey-text">Your Bill</h4>
                <div className="row">
                  <br />
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s4">
                        <input
                          id="first_name"
                          type="text"
                          className="validate"
                          value="Design Name"
                          disabled
                        />
                      </div>
                      <div className="input-field col s8">
                        <input
                          id="last_name"
                          type="text"
                          disabled
                          value={this.state.design.name}
                          className="validate"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s4">
                        <input
                          id="first_name"
                          type="text"
                          className="validate"
                          value="Design Price"
                          disabled
                        />
                      </div>
                      <div className="input-field col s8">
                        <input
                          id="last_name"
                          type="text"
                          disabled
                          value={this.state.design.price}
                          className="validate"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s4">
                        <input
                          id="first_name"
                          type="text"
                          className="validate"
                          value="Dicount for Your gold"
                          disabled
                        />
                      </div>
                      <div className="input-field col s8">
                        <input
                          id="last_name"
                          type="text"
                          disabled
                          value={this.state.Discount}
                          className="validate"
                        />
                      </div>
                    </div>
                    <div className="progress hide test">
                      <div className="indeterminate"></div>
                    </div>
                    <div className="center-align center">
                      <button
                        className="btn center-align grey darken-3"
                        style={{ width: "100%" }}
                        onClick={this.signUp}
                      >
                        signup
                      </button>
                    </div>
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentInfo;
