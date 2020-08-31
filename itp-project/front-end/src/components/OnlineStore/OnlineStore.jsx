import React, { Component } from "react";
import Card from "./Card";
import Slider from "./Slider";

class OnlineStore extends Component {
  constructor() {
    super();
    this.state = {
      jewelry: [],
    };
  }

  componentDidMount() {
    //api call
    this.setState({
      jewelry: [
        {
          jew_id: "2f010e8b-c841-47e3-b5cf-4f7b1c5a5e66",
          category: "Ring",
          description: "Bangles for every wrist in a range of designs that are contemporary and sophisticated yet timelessly sublime.",
          imageSrc:
            "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/categories/nick-karvounis-RjeVqc8eC3s-unsplash.jpg",
          Meterial: "Gold",
          title: "Bangles",
          supply_Price: "12000",
          supplyer_Id: "SUP-1236",
        },
        {
          jew_id: "cf13e097-3869-40fd-8846-c1406d5a626a",
          category: "Ring",
          description: "Pendants that are modern art or spiritual symbols, includes a range of Dhammachackras and Crosses.",
          imageSrc:
            "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/categories/fallon-michael-orVNEDAylaU-unsplash.jpg",
          Meterial: "White Gold",
          title: "Pendents",
          supply_Price: "32000",
          supplyer_Id: "SUP-1236",
        },
        {
          jew_id: "ba04f607-fc5f-4205-ad89-56344514d07c",
          category: "Ring",
          description: "Stylish bracelets that put you in a class of your own",
          imageSrc:
            "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/categories/nick-karvounis-RjeVqc8eC3s-unsplash.jpg",
          Meterial: "Silver",
          title: "Bracelets",
          supply_Price: "9000",
          supplyer_Id: "SUP-1236",
        },
      ],
    });
  }

  render() {
    return (
      <div>
        <Slider />
        <h4 className="center-align">
          <span className="teal-text">Popular</span> Items
        </h4>
        <div className="container">
          <div className="row">
            {this.state.jewelry.map((jeweler) => {
              return (
                <Card
                  imageSrc={jeweler.imageSrc}
                  title={jeweler.title}
                  description={jeweler.description}
                  supply_Price={jeweler.supply_Price}
                  Meterial={jeweler.Meterial}
                  key={jeweler.jew_id}
                  jew_id={jeweler.jew_id}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default OnlineStore;
