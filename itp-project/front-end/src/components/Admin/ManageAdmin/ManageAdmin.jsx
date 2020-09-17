import React, { Component } from "react";
import "./../../../App.css";
import M from "materialize-css";


class ManageAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = { userPurchuses: [],  isLoading : true};
  }
  
  async componentDidMount(){
    	const getCurrentPurchuses = await fetch(`/api/v2/admin/all`);
    	
    	const allPurchuses = await getCurrentPurchuses.json();
    	console.log(allPurchuses.status);
    	if(allPurchuses.status === 403){
    	    alert("You dont have permission")
    	}else{
    	    let removeRoot = allPurchuses.filter( admin => admin.uname !== "root");
    	    this.setState({userPurchuses: removeRoot, isLoading : false});
    	}
    	
    	
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
  
  

  render = () => {
    return (
    
    
          <div className="contsainer test" style={this.style()}>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image hide-on-small-only">
              <img
                id="signUpImage"
                alt=""
                src="https://image.freepik.com/free-vector/site-stats-concept-illustration_114360-1434.jpg"
                height="100%"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h5 className="center-align grey-text">Current Admins</h5>
                <div className="row">
                  <div className="center-align center">
                  </div>
                  <br />
                  <div className="container">
        <div class="row">
    <div class="col s12">
      <div class="row">
         <table className="striped">
        <thead>
          <tr>
              <th className="hide">Admin ID</th>
              <th>Name</th>
              <th>Account Name</th>
               <th>Password</th>
              <th>Role</th>
              <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          {this.state.isLoading ? null : this.state.userPurchuses.map((admin) => {return (<tr>
			    <td className="hide">{admin.emp_id}</td>
			    <td>{admin.fname+ " " +admin.lName}</td>
			    <td>{admin.uname}</td>
			    <td>{admin.password}</td>
			    <td>{admin.roles}</td>
			    <td><button className="btn red">Delete</button></td>
			  </tr>  )})}
                  
        </tbody>
      </table>
      </div>
    </div>
  </div>
</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     



    );
  };
}

export default ManageAdmin;
