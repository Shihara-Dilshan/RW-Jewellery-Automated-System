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
          jew_id: "JEW-1234",
          category: "Ring",
          description: "Description 1",
          imageSrc:
            "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/items/jacek-dylag-FXXfE5RqkqY-unsplash.jpg",
          Meterial: "Gold",
          title: "Jewellery 1",
          supply_Price: "12000",
          supplyer_Id: "SUP-1236",
        },
        {
          jew_id: "JEW-1565",
          category: "Ring",
          description: "Description 2",
          imageSrc:
            "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/items/jacek-dylag-FXXfE5RqkqY-unsplash.jpg",
          Meterial: "White Gold",
          title: "Jewellery 2",
          supply_Price: "32000",
          supplyer_Id: "SUP-1236",
        },
        {
          jew_id: "JEW-1456",
          category: "Ring",
          description: "Description 3",
          imageSrc:
            "https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/items/jacek-dylag-FXXfE5RqkqY-unsplash.jpg",
          Meterial: "Silver",
          title: "Jewellery 3",
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

        <hr></hr>

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
