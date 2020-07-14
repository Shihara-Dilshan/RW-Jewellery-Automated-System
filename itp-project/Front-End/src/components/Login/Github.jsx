import React, { Component } from "react";

import "materialize-css/dist/css/materialize.min.css";
import GitHubLogin from "github-login";

class Github extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  };

  onSuccess = (response) => console.log(response);
  onFailure = (response) => console.error(response);

  render() {
    let gitContent;

    if (this.state.isLoggedIn) {
      let loginBTN = document.getElementById("loginBTN");
      let loginBTN2 = document.getElementById("loginBTN2");

      loginBTN.innerHTML = `<Link onClick=${this.hideSlider} to="/login">
      <li>
      
        ${this.state.name}
       
    <img
      id="loginImge"
      src=${this.state.picture} 
      alt=${this.state.name} 
      width="35px"
      height="35px"
    />
    </Link>`;

      loginBTN2.innerHTML = ` <a onClick={this.hideSlider} to={this.state.Link}>
      ${this.state.name}
      <img id="loginImge2" src=${this.state.picture} alt="" />
    </a>`;

      sessionStorage.setItem("userName", this.state.name);
      sessionStorage.setItem("userPhoto", this.state.picture);
    } else {
      gitContent = (
        <GitHubLogin
          clientId="Iv1.11fe935eb08a191a"
          redirectUri="https://noobstack.netlify.app/"
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
          className="github-button"
        />
      );
    }
    return <div>{gitContent}</div>;
  }
}

export default Github;
