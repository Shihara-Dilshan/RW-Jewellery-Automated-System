import React, { Component } from "react";

import './../../../App.css';
import StaticCards from './StaticCards';

class DashBoard extends Component {

  constructor(props){
  	super(props);
  	this.state = {};
  }
  
  componentDidMount(){
  	if(sessionStorage.getItem('adminAccount') === null || sessionStorage.getItem('adminAccount') === undefined){
  	    this.props.history.push("/");
  	}
  }

  render() {
    return (
      <section className="section section-icons grey lighten-4 center scrollspy test">
        <div className="container">
        <h4 className="grey-text">Dash Board</h4>
          <div className="row">
  		<StaticCards title="Jewelry Management" icon="style" />
  		<StaticCards title="Rental Management" icon="directions_walk" />
  		<StaticCards title="Employee Management" icon="assignment_ind" />
  		<StaticCards title="Orders & Delivery" icon="directions_bike" />
  		<StaticCards title="Service Management" icon="beach_access" />
  		<StaticCards title="Supplier Management" icon="store" />
  	 </div>
  	</div>
      </section>
    );
  }
}

export default DashBoard;
