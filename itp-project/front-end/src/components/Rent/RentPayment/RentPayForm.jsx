import React, { Component } from "react";
import M from "materialize-css";
import {default as UUID} from "uuid";

import { Link } from 'react-router-dom';

class RentPayForm extends Component {

  
  constructor(props){
    super(props);

    
      this.state = {
        fields: {},
        errors: {},
        itemId: sessionStorage.getItem("rentalid"),
        orderId:"",
        rentals:[],
        item:{}
      }

    

    };
    async componentDidMount() {

      const first_name = document.querySelector('#first_name');
      first_name.value = sessionStorage.getItem("FirstName");


      const APICall = await fetch(`/api/v2/rentalcus/jewelById/${this.state.itemId}`);
      const Result = await APICall.json();
      //.then(response => console.log('Success:', response))
            
      // this.setState({ totalPayment1: Result });
      this.setState({ 
        item:Result
       });
       

    }
    
    style = () => {
      return {
        backgroundColor: "#f5f5f5",
        borderRadius: "5px",
        marginTop: "-5px",
        marginBottom: "-10px",
      };
    };

   

    handleChange = (e) => {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;

      this.setState({
        fields:fields,
      });

    }

    submituserRegistrationForm = (e) => {
      e.preventDefault();
    
      if (this.validateForm()) {
          // let fields = {};
          // fields["unic"] = "";
          // fields["rentdate"] = "";
          // fields["returndate"] = "";
          // /*fields["password"] = "";*/
          // this.setState({fields:fields});
         
          alert("Form submitted");
          
      }
      this.exe();
  
    }
    
    validateForm = () => {

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


    SubmitRentalPayment = async (event) => {
     // event.preventDefault();
      console.log(this.state.fields);

      // const rentdate= document.getElementById("rentd").value;
      // const returndate = document.getElementById("returnd").value;

      const total = this.getTotal();
      
      await fetch("/api/v2/rentalcus/sendRental", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
     
          "status":"pending",
          "rentalDate": this.state.fields.rentdate,
          "returnDate":this.state.fields.returndate,
          "rental": this.state.item,
          "totalAmount": total,
    }),
      }).then(res => res.json())
         
.then(response => {
  console.log('Success:', response);
  sessionStorage.setItem("newRenatalId",response.id );
  sessionStorage.setItem("newRenatalprice",response.totalAmount );
  sessionStorage.setItem("newJewelryname",);
})
.catch(error => console.error('Error:', error))
      ;
      //this.props.history.push("/TotalPay");
      this.props.history.push({
        pathname: '/TotalPay',
        state: { data: this.state.orderId }
      })
     
    }
    
    handletoast = (event) => {
      setTimeout(() => {
        M.toast({ html: "Your request has been recorded" });
        this.props.history.push("/");
      }, 1000);
    };
  
    exe = (event) => {

      this.SubmitRentalPayment(event);
  
    };

    //1.caculate the no of days******2.take the rental price******3.calculate the total= price * no of days

    // getTotal = (rent, returndate) => {
    //   var date1 = new Date(rent); 
    //   var date2 = new Date(returndate); 
        
    //   // To calculate the time difference of two dates 
    //   var Difference_In_Time = date2.getTime() - date1.getTime(); 
        
    //   // To calculate the no. of days between two dates 
    //    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
    //    var numberofDays= Difference_In_Days +1;


    //   return numberofDays;


    //   }
    getTotal = () => {
      var date1 = new Date(this.state.fields.rentdate); 
      var date2 = new Date(this.state.fields.returndate); 
        
      // To calculate the time difference of two dates 
      var Difference_In_Time = date2.getTime() - date1.getTime(); 
        
      // To calculate the no. of days between two dates 
       var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
       var numberofDays= Difference_In_Days +1;

       var totalPrice = this.state.item.rentalPrice * numberofDays;


      return totalPrice;


      }


    handleDemo=(event)=> {
      event.preventDefault();
      this.setState({
        // : '2020-10-30',
        // returnDate:'2020-10-31',
        fields:{returndate:'2020-10-31', rentdate:'2020-10-25' }
          
      })
  }
    render() {
      
      return (
        
       
        <div className="contsainer test" style={this.style()}>

          <div className="col s12 m7">
            <div className="card horizontal">
              <div className="card-image hide-on-small-only">
                <img
                  alt=""
                  src="https://blog.testproject.io/wp-content/uploads/2019/12/marginalia-payment-processed.png"
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
                    
                    <form className="col s12" name ="userRegistrationForm"  onSubmit={this.submituserRegistrationForm}>
                  
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
                          <input id="nic" type="text" name = "unic" value={this.state.fields.unic} className="validate" onChange={this.handleChange} required/>
                          <div>{this.state.errors.unic}</div> 
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
                        
                          {/* <Link to = "../TotalPay"> */}
                            <button
                              className="btn center-align grey darken-3"
                              style={{ width: "100%" }}
                              // onClick={this.exe}
                            >
                              Confirm
                            </button>
                            <br/>
                            <button  class="waves-effect grey darken-1 btn-small col s4" onClick={this.handleDemo}>DEMO</button>
                            {/* </Link> */}
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