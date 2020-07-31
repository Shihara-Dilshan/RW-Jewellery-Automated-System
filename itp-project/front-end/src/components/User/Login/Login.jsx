import React, { Component } from "react";
import "./../../../App.css";

class Login extends Component {
  state = {};

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
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email">Email</label>
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
