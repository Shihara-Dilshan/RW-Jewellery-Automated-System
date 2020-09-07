import React, {Component} from 'react';

import PurchaseCard1 from './PurchaseCard1';

class PurchaseContainer extends Component{
    constructor(){
        super();
        this.state = {};
    }

    getStyle = () => {
        return{
            marginTop: "50px",
            marginBottom: "50px",
            width: "90%"
        }
    }

    render = () => {
        return(
            <div className="row grey-text center-align" style={this.getStyle()}>
                <PurchaseCard1 />
           
            </div>
        );
    }
}

export default PurchaseContainer;
