import React, { Component } from "react";
import M from "materialize-css";

class RecentLeave extends Component{

  constructor() {
    super();
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
      Leave:[],
      leavefrom :"",
      leaveTo:"",
      todayDate: date,
      currentMonth: month,
      currentYear: year,
      firstDate: year + '-' + month + '-' + '01',
      lastDate: year + '-' + month + '-' + last,
    };
  }
  async componentDidMount() {
    
    // GET request using fetch with async/await
    //const response = await fetch(`/apiLeave/recentLeave/${this.state.todayDate}/${this.state.lastDate}`);
    const response = await fetch(`/apiLeave/recentLeave/${this.state.todayDate}/${this.state.lastDate}`);
    const data = await response.json();
    this.setState({ Leave: data });

}
async deleteLeave(leave_id, leaveFrom){

  if (leaveFrom<this.state.todayDate){
    M.toast({html: 'Cannot Delete! "Leave From "Date has already passed..'})
  }
  else{
    if (window.confirm('Are you sure you wish to delete this leave?')){
      //event.preventDefault();
  const leaveid =leave_id;
  await fetch(`/apiLeave/deleteLeave/${leaveid}` , {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  method: 'DELETE',
})
//.then(res => res.json()) 
.then(() => {
  console.log('removed');
  this.props.history.push('/RecentLeave');
  
}).catch(err => {
 console.error(err);
 this.props.history.push('/RecentLeave'); 
 
}); 
window.location.reload();
//this.props.history.push('/RecentLeave');
//  .then(()=> {})

    } 
  }
  
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
editLeave = (leaveid) =>{
  this.props.history.push({
    pathname: '/EditLeave',
    //search: '?query=EditLeave',
    state: { data: leaveid }
  })
 
}

    style = () => {
        return {
          
          marginTop: "20px",
          marginBottom: "200px",
        };
      };
      
    render(){
        return(
            <div class= "container" style={this.style()}>
                
                <h4 class="center-align grey-text">Recently Applied Leave</h4>
                <table class="highlight centered">
        <thead>
          <tr>
              <th>Employee Name</th>
              {/* <th>Employee ID</th> */}
              <th>Leave from (date)</th>
              <th>Leave until (date)</th>
               <th>Number of Leave days</th>
              <th>Reason</th>
              <th>Make Changes </th>
              <th>Cancel Leave</th>
          </tr>
        </thead>

        <tbody>
          {this.state.Leave.map((eleave) => { return (
            <tr>
              <td id= "empName">{eleave.employee? (eleave.employee||{}).fname||0 : 0} {eleave.employee? (eleave.employee||{}).lName||0 : 0} </td>
              <td id= "fromDate">{eleave.leaveFrom}</td>
              <td id = "todate">{eleave.leaveTo}</td>
              <td id = "numberodDays">{this.getNumberOfDays(eleave.leaveFrom,eleave.leaveTo)} </td>
              <td id = "reason">{eleave.reason}</td>
              <td><button class="waves-effect waves-light grey darken-1 btn-small" id ="EditLeave" onClick= {() => {this.editLeave(eleave.leave_id)}}>Edit</button></td>
              <td><button class="waves-effect waves-light grey darken-1 btn-small" id ="CancelLeave" value ={eleave.leave_id} onClick ={() =>  this.deleteLeave(eleave.leave_id,eleave.leaveFrom)}>Cancel</button></td>
            
            </tr>
            );})}
        </tbody>
      </table>
       
            <div class="row" style={this.style()}>
                <div class="col s12 offset-s2" >
                <a href="/EmployeeLeave" class="waves-effect grey darken-1 btn-large col s8">View Employees and Apply Leave</a>
                </div>
                </div>
                </div>
        );
    }
}
export default RecentLeave;