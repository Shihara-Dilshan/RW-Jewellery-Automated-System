import React, { Component } from "react";

class PurchaseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
        <div class="col s12 m4 test">
          <div className="card-panel">
                <i className="material-icons large teal-text">all_inclusive</i>
                <h4>{this.props.Title}</h4>
                <p>We will try to teach everything from the stratch</p>
                <p>{this.props.Count}</p>
                <button className="btn grey" style={{width:"50%"}}>View</button>
              </div>
        </div>
    );
  };
}

export default PurchaseCard;
