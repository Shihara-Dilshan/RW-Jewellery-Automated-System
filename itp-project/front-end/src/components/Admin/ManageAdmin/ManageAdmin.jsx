import React, { Component } from "react";
import "./../../../App.css";
import M from "materialize-css";

class ManageAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = { userPurchuses: [], isLoading: true , update: false};
  }

  async componentDidMount() {
    const getCurrentPurchuses = await fetch(`/api/v2/admin/all`);

    const allPurchuses = await getCurrentPurchuses.json();
    console.log(allPurchuses);
    if (allPurchuses.status === 403) {
      alert("You dont have permission");
    } else {
      let removeRoot = allPurchuses.filter((admin) => admin.uname !== "root");
      this.setState({ userPurchuses: removeRoot, isLoading: false });
    }
    
  }
  
  chageStatus = async (e) => {
  	const id = e.target.id;
  	const node = e.target.parentElement.previousSibling.firstChild.firstChild.firstChild

  	
  	
  	const getData = await fetch(`/api/v2/admin/specificid/${id}`);
  	const Data = await getData.json();
  	Data.active === "active" ? Data.active = "disabled" : Data.active = "active" ;

  	
  	const updateApi = await fetch(`/api/v2/admin/update/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(
           Data
        ),
      });
      const result = await updateApi.json();
      

      if(updateApi.status == 200){
      
      if(node.classList.contains("green-text")){
  		 node.classList.remove("green-text");
  		 node.classList.add("red-text");
  	}else{
  		node.classList.remove("red-text");
  		node.classList.add("green-text");
  	}
  	M.toast({ html: "Successfully changed the state" });
  	let x = new Date().toString();

      let y = x.split(" ");
      let finalString = "";

      for (let i = 0; i <= y.length - 4; i++) {
        finalString = finalString + " " + y[i];
      }

      const updateRecord = await fetch(`api/v2/record/add`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          loginTime: sessionStorage.getItem("loginTime"),
          activityTime: finalString.trim(),
          activity: "Owner changed admin status",
          admin: {
            emp_id: sessionStorage.getItem("adminId"),
          },
        }),
      });
  	
    }else{
    	alert("there is something wrong with the server");
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
                  <div className="center-align center"></div>
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
                                <th>status</th>
                                <th>Change</th>
                              </tr>
                            </thead>

                            <tbody>
                              {this.state.isLoading
                                ? null
                                : this.state.userPurchuses.map((admin) => {
                                    return (
                                      <tr>
                                        <td className="hide">{admin.emp_id}</td>
                                        <td>
                                          {admin.fname + " " + admin.lName}
                                        </td>
                                        <td>{admin.uname}</td>
                                        <td>{admin.password}</td>
                                        <td>{admin.roles}</td>
                                        <td>
                                          
                                            <div className="row">
                                            	<div className="col s6">
                                            	<i className={`${admin.active === 'active' ? "material-icons small green-text unvertified" : "material-icons small red-text unvertified"}`}>verified_user
                                            	</i></div>
                                            </div>
                                        </td>
                                        <td><button className="btn grey darken-3" id={admin.emp_id} onClick={this.chageStatus}>Change</button></td>
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
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default ManageAdmin;
