import React, { Component } from "react";


class AdminLogs extends Component {

  constructor(props){
  	super(props);
  	this.state = {
  	    record: [],
  	};
  }
  
  async componentDidMount(){
  	const getData = await fetch(`/api/v2/record/all`);
  	const data = await getData.json();
  	this.setState({record: data });
  	
  }
  
      
    style = () => {
    return {
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
      marginTop: "-5px",
      marginBottom: "-10px",
    };
  };

  getStyle = () => {
    return {
      width: "20%",
    };
  };
  

  render() {
    return (
    
    <div className="contsainer test" style={this.style()}>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image hide-on-small-only" style={{display:"none"}}>
              <img
                id="signUpImage"
                alt=""
                src="https://image.freepik.com/free-vector/data-report-illustration-concept_114360-883.jpg"
                height="100%"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">

                <h5 className="center-align grey-text">Admin Activities</h5>
  
                <div className="row">
                
                  <div className="center-align center">
                  </div>
                  <br />
                  <div className="container">
        <div class="row">
    <div class="col s12">
      <div class="row" style={{height:"350px"}}>
         <table className="striped">
        <thead>
          <tr>
              <th>Name</th>
              <th>Login Time</th>
              <th>Activity Time</th>
              <th>Activity</th>
              <th>Position</th>
          </tr>
        </thead>

        <tbody>
      	    {this.state.record.map((record) => {
        	return(
        		<tr>
              <td>{record.admin.fname}</td>
              <td>{record.loginTime}</td>
              <td>{record.activityTime}</td>
              <td>{record.activity}</td>
              <td>{record.admin.position}</td>
           </tr>
        	);
        })}
        </tbody>
      </table>
       
      </div>
      
    </div>
    
  </div>
  
</div>

                </div>
              </div>
              <div className="container">
              <ul className="pagination">
    <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
    <li className="active"><a href="#!">1</a></li>
    <li className="waves-effect"><a href="#!">2</a></li>
    <li className="waves-effect"><a href="#!">3</a></li>
    <li className="waves-effect"><a href="#!">4</a></li>
    <li className="waves-effect"><a href="#!">5</a></li>
    <li className="waves-effect"><a href="#!">6</a></li>
    <li className="waves-effect"><a href="#!">7</a></li>
    <li className="waves-effect"><a href="#!">8</a></li>
    <li className="waves-effect"><a href="#!">9</a></li>
    <li className="waves-effect"><a href="#!">10</a></li>
    <li className="waves-effect"><a href="#!">...</a></li>
    <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
  </ul>
  </div>
            </div>
            
          </div>
        </div>
      </div>

     


      
 
            
    );
  }
}

export default AdminLogs;
