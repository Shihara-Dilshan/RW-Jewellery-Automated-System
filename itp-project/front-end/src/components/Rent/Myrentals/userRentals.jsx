import React, { Component } from 'react';
import './style.css'
import { Link } from "react-router-dom";


class userRentals extends Component {

  constructor(props) {
    super(props);
    
    
    this.state = {
      // customer_rentals: [],
      customer_rentals: {},
      
      orderId:"",
    
      
    };
  }

  style = () => {
    return {
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
      marginTop: "-5px",
      marginBottom: "-10px",

    };
  };

  async componentDidMount() {
    // const orderId = this.props.location.state.id;
    //   this.setState({
    //     orderId: orderId,
    //   })

    const orderId=sessionStorage.getItem("newRenatalId");
  
    const APICall = await fetch(`/api/v2/rentalcus/rentalById/${orderId}`);
    const Result = await APICall.json();
    // this.setState({ totalPayment1: Result });
    this.setState({ 
      customer_rentals:Result
     });
     

  }
  remove() {
    
    fetch(`/api/v2/rentalcus/deleterental/${this.state.orderId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        console.log("removed");
      })
      .catch((err) => {
        console.error(err);
        
      });
      // this.props.history.push('/rentHome');
      
  }

  render() {

    // // document.addEventListener("DOMContentLoaded", function () {
    // //   const elems = document.querySelectorAll(".modal");
    // //   M.Modal.init(elems);
    // });
    return (
      
      <div className="contsainer test" style={this.style()}>
         
          <div className="col s12 m7">
            <div className="card horizontal">
             
              <div className="card-stacked">
                <div className="card-content">
                  <h4 className="center-align grey-text">MY RENTALS</h4>
                  <div className="row">
                    <div className="center-align center">
                    <p className="grey-text">
                      {" "}
                      ************************If you want to cancel your rental cancel it within 24 hours********************** 
                      {" "}
                    
                    </p>
                    </div>
                    <br />
                   
                    <div class = "cart">
                    <form id = "mrentals" style ={{backgroundColor:"#ededeb", width:"500px",margin:"0px 0px 0px 430 px",color:"white",fontSize:"18px",padding:"20px",borderRadius:"10px"}}>
                      <label>Jewelry Name</label><input type ="text" name ="jname" id ="jewel" value = {this.state.customer_rentals.rental? (this.state.customer_rentals.rental||{}).name||0 : 0 }/><br/>
                      <label>Rent Date</label><input type ="text" name ="rentd" id ="jewelrent" value = {this.state.customer_rentals.rentalDate}/><br/>
                      <label>Return Date</label><input type ="text" name ="returnd" id ="jewelreturn" value = {this.state.customer_rentals.returnDate}/><br/>
                      <label>Total amount</label><input type ="text" name ="amount" id ="amt" value = {this.state.customer_rentals.totalAmount}/><br/>
                      
                      <div className="center-align center">
                      <Link to ="../rentHome">
                        <button
                          className="btn center-align grey darken-3"
                          style={{ width: "100%" }}
                          onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.remove() } }
                          // onClick={this.remove}

                        >
                          DELETE
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
        </div>
        
    );
  }
}

export default userRentals;
