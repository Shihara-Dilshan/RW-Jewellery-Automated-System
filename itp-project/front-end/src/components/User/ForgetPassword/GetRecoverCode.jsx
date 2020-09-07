import React, { Component } from "react";
// eslint-disable-next-line
import AES from 'crypto-js/aes';
import CryptoJS from 'crypto-js';

import "./../../../App.css";

class GetRecoverCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	email: sessionStorage.getItem("recoverEmail"),
    };
    
  }

  passwordRecover = async (e) => {
    e.preventDefault();
    const recoverCode = sessionStorage.getItem('recoverCode');
    const decrypted = CryptoJS.AES.decrypt(recoverCode, "Secret Passphrase");
    const decryptedValue = decrypted.toString(CryptoJS.enc.Utf8);
    console.log(decryptedValue);
    

    
    let determine= document.getElementById('determine');

    let inputRecoverCode = document.getElementById("inputRecoverCode").value;
    let RecoverCodeCheck = GetRecoverCode.removeWhiteSpaces(inputRecoverCode);
    if(RecoverCodeCheck === "" || RecoverCodeCheck === null || RecoverCodeCheck === undefined){
    	let codeLabel = document.getElementById("inputRLabel");
        codeLabel.innerHTML = "Code cannot be empty";
        codeLabel.classList.add("red-text");
        setTimeout(() => {
          codeLabel.innerHTML = "6 digit-code";
          codeLabel.classList.remove("red-text");
        }, 2000);
        return;
    }else{
    	if(decryptedValue === inputRecoverCode){
    	   determine.classList.remove('hide');
    	   determine.classList.add('show');
    	   const recoverEmail = sessionStorage.getItem('recoverEmail'); 
    	   
    	   const call = await fetch(`/api/v2/customer/find/${recoverEmail}`);
    	   const result = await call.json().catch((err) => console.log(err));
    	   
    	   sessionStorage.setItem("userId", result.customer_id);
      	   sessionStorage.setItem("email", result.name);
      	   sessionStorage.setItem("FirstName", result.firstName);
           sessionStorage.setItem("LastName", result.lastName);
           sessionStorage.setItem("telephone", result.telephone);
           sessionStorage.setItem("address", result.address);
           setTimeout( () => {this.props.history.push("/updatepassword");} , 1000);
           
    	   
    	}else{
    	   let codeLabel = document.getElementById("inputRLabel");
           codeLabel.innerHTML = "Invalid recover code";
           codeLabel.classList.add("red-text");
           setTimeout(() => {
               codeLabel.innerHTML = "6 digit-code";
               codeLabel.classList.remove("red-text");
           }, 2000);
           return;
    	}
    }
    
  };

  componentClicked = () => {
    console.log();
  };

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
                src="https://image.freepik.com/free-vector/holiday-postcard_23-2148141234.jpg"
                height="100%"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4 className="center-align grey-text">Confirm Email</h4>
                <p className="center-align teal-text">We have sent you a 6-digit confirmation code to {this.state.email} </p>
                <div className="row">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="inputRecoverCode"
                          type="text"
                        />
                        <label htmlFor="inputRecoverCode" id="inputRLabel">6 digit-code</label>
                      </div>
                    </div>
                     <div className="progress hide test" id="determine">
                      <div className="indeterminate"></div>
                    </div>
                    <div className="center-align center">
                      <button
                        onClick={this.passwordRecover}
                        className="btn center-align grey darken-3"
                        style={{ width: "100%" }}
                      >
                        Confirm
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

export default GetRecoverCode;
