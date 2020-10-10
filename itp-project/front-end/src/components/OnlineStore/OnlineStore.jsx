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
          jew_id: "71e632a3-d785-4930-9293-3fbab218b0a1",
          category: "Ring",
          description:
            "Bangles for every wrist in a range of designs that are contemporary and sophisticated yet timelessly sublime.",
          imageSrc:
            "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/categories/nick-karvounis-RjeVqc8eC3s-unsplash.jpg",
          Meterial: "Gold",
          title: "Bangles",
          supply_Price: "12000",
          supplyer_Id: "SUP-1236",
        },
        {
          jew_id: "ea500811-8666-4dce-9ca5-c56ba7547836",
          category: "Ring",
          description:
            "Pendants that are modern art or spiritual symbols, includes a range of Dhammachackras and Crosses.",
          imageSrc:
            "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/categories/fallon-michael-orVNEDAylaU-unsplash.jpg",
          Meterial: "White Gold",
          title: "Pendents",
          supply_Price: "32000",
          supplyer_Id: "SUP-1236",
        },
        {
          jew_id: "ae15ae70-b739-48a9-9702-4462d8afdfb6",
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
