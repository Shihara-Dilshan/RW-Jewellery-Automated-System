import React, { Component } from "react";
import M from "materialize-css";

class LeaveReports extends Component{
    style = () => {
        return {
          marginTop: "60px",
          marginBottom: "60px",
        };
      };
    constructor(props){
        super(props);
        var today = new Date();
        var year = today.getFullYear();
        var month =(today.getMonth() + 1);
        if(month<10){
            month = "0"+(month);
        }
        var day = today.getDate();
        if(day<10){
          day = "0"+(day);
        }
        var date = year + '-' + month + '-' + day;
        var last = new Date(year, month, 0).getDate();
        
        this.state = {
            Employee: [],
            text:"",
            id:"",
            selectedMonth:"",
            selectedYear:"",
            date: date,
            currentMonth: month,
            currentYear: year,
            firstDate:"",
            lastDate: "",
            Leave:[],
            
          };
        
    }
    async componentDidMount() {
     
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);

        
        
    }
    getNumberOfDays(leaveFrom, leaveTo){
        var date1 = new Date(leaveFrom); 
        var date2 = new Date(leaveTo); 
          
        // To calculate the time difference of two dates 
        var Difference_In_Time = date2.getTime() - date1.getTime(); 
          
        // To calculate the no. of days between two dates 
         var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
         var numberfoDays= Difference_In_Days +1;
        return numberfoDays;
        }

    onTextChanged =(e) =>{
        //this.setState({ name: e.target.value  })
        const value =e.target.value ;
         let Employee = [];
    //    // const value = e.target.value;
        if (value.length > 0){
          this.getName(value);
        }
        this.setState(() => ({Employee, text: value}));

    }
    async getName(value){
          // GET request using fetch with async/await
          const response = await fetch(`/apiEmpolyee/findemployee/${value}`);
          const data = await response.json();
          this.setState({ Employee: data });
    }

    showSuggestions(){
        // const Employee = this.state;
        
        if(this.state.Employee.length === 0){
            return null;
        }
        return(
         
            <ul>{this.state.Employee.map((emp)=> <li onClick = {() => this.suggestionSelected(emp.fname, emp.lName, emp.emp_id)}>{emp.fname} {emp.lName}</li>)}</ul>
            
        );
    }

    suggestionSelected(n1,n2, empId){

        this.setState(() => ({
            text: n1+' '+n2,
            Employee: [],
            id: empId,
        }))
    }
    handleSelectedMonth =(event) =>{
        this.setState({
            selectedMonth:event.target.value,
        })

    }
    handleSelectedYear =(event) =>{
        this.setState({
            selectedYear:event.target.value,
        })

    }

    handleSubmit= event =>{
        event.preventDefault();
        this.getDetails();

    }
    async getDetails(){

        var last = new Date(this.state.selectedYear, this.state. selectedMonth, 0).getDate();
        var firstDate= this.state.selectedYear+'-'+this.state. selectedMonth+'-'+'01';
        var lastDate= this.state.selectedYear+'-'+this.state. selectedMonth+'-'+ last;

        this.setState({
            firstDate: firstDate,
            lastDate: lastDate
        });

        const response = await fetch(`/apiLeave/le/${this.state.id}/${firstDate}/${lastDate}`);
        const data = await response.json();
        this.setState({ Leave: data});    
    }
    showReport(){
        if(this.state.Leave.length === 0){
            return null;
        }
        else
       { return(
           <div>
            <div id="divcontents" class = "card-panel grey lighten-2">
               <div class="row"><span class="grey-text text-darken-4"> Employee Name: {this.state.text}</span></div>
               <div class="row"><span class="grey-text text-darken-4"> Leave records for {this.state.firstDate} - {this.state.lastDate} </span></div>
               <div class="row"> <span class="grey-text text-darken-4"> Date : {this.state.date}</span></div>
            <table>
         <thead>
         <tr>
              <th>Leave from (date)</th>
              <th>Leave until (date)</th>
              <th>Number of Leave days</th>
              <th>Reason</th>
              
          </tr>
         </thead>
        <tbody>
            {this.state.Leave.map((eleave)=> <tr>
                {/* <td id= "empName">{eleave.employee? (eleave.employee||{}).fname||0 : 0} {eleave.employee? (eleave.employee||{}).lName||0 : 0} </td> */}
            <td id= "fromDate">{eleave.leaveFrom}</td>
            <td id = "todate">{eleave.leaveTo}</td>
            <td>{this.getNumberOfDays(eleave.leaveFrom,eleave.leaveTo)}</td>
            <td id = "reason">{eleave.reason}</td></tr>
            )}
            </tbody>
            </table>
            </div>
            <div class="row">
                <div class="col s6 offset-s5" >
                <button class="waves-effect grey darken-1 btn-large" onClick={() => this.print()}>PRINT</button>
                </div>
            </div>
            
            </div>
        );}
    }
  
    print(){

        var content = document.getElementById("divcontents");
        var pri = document.getElementById("ifmcontentstoprint").contentWindow;
        pri.document.open();
        pri.document.write(content.innerHTML);
        pri.document.close();
        pri.focus();
        pri.print();
   }
  


    render(){
        const {text} = this.state;
        return(

          
            <div class = "container">
                
            <div  style={this.style()}>
            <h4 class="center-align grey-text">Generate Leave Reports</h4>
            
                <div class="row">
                    <div class="col s12">
                    <form onSubmit={this.handleSubmit}>
                    <div class="row">
                        
                        <div class="input-field col s4" >
                             <input value = {text} onChange = {this.onTextChanged} type="text" class="autocomplete" style={{border: "none",marginBottom:"0px"}} required/>
                             <label for="search">Employee Name</label>
                             <ul class="collection"  style={{ marginBlockStart: "0em"}}>
                                {this.showSuggestions()}
                            </ul>
                        </div>  
                     
                        <div class="input-field col s4">
                            <select onChange = {this.handleSelectedMonth} required>
                            <option value="" disabled selected>Select a Month</option>
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
                            <label>Month</label>
                        </div>
                        <div class="input-field col s4">
                            <input id="year" type="text" class="validate" onChange={this.handleSelectedYear} required/>
                            <label for="year">Year</label>
                        </div>
                        <div class="col s4">
                        <button class="waves-effect grey darken-1 btn-large" type = "submit" >Generate Reports</button>
                        </div>
                    </div>
                    </form>
                    <div class="divider"></div>
                    <div >
                    {this.showReport()}
                        <iframe id="ifmcontentstoprint" style={{height: "0px", width: "0px", position: "absolute"}}>
                        </iframe>
                    </div>
                    
                    
                    {/* <button onClick={() => window.print()}>PRINT</button> */}
                  
                </div>
            </div>
</div>
            </div>

            

        )
    }
}

export default LeaveReports;