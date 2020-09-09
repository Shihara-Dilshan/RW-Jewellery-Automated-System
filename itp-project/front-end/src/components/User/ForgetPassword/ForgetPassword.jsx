import React, { Component } from "react";
import CryptoJS from 'crypto-js';


import "./../../../App.css";

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }

  passwordRecover = async (e) => {
    e.preventDefault();
    let email = document.getElementById("Lemail").value;
    let emailFirstCheck = ForgetPassword.removeWhiteSpaces(email);
    if(emailFirstCheck === "" || emailFirstCheck === null || emailFirstCheck === undefined){
    	let emailLabel = document.getElementById("LemailLabel");
        emailLabel.innerHTML = "Email cannot be empty";
        emailLabel.classList.add("red-text");
        setTimeout(() => {
          emailLabel.innerHTML = "Email";
          emailLabel.classList.remove("red-text");
        }, 2000);
        return;
    }else{
    	const call = await fetch(`/api/v2/customer/find/${email}`);
    	const result = await call.json().catch((err) => console.log(err));
    	console.log(result);

    	if (result === undefined) {
      	let emailLabel = document.getElementById("LemailLabel");
      	emailLabel.innerHTML = "This account does not Exist";
      	emailLabel.classList.add("red-text");
      	setTimeout(() => {
       	emailLabel.innerHTML = "Email";
        	emailLabel.classList.remove("red-text");
        }, 2000);
    	} else {
           let determine= document.getElementById('determine');
           determine.classList.remove('hide');
    	   determine.classList.add('show');
          
    	   let recoverCode = Math.ceil(Math.random() * 1000000);
    	   let encrypted = CryptoJS.AES.encrypt(recoverCode.toString(), "Secret Passphrase");
    	   sessionStorage.setItem('recoverCode' , encrypted.toString());
    	   
    	   let decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
    	   
    	   ForgetPassword.sendEmail(email, decrypted.toString(CryptoJS.enc.Utf8), result.firstName);
    	   sessionStorage.setItem("recoverEmail", email);
    	   
    	   setTimeout( () => { this.props.history.push("/recover"); },2000);
    	
	   //console.log(decrypted.toString(CryptoJS.enc.Utf8));
	   //4d657373616765
    	   //console.log(recoverCode)
    
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
        

  	var api_key = '';
	var domain = '';
	var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
	var data = {
  		from: '',
  		to: email,
  		subject: 'Recover Password RW-Jewellery',
  		text: `hi ${userName}, your recover code is ${code}`,
	};
 
	mailgun.messages().send(data, function (error, body) {
	  console.log(body);
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
                src="https://image.freepik.com/free-vector/forgot-password-concept-illustration_114360-1095.jpg"
                height="100%"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4 className="center-align grey-text">Forget password?</h4>
                <p className="center-align teal-text">Don't worry. You still can recover your account. Please Enter your account email and last password that you can remember</p>
                <div className="row">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="Lemail" type="email" className="validate"/>
                        <label htmlFor="Lemail" id="LemailLabel">
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="password"
                          type="password"
                          className="validate"
                        />
                        <label htmlFor="password" id="pwordLabel">Password</label>
                      </div>
                    </div>
                    <div className="container center-align grey-text">
                      <p>
                        <label>
                          <input type="checkbox" className="filled-in" />
                          <span>Remeber Me</span>
                          <br />
                          <br />
                        </label>
                      </p>
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
                        Login
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

export default ForgetPassword;
