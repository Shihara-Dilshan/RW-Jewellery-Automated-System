import React, { Component } from "react";
import M from "materialize-css";

import { Link } from "react-router-dom";

class totalPaymentOne extends Component {

  constructor(props) {
    super(props);
    //const orderId = props.location.state.data;
    this.state = {
      // customer_rentals: [],
      customer_rentals: {},
      totalamt:"",
      orderId:"",
      
    };
  }
  

    style = () => {
      return {
        backgroundColor: "#f5f5f5",
        borderRadius: "5px",
        marginTop: "-5px",
        marginBottom: "-10px",
      };
    };

    async componentDidMount() {
      // const orderId = this.props.location.state.data;
      // this.setState({
      //   orderId: orderId,
      // })
      // console.log(orderId);
      const orderId=sessionStorage.getItem("newRenatalId");
  
      const APICall = await fetch(`/api/v2/rentalcus/rentalById/${orderId}`);
      const Result = await APICall.json();
      //.then(response => console.log('Success:', response))
            
      // this.setState({ totalPayment1: Result });
      this.setState({ 
        customer_rentals:Result
       });
       

    }
  
    render() {
      document.addEventListener("DOMContentLoaded", function () {
        const elems = document.querySelectorAll(".modal");
        M.Modal.init(elems);
      });
      
      return (
       
        <div className="contsainer test" style={this.style()}>
         
          <div className="col s12 m7">
            <div className="card horizontal">
              <div className="card-image hide-on-small-only">
                <img
                  alt=""
                  src="https://image.freepik.com/free-vector/online-payment-with-mobile-phone-isometric_1124-1404.jpg"
                  width ="75%"
                  height="90%"
                />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <h4 className="center-align grey-text">RENTAL TOTAL AMOUNT</h4>
                  <div className="row">
                    <div className="center-align center">
                    <p className="grey-text">
                      {" "}
                      Total Payment charge according to the return date
                      {" "}
                    
                    </p>
                    </div>
                    <br />
                    <form className="col s12" onSubmit={this.confirm}>
                      <div className="row">
                        <div className="input-field col s6">
                        <label class="active" htmlFor="first_name">First Name</label>
                          <input
                            id="first_name"
                            type="text"
                            className="validate"
                            value = {this.state.customer_rentals.customer? (this.state.customer_rentals.customer||{}).firstName||0 : 0 }
                          />
                         
                        </div>
                        
                        <div className="input-field col s6">
                        
                        <label class="active" htmlFor="last_name">Last Name</label>
                          <input
                            id="last_name"
                            type="text"
                            className="validate"
                            value = {this.state.customer_rentals.customer? (this.state.customer_rentals.customer||{}).lastName||0 : 0 }
                          />
                          
                        </div>
                      </div>
                      <div className="row">
                      <label class="active" htmlFor="nic">NIC</label>
                        <div className="input-field col s12">
                          <input id="nic" type="text" 
                          value = {this.state.customer_rentals.customer? (this.state.customer_rentals.customer||{}).nic||0 : 0 }
                          className="validate " />
                          
                        </div>
                      </div>
          
                      <div className="row">
                      <label class="active" htmlFor="totalpay">Total Amount</label>
                        <div className="input-field col s12">
                          <input
                            id="totamt"
                            type="text"
                            value = {this.state.customer_rentals.totalAmount}
                            className="validate" 
                            />
                          
                        </div>
                        
                      </div>
                  
                      <Link to ={{
  pathname: '../Myrentals',
  state: {
    id: this.state.orderId,
  }
}}>
                      <div className="center-align center">
                        <button
                          className="btn center-align grey darken-3"
                          style={{ width: "100%" }}
                        >
                          Done
                        </button>
                      </div></Link><br/>
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

export default totalPaymentOne;