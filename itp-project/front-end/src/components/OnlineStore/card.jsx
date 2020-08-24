import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div class="col s12 m4">
        <div
          class="card card-panel yellow lighten-5  grid-column-gap 2px"
          style={{
            marginTop: "30px",
            border: null,
            borderRadius: "5px",
          }}
        >
          <div class="card-image waves-effect waves-block waves-light">
            <img
              class="activator"
              style={{ marginTop: "5px" }}
              alt=""
              src="https://www.desktopbackground.org/download/o/2014/10/25/845452_gold-jewellery-wallpapers_960x854_h.jpg"
            />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4 ">
              #N jewellery<i class="material-icons right">more_vert</i>
            </span>

            <a class="waves-effect orange accent-3 btn" href="buy">
              <i class="material-icons left">monetization_on</i>Buy
            </a>

            <a
              class="waves-effect orange accent-3 btn "
              style={{ marginLeft: "1%" }}
              href="mobile.html"
            >
              <i class="material-icons  left ">shopping_cart</i>Cart
            </a>
          </div>
          <div class="card-reveal card-panel #fff9c4 yellow lighten-4">
            <span class="card-title  text-darken-4 ba ">
              Necklace<i class="material-icons right">close</i>
            </span>
            <p>
              Various techniques are used in jewelry-making, including forging,
              casting, repoussage, the art of frosting metals (imparting a
              grainy and matte appearance to a metal surface using a stamp in
              the form of a blunt awl or small tube),
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
