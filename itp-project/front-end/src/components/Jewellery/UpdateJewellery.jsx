import React, { Component } from 'react'
import JewelleryService from "../Service/JewelleryService";

class UpdateJewellery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            material: "", 
            supPrice: "",
            sell_rent: "",
            url: "",
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleMaterialChange = this.handleMaterialChange.bind(this);
        this.handleSupPriceChange = this.handleSupPriceChange.bind(this);
    }

    componentDidMount(){
        JewelleryService.getJewelleryById(this.state.id).then( (res) =>{
            let jewellery = res.data;
            this.setState({
                sell_rent: jewellery.name,
                material: jewellery.material,
                supPrice : jewellery.supplyPrice,
                url : jewellery.image_url,
            });
        });
    }

    updateJewellery = (e) => {
        e.preventDefault();
        let jewellery = {name: this.state.sell_rent, 
                        material: this.state.material, 
                        supplyPrice: this.state.supPrice,
                        image_url: this.state.url
                        };
        console.log('jewellery => ' + JSON.stringify(jewellery));
        console.log('id => ' + JSON.stringify(this.state.id));
        JewelleryService.updateJewellery(jewellery, this.state.id).then( res => {
            this.props.history.push('/jewellery');
        });
    }
    
    handleNameChange= (event) => {
        this.setState({sell_rent: event.target.value});
    }

    handleMaterialChange= (event) => {
        this.setState({material: event.target.value});
    }

    handleSupPriceChange= (event) => {
        this.setState({supPrice: event.target.value});
    }

    handleurlChange= (event) => {
        this.setState({url: event.target.value});
    }

    cancel(){
        this.props.history.push('/jewellery');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h5 align = "center" className = "text-center">Add Jewellery</h5>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Sell / Rent: </label>
                                            <input placeholder="Sell / Rent" name="sell_rent" className="form-control" 
                                                value={this.state.sell_rent} onChange={this.handleNameChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Material: </label>
                                            <input placeholder="Material" name="material" className="form-control" 
                                                value={this.state.material} onChange={this.handleMaterialChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Supply Price: </label>
                                            <input placeholder="Supply Price" name="supPrice" className="form-control" 
                                                value={this.state.supPrice} onChange={this.handleSupPriceChange}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Image URL: </label>
                                            <input placeholder="Image URL" name="url" className="form-control" 
                                                value={this.state.url} onChange={this.handleurlChange}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateJewellery}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateJewellery;
