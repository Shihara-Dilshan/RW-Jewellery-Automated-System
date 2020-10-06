import React, { Component } from 'react';
import './style.css'


class userRentals extends Component {

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
             
              <div className="card-stacked">
                <div className="card-content">
                  <h4 className="center-align grey-text">MY RENTALS</h4>
                  <div className="row">
                    <div className="center-align center">
                    <p className="grey-text">
                      {" "}
                      ********If you want to cancel your rental cancel it within 24 hours******** 
                      {" "}
                    
                    </p>
                    </div>
                    <br />
                   
                    <div class = "cart">
                    <form id = "mrentals" style ={{backgroundColor:"#ededeb", width:"500px",margin:"0px 0px 0px 430 px",color:"white",fontSize:"18px",padding:"20px",borderRadius:"10px"}}>
                      <label>Jewelry Name</label><input type ="text" name ="jname" id ="jewel"/><br/>
                      <label>Rent Date</label><input type ="date" name ="rentd" id ="jewelrent"/><br/>
                      <label>Return Date</label><input type ="date" name ="returnd" id ="jewelreturn"/><br/>
                      <label>Total amount</label><input type ="text" name ="amount" id ="amt"/><br/>
                      <div className="center-align center">
                        <button
                          className="btn center-align grey darken-3"
                          style={{ width: "100%" }}
                        >
                          DELETE
                        </button>
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
