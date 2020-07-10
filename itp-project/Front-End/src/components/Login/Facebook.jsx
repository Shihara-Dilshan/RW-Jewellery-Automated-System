import React, { Component } from "react";

import "materialize-css/dist/css/materialize.min.css";
import FacebookLogin from "react-facebook-login";

class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  };

  responseFacebook = (response) => {
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name.split(" ")[0],
      email: response.email,
      picture: response.picture.data.url,
    });
    console.log(response);
  };

  componentClicked = () => console.log("clicked");

  loginFailed = () => console.log("404");

  render() {
    let fbContent;

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
      fbContent = (
        <FacebookLogin
          appId="248214172929612"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          isMobile={false}
          onFailure={this.loginFailed}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}

export default Facebook;
