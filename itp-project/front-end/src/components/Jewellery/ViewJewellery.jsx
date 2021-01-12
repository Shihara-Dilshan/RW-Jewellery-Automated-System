import React, { Component } from 'react'
import JewelleryService from "../Service/JewelleryService";

class ViewJewellery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            jewellery: {}
        }
    }

    componentDidMount(){
        JewelleryService.getJewelleryById(this.state.id).then( res => {
            this.setState({jewellery: res.data});
        })
    }

    /*calc(){
        if( this.state.jewellery.name === 'Sell'){
			return (Integer.parseInt(this.state.jewellery.supplyPrice) - (Integer.parseInt(this.state.jewellery.supplyPrice)*0.25 ));
        }else{
			return (Integer.parseInt(this.state.jewellery.supplyPrice) - (Integer.parseInt(this.state.jewellery.supplyPrice)*0.5 ));
		}
    }*/

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h5 className = "text-center"> View Jewellery Details</h5>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Jewellery Type: </label>
                            <div> { this.state.jewellery.name }</div>
                        </div>
                        <div className = "row">
                            <label> Jewellery Material: </label>
                            <div> { this.state.jewellery.material }</div>
                        </div>
                        <div className = "row">
                            <label> Supply Price: </label>
                            <div> { this.state.jewellery.supplyPrice }</div>
                        </div>
                        {/*<div className = "row">
                            <label> Final Price: </label>
                            <div>{this.calc}</div>
        </div>*/}
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewJewellery
