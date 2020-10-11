import React, { Component } from "react";
import "./../../../App.css";
import StaticCards from "./StaticCards";
import M from "materialize-css";

class ServiceDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  style = () => {
    return {
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
      marginTop: "-5px",
      marginBottom: "-10px",
    };
  };

  getStyle = () => {
    return {
      width: "20%",
    };
  };

  render = () => {
    return (
      <section className="section section-icons grey lighten-4 center scrollspy test">
        <div className="container">
          <h4 className="grey-text">Service Management</h4>
          <div className="row">
            <StaticCards
              title="On going Design"
              icon="assignment"
              to="ongoingdesign"
            />
            <StaticCards
              title="Completed Design"
              icon="assignment_turned_in"
              to="completedorders"
            />
            <StaticCards title="New Design" icon="add_alert" to="newdesign" />
            <StaticCards
              title="On going Repair"
              icon="chrome_reader_mode"
              to="OM"
            />
            <StaticCards title="Completed Repair" icon="check_circle" to="SM" />
            <StaticCards title="New Repair" icon="content_paste" to="SupM" />
          </div>
        </div>
      </section>
    );
  };
}

export default ServiceDashBoard;
