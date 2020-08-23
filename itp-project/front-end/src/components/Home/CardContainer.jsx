import React, { Component } from "react";

import CategoryCard from "./CategoryCard";

class CardContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <h4 className="center-align">
          <span className="teal-text">Popular</span> Categories
        </h4>
        <div className="row">
          <CategoryCard
            imageSrc="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/categories/jacek-dylag-FXXfE5RqkqY-unsplash.jpg"
            title="Diamand Mixed"
            description="Our most valueble categories that can revunue upto 10 million dollers"
          />
          <CategoryCard
            imageSrc="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/categories/fallon-michael-orVNEDAylaU-unsplash.jpg"
            title="Diamand Mixed"
            description="Our most valueble categories that can revunue upto 10 million dollers"
          />
          <CategoryCard
            imageSrc="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/categories/nick-karvounis-RjeVqc8eC3s-unsplash.jpg"
            title="Diamand Mixed"
            description="Our most valueble categories that can revunue upto 10 million dollers"
          />
          <CategoryCard
            imageSrc="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/categories/cornelia-ng-hxtKsjWSd3M-unsplash.jpg"
            title="Diamand Mixed"
            description="Our most valueble categories that can revunue upto 10 million dollers"
          />
          <CategoryCard
            imageSrc="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/categories/atul-vinayak-jKvwtbrxzdY-unsplash.jpg"
            title="Diamand Mixed"
            description="Our most valueble categories that can revunue upto 10 million dollers"
          />
          <CategoryCard
            imageSrc="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/categories/ashton-mullins-j1HU-Oll7KI-unsplash.jpg"
            title="Diamand Mixed"
            description="Our most valueble categories that can revunue upto 10 million dollers"
          />
        </div>
      </div>
    );
  }
}

export default CardContainer;
