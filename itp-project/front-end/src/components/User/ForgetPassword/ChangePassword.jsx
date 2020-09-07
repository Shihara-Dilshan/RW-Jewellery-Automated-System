import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { Link } from "react-router-dom";
import AES from 'crypto-js/aes';
import CryptoJS from 'crypto-js';
import M from "materialize-css";

import "./../../../App.css";

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentPwrd : undefined,
    };
    
  }
  
  componentDidMount(){
      const recoverEmail = sessionStorage.getItem("recoverEmail");
      const userId = sessionStorage.getItem("userId");
      
      if(recoverEmail !== null && userId !== null){
      fetch(`/api/v2/customer/find/${recoverEmail}`)
      				   .then(response => response.json())
      				   .then(data => {
      				   	this.setState({currentPwrd : data.pword})
      				   })
      				   .catch(err =>  console.log(err));
      		
      }
  }

  updatePassword = async (e) => {
    e.preventDefault();
    let determine= document.getElementById('determine');
    determine.classList.remove('hide');
    determine.classList.add('show');
    
    
    const userId = sessionStorage.getItem('userId');
    const useraddress = sessionStorage.getItem('address');
    const userLName = sessionStorage.getItem('LastName');
    const userEmail = sessionStorage.getItem('email');
    const userTele = sessionStorage.getItem('telephone');
    const userFName = sessionStorage.getItem('FirstName');
    const password = document.getElementById('newpassword');
    
    const update = await fetch(`/api/v2/customer/update/${userId}`, {
    	headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          customer_id: userId,
          name: userEmail,
          firstName: userFName,
          lastName: userLName,
          telephone: userTele,
          address: useraddress,
          nic: null,
          pword: password.value
        }),
    });
    
    M.toast({ html: "Password has been updated successfully" });
    setTimeout( () => {this.props.history.push("/");} , 1000);
    
  };

  componentClicked = () => {
    console.log();
  };
  
  setCurrent = (e) => {
  	this.setState({
  	    currentPwrd: e.target.value,
  	});
  }

  style = () => {
    return {
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
      marginTop: "50px",
      marginBottom: "40px",
    };
  };

  getStyle = () => {
    return {
      marginTop: "20px",
    };
  };
  
  static removeWhiteSpaces = (inputString) => {
  	return inputString.replace(/\s/g,'');
  }

  static sendEmail = async(email, code, userName) => {
        

  	var api_key = 'ba251f9e3bfddb1ba040119d661ecba9-7cd1ac2b-7aa29c60';
	var domain = 'sandbox4eab8755f9304dcd8a83626af0597370.mailgun.org';
	var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
	var data = {
  		from: 'Mailgun Sandbox <postmaster@sandbox4eab8755f9304dcd8a83626af0597370.mailgun.org>',
  		to: email,
  		subject: 'Recover Password RW-Jewellery',
  		text: `hi ${userName}, your recover code is ${code}`,
	};
 
	await mailgun.messages().send(data, function (error, body) {
	  return body;
	});
  }

  render() {
    return (
      <div className="container loginForm test" style={this.style()}>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image hide-on-small-only">
              <img
                alt=""
                src="https://image.freepik.com/free-vector/security-concept-illustration_114360-497.jpg"
                height="100%"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4 className="center-align grey-text">Change Password</h4>
                <div className="row">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="currentpassword"
                          type="password"
                          onChange={this.setCurrent}
                          value={this.state.currentPwrd}
                        />
                        <label htmlFor="currentpassword" id="currentpwordLabel" className="active">Current Password</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="newpassword"
                          type="password"
                          className="validate"
                        />
                        <label htmlFor="newpassword" id="newpwordLabel">Enter new Password</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="cnewpassword"
                          type="password"
                          className="validate"
                        />
                        <label htmlFor="cnewpassword" id="cnewpwordLabel">Enter it again</label>
                      </div>
                    </div>
                     <div className="progress hide test" id="determine">
                      <div className="indeterminate"></div>
                    </div>
                    <div className="progress hide test" id="determine">
                      <div className="indeterminate"></div>
                    </div>
                    <div className="center-align center">
                    
                      <button
                        onClick={this.updatePassword}
                        className="btn center-align grey darken-3"
                        style={{ width: "100%" }}
                      >
                        Update
                      </button>
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

export default ChangePassword;
