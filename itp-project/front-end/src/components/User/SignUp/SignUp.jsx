import React, { Component } from "react";
import "./../../../App.css";

class SignUp extends Component {
  state = {};

  style = () => {
    return {
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
      marginTop: "-5px",
      marginBottom: "-10px",
    };
  };

  async signUp(e){
  	await e.preventDefault();
  	let name = document.getElementById('email').value;
  	let firstName = document.getElementById('first_name').value;
  	let lastName = document.getElementById('last_name').value;
  	let telephone = document.getElementById('mobile').value;
        let address = document.getElementById('address').value;
        let nic = document.getElementById('NIC').value;
        
        const reg = await fetch('/api/v2/customer/register', {
        	headers: {
        		Accept: "application/json",
        		"Content-Type": "application/json",
        	},
        	method: "POST",
        	body: JSON.stringify({
        		name: name,
        		firstName: firstName,
        		lastName: lastName,
        		telephone: telephone,
        		address: address,
        		nic: nic
        	}),
        });
        
        console.log(reg);
        
  	
  }

  render() {
    return (
      <div className="contsainer test" style={this.style()}>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image hide-on-small-only">
              <img
                alt=""
                src="https://image.freepik.com/free-vector/online-registration-concept-with-isometric-view_23-2147976706.jpg"
                height="100%"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4 className="center-align grey-text">Signup</h4>
                <div className="row">
                  <div className="center-align center">
                    <p className="grey-text">
                      {" "}
                      If you already have an account with us, please login at
                      the{" "}
                      <a href="index.html" className="teal-text">
                        login page
                      </a>
                    </p>
                  </div>
                  <br />
                  <form className="col s12">
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
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="address" type="text" className="validate" />
                        <label htmlFor="address">Address</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="NIC" type="text" className="validate" />
                        <label htmlFor="NIC">NIC</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="mobile"
                          type="text"
                        />
                        <label htmlFor="mobile">Telephone</label>
                      </div>
                    </div>
                    
                    
                    <div className="row">
                      <div className="input-field col s6">
                        <input
                          id="password"
                          type="password"
                          className="validate"
                        />
                        <label htmlFor="password">Password</label>
                      </div>
                      <div className="input-field col s6">
                        <input
                          id="cpassword"
                          type="password"
                          className="validate"
                        />
                        <label htmlFor="password">Confirm Password</label>
                      </div>
                    </div>
                    <div className="center-align center">
                      <button
                        className="btn center-align grey darken-3"
                        style={{ width: "100%" }}
                        onClick={this.signUp}
                      >
                        signup
                      </button>
                    </div><br/>
                    <div className="container center-align">
                      <p>or else sign up with</p>
                      <br/>
                    </div>
                    <div className="container center-align">
                    <i className="fab fa-facebook fa-2x blue-text"></i>
                    { " "}
                    <i className="fab fa-google-plus-square fa-2x red-text"></i>
                    </div>
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

export default SignUp;
