import React, { Component } from 'react';

class DesignCard extends Component{
    constructor(props){
 	super(props);
	this.state = {}
    }

    render(){
	return(
		<div class="col s12 m4">
		      <div class="card">
			<div class="card-image">
			  <img src={this.props.imgSrc} />
			  <span class="card-title black-text">{this.props.desName}</span>
			  <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
			</div>
			<div class="card-content">
			  <p>{this.props.desc}</p>
			</div>
		      </div>
		  </div>
	);
    }

}

export default DesignCard;
