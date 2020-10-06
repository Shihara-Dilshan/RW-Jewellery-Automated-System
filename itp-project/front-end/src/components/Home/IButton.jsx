import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "../../App.css";
class IButton extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const elems = document.querySelectorAll(".fixed-action-btn");
    M.FloatingActionButton.init(elems, {});

    const elems2 = document.querySelectorAll(".scrollspy");
    M.ScrollSpy.init(elems2, {
      throttle: 50,
    });
  }

  render() {
    window.onscroll = function () {
      let Ibutton = this.document.querySelector(".fixed-action-btn");
      if(Ibutton !== null){
      	Ibutton.classList.remove("hide");
        Ibutton.classList.add("show");
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
