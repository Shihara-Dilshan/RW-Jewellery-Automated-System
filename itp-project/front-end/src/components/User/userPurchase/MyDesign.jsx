import React, { Component } from "react";

import { Link } from 'react-router-dom';

class MyDesign extends Component {
  constructor(props) {
    super(props);
    this.state = { userPurchuses: undefined};
  }

  render = () => {
    return (
        <div class="col s12 m4 test">
          <div className="card-panel">
                <i className="material-icons large grey-text">color_lens</i>
                <h5>My Design</h5>
                <p>1</p> 
                <Link to="/designtable"><button className="btn grey darken-3" style={{width:"50%"}}>View</button></Link>
              </div>
        </div>
    );
  };
}

export default MyDesign;
