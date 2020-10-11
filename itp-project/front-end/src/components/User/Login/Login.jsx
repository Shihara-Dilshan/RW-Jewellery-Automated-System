import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { Link } from "react-router-dom";
import "./../../../App.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  login = async (e) => {
    e.preventDefault();
    let email = document.getElementById("Lemail").value;
    let password = document.getElementById("password").value;
    let emailFirstCheck = Login.removeWhiteSpaces(email);
    let passwordFirstCheck = Login.removeWhiteSpaces(password);
    if (
      emailFirstCheck === "" ||
      emailFirstCheck === null ||
      emailFirstCheck === undefined
    ) {
      let emailLabel = document.getElementById("LemailLabel");
      emailLabel.innerHTML = "Email cannot be empty";
      emailLabel.classList.add("red-text");
      setTimeout(() => {
        emailLabel.innerHTML = "Email";
        emailLabel.classList.remove("red-text");
      }, 2000);
      return;
    } else if (
      passwordFirstCheck === "" ||
      passwordFirstCheck === null ||
      passwordFirstCheck === undefined
    ) {
      let passwordLabel = document.getElementById("pwordLabel");
      passwordLabel.innerHTML = "Password cannot be empty";
      passwordLabel.classList.add("red-text");
      setTimeout(() => {
        passwordLabel.innerHTML = "Password";
        passwordLabel.classList.remove("red-text");
      }, 2000);
      return;
    } else {
      const call = await fetch(`/api/v2/customer/find/${email}`);
      const result = await call.json().catch((err) => console.log(err));
      console.log(result);

      if (result === undefined) {
        let emailLabel = document.getElementById("LemailLabel");
        emailLabel.innerHTML = "This account does not Exist";
        emailLabel.classList.add("red-text");
        setTimeout(() => {
          emailLabel.innerHTML = "Email";
          emailLabel.classList.remove("red-text");
        }, 2000);
      } else {
        if (result.pword === password) {
          sessionStorage.setItem("userId", result.customer_id);
          sessionStorage.setItem("email", result.name);
          sessionStorage.setItem("FirstName", result.firstName);
          sessionStorage.setItem("LastName", result.lastName);
          sessionStorage.setItem("telephone", result.telephone);
          sessionStorage.setItem("address", result.address);
          this.props.history.push("/");
        } else {
          let passwordLabel = document.getElementById("pwordLabel");
          passwordLabel.innerHTML = "Check your Password";
          passwordLabel.classList.add("red-text");
          setTimeout(() => {
            passwordLabel.innerHTML = "Password";
            passwordLabel.classList.remove("red-text");
          }, 2000);
        }
      }
    }
  };

  responseFacebook = async (response) => {
    console.log(response);

    let email = response.email;
    let call = await fetch(`/api/v2/customer/find/${email}`);
    let result = await call.json().catch((err) => console.log(err));
    console.log(result);

    if (result === undefined) {
      const reg = await fetch("/api/v2/customer/register", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name: email,
          firstName: response.name.trim().split(" ")[0],
          lastName: response.name.trim().split(" ")[1],
          profilePicture: response.picture.data.url,
        }),
      });
      call = await fetch(`/api/v2/customer/find/${email}`);
      result = await call.json().catch((err) => console.log(err));
      console.log(reg);
    } else {
    }
    sessionStorage.setItem("email", response.email);
    sessionStorage.setItem("userId", result.customer_id);
    sessionStorage.setItem("FirstName", response.name.trim().split(" ")[0]);
    sessionStorage.setItem("LastName", response.name.trim().split(" ")[1]);
    sessionStorage.setItem("profileImg", response.picture.data.url);
    sessionStorage.setItem("telephone", result.telephone);
    sessionStorage.setItem("address", result.address);
    this.props.history.push("/");
  };

  componentClicked = () => {
    console.log();
  };

  style = () => {
    return {
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
      marginTop: "50px",
      marginBottom: "40px",
    };
  };

  getStyle = () => {
    return {
      marginTop: "20px",
    };
  };

  static removeWhiteSpaces = (inputString) => {
    return inputString.replace(/\s/g, "");
  };

  render() {
    return (
      <div className="container loginForm test" style={this.style()}>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image hide-on-small-only">
              <img
                alt=""
                src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-2650.jpg"
                height="100%"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4 className="center-align grey-text">Login</h4>
                <div className="row">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="Lemail" type="email" className="validate" />
                        <label htmlFor="Lemail" id="LemailLabel">
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="password"
                          type="password"
                          className="validate"
                        />
                        <label htmlFor="password" id="pwordLabel">
                          Password
                        </label>
                      </div>
                    </div>
                    <div className="container center-align grey-text">
                      <p>
                        <label>
                          <input type="checkbox" className="filled-in" />
                          <span>Remeber Me</span>
                          <br />
                          <br />
                        </label>
                      </p>
                    </div>
                    <div className="center-align center">
                      <button
                        onClick={this.login}
                        className="btn center-align grey darken-3"
                        style={{ width: "100%" }}
                      >
                        Login
                      </button>
                    </div>
                    <div
                      className="container center-align grey-text"
                      style={this.getStyle()}
                    >
                      <Link to="/forgetpassword">
                        {" "}
                        <p>forget password?</p>
                      </Link>
                      <br />
                    </div>
                    <div className="container center-align">
                      <FacebookLogin
                        appId="3204620366282734"
                        autoLoad={false}
                        fields="name,email,picture"
                        onClick={this.componentClicked}
                        callback={this.responseFacebook}
                      />
                      {""}
                    </div>
                    <div className="center-align center">
                      <Link to="/signup">
                        <p className="teal-text">create new account</p>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
