import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../../../App.css";


class AdminLogin extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }
  
  componentDidMount(){
      if(sessionStorage.getItem('adminAccount') !== null){
  	    this.props.history.push("/dashboard");
      }
  }

  adminloginF = async (e) => {
    e.preventDefault();
    let Admin_account = document.getElementById('Lemail').value;
    let admin_password = document.getElementById('password').value;
    let admin_email_lable = document.getElementById('LemailLabel');
    let admin_pword_lable = document.getElementById('pwordLabel');

    const check_account = await fetch(`/api/v2/admin/specificname/${Admin_account}`);
    console.log(check_account)
    if(check_account.status === 404){
    	admin_email_lable.classList.add('red-text');
    	admin_email_lable.innerHTML = "Acount does not exist";
    	
    	setTimeout( () => {
    	    	admin_email_lable.classList.remove('red-text');
    	        admin_email_lable.innerHTML = "Email";
    	}, 2000);
    	
    }else{
    	const result = await check_account.json();
    	if(admin_password === result.password){
    	    sessionStorage.clear();
    	    let x = new Date().toString();

	    let y = x.split(" ");
	    let finalString ="";

	    for(let i=0; i<= y.length-4; i++ ){
            	finalString = finalString + " " + y[i];
            }


    	    sessionStorage.setItem("adminAccount" , "account1");
    	    sessionStorage.setItem("loginTime",finalString.trim());	
    	    sessionStorage.setItem("adminId",result.emp_id);	
    	    this.props.history.push("/dashboard");
    	}else{
    	    admin_pword_lable.classList.add('red-text');
    	    admin_pword_lable.innerHTML = "Check Your Password";
    	    
    	    setTimeout( () => {
    	    	admin_pword_lable.classList.remove('red-text');
    	        admin_pword_lable.innerHTML = "Password";
    	    }, 2000);
    	}
    	
    }
    
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

  render() {
    return (
      <div className="container loginForm test" style={this.style()}>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image hide-on-small-only">
              <img
                alt=""
                src="https://image.freepik.com/free-vector/admin-concept-illustration_114360-2332.jpg"
                height="100%"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4 className="center-align grey-text">Admin Login</h4>
                <div className="row">
                  <form className="col s12" method="post" action="/login">
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="Lemail" name="username" type="text" className="avalidate"/>
                        <label htmlFor="Lemail" id="LemailLabel">
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="password"
                          name="password"
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
                    <div className="center-align center">
                      <button
                        onClick={this.adminloginF}
                        className="btn center-align grey darken-3"
                        style={{ width: "100%" }}
                      >
                        Login
                      </button>
                    </div>
                    <br />
                    <div className="center-align center">
                      <Link to="/signup">
                      <p className="teal-text">forget password?</p>
                      </Link>
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

export default AdminLogin;
