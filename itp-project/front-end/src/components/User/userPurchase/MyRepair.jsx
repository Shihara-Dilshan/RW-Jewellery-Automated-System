import React, { Component } from "react";

import { Link } from 'react-router-dom';

class MyRepair extends Component {
  constructor(props) {
    super(props);
    this.state = { userPurchuses: undefined};
  }
  
  async componentDidMount(){
        const userID = sessionStorage.getItem('userId'); 
    	const getCurrentPurchuses = await fetch(`/api/v2/sellable/allSellablebyuser`, {
    	    headers: {
          	    Accept: "application/json",
          	    "Content-Type": "application/json",
        	},
        	method: "POST",
        	body: JSON.stringify({
        		customer_id: userID,
	}),
    	});
    	
    	const allPurchuses = await getCurrentPurchuses.json();
    	this.setState({userPurchuses: allPurchuses});
    	console.log(allPurchuses);
    	
    }

  render = () => {
    return (
        <div class="col s12 m4 test">
          <div className="card-panel">
                <i className="material-icons large grey-text">build</i>
                <h5>My Repair</h5>
                <p>1</p> 
                <Link to="/purchusetable"><button className="btn grey darken-3" style={{width:"50%"}}>View</button></Link>
              </div>
        </div>
    );
  };
}

export default MyRepair;
