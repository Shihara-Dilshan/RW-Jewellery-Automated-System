import React, { Component } from 'react';
import RentList from './firstPage';
import Rentjewelries from "../Rhome/Rentcollection";

class mainfirstPage extends Component {

  constructor() {
    super();
        
    this.state = {
      Item:[],
     
    };
  }

  async componentDidMount() {
  
    const APICall = await fetch(`/api/v2/rentalcus/allrentaldetails`);
    const Result = await APICall.json();
    // this.setState({ totalPayment1: Result });
    this.setState({ 
      Item:Result,
     });

     

  }
    render() {
        return (
            <div>
                <Rentjewelries />
          <div className="container">
            <h4 className="center-align">
              <span className="teal-text">NECKLACES</span> 
            </h4>
            <div className="row">
              
               {this.state.Item.map((item) => { return (

                    <RentList
                    imageSrc={item.image_url}
                    title={item.name}
                    description={'Rs.'+item.rentalPrice+'::::::'+item.material}
                    // description={item.rentalPrice}
                    jid={item.jewellery_id}
                    />
               );})}

            </div>
          </div>
          </div>
        );
      }
}

export default mainfirstPage;