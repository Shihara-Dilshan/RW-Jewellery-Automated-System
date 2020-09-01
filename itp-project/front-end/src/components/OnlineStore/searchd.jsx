import React, { Component } from "react";
import M from "materialize-css";
class Searchd extends Component {
  componentDidMount = () => {
    const elems = document.querySelectorAll("select");
    M.FormSelect.init(elems, {});
  };

  styleopt = () => {
    return {
      marginTop: "20px",
    };
  };

  stylerect = () => {
    return {
      height: "150px",
    };
  };

  stylesearch = () => {
    return {
      marginLeft: "3%",
    };
  };

  render() {
    return (
      <div class="row">
        <div
          class="input-field col s12 m4 grid-column-gap 2px"
          style={this.styleopt()}
        >
          <select class="icons">
            <option value="" disabled selected>
              Category
            </option>
            <option
              value=""
              data-icon="https://i.pinimg.com/originals/fd/a3/be/fda3bebb4c08573feedbc302b7949886.png"
            >
              Necklace
            </option>
            <option
              value=""
              data-icon="https://i.pinimg.com/originals/85/be/4c/85be4c3e233e9a3b3a831ed5cdaae666.png"
            >
              Rings
            </option>
            <option
              value=""
              data-icon="https://static.thenounproject.com/png/149589-200.png"
            >
              Bracelate
            </option>
            <option
              value=""
              data-icon="https://w7.pngwing.com/pngs/513/331/png-transparent-computer-icons-bracelet-bangle-jewellery-jewellery-miscellaneous-gemstone-bracelet.png"
            >
              Bangles
            </option>
            <option
              value=""
              data-icon="https://www.inventicons.com/uploads/iconset/1413/wm/512/Earrings-1svg-71.png"
            >
              Earrings
            </option>
          </select>
          <label>Choose Your Category</label>
        </div>

        <div
          class="input-field col s12 m4 grid-column-gap 2px"
          style={this.styleopt()}
        >
          <select class="icons">
            <option value="" disabled selected>
              Meterial
            </option>
            <option
              value=""
              data-icon="https://i.pinimg.com/474x/1c/2d/94/1c2d94d63a0e5c938a8fb13dc8b0817f.jpg"
            >
              Gold
            </option>
            <option
              value=""
              data-icon="https://images.assetsdelivery.com/compings_v2/alonastep/alonastep1711/alonastep171100217.jpg"
            >
              Silver
            </option>
            <option
              value=""
              data-icon="https://image.freepik.com/free-photo/silver-metallic-textured-background_53876-90845.jpg"
            >
              White-Gold
            </option>
          </select>
          <label>Choose Your Meterial</label>
        </div>

        <a
          href="mobile.html"
          class="waves-effect orange accent-3 btn col s12 m4 grid-column-gap 2px "
          style={this.stylesearch()}
        >
          <i class="material-icons  left ">search</i>
          Search
        </a>

        <div
          class="card-panel grey lighten-5 z-depth-1"
          style={this.stylerect()}
        >
          <div class="row valign-wrapper"></div>{" "}
        </div>
      </div>
    );
  }
}

export default Searchd;
