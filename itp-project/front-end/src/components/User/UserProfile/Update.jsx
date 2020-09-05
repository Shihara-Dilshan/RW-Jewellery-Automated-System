import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./../../../App.css";
import M from "materialize-css";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailComfirmationStatus: "",
      firstName: "required *",
      lastName: "required *",
      email: "required *",
      mobile: "required *",
      address: "required *",
    };
  }

  componentDidMount(){
  
  if(sessionStorage.getItem("email") === null){
  	this.props.history.push("/");
  }else{
    this.setState({
      firstName: sessionStorage.getItem("FirstName"),
      lastName: sessionStorage.getItem("LastName"),
      email: sessionStorage.getItem("email"),
      mobile: sessionStorage.getItem("telephone"),
      address: sessionStorage.getItem("address"),
    });
  
  }
  
    
  }

  style = () => {
    return {
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
      marginTop: "-5px",
      marginBottom: "-10px",
    };
  };

  containerStyle = () => {
    return {};
  };
  
  updateProfile = async(e) => {
      let wait_bar = document.getElementById('wait_bar');
      wait_bar.classList.remove('hide');
      wait_bar.classList.add('show');
     
      let email = document.getElementById('email');
      let first_name = document.getElementById('first_name');
      let lname_name = document.getElementById('last_name');
      let address = document.getElementById('address');
      let mobile = document.getElementById('mobile');
      let customer_id = sessionStorage.getItem('userId');
      
      const APICall = await fetch(`/api/v2/customer/update/${customer_id}`, {
      	headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          customer_id: customer_id,
          name: email.value,
          firstName: first_name.value,
          lastName: lname_name.value,
          telephone: mobile.value,
          address: address.value,
        }),
      	
      });
      
      const result = await APICall.json();
      setTimeout( () => {
      	M.toast({ html: "Successfully Updated" });
      	sessionStorage.setItem("FirstName", first_name.value);
        sessionStorage.setItem("LastName", lname_name.value);
        sessionStorage.setItem("email", email.value);
        sessionStorage.setItem("telephone", mobile.value);
        sessionStorage.setItem("address", address.value);
      	this.props.history.push("/profile");
      }, 1000);
  }
  
  changeFName = (e) => {
  	this.setState({
  	    firstName: e.target.value,
  	});
  }
  
  changeLName = (e) => {
  	this.setState({
  	    lastName: e.target.value,
  	});
  }
  
  updateMobile = (e) => {
  	this.setState({
  	    mobile: e.target.value,
  	});
  }
  
  updateAddress = (e) => {
  	this.setState({
  	    address: e.target.value,
  	});
  }
  
  render() {
    return (
      <div className="contsainer test" style={this.style()}>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div
              className="card-image hide-on-small-only"
              style={this.containerStyle()}
            >
              <img
                alt=""
                src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/Layout/online-registration-concept_23-2147980578.jpg"
                height="100%"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4 className="center-align grey-text">Update Profile</h4>
                <div className="row">
                  <p className="red-text align center">{this.state.emailComfirmationStatus}</p><br/>
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s6 disabled">
                        <input
                          onChange={this.changeFName}
                          id="first_name"
                          type="text"
                          className="validate"
                          value={this.state.firstName}
                        />
                        <label htmlFor="first_name" id="firstNameLabel" className="active">
                          First Name
                        </label>
                      </div>
                      <div className="input-field col s6">
                        <input
                          id="last_name"
                          type="text"
                          className="validate"
                          value={this.state.lastName}
                          onChange={this.changeLName}
                        />
                        <label htmlFor="last_name" id="lastNameLabel" className="active">
                          Last Name
                        </label>
                      </div>
                      
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="email"
                          type="email"
                          className="validate"
                          disabled
                          value={this.state.email}
                        />
                        <label htmlFor="email" id="emailLabel" className="active">
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="mobile" type="text" value={this.state.mobile} onChange={this.updateMobile} />
                        <label htmlFor="mobile" id="mobileLabel" className="active">
                          Mobile
                        </label>
                      </div>
                      
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="address" type="text" value={this.state.address} onChange={this.updateAddress}/>
                         <label htmlFor="address" id="addressLabel" className="active">
                          Address
                        </label>
                      </div>
                    </div>
                    <div className="center-align center">
                      <div className="progress hide test" id="wait_bar">
                      <div className="indeterminate"></div>
                    </div>
                      <Link to="/update" >
                      <button
                        className="btn center-align grey darken-3"
                        style={{ width: "100%" }}
                        onClick={this.updateProfile}
                      >
                        Update Profile
                      </button>
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

export default Update;
