import React, { Component } from "react";
import "./../../../App.css";


class PurchuseTable extends Component {
  constructor(props) {
    super(props);
    this.state = { userPurchuses: ""};
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
                src="https://image.freepik.com/free-vector/successful-purchase-concept-illustration_114360-2652.jpg"
                height="100%"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4 className="center-align grey-text">My Jewellery</h4>
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
              <th>Jewellery ID</th>
              <th>Jewellery Name</th>
              <th>Jewellery Price</th>
              <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{this.state.userPurchuses.jewellery_id}</td>
            <td>{this.state.userPurchuses.name}</td>
            <td>{this.state.userPurchuses.sellprice}</td>
            <td><button className="btn">Edit</button></td>
          </tr>          
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

export default PurchuseTable;
