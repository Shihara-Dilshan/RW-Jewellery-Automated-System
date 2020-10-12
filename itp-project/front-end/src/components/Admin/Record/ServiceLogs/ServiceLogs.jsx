import React, { Component } from "react";

import M from "materialize-css";

class ServiceLogs extends Component {
  constructor(props) {
    super(props);
    this.state = { userPurchuses: [] , userPurchusesOriginal: []};
  }

  async componentDidMount() {
    const tempAPICall = await fetch(`/api/v2/makeservices`);
    const tempResult = await tempAPICall.json();
    
    this.setState({userPurchuses: tempResult});
    this.setState({userPurchusesOriginal: tempResult});
  }
  
  newOrders = () => {
  	let original = this.state.userPurchusesOriginal;
  	this.setState({
       userPurchuses: original.filter(
        (data) => data.isEditable === "yes" && data.status === "new"
      ),
    });
  }
  
  ongoingOrders = () => {
  	let original = this.state.userPurchusesOriginal;
  	this.setState({
       userPurchuses: original.filter(
        (data) => data.isEditable === "no" && data.status === "assigned"
      ),
    });
  
  }
  
  completedOrders = () => {
  	let original = this.state.userPurchusesOriginal;
  	this.setState({
       userPurchuses: original.filter(
        (data) => data.isEditable === "no" && data.status === "completed"
      ),
    });
  
  }
  
  
  allOrders = () => {
  	let original = this.state.userPurchusesOriginal;
  	this.setState({
       userPurchuses: original
    });
  
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
                src="https://image.freepik.com/free-vector/april-15-tax-payment-concept_24908-56229.jpg"
                height="100%"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h5 className="center-align grey-text"><button class="btn blue darken-3" onClick={this.allOrders}>All </button>{" "}<button class="btn grey darken-3" onClick={this.completedOrders}>Completed </button>{" "}<button class="btn red" onClick={this.ongoingOrders}>Ongoing</button>{" "}<button class="btn green" onClick={this.newOrders}>New</button></h5>
                <div className="row">
                  <div className="center-align center"></div>
                  <br />
                  <div className="container">
                    <div class="row">
                      <div class="col s12">
                        <div class="row">
                          <table className="striped">
                            <thead>
                              <tr>
                                <th>Service ID</th>
                                <th>Requested</th>
                                <th>Image</th>
                               
                              </tr>
                            </thead>

                            <tbody>
                              {this.state.userPurchuses.map((design) => {
                                return (
                                  <tr>
                                    <td>{design.service_id}</td>
                                    <td>{design.localDateTime}</td>
                                    <td>
                                      <img
                                        height="50px"
                                        width="50px"
                                        src={design.imageUrl}
                                        alt=""
                                        style={{ borderRadius: "50%" }}
                                      />
                                      <a href={design.imageUrl}>
                                        <span style={{ verticalAlign: "15px" }}>
                                          View
                                        </span>{" "}
                                      </a>
                                    </td>
                                   
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

export default ServiceLogs;
