import React, { Component } from "react";
import "./../../../App.css";
import M from "materialize-css";

class RequestRepair extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  componentDidMount(){
      const elems = document.querySelectorAll('select');
      M.FormSelect.init(elems, {});
  }

  request = async (e) => {
	e.preventDefault();
	//const item_name = document.getElementById('item_name').value;
	const damage_type = document.getElementById('damage_type').value;
	const current_price = document.getElementById('price').value;
	const description = document.getElementById('desc').value;

	const insertService = await fetch(`/api/v2/services/addnew`,{
  		headers: {
          	   Accept: "application/json",
          	   "Content-Type": "application/json",
        	},
        	method: "POST",
        	body: JSON.stringify({
          		imageUrl: "http://www.voguejewellers.lk/wp-content/uploads/2019/07/34-2.jpg",
          		jewellerytype: "normal",
          		customer: { customer_id: sessionStorage.getItem('userId')},
        	}),
  	});
  	const result = await insertService.json();
  	const serviceId = result.service_id

	
	const insertRequestRepair = await fetch(`/api/v2/repairs/addnew`,{
  		headers: {
          	    Accept: "application/json",
          	    "Content-Type": "application/json",
        	},
        	method: "POST",
        	body: JSON.stringify({
          	damagetype: damage_type,
          	service_id: serviceId,
          	current_price: current_price,
          	description: description
        }),
  	});
  	// eslint-disable-next-line
  	const resultRepair = await insertRequestRepair.json();
  	
  	setTimeout( () => {
  	   M.toast({ html: "Your Request has been placed. You can bring your gold to us" });
  	   this.props.history.push("/");
  	}, 2000);

  	

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

  render() {
    return (
      <div className="contsainer test" style={this.style()}>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image hide-on-small-only">
              <img
                id="signUpImage"
                alt=""
                src="https://image.freepik.com/free-vector/maintenance-concept-illustration_114360-381.jpg"
                height="100%"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4 className="center-align grey-text">Request Repair</h4>
                <div className="row">
                  
                  <br />
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="item_name"
                          type="text"
                          className="validate"
                        />
                        <label htmlFor="item_name" id="firstNameLabel">
                          Item Name
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div class="input-field col s12">
		    <select id="damage_type">
		      <option value="" disabled selected>Choose your Damage Type</option>
		      <option value="Lesser">Lesser</option>
		      <option value="Normal">Normal</option>
		      <option value="Higher">Higher</option>
		    </select>
		    <label>Damage Type</label>
		  </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="price"
                          type="text"
                          className="validate"
                        />
                        <label htmlFor="price" id="priceLabel">
                          Current Price
                        </label>
                      </div>
		    
                    </div>
			<div class="row">
			  <div class="input-field col s12">
			    <textarea id="desc" class="materialize-textarea" data-length="120"></textarea>
			    <label for="desc">Brief introduction of the system</label>
			  </div>
			</div>
		    
                    <div className="progress hide test">
                      <div className="indeterminate"></div>
                    </div>
                    <div className="center-align center">
                      <button
                        className="btn center-align grey darken-3"
                        style={{ width: "100%" }}
                        onClick={this.request}
                      >
                        Request
                      </button>
                    </div>
                    <br />
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RequestRepair;
