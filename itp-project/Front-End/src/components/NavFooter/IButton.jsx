import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "../../App.css";
class IButton extends Component {
  state = {};

  render() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".fixed-action-btn");
      M.FloatingActionButton.init(elems, {});
    });

    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".scrollspy");
      M.ScrollSpy.init(elems, {
        throttle: 50,
      });
    });

    window.onscroll = function () {
      let Ibutton = this.document.querySelector(".fixed-action-btn");
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        Ibutton.classList.remove("hide");
        Ibutton.classList.add("show");
      } else {
        Ibutton.classList.remove("show");
        Ibutton.classList.add("hide");
      }
    };
    return (
      <div className="fixed-action-btn hide">
        <a href="#scroll" className="btn-floating btn-large white">
          <i className="large material-icons grey-text">publish</i>
        </a>
      </div>
    );
  }
}

export default IButton;
