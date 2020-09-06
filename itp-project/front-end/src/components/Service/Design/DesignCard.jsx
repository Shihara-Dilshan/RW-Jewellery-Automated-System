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
			  <img src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/model/Front-image-3.jpg" />
			  <span class="card-title">Card Title</span>
			  <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
			</div>
			<div class="card-content">
			  <p>I am a very simple card. I use effectively.</p>
			</div>
		      </div>
		  </div>
	);
    }

}

export default DesignCard;
