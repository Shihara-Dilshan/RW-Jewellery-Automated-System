import React, { Component } from "react";
import M from "materialize-css";
import '../../../App.css';

class DesignPurchuseCard extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  cancelOrder = async (e) => {
  	e.target.parentElement.parentElement.parentElement.classList.add('hide');
  	console.log(e.target.parentElement.parentElement.parentElement);
  	M.toast({ html: "Request has been cancelled" });
  	
  	// eslint-disable-next-line
  	const delete1 = await fetch(`/api/v2/makeservice/delete/${e.target.id}`, {
        	method: "DELETE",
    	});
    	
  }
  
  cancelOrderError = () => {
  	M.toast({ html: "Already being made. Cannot cancel, please contact customer support" });
  }

  buttonStyle = () => {
    return {
      width: "100%",
    };
  };
  render() {
    return (
      <div className="col s12 m4 test">
        <div className="card large">
          <div className="card-image">
            <img src={this.props.imageSrc} alt="" />
            <span className="card-title">{this.props.title}</span>
          </div>
          <div className="card-content">
            <p><span className="teal-text">Design</span> : {this.props.description}</p>
            <p><span className="teal-text">Res No</span> : {this.props.serviceId}</p>
            <p><span className="teal-text">Bill Rs</span> : {this.props.price}</p>
            <p><span className="teal-text">Build on</span> : {this.props.madeDate}</p>
          </div>
          
          {this.props.editable==="yes" ?<div className="card-action white-text" onClick={this.cancelOrder} >
            <li
              className="btn white-text grey darken-3"
              style={this.buttonStyle()}
              id={this.props.serviceId}
            >
              Cancel Order
            </li>
          </div> : 
          
          <div className="card-action white-text" onClick={this.cancelOrderError}>
            <li
              className="btn white-text grey darken-3"
              style={this.buttonStyle()}
              id={this.props.serviceId}
              disabled
            >
              Cancel Order
            </li>
          </div>
          
          }
          
          
        </div>
      </div>
    );
  }
}

export default DesignPurchuseCard;
