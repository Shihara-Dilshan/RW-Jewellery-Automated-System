import React, { Component } from "react";
import M from "materialize-css";

class ApplyLeave extends Component{

    constructor(props){
        super(props);
        //this.setState ={eid : this.props.location.state.data};
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
        
        this.state={
            eid :'',
            leavefrom: "",
            leaveto:"",
            reason:"",
            dateError:"",
            Employee: {},
            empname: " " ,
            date: date,
            currentMonth: month,
            currentYear: year, 
            lastDate: year+'-'+month+'-'+last,
        }
    }
    
    async componentDidMount() {
        
            const  id =this.props.location.state.data;
      
        // GET request using fetch with async/await
        const response = await fetch(`/apiEmpolyee/employee/${id}`);
        const data = await response.json()
        .then(data => this.setState({ Employee:data }));
        M.updateTextFields();
    }
    async ApplyNewLeave(event) {
        
        await fetch("/apiLeave/newLeave", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            leaveFrom: this.state.leavefrom,
            leaveTo: this.state.leaveto,
            reason: this.state.reason,
            employee:this.state.Employee,

          }),
        })
        .then(res => res.json())
//     .catch(error => console.error('Error:', error))
// .then(response => console.log('Success:', response))
        ;
        this.props.history.push('/RecentLeave');
      }

    handleleavefromchange =(event) =>{
        this.setState({
            leavefrom:event.target.value,
        })
    }
    handleleavetochange =(event) =>{
        this.setState({
            leaveto:event.target.value,
        })
    }
    handlereasonchange =(event) =>{
        this.setState({
            reason:event.target.value
        })
    }
    validate = () => {
            let dateError = "";
            
            if(this.state.leavefrom< this.state.date || this.state.leaveto< this.state.date ){

                dateError ="leave can be applied only on dates on or after today ";
            }
            if(this.state.leaveto< this.state.leavefrom){
                    dateError = '"to date" should be a date which is after "from date"';
                    
            }
            if(this.state.leavefrom>this.state.lastDate || this.state.leaveto> this.state.lastDate){
                dateError = "Please apply leave only for this month"
            }

            if(dateError){
                this.setState({dateError});
                return false;
            }
            return true;
    };

    handleSubmit = (event) => {

        let id = this.state.eid;
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
            console.log(this.state);
            
            this.ApplyNewLeave();
        }
        else 
        {
            this.props.history.push({

                pathname: '/ApplyLeave',
                //search: '?query=EditLeave',
                state: { data: id }
                
              })
        }
    }
    handleDemo=(event)=> {
        event.preventDefault();
        this.setState({
            leavefrom: '2020-10-30',
            leaveto:'2020-10-31',
            reason:'family trip'
        })
    }
    style = () => {
        return {
          marginTop: "60px",
          marginBottom: "60px",
        };
      };
render(){
    return(
        <div class= "container" style={this.style()}>
            
            <form onSubmit={this.handleSubmit} style={{backgroundColor: "white", borderRadius:"6px", padding:"30px"}}>
            <h4 class="center-align grey-text">Apply Leave Form</h4>
                <div class="row">
                <div class="input-field col s6">
                    
                        <input class="active" id="emp_name" type="text" value={this.state.Employee.fname+' '+this.state.Employee.lName} disabled/>
                       
                    <label for="emp_name">Employee Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                    
                        {/* <input id="emp_id" type="text" value={this.props.location.state.data} disabled/> */}
                        <input class="active" id="emp_id" type="text" value={this.state.Employee.emp_id} disabled/>
                        <label for="emp_id">Employee ID</label>
                    </div>
                </div>
                <div class = "row">
                    <div class="input-field col s6">
                        <input id="leavefrom" type="date" value={this.state.leavefrom} onChange={this.handleleavefromchange}  required/>
                        <label for="leave">Leave Date From :</label>
                    </div>
                    <div class="input-field col s6">
                        <input id="leaveTo" type="date" value={this.state.leaveto} onChange={this.handleleavetochange} required/>
                        <label for="leave">To :</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                        <input id="reason" type="text"value={this.state.reason} onChange={this.handlereasonchange}  required/>
                        <label for="reason">Reason </label>
                    </div>
                </div>
                {this.state.dateError ? (<div style={{color: "red"}}>{this.state.dateError}</div>) : null}
                
                <table class="striped">
        <thead>
          <tr>
              <th><button class="waves-effect waves-light grey darken-1 btn-small" type ="submit" >Apply Leave</button></th>
              {/* <th><button href="/EmployeeLeave" class="waves-effect grey darken-1 btn-small col s4">Cancel</button></th> */}
              <th><button  class="waves-effect grey darken-1 btn-small col s4" onClick={this.handleDemo}>DEMO</button></th>
          </tr>
        </thead>
        </table>
      </form>
        </div>
    );
}
}
export default ApplyLeave;