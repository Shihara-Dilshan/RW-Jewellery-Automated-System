import React, { Component } from "react";
import M from "materialize-css";

class Quick extends Component {
  componentDidMount = () => {
    const elems = document.querySelectorAll("select");
    M.FormSelect.init(elems, {});
  };

  stylequick = () => {
    return {
      backgroundColor: "#7B6536",
    };
  };

  render() {
    return (
      <nav style={this.stylequick()}>
        <div
          class="nav-wrapper"
          style={{ backgroundcolor: " #fffde7 yellow lighten-5" }}
        >
          <form>
            <div class="input-field">
              <input
                id="search"
                type="search"
                placeholder="Search Here"
                style={{ fontFamily: "Montserrat" }}
                required
              />
              <label class="label-icon" for="search">
                <i class="large material-icons">search</i>
              </label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

export default Quick;
