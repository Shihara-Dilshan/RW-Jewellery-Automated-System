import React, { Component } from "react";
import "./../../../App.css";
import StaticCards from './StaticCards';
import M from "materialize-css";


class OngoingDesign extends Component {
  constructor(props) {
    super(props);
    this.state = { userPurchuses: []};
  }
  
  async componentDidMount(){
     	const tempAPICall = await fetch(`/api/v2/makeservices`);
    	const tempResult = await tempAPICall.json();
    	
    	this.setState({userPurchuses: tempResult.filter( data => data.isEditable === "no" &&  data.status === "assigned" )});
    	console.log(tempResult)
  }

  assign = async (e) => {
  	let isAssign = prompt("Assign as a ongoing? Y/N");
  	let id = e.target.id;
  	let target = e.target.parentElement.parentElement;
  	
  	
  	if(isAssign === null){
  	   isAssign = 'N';
  	}else if(isAssign === 'Y' || isAssign === 'y'){
  	   const getServiceById = await fetch(`/api/v2/makeservice/${id}`);
    	   const serviceResult = await getServiceById.json();
    	   let updateData = serviceResult;
    	   updateData.isEditable = "no";
    	   updateData.status = "completed";
    	   
    	   const updateDesign = await fetch(`api/v2/makeservice/update/${id}`, {
      	headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(updateData),
      	
      });
      	
      	target.classList.add('hide');
    	   
    	   
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
                src="https://image.freepik.com/free-vector/processing-concept-illustration_114360-1395.jpg"
                height="100%"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h5 className="center-align grey-text">Ongoing Designs</h5>
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
              <th>Service ID</th>
              <th>Requested</th>
              <th>Image</th>
              <th>Assign</th>
          </tr>
        </thead>

        <tbody>
         {this.state.userPurchuses.map((design) => {
        	return(
        		<tr>
              <td>{design.service_id}</td>
              <td>{design.localDateTime}</td>
              <td><img height="50px" width="50px" src={design.imageUrl} alt="" style={{borderRadius: "50%"}}/><a href={design.imageUrl}><span style={{verticalAlign:"15px"}}>View</span> </a></td>
              <td><button id={design.service_id} className="btn" onClick={this.assign}>complete</button></td>
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

export default OngoingDesign;
