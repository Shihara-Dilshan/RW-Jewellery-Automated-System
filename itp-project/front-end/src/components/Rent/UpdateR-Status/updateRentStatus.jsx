import React, { Component } from "react";
import M from "materialize-css";

class updateRentStatus extends Component {
    state = {};

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
                  src="https://lh3.googleusercontent.com/proxy/uatkihUlc_7iDYwVnWSW1qwD1Io_PiuyaLi0KkoWA2GmFZvbAitvkEbbaaW-l5o7siFnHH8erac-TUTyb6PhcuN3OEqvTRNsgKv2m1ZwrEGAR6e0DspQqi6OfNd4hNSYwU9yg79X91ZxSDkOjrcRMrn0bUAYWMMdu2HNtw"
                  height="100%"
                />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <h4 className="center-align grey-text">Update Rental Jewelry Status</h4>
                  <div className="row">
                
                    <br />
                    <form className="col s12">
                      
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="nic" type="text" className="validate" />
                          <label htmlFor="cnic">CUSTOMER NIC</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input
                            id="rid"
                            type="text"
                          />
                          <label htmlFor="rentid">RENTAL JEWELRY ID</label>
                        </div>
                      </div>
                      
                      <div className="center-align center">
                        <button
                          className="btn center-align grey darken-3"
                          style={{ width: "100%" }}
                        >
                          Find
                        </button>
                      </div><br/>
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

export default updateRentStatus;