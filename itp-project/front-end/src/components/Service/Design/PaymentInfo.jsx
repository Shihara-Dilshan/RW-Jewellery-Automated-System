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
        finalPrice: "",
      };
  }

  componentDidMount(){
  	const discount = JSON.parse(sessionStorage.getItem('designRequestDet')).discount;
	const designId = JSON.parse(sessionStorage.getItem('designRequestDet')).selectedDesign;
	let finalPrice;
	
	fetch(`/api/v2/designs/${designId}`)
		.then(res => res.json())
		.then( (data) => {
			this.setState({
				design:data, 
				Discount: discount,
				finalPrice : Number.parseInt(data.price) - discount,
				})
				//alert(this.state.finalPrice);
			})
		.catch(err => console.log(err));
  }

  request = async (e) => {
  	e.preventDefault();
  	const indicator = document.getElementById('indicate');
  	indicator.classList.remove('hide');
  	indicator.classList.add('show');
  	const designId = JSON.parse(sessionStorage.getItem('designRequestDet')).selectedDesign;
  	
  	const insertService = await fetch(`/api/v2/services/addnew`,{
  		headers: {
          	Accept: "application/json",
          	"Content-Type": "application/json",
        	},
        	method: "POST",
        	body: JSON.stringify({
          	imageUrl: "http://www.voguejewellers.lk/wp-content/uploads/2019/07/34-2.jpg",
          	jewellerytype: "normal",
          	customer: { customer_id: sessionStorage.getItem('userId')},
        }),
  	});
  	const result = await insertService.json();
  	const ServiceID = result.service_id;
  	
  	const insertRequestDesign = await fetch(`/api/v2/makeservice`,{
  		headers: {
          	Accept: "application/json",
          	"Content-Type": "application/json",
        	},
        	method: "POST",
        	body: JSON.stringify({
          	service_id: ServiceID,
          	price: this.state.finalPrice,
          	status: "Start",
          	weight: 12,
          	design: { design_id: designId},
        }),
  	});
  	const resultDesign = await insertRequestDesign.json();
  	
  	setTimeout( () => {
  	   M.toast({ html: "Your Request has been placed. You can visit our show room with your gold" });
  	   this.props.history.push("/");
  	}, 2000);
  	
  	
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
                          value={`Rs ${this.state.design.price}`}
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
                          value={`Rs ${this.state.Discount}`}
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
                          value="Total amount be paid"
                          disabled
                        />
                      </div>
                      <div className="input-field col s8">
                        <input
                          id="last_name"
                          type="text"
                          disabled
                          value={`Rs ${this.state.finalPrice}`}
                          className="validate"
                        />
                      </div>
                    </div>
                    <div className="progress hide test" id="indicate">
                      <div className="indeterminate"></div>
                    </div>
                    <div className="center-align center">
                      <button
                        className="btn center-align grey darken-3"
                        style={{ width: "100%" }}
                        onClick={this.request}
                      >
                        Request
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
