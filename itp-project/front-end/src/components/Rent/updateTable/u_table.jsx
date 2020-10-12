import React, { Component } from 'react';
import M from "materialize-css";

class u_table extends Component {

  constructor() {
    super();
    this.state = {
      // customer_rentals: [],
      customer_rentals: {},
      id:"",
      nic:"",
      rent:"",
      returnDate:"",
      status:"",
      customer: [],
      rental: [],
      totalAmt:"",
      
    };
  }

  style = () => {
    return {
      borderRadius: "5px",
      marginTop: "32px",
      marginBottom: "-15px",
      marginLeft: "200px",
    };
  };
  style2 = () => {
    return {
      borderRadius: "5px",
      marginTop: "-10px",
      marginBottom: "-15px",
      marginLeft: "40px",
    };
  };

  async componentDidMount() {
    var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
  
    const APICall = await fetch(`/api/v2/rentalcus/rentalById/9dc29597-72d6-4756-967f-c800528d7f6b`);
    const Result = await APICall.json();
    // this.setState({ totalPayment1: Result });
    this.setState({ 
      customer_rentals:Result
     });
     this.setState({ 
      id:this.state.customer_rentals.id,
      nic:this.state.customer_rentals.customer? (this.state.customer_rentals.customer||{}).nic||0 : 0 ,
      rent:this.state.customer_rentals.rentalDate,
      returnDate:this.state.customer_rentals.returnDate,
      status: this.state.customer_rentals.status,
      customer: this.state.customer_rentals.customer,
      rental:this.state.customer_rentals.rental,
      totalAmt:this.state.customer_rentals.totalAmount,
     });
     M.updateTextFields();
  }

   UpdateRental = async (event) => {
    event.preventDefault();
    //  const RentID = sessionStorage.getItem("RID").value;
    //  const NIC = sessionStorage.getItem("nic").value;
    //  const Rent_date = document.getElementById("rent").value;
    // const Return_date = document.getElementById("return").value;
    // const status = document.getElementById("rstatus").value;
    
    await fetch(`/api/v2/rentalcus/updaterstatus/${this.state.id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
     },
      method: "PUT",
      body: JSON.stringify({
        //  Rent_ID: RentID,
        //  Cus_NIC: NIC,
        //  Rentdate: Rent_date,
        // ReturnDate: Return_date,
        rentalDate: this.state.rent,
        returnDate: this.state.returnDate,
        nic: this.state.nic,
        rental:this.state.rental,
        customer:this.state.customer,
        totalAmount:this.state.totalAmt,
      
      status:"pending"
      }),
    });
  };

  changeReturnDate = (e) =>{
    this.setState({
      returnDate: e.target.value,
    })

  }


    render() {
        return (
    
      <div>
      <h4 className="center-align grey-text">
        <b>UPDATE STATUS</b>
      </h4>
      <table class="responsive-table">
        <thead>
          <tr>
            <th id = "RID">Rent Id</th>
            <th id = "nic">Customer NIC</th>
            <th id = "rent">Rent Date</th>
            <th id = "return">Return Date</th>
            <th id = "rstatus">Rental Status</th>
          
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td>{this.state.customer_rentals.id}</td> */}
            <td>{this.state.id}</td>
             {/* <td>{this.state.customer_rentals.customer? (this.state.customer_rentals.customer||{}).nic||0 : 0 }</td> */}
             <td>{this.state.nic }</td>
             {/* <td>{this.state.customer_rentals.rentalDate} </td> */}
             <td>{this.state.rent} </td>
             {/* <td><input type = "date" value = {this.state.customer_rentals.returnDate}/></td> */}
             <td><input type = "date" value = {this.state.returnDate} onChange={this.changeReturnDate}/></td>
            <td>
            <select>
          <option value={this.state.customer_rentals.status} disabled selected>Select the Status</option>
          <option value="1">Return</option>
          <option value="2">Pending</option>
    </select>
            
            </td>
             
          </tr>
          
         </tbody>

         
      </table>

      <br/>
      
      <div className="center-align center">
      
                            <button
                              className="btn center-align grey darken-3"
                              style={{ width: "30%" }}
                              onClick={this.UpdateRental}
                            >
                              Confirm
                            </button>
     
                      </div>
                       <br/>
      </div>


        );
    }
}

export default u_table;