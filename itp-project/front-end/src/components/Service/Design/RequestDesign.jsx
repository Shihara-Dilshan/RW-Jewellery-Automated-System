import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DesignCard from './DesignCard';
import M from 'materialize-css';

class RequestDesign extends Component{
    constructor(){
	super();
	this.state = {
	    allDesigns : [],	
	};
    }

    componentDidMount(){
 	const elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {});

        var elems2 = document.querySelectorAll('.datepicker');
    	M.Datepicker.init(elems2, {});
   
	this.setState({
	    allDesigns : [{"design_id":"d72d735e-20a1-4072-ae75-3da40d36d9bb","name":"Design-X 36mm","description":"Best design for material and edge designs","imageUrl":"https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/items/Gem-Banner-1.jpg"},
			  {"design_id":"d72d735e-20a1-4072-ae75-3da40d36d9bb","name":"Design-X 36mm","description":"Best design for material and edge designs","imageUrl":"https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/items/Gem-Banner-1.jpg"},
			  {"design_id":"d72d735e-20a1-4072-ae75-3da40d36d9bb","name":"Design-X 36mm","description":"Best design for material and edge designs","imageUrl":"https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/items/Gem-Banner-1.jpg"},			
			  {"design_id":"d72d735e-20a1-4072-ae75-3da40d36d9bb","name":"Design-X 36mm","description":"Best design for material and edge designs","imageUrl":"https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/items/Gem-Banner-1.jpg"},
			  {"design_id":"d72d735e-20a1-4072-ae75-3da40d36d9bb","name":"Design-X 36mm","description":"Best design for material and edge designs","imageUrl":"https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/items/Gem-Banner-1.jpg"},
			  {"design_id":"d72d735e-20a1-4072-ae75-3da40d36d9bb","name":"Design-X 36mm","description":"Best design for material and edge designs","imageUrl":"https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/items/Gem-Banner-1.jpg"}
			]
	  }
	);
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

   designImage = () => {
       const designImage = document.getElementById("DesignImage");
       designImage.setAttribute("src", "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/items/jacek-dylag-FXXfE5RqkqY-unsplash.jpg");
       designImage.classList.remove("test");
       designImage.classList.add("test");
   }

    render(){
	return(
            <React.Fragment>
	    <div className="contsainer test" style={this.style()}>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-stacked">
              <div className="card-content">
                <h4 className="center-align grey-text">Design a new jewellery</h4>
                <div className="row">
                  <form className="col s12">
                    <div className="row">
			<div className="col s6"> <input type="text" disabled value="Type"/></div>
			<div className="col s6"> <select>
		      <option value="" disabled selected>Choose your option</option>
		      <option value="1">Option 1</option>
		      <option value="2">Option 2</option>
		      <option value="3">Option 3</option>
		    </select>
		    </div>
		    </div>
		   <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="email"
                          type="email"
                          className="validate"
                          value={this.state.email}
                        />
                        <label htmlFor="email" id="emailLabel" className="active">
                          Weight of the jewellery
                        </label>
                      </div>
                    </div>
		   <div className="row">
			<div className="col s6"> 
			<h6>Which one to choose</h6>
			      <p>
			      <label>
				<input name="group1" type="radio" checked />
				<span>Red</span>
			      </label>
			    </p>
			    <p>
			      <label>
				<input name="group1" type="radio" />
				<span>Yellow</span>
			      </label>
			    </p>
			 </div>
			<div className="col s6"> 
			      <h6>Which one to choose</h6>
			      <p>
			      <label>
				<input name="group2" type="radio" checked />
				<span>Red</span>
			      </label>
			    </p>
			    <p>
			      <label>
				<input name="group2" type="radio" />
				<span>Yellow</span>
			      </label>
			    </p>
			 </div>
		  </div>
		 <div className="row">
			<div className="col s6"> <input type="text" disabled value="Choose a date to complete"/></div>
			<div className="col s6"> <input type="text" class="datepicker" />  </div>
		    </div>
		   <div className="row">
			<div class="file-field input-field">
		      <div class="btn">
			<span>File</span>
			<input type="file"/>
		      </div>
		      <div class="file-path-wrapper">
			<input class="file-path validate" type="text" placeholder="Upload an image" />
		      </div>
		     <br />
		     <div className="row"><div className="col s12"><button className="btn center center-align grey darken-3" style={{width: "100%"}}>Proceed</button></div></div>
		    </div>
 		   </div>
                  </form>
                </div>
              </div>
            </div>

	   <div className="card-image hide-on-small-only">
              <img
                id="DesignImage"
                alt=""
                src="https://image.freepik.com/free-vector/man-gives-woman-wedding-ring-romantic-dating_82574-13085.jpg"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
      <h4 className="center align-center"> <span className="teal-text center align-center">Choose</span> a Designs </h4>
      <div className="container">
          <div className="row">
	      <DesignCard />
              <DesignCard />
              <DesignCard />
              <DesignCard />
	      <DesignCard />
              <DesignCard />
	  </div>
      </div>
    </React.Fragment>
	);
    }

}

export default RequestDesign;
