import React, { Component } from "react";

class confirmEmail extends Component {
  constructor() {
    super();
    this.state = {};
  }

  style = () => {
    return {
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
      marginTop: "40px",
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
                src="https://raw.githubusercontent.com/Shihara-Dilshan/img/master/ITP/Layout/online-registration-concept-with-flat-design_23-2147972686.jpg"
                height="100%"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4 className="center-align grey-text">Confirm Email</h4>
                <div className="row">
                  <form className="col s12">
                    <div className="row">
                      <div className="col s12">
                        <br/>
                        <p className="grey-text left-align">We have send and email to shihara@gmail.com</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="password"
                          type="password"
                          className="validate"
                        />
                        <label htmlFor="password">Enter confirmation code here</label>
                      </div>
                    </div>
                    <div className="container center-align grey-text">
                      <p>
                        <label>
                        <p className="grey-text center-align">haven't got email? send it agian</p>
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
                        Confirm
                      </button>
                    </div>
                    <div
                      className="container center-align grey-text"
                      style={this.getStyle()}
                    >
                      <br/>
                      <p>Change email</p>
                      <br />
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

export default confirmEmail;
