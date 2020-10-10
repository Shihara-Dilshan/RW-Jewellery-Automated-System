import React, { Component } from "react";
import M from "materialize-css";

class EditLeave extends Component{
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
        
        this.state={
            eid :'',
            leavefrom: "",
            leaveto:"",
            reason:"",
            dateError:"",
            Employee: {},
            empname: " " ,
            Leave: {},
            leaveid:"",
            date: date,
            currentMonth: month,
            currentYear: year, 
        }
    }

    async componentDidMount() {
        const  id =this.props.location.state.data;
        // GET request using fetch with async/await to get the specific leave details
        const response = await fetch(`/apiLeave/leave/${id}`);
        const data = await response.json();
        this.setState({ Leave: data });
        this.setState({
            leavefrom: this.state.Leave.leaveFrom,
            leaveto: this.state.Leave.leaveTo,
            reason:this.state.Leave.reason,
            eid: this.state.Leave.employee? (this.state.Leave.employee||{}).emp_id||0 : 0,
            leaveid : this.state.Leave.leave_id,
            Employee : this.state.Leave.employee
        
        } );
        M.updateTextFields();
    }

    async EditLeave(event) {
        //this.props.history.push('/RecentLeave');
        await fetch(`/apiLeave/updateLeave/${this.state.Leave.leave_id}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "PUT",
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
        this.props.history.push("/RecentLeave");
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
        

        if(this.state.leaveto< this.state.leavefrom){
                dateError = '"to date" should be a date which is after "from date"';
                
        }
        if(dateError){
            this.setState({dateError});
            return false;
        }
        return true;
};

    
    handleSubmit = event => {

        let id = this.state.eid;
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
            console.log(this.state);
            
            this.EditLeave();
        }
        else 
        {
            this.props.history.push({
                pathname: '/EditLeave',
                state: { data: id }
              })
        }
    }

render(){
    return(
        <div class= "container" style={this.style()}>
             
            <form onSubmit={this.handleSubmit} style={{backgroundColor: "white", borderRadius:"6px", padding:"30px"}}>
            <h4 class="center-align grey-text">Change Leave Details Form</h4>
                <div class="row">
                    <div class="input-field col s6">
                        <input class="active validate" id="emp_name" type="text" value={this.state.Leave.employee? (this.state.Leave.employee||{}).fname||0 : 0 +' '+this.state.Leave.employee? (this.state.Leave.employee||{}).lName||0 : 0} disabled/>
                        <label for="emp_name">Employee Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                        <input class="active" id="leave_id" type="text" value={this.state.Leave.leave_id} disabled/>
                        <label for="leave_id">Leave ID</label>
                    </div>
                </div>
                <div class = "row">
                    <div class="input-field col s6">
                        <input id="leavefrom" type="date" value={this.state.leavefrom} onChange={this.handleleavefromchange} required/>

                        <label for="leave">Leave Date From :</label>
                    </div>
                    <div class="input-field col s6">
                        <input id="leaveTo" type="date" value={this.state.leaveto} onChange={this.handleleavetochange} required/>
                        <label for="leave">To :</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                        <input class="active" id="reason" type="text" value={this.state.reason} onChange={this.handlereasonchange} required/>
                        <label for="reason">Reason </label>
                        
                    </div>
                </div>
                {this.state.dateError ? (<div style={{color: "red"}}>{this.state.dateError}</div>) : null}

                <button class="waves-effect waves-light grey darken-1 btn-small" type ="submit">Submit changes</button>
      </form>
        </div>
    );
}
}
export default EditLeave;