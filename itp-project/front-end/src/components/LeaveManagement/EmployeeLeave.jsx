import React, { Component } from "react"

class EmployeeLeave extends Component{
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
      Employee: [],
      empname :"",
      empId:"",
      date: date,
      currentMonth: month,
      currentYear: year,
      firstDate: year+'-'+month+'-01',
      lastDate: year+'-'+month+'-'+last,
      Leave : {},
      EmployeeList: [],
      text:"",
      id:"",
      
    };
  }
  async componentDidMount() {
    // GET request using fetch with async/await
    const response = await fetch(`/apiLeave/sum/${this.state.firstDate}/${this.state.lastDate}`);
    const data = await response.json();
    this.setState({ Employee: data });
}
applyLeave = (id) =>{
  this.props.history.push({
    pathname: '/ApplyLeave',
    state: { data: id }
  })
}
    style = () => {
        return {
          
          marginTop: "20px",
          marginBottom: "100px",
        };
      };

      onTextChanged =(e) =>{
        //this.setState({ name: e.target.value  })
        const value =e.target.value ;
         let EmployeeList = [];
    //    // const value = e.target.value;
        if (value.length > 0){
          this.getName(value);
        }
        this.setState(() => ({EmployeeList, text: value}));

    }
    async getName(value){
          // GET request using fetch with async/await
          const response = await fetch(`/apiEmpolyee/findemployee/${value}`);
          const data = await response.json();
          this.setState({ EmployeeList: data });
    }

    showSuggestions(){
        // const Employee = this.state;
        
        if(this.state.EmployeeList.length === 0){
            return null;
        }
        return(
            <ul>{this.state.EmployeeList.map((emp)=> <li onClick = {() => this.suggestionSelected(emp.fname, emp.lName, emp.emp_id)}>{emp.fname} {emp.lName}</li>)}</ul>
            
        );
    }

    suggestionSelected(n1,n2, empId){

        this.setState(() => ({
            text: n1+' '+n2,
            EmployeeList: [],
            id: empId,
        }))
    }
    empleave=(e)=>{
      e.preventDefault();
      const id = this.state.id;
      this.props.history.push({
        pathname: '/ApplyLeave',
        state: { data: id }
      })
      
    }
      
    render(){
      const {text} = this.state;
        return(
            <div class= "container" style={this.style()}>
             
                
                <h4 class="center-align grey-text">Employee Leave</h4>
                <form onSubmit={this.empleave}>
                <div class="row">
                        <div class="input-field col s4 offset-s4" >
                             <input value = {text} onChange = {this.onTextChanged} type="text" class="autocomplete" style={{border: "none",marginBottom:"0px"}} required/>
                             <label for="search">Search Employee</label>
                             <ul style={{border: "1px solid black", marginBlockStart: "0em"}}>
                                {this.showSuggestions()}
                            </ul>
                        </div>
                        <div class="input-field col s3" >
                             <button class="waves-effect waves-light grey darken-1 btn-small">Apply Leave</button>
                        </div>
                </div>
                </form>
                
                <table class="highlight centered">
        <thead>
          <tr>
              <th>Employee Name</th>
              {/* <th>Employee ID</th> */}
              <th>Number of Leave taken for this month</th>
              <th>Apply leave</th>
          </tr>
        </thead>

        <tbody>
        {this.state.Employee.map((emp) => { return (
            <tr>
            <td id= "empName">{emp.fname} {emp.lName}</td>
            {/* <td id= "empId">{emp.emp_id}</td> */}
            <td id = "numberodDays">{emp.sum}</td>
            <td><button class="waves-effect waves-light grey darken-1 btn-small" id ="ApplyLeave" value ={emp.emp_id} onClick ={() => {this.applyLeave(emp.emp_id)}}>Apply Leave</button></td>

          </tr>
          );})}
        </tbody>
      </table>
      <div class="row"><div class ="col s4 offset-s4" style={this.style()}>
                <a href="/RecentLeave" class="waves-effect grey darken-1 btn-large" >View Recently Applied Leave</a>
                </div>
                </div>
                </div>
        );
    }
}
export default EmployeeLeave;