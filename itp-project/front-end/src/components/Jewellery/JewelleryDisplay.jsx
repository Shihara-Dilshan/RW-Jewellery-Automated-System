import React, { Component } from "react";

class JewelleryDisplay extends Component{ 

  style = () => {
    return {      
      marginLeft: "20px",
    };
  };

      render(){
          return(
            <div  align="center">
                <h2>Jewellery</h2>
                <br/><br/>
                  <a class="waves-effect black btn-large" href="/jewellery">Display Jewellery</a><br/><br/>           
                <br/><br/><br/>
            </div>

          );
      }

}

export default JewelleryDisplay;