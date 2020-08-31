import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import "./../../../App.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  login = async (e) => {
    e.preventDefault();
    let email = document.getElementById("Lemail").value;
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
      sessionStorage.setItem("userId", result.customer_id);
      sessionStorage.setItem("email", result.name);
      sessionStorage.setItem("FirstName", result.firstName);
      sessionStorage.setItem("LastName", result.lastName);
      this.props.history.push("/");
    }
  };

  responseFacebook = async (response) => {
    console.log(response);

    let email = response.email;
    const call = await fetch(`/api/v2/customer/find/${email}`);
    const result = await call.json().catch((err) => console.log(err));
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
        }),
      });

      console.log(reg);
    } else {
    }
    sessionStorage.setItem("email", response.email);
    sessionStorage.setItem("userId", result.customer_id);
    sessionStorage.setItem("FirstName", response.name.trim().split(" ")[0]);
    sessionStorage.setItem("LastName", response.name.trim().split(" ")[1]);
    sessionStorage.setItem("profileImg", response.picture.data.url);
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

  render() {
    return (
      <div className="container loginForm test" style={this.style()}>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image hide-on-small-only">
              <img
                alt=""
                src="https://image.freepik.com/free-vector/online-registration-concept-with-flat-design_23-2147976704.jpg"
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
                        <label htmlFor="password">Password</label>
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
                      <p>forget password?</p>
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
                      <p className="teal-text">create new account</p>
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
