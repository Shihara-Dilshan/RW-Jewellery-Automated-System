import React, { Component } from "react";
import { Link } from 'react-router-dom';

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
                <Link to={this.props.to}><button className="btn grey darken-2">View</button></Link>
              </div>
            </div>
    );
  }
}

export default StaticCards;
