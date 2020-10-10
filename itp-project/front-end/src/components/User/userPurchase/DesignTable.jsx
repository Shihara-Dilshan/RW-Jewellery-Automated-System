import React, { Component } from "react";
import "./../../../App.css";
import M from "materialize-css";

import DesignPurchuseCard from "./DesignPurchuseCard";

class DesignTable extends Component {
  constructor(props) {
    super(props);
    this.state = { userPurchuses: []};
  }
  
  async componentDidMount(){
    	//const getCurrentPurchuses = await fetch(`/api/v2/services`);
    	//const allPurchuses = await getCurrentPurchuses.json();
    	//this.setState({userPurchuses: allPurchuses.filter((data) => data.customer.customer_id == sessionStorage.getItem("userId"))});
    
    	const tempAPICall = await fetch(`/api/v2/makeservices`);
    	const tempResult = await tempAPICall.json();
    	
    	this.setState({userPurchuses: tempResult.filter((data) => data.customer.customer_id == sessionStorage.getItem("userId"))});
    	
    	console.log(tempResult);
    	
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
  
  /*removeService = async (e) => {
  	const removeId = e.target.parentElement.parentElement.firstChild.innerHTML;
  	console.log(removeId);
  	// eslint-disable-next-line
  	const delete1 = await fetch(`/api/v2/makeservice/delete/${removeId}`, {
        	method: "DELETE",
    	});
    	
    	window.location.reload();
  	M.toast({ html: "Request has been cancelled" });
  }
  
  */

  render = () => {
    return (
    	 <div className="container">
        <h4 className="center-align">
          <span className="teal-text">My </span> Designs
        </h4>
        <div className="row">
        {this.state.userPurchuses.map((design) => {
        	return(
        	<DesignPurchuseCard
            	imageSrc={design.imageUrl}
            	title={design.design.name}
            	description={design.design.description}
            	price={design.price}
            	madeDate={design.localDateTime}
            	serviceId={design.service_id}
            	editable={design.isEditable}
          />);
        })}
          
        </div>
      </div>

     



    );
  };
}

export default DesignTable;
