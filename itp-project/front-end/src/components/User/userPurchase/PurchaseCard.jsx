import React, { Component } from "react";

class PurchaseCard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render = () => {
    return (
        <div class="col s12 m4 test">
          <div className="card-panel">
                <i className="material-icons large teal-text">all_inclusive</i>
                <h4>Go from zero to hero</h4>
                <p>We will try to teach everything from the stratch</p>
                <button className="btn grey" style={{width:"50%"}}>check out</button>
              </div>
        </div>
    );
  };
}

export default PurchaseCard;
