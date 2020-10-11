import React, { Component } from "react";

import "./../../../App.css";
import StaticCards from "./StaticCards";

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (
      sessionStorage.getItem("adminAccount") === null ||
      sessionStorage.getItem("adminAccount") === undefined
    ) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <section className="section section-icons grey lighten-4 center scrollspy test">
        <div className="container">
          <h4 className="grey-text">Dash Board</h4>
          <div className="row">
            <StaticCards title="Jewelry Management" icon="style" to="JM" />
            <StaticCards
              title="Rental Management"
              icon="directions_walk"
              to="RM"
            />
            <StaticCards
              title="Employee Management"
              icon="assignment_ind"
              to="manageLeaveDashboard"
            />
            <StaticCards
              title="Orders & Delivery"
              icon="local_shipping"
              to="/del"
            />
            <StaticCards
              title="Service Management"
              icon="beach_access"
              to="servicedashBoard"
            />
            <StaticCards title="Supplier Management" icon="store" to="SupM" />
            <StaticCards
              title="View Records"
              icon="recent_actors"
              to="recorddashboard"
            />
            <StaticCards title="Add Admin" icon="add" to="AD" />
            <StaticCards title="Manage Admins" icon="people" to="manageadmin" />
          </div>
        </div>
      </section>
    );
  }
}

export default DashBoard;
