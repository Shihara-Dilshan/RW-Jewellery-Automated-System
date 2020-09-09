import React, { Component } from "react";
import "./../../../App.css";
import M from "materialize-css";


class DesignTable extends Component {
  constructor(props) {
    super(props);
    this.state = { userPurchuses: []};
  }
  
  async componentDidMount(){
    	const getCurrentPurchuses = await fetch(`/api/v2/makeservices`);
    	
    	const allPurchuses = await getCurrentPurchuses.json();
    	this.setState({userPurchuses: allPurchuses});
    	console.log(this.state.userPurchuses);
    	
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
  
  removeService = async (e) => {
  	const removeId = e.target.parentElement.parentElement.firstChild.innerHTML;
  	console.log(removeId);
  	// eslint-disable-next-line
  	const delete1 = await fetch(`/api/v2/makeservice/delete/${removeId}`, {
        	method: "DELETE",
    	});
    	
    	window.location.reload();
  	M.toast({ html: "Request has been cancelled" });
  }

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
                <h4 className="center-align grey-text">Requested Designs</h4>
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
          {this.state.userPurchuses.map( (Design) => {
          	return(
          		<tr>
			    <td>{Design.service_id}</td>
			    <td>{Design.design.name}</td>
			    <td>{Design.price}</td>
			    <td><button className="btn red" onClick={this.removeService}>Delete</button></td>
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

export default DesignTable;
