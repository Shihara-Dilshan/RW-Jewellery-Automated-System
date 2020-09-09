import React, { Component } from "react";

class StaticCards extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  render() {
    return (
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large grey-text">{this.props.icon}</i>
                <h5>{this.props.title}</h5>
                {" "}<br />
                <button className="btn grey darken-2">View</button>
              </div>
            </div>
    );
  }
}

export default StaticCards;
