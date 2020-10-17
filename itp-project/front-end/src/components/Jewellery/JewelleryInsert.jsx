import React, { Component } from "react";
import ValidationForm from "./ValidateJewellery";

class JewelleryInsert extends Component{

  state = {
    //id: this.props.match.params.id,
    visible: true
  };

  render() {
    return (
      <div className="JewelleryInsert">
        <ValidationForm />
      </div>
    );
  }

}

export default JewelleryInsert;