import React, {  } from "react";
import JewelleryService from "../Service/JewelleryService";

const initialState = {
  material: "", 
  category: "",
  url: "", 
  supPrice: "",
  discount: "",
  sell_rent: "",
  
  materialError: "",
  categoryError: "", 
  urlError: "",  
  supPriceError: "",
  discountError: "",
  sell_rent_Error: "", 
  
};

  
  export default class ValidateJewellery extends React.Component {
    state = initialState;
   
    handleChange = event => {
      const isCheckbox = event.target.type === "checkbox";
      this.setState({
        [event.target.name]: isCheckbox
          ? event.target.checked
          : event.target.value
      });
    };

    //handle the name
    handleNameChange = event => {
      this.setState({sell_rent: event.target.value});
    };

    //handle the material
    handleMaterialChange = event => {
      this.setState({material: event.target.value});
    };

    //handle the Category name
    handleCategoryChange = event => {
      this.setState({category: event.target.value});
    };

    //handle the Description
    handleURLChange = event => {
      this.setState({url: event.target.value});
    };

    //handle the Supplier price
    handleSupPriceChange = event => {
      this.setState({supPrice: event.target.value});
    };

    //handle the discount
    handleDiscountChange = event => {
      this.setState({discount: event.target.value});
    };


    validate = () => {
      let materialError = "";
      let categoryError = "";
      let urlError = "";
      let supPriceError = "";
      let discountError = "";
      let sell_rent_Error = "";

      if (!this.state.material) {
        materialError = "Material cannot be Empty...";
      }

      if (!this.state.category) {
        categoryError = "Category cannot be Empty...";
      }

      if (!this.state.url) {
        urlError = "Image url cannot be Empty...";
      }

      if (!this.state.supPrice) {
        supPriceError = "Supply price cannot be Empty...";
      }

      if (!this.state.discount) {
        discountError = "Discount cannot be Empty...";
      }

      if (!this.state.sell_rent ) {
        sell_rent_Error = "This field cannot be Empty...";
      }else if(this.state.sell_rent !== 'Sell' && this.state.sell_rent !== 'Rent'){
        sell_rent_Error = "Enter sell or Rent Only...";
      }

      
      if (materialError || categoryError || urlError || supPriceError || discountError || sell_rent_Error) {
        this.setState({materialError , categoryError , urlError , supPriceError , discountError , sell_rent_Error});
        return false;
      }
  
      return true;
    };

    saveOrUpdateJewellery = event => {      

      const isValid = this.validate();
      if (isValid) {
        console.log(this.state);
        // clear form
        this.setState(initialState);  

        event.preventDefault();
      
        let jewellery = { name: this.state.sell_rent, 
                          material: this.state.material,
                          
                          image_url: this.state.url,
                          supplyPrice: this.state.supPrice,
                          //discount: this.state.discount
                        };
        
        console.log('jewellery => ' + JSON.stringify(jewellery));
           
              JewelleryService.createJewellery(jewellery).then(res =>{
                this.props.history.push('/jewellery');
              });

      }
    };

    
   
  
    render() {
      return (             
       
          <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                          

                        <h5 align = "center" className = "text-center">Add Jewellery</h5>
                               
                            <div className = "card-body">
                            <form onSubmit={this.handleSubmit}>

                              {/* State whether 'sell' or 'rent' and send it to column 'name' in 'jewellery' table */}
                               <div className="row">
                                <div className="input-field col s12">
                                  <input name = "sell_rent" id="sell_rent" type="text" value={this.state.sell_rent} onChange={this.handleNameChange.bind(this)}/>
                                  <label htmlFor="sell_rent" id="sell_rentlbl">
                                    Sell / Rent
                                  </label>
                                </div>
                                <div style={{ fontSize: 12, color: "red" }}>
                                  {this.state.sell_rent_Error}
                                </div>
                              </div>

                              {/* Material */}
                                <div className="row">
                                <div className="input-field col s12">
                                  <input name = "material" id="material" type="text" value={this.state.material} onChange={this.handleMaterialChange.bind(this)}/>
                                  <label htmlFor="material" id="materiallbl">
                                    Material
                                  </label>
                                </div>
                                <div style={{ fontSize: 12, color: "red" }}>
                                  {this.state.materialError}
                                </div>
                              </div>


                              {/* Category name */}
                                <div className="row">
                                <div className="input-field col s12">
                                  <input name = "category" id="category" type="text" value={this.state.category} onChange={this.handleCategoryChange.bind(this)}/>
                                  <label htmlFor="category" id="categorylbl">
                                    Category
                                  </label>
                                </div>
                                <div style={{ fontSize: 12, color: "red" }}>
                                  {this.state.categoryError}
                                </div>
                              </div>

                              {/* Image url */}
                                 <div className="row">
                                <div className="input-field col s12">
                                  <input name = "url" id="url" type="text" value={this.state.url} onChange={this.handleURLChange.bind(this)}/>
                                  <label htmlFor="url" id="urllbl">
                                    Image URL
                                  </label>
                                </div>
                                <div style={{ fontSize: 12, color: "red" }}>
                                  {this.state.urlError}
                                </div>
                              </div>

                              {/* Supply price */}
                                <div className="row">
                                <div className="input-field col s12">
                                  <input name = "supPrice" id="supPrice" type="text" value={this.state.supPrice} onChange={this.handleSupPriceChange.bind(this)}/>
                                  <label htmlFor="supPrice" id="supPricelbl">
                                    Supply Price
                                  </label>
                                </div>
                                <div style={{ fontSize: 12, color: "red" }}>
                                  {this.state.supPriceError}
                                </div>
                              </div>

                              {/* Discount */}
                                 <div className="row">
                                <div className="input-field col s12">
                                  <input name = "discount" id="discount" type="text" value={this.state.discount} onChange={this.handleDiscountChange.bind(this)}/>
                                  <label htmlFor="discount" id="discountlbl">
                                    Discount
                                  </label>
                                </div>
                                <div style={{ fontSize: 12, color: "red" }}>
                                  {this.state.discountError}
                                </div>
                              </div>

                              {/* Rent price after calculating the discount */}
                              {/* calculate into here using the value in the discount field */}    


                                <button className="waves-effect black btn-small" onClick={this.saveOrUpdateJewellery.bind(this)}>Save</button>
                              <a class="waves-effect black btn-small" href="/jewellery" style={{marginLeft: "30px"}}>Cancel</a>
                            </form>
                            </div>
                        </div>
                    </div>
                  </div>
          </div>
        
      );
    }
  }