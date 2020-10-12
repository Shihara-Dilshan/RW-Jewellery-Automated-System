import React, { Component } from "react";

import { Link } from "react-router-dom";

import './stylefirst.css';


class RentList extends Component {

    style = () => {
      return {
        backgroundColor: "#f5f5f5",
        borderRadius: "5px",
        marginTop: "-5px",
        marginBottom: "-10px",
      };
    };

   
  
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    rental = (e) => {
        
        sessionStorage.setItem("rentalid",e.target.id );

    }

    buttonStyle = () => {
      return {
        width: "100%",
      };
    };
    render() {
      return (
        <div>
          <Link to ={{
  pathname: '../MyRentals',
  state: {
    id: "f60e9d92-6d29-4975-a083-9b2a67dc4f57",
  }
}}>
          <div id="myrentals">
            <button class="rentals">My Rentals</button>
          </div>
          </Link>
        <div className="col s12 m4 test">
          
      
          <div className="card medium">
            <div className="card-image">
              <img src={this.props.imageSrc} alt="" />
              <span className="card-title">{this.props.title}</span>
            </div>
            <div className="card-content">
              <p>{this.props.description}</p>
            </div>
            
           
            <div className="card-action white-text">
            <Link to="/RentPayment">
              <button
                id={this.props.jid}
                className="btn white-text grey darken-3"
                style={this.buttonStyle()
               }
               onClick={this.rental}
              >
                Rent now
              </button>
              </Link>
            </div>
            
          </div>
        </div>
        </div>
      );
    }
}

export default RentList;