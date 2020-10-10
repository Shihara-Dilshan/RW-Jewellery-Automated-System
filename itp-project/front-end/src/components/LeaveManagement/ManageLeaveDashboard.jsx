import React, { Component } from "react";
class ManageLeaveDashboard extends Component{
    style = () => {
        return {
          
          marginTop: "60px",
          marginBottom: "200px",
        };
      };
    render(){
        return(
            <div class= "container" style={this.style()}>
                <h4 className="center-align grey-text">Admin Dashboard </h4>
                <h4 className="center-align grey-text">Manage Employee Leave </h4>
                
                <div class="row">
                <div class="col s12 offset-s2" >
                <a href="/EmployeeLeave" class="waves-effect grey darken-1 btn-large col s8">View Employees and Apply Leave</a>
                </div>
                </div>
                <div class="row">
                <div class="col s12 offset-s2" >
                <a href="/RecentLeave" class="waves-effect grey darken-1 btn-large col s8">View Recently Applied Leave And Make Changes</a>
                </div>
                </div>
                <div class="row">
                <div class="col s12 offset-s2" >
                <a href="/LeaveReports" class="waves-effect grey darken-1 btn-large col s8">Leave Reports</a>
                </div>
                </div>
                </div>
        );
    }
}
export default ManageLeaveDashboard;