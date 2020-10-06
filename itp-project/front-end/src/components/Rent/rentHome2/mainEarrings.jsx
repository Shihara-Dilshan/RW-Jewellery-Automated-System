import React, { Component } from 'react';
import EarStuds from './earings';
import Rentjewelries from "../Rhome/Rentcollection";

class mainEarrings extends Component {

    render() {
        return (
            <div>
                <Rentjewelries />
          <div className="container">
            <h4 className="center-align">
              <span className="teal-text">EARRINGS</span> 
            </h4>
            <div className="row">
              <EarStuds
                imageSrc="https://sc02.alicdn.com/kf/UT8Dxy7XF0XXXagOFbXo.jpg_350x350.jpg"
                title="Diamand Mixed"
                description="Price: Rs.15000"
              />
              <EarStuds
                imageSrc="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX11140387.jpg"
                title="Diamand Mixed"
                description="Price: Rs.15000"
              />
              <EarStuds
                imageSrc="https://sc02.alicdn.com/kf/UT8Dxy7XF0XXXagOFbXo.jpg_350x350.jpg"
                title="Diamand Mixed"
                description="Price: Rs.15000"
              />
              <EarStuds
                imageSrc="https://sc02.alicdn.com/kf/UT8Dxy7XF0XXXagOFbXo.jpg_350x350.jpg"
                title="Diamand Mixed"
                description="Price: Rs.15000"
              />
              <EarStuds
                imageSrc="https://sc02.alicdn.com/kf/UT8Dxy7XF0XXXagOFbXo.jpg_350x350.jpg"
                title="Diamand Mixed"
                description="Price: Rs.15000"
              />
              <EarStuds
                imageSrc="https://sc02.alicdn.com/kf/UT8Dxy7XF0XXXagOFbXo.jpg_350x350.jpg"
                title="Diamand Mixed"
                description="Price: Rs.15000"
              />
            </div>
          </div>
          </div>
        );
      }
}
export default mainEarrings;
