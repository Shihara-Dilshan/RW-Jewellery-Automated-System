import React, { Component } from 'react';
import M from "materialize-css";

class Report extends Component {

    constructor(props) {
        super();
        this.state = {
          monthlyRentals: [],
          // temp: "",
          cusNic:"",
          rentalId:"",
          jewelName:"",
          Rentldate:"",
          selectedMonth:"",
          lastDate: '2020-'+this.handleSelectedMonth+'-01', 
        };
        // var today = new Date();
        // var year = today.getFullYear();
        // var month =(today.getMonth() + 1);
        // if(month<10){
        //     month = "0"+(month);
        // }
        
        // var day = today.getDate();
        // if(day<10){
        //     day = "0"+(day);
        // }
        // var date = 2020 + '-' + month + '-' + day;
        // var last = new Date(year, month, 0).getDate();
        
    }

      async componentDidMount() {

        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
        const APICall = await fetch(`/api/v2/rentalcus/allrentals`);
        const Result = await APICall.json();
        this.setState({
             monthlyRentals: Result 
        });

      }

      async getDetails(){

        var last = new Date(this.state.selectedYear, this.state. selectedMonth, 0).getDate();
        var firstDate= this.state.selectedYear+'-'+this.state. selectedMonth+'-'+'01';
        var lastDate= this.state.selectedYear+'-'+this.state. selectedMonth+'-'+ last;

        this.setState({
            firstDate: firstDate,
            lastDate: lastDate
        });

        const response = await fetch(`/api/v2/rentalcus/rentalsByDate/${firstDate}/${lastDate}`);
        const data = await response.json();
        this.setState({ monthlyRentals: data});    
    }

      handleSelectedMonth =(event) =>{
        this.setState({
            selectedMonth:event.target.value,
        })
  
    }

    showReport(){
      if(this.state.monthlyRentals.length === 0){
        return null;
    }
    else
   { return(
     <div>
    <table class="striped">
    <thead>
      <tr>
          <th>Customer NIC</th>
          <th>Rental ID</th>
          <th>Jewelry Name</th>
          <th>Rental Date</th>
      </tr>
    </thead>
    {/* this.state.monthlyRentals.map */}
    
         
    <tbody>
    {this.state.monthlyRentals.map((mt) => { return (
      <tr>
      <td>{mt.customer? (mt.customer||{}).nic||0 : 0 }</td>
        <td>{mt.id}</td>
        <td>{mt.rental?(mt.rental||{}).name||0 : 0}</td>
        <td>{mt.rentalDate}</td>
      </tr>
        );})}
    </tbody>
  </table>
        <div class="row">
                <div class="col s6 offset-s5" >
                <button class="waves-effect grey darken-1 btn-large" onClick={() => this.print()}>PRINT</button>
                </div>
            </div>
  </div>
   )}}

   print(){

    var content = document.getElementById("divcontents");
    var pri = document.getElementById("ifmcontentstoprint").contentWindow;
    pri.document.open();
    pri.document.write(content.innerHTML);
    pri.document.close();
    pri.focus();
    pri.print();
}
    
    render() {
        return (
          <div>
<div class="row" class="center-align">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Monthly Rental Report</span>
        </div>
      </div>

        <div input-field col s12>
    <select onChange = {this.handleSelectedMonth} required>
      <option value="" disabled selected>Choose Month</option>
      <option value="01">January</option>
      <option value="02">February</option>
      <option value="03">March</option>
      <option value="04">April</option>
      <option value="05">May</option>
      <option value="06">June</option>
      <option value="07">July</option>
      <option value="08">August</option>
      <option value="09">September</option>
      <option value="10">October</option>
      <option value="11">November</option>
      <option value="12">December</option>
    </select>
    <br/>
    </div>
        
    <div class="col s4">
          <button class="waves-effect grey darken-1 btn-large" type = "submit" >Generate Reports</button>
    </div>

    <div class="divider"></div>
      <div >
        {this.showReport()}
          <iframe id="ifmcontentstoprint" style={{height: "0px", width: "0px", position: "absolute"}}>
          </iframe>
      </div>
   </div>
   </div>     
</div>
             
        );}
}

export default Report;