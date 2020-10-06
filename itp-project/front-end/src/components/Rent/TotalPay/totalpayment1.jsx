import React, { Component } from "react";
import M from "materialize-css";

import { Link } from "react-router-dom";

class totalPaymentOne extends Component {
  

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
       
        <div className="contsainer test" style={this.style()}>
         
          <div className="col s12 m7">
            <div className="card horizontal">
              <div className="card-image hide-on-small-only">
                <img
                  alt=""
                  src="https://cdn.shopify.com/s/files/1/0031/9468/3441/products/il_fullxfull.1918175288_cd7c_345x345@2x.jpg?v=1586184264"
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
                          <input
                            id="first_name"
                            type="text"
                            className="validate"
                          />
                          <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                          <input
                            id="last_name"
                            type="text"
                            className="validate"
                          />
                          <label htmlFor="last_name">Last Name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="nic" type="text" className="validate" />
                          <label htmlFor="nic">NIC</label>
                        </div>
                      </div>
                    
                      <div className="row">
                        <div className="input-field col s12">
                          <input
                            id="totamt"
                            type="text"
                          />
                          <label htmlFor="totalpay">Total Amount</label>
                        </div>
                      </div>
                      <Link to ="../Myrentals">
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