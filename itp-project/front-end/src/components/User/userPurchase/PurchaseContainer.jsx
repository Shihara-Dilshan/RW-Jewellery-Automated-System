import React, {Component} from 'react';

import PurchaseCard from './PurchaseCard';

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
                <PurchaseCard />
                <PurchaseCard />
                <PurchaseCard />
                <PurchaseCard />
                <PurchaseCard />
                <PurchaseCard />
            </div>
        );
    }
}

export default PurchaseContainer;