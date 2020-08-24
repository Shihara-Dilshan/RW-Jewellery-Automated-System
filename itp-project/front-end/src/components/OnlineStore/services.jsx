import React, { Component } from "react";

class Services extends Component {
  stylecard = () => {
    return {
      marginTop: "30px",
      border: null,
      borderRadius: "5px",
    };
  };

  render() {
    return (
      <div class="col s12 m3">
        <div
          class="card card-panel #fffde7 yellow lighten-5 grid-colomn gap 2px"
          style={this.stylecard()}
        >
          <div class="card-image waves-effect waves-block waves-light">
            <img
              class="activator"
              style={{ marginTop: "5px" }}
              src="https://www.desktopbackground.org/download/o/2014/10/25/845452_gold-jewellery-wallpapers_960x854_h.jpg"
            />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4 ">
              #N Service<i class="material-icons right">more_vert</i>
            </span>
          </div>
          <div class="card-reveal card-panel #fffde7 yellow lighten-5">
            <span class="card-title black-text text-darken-4 ba ">
              Services #N<i class="material-icons right">close</i>
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

export default Services;
