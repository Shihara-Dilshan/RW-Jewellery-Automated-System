import React, { Component } from "react";
import M from "materialize-css";

import { Link } from 'react-router-dom';

class RentPayForm extends Component {

  
  constructor(){
    super();

      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    

    };
    
    style = () => {
      return {
        backgroundColor: "#f5f5f5",
        borderRadius: "5px",
        marginTop: "-5px",
        marginBottom: "-10px",
      };
    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
    
      if (this.validateForm()) {
          let fields = {};
          fields["unic"] = "";
          fields["rentdate"] = "";
          fields["returndate"] = "";
          /*fields["password"] = "";*/
          this.setState({fields:fields});
          
          alert("Form submitted");
         
          
      }
      
    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

     /* if (!fields["unic"]) {
        formIsValid = false;
        errors["unic"] = "*Please enter your NIC.";
      }*/

      if(typeof fields["unic"] !== "undefined"){
          var pattern = new RegExp("[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]v");
          if(!pattern.test(fields["unic"])){
           formIsValid = false;
           errors["unic"] = "Please follow the format.(123456789V)";
          }
      }

      if (!fields["rentdate"]) {
        formIsValid = false;
        errors["rentdate"] = "*Please select rent date.";
      }

      if (!fields["returndate"]) {
        formIsValid = false;
        errors["returndate"] = "*Please select return date.";
      }

      this.setState({
        errors: errors
      });
      
      return formIsValid;
      
    }
    render() {
      
      return (
        
       
        <div className="contsainer test" style={this.style()}>
         
          <div className="col s12 m7">
            <div className="card horizontal">
              <div className="card-image hide-on-small-only">
                <img
                  alt=""
                  src="https://slimages.macysassets.com/is/image/MCY/products/7/optimized/8448567_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$"
                  width ="75%"
                  height="90%"
                />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <h4 className="center-align grey-text">RENTAL PAYMENT</h4>
                  <div className="row">
                    <div className="center-align center">
                    <p className="grey-text">
                      {" "}
                      Total Payment charge according to the return date
                      {" "}
                    
                    </p>
                    </div>
                    <br />
                    
                    <form className="col s12" name ="userRegistrationForm" onSubmit={this.submituserRegistrationForm}>
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
                        <label>NIC</label>
                          <input id="nic" type="text" name = "unic" value={this.state.fields.unic} className="validate" onChange={this.handleChange} />
                          <div>{this.state.errors.unic}</div> 
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
                        <div className="input-field col s12">
                          <input
                            id="rentd"
                            type="date"
                            name = "rentdate" value={this.state.fields.rentdate} className="validate" onChange={this.handleChange}
                          />
                          
                          <label htmlFor="rent">Rent Date</label>
                          
                        </div>
                        <div>{this.state.errors.rentdate}</div>
                      </div>
                      
                      <div className="row">
                        <div className="input-field col s12">
                          <input
                            id="returnd"
                            type="date"
                            name = "returndate" value={this.state.fields.returndate} className="validate" onChange={this.handleChange}
                          />
                           
                          <label htmlFor="return"  name = "return">Return Date</label>
                         
                        </div>
                        <div>{this.state.errors.returndate}</div>
                      </div>
                     
                     
                        <div className="center-align center">
                            <button
                              className="btn center-align grey darken-3"
                              style={{ width: "100%" }}
                            >
                              Confirm
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

export default RentPayForm;