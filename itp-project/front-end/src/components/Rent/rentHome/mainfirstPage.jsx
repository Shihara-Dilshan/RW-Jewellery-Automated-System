import React, { Component } from 'react';
import RentList from './firstPage';
import Rentjewelries from "../Rhome/Rentcollection";

class mainfirstPage extends Component {

    render() {
        return (
            <div>
                <Rentjewelries />
          <div className="container">
            <h4 className="center-align">
              <span className="teal-text">NECKLACES</span> 
            </h4>
            <div className="row">
              <RentList
                imageSrc="https://i.pinimg.com/originals/79/d7/5b/79d75bda6275365de7ae8ad415ccad53.jpg"
                title="Diamand Mixed"
                description="Price: Rs.15000"
              />
              <RentList
                imageSrc="https://i.pinimg.com/736x/c7/5b/05/c75b056f3fab15c35e3cc62284eb5fcd.jpg"
                title="Diamand Mixed"
                description="Price: Rs.15000"
              />
              <RentList
                imageSrc="https://www.langantiques.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/e/x/extraordinary-edwardian-diamond-fringe-necklace_1_90-91-952.jpg"
                title="Diamand Mixed"
                description="Price: Rs.15000"
              />
              <RentList
                imageSrc="https://i.pinimg.com/736x/c7/5b/05/c75b056f3fab15c35e3cc62284eb5fcd.jpg"
                title="Diamand Mixed"
                description="Price: Rs.15000"
              />
              <RentList
                imageSrc="https://i.pinimg.com/736x/c7/5b/05/c75b056f3fab15c35e3cc62284eb5fcd.jpg"
                title="Diamand Mixed"
                description="Price: Rs.15000"
              />
              <RentList
                imageSrc="https://kantorgems.com/wp-content/uploads/2017/12/81209-web-1.jpg"
                title="Diamand Mixed"
                description="Price: Rs.15000"
              />
            </div>
          </div>
          </div>
        );
      }
}

export default mainfirstPage;