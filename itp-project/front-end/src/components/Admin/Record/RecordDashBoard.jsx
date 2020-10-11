import React, { Component } from "react";

import "./../../../App.css";
import StaticCards from "./StaticCards";

class RecordDashBoard extends Component {
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
          <h4 className="grey-text">Records</h4>
          <div className="row">
            <StaticCards title="Admin logs" icon="announcement" to="adminlogs" />
            <StaticCards title="Rental logs" icon="attach_money" to="RM" />
            <StaticCards
              title="Leave logs"
              icon="assignment_ind"
              to="manageLeaveDashboard"
            />
            <StaticCards title="Delivery logs" icon="directions_bike" to="OM" />
            <StaticCards
              title="Service logs"
              icon="contact_phone"
              to="servicedashBoard"
            />
            <StaticCards title="Supplier logs" icon="store" to="SupM" />
            <StaticCards title="Jewellery logs" icon="local_atm" to="VL" />
            <StaticCards title="Order logs" icon="monetization_on" to="AD" />
          </div>
        </div>
      </section>
    );
  }
}

export default RecordDashBoard;
