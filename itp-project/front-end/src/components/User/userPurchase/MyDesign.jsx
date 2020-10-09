import React, { Component } from "react";

import { Link } from 'react-router-dom';

class MyDesign extends Component {
  constructor(props) {
    super(props);
    this.state = { userPurchuses: undefined, designCount: '---' };
  }
  
  async componentDidMount(){
  	const apiCall = await fetch('/api/v2/makeservices');
  	const result = await apiCall.json();
  	const desinUserData = result.filter((data) => data.customer.customer_id == sessionStorage.getItem("userId"));
  	this.setState({designCount: desinUserData.length });
  }

  render = () => {
    return (
        <div class="col s12 m4 test">
          <div className="card-panel">
                <i className="material-icons large grey-text">color_lens</i>
                <h5>My Design</h5>
                <p>{this.state.designCount}</p> 
                <Link to="/designtable"><button className="btn grey darken-3" style={{width:"50%"}}>View</button></Link>
              </div>
        </div>
    );
  };
}

export default MyDesign;
