import React, { Component } from "react";
import "./../../App.css";

class SignUp extends Component {
  state = {};

  style = () => {
    return {
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
      marginTop: "40px",
      marginBottom: "40px",
    };
  };

  render() {
    return (
      <div className="container signUp test" style={this.style()}>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img
                alt=""
                src="https://image.freepik.com/free-vector/online-registration-concept-with-isometric-view_23-2147976706.jpg"
                height="88%"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4 className="center-align">SignUp</h4>
                <div className="row">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s6">
                        <input
                          placeholder="Placeholder"
                          id="first_name"
                          type="text"
                          className="validate"
                        />
                        <label htmlFor="first_name">First Name</label>
                      </div>
                      <div className="input-field col s6">
                        <input
                          id="last_name"
                          type="text"
                          className="validate"
                        />
                        <label htmlFor="last_name">Last Name</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          disabled
                          value="I am not editable"
                          id="disabled"
                          type="text"
                          className="validate"
                        />
                        <label htmlFor="disabled">Disabled</label>
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
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s12">
                        This is an inline input field:
                        <div className="input-field inline">
                          <input
                            id="email_inline"
                            type="email"
                            className="validate"
                          />
                          <label htmlFor="email_inline">Email</label>
                          <span
                            className="helper-text"
                            data-error="wrong"
                            data-success="right"
                          >
                            Helper text
                          </span>
                        </div>
                      </div>
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

export default SignUp;
